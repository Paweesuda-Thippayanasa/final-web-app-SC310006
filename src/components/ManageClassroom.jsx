import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getFirestore,
  doc,
  getDoc,
} from "firebase/firestore";
import {
  getDatabase,
  ref,
  push,
  set,
  get,
  serverTimestamp,
  onValue,
  off,
} from "firebase/database";
import QRCode from "qrcode";

const ManageClassroom = () => {
  const { id } = useParams();
  const firestoreDb = getFirestore();
  const [classroom, setClassroom] = useState(null);
  const [students, setStudents] = useState([]);
  const [checkins, setCheckins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showQR, setShowQR] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    new Date(new Date().getTime() + 7 * 60 * 60 * 1000).toISOString().split("T")[0]
  ); // Default to current date in Bangkok time
  const qrCanvasRef = useRef(null);
  const navigate = useNavigate();

  // ฟังก์ชันสำหรับจัดรูปแบบวันที่แบบไทย
  const formatThaiDate = (date) => {
    if (!date) return "ไม่ระบุ";
    const d = new Date(date);
    // แสดงเป็นรูปแบบ วัน/เดือน/ปี
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return d.toLocaleDateString("th-TH", options);
  };

  // ดึงข้อมูลห้องเรียนจาก Firestore
  useEffect(() => {
    const fetchClassroomData = async () => {
      try {
        // Fetch classroom data from Firestore
        const docRef = doc(firestoreDb, "classroom", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setClassroom(docSnap.data());
        }
      } catch (error) {
        console.error("Error fetching classroom data from Firestore:", error);
      }
    };

    fetchClassroomData();
  }, [id, firestoreDb]);

  // ดึงข้อมูลนักเรียนจาก Realtime Database
  useEffect(() => {
    const realtimeDb = getDatabase();
    const studentsRef = ref(realtimeDb, `classroom/${id}/students`);

    // สร้าง listener สำหรับดึงข้อมูลนักเรียน
    const studentsListener = onValue(studentsRef, (snapshot) => {
      console.log("🔥 Student Data from Firebase:", snapshot.val());

      if (snapshot.exists()) {
        const data = snapshot.val();
        const studentsList = Object.entries(data).map(([key, value]) => ({
          id: key, // Firebase Key
          name: value.name || "", // ชื่อนักเรียน
          stdid: value.stdid || "", // รหัสนักเรียน
        }));
        console.log("📌 Students List:", studentsList);
        setStudents(studentsList);
      } else {
        console.log("❌ No student data found!");
        setStudents([]);
      }
      setLoading(false);
    });

    // Cleanup function
    return () => {
      off(studentsRef, studentsListener);
    };
  }, [id]);

  // ดึงข้อมูลประวัติการเช็คชื่อจาก Realtime Database
  useEffect(() => {
    const realtimeDb = getDatabase();
    const checkinsRef = ref(realtimeDb, `classroom/${id}/checkin`);
    
    const checkinsListener = onValue(checkinsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        // แปลงข้อมูลจาก object เป็น array
        const checkinsList = Object.entries(data).map(([key, value]) => {
          // จัดรูปแบบข้อมูลวันที่
          let checkinDate;
          if (value.createdAt) {
            checkinDate = new Date(value.createdAt);
          } else {
            checkinDate = new Date(new Date().getTime() + 7 * 60 * 60 * 1000);
          }
          
          // นับจำนวนนักเรียนที่เข้าเรียน (มีสถานะ = 1)
          let attendanceCount = 0;
          if (value.scores) {
            attendanceCount = Object.values(value.scores).filter(
              student => student.status === 1
            ).length;
          }
          
          return {
            id: key,
            date: checkinDate,
            dateStr: formatThaiDate(checkinDate), // เพิ่มรูปแบบวันที่แบบข้อความ
            createdAt: value.createdAt,
            status: value.status || 0,
            attendanceCount: attendanceCount,
            // เก็บข้อมูล scores ไว้ใช้งาน
            scores: value.scores || {}
          };
        });
        
        // เรียงลำดับตามวันที่ล่าสุด
        checkinsList.sort((a, b) => {
          if (a.createdAt && b.createdAt) {
            return b.createdAt - a.createdAt;
          }
          return 0;
        });
        
        setCheckins(checkinsList);
      } else {
        setCheckins([]);
      }
      setLoading(false);
    });
    
    // Cleanup function
    return () => {
      off(checkinsRef, checkinsListener);
    };
  }, [id]);

  // Filter checkins based on selected date
  const filteredCheckins = selectedDate
    ? checkins.filter((checkin) => {
        if (!checkin.date) return false;
        
        // แปลงวันที่ที่เลือกเป็น Date object
        const selectedDateObj = new Date(selectedDate);
        
        // เปรียบเทียบเฉพาะ วัน/เดือน/ปี โดยละเวลา
        return (
          checkin.date.getDate() === selectedDateObj.getDate() &&
          checkin.date.getMonth() === selectedDateObj.getMonth() &&
          checkin.date.getFullYear() === selectedDateObj.getFullYear()
        );
      })
    : checkins;

  const generateQRCode = async () => {
    if (qrCanvasRef.current) {
      try {
        const canvas = document.createElement("canvas");
        await QRCode.toCanvas(canvas, String(id), {
          width: 256,
          margin: 2,
          color: {
            dark: "#000000",
            light: "#ffffff",
          },
        });

        qrCanvasRef.current.innerHTML = "";
        qrCanvasRef.current.appendChild(canvas);
      } catch (error) {
        console.error("Error generating QR Code:", error);
      }
    }
  };

  const handleAddCheckin = async () => {
    try {
      const realtimeDb = getDatabase();
      const checkinRef = ref(realtimeDb, `classroom/${id}/checkin`);
      const newCheckinRef = push(checkinRef);
      const cno = newCheckinRef.key;

      // สร้างข้อมูลการเช็คชื่อใหม่
      await set(newCheckinRef, {
        createdAt: serverTimestamp(),
        date: new Date(new Date().getTime() + 7 * 60 * 60 * 1000).toISOString(),
        status: 1, // กำลังเช็คชื่อ
        code: generateRandomCode(6), // สร้างรหัสสำหรับเช็คชื่อ
      });

      // ดึงรายชื่อนักเรียนจาก /students
      const studentsRef = ref(realtimeDb, `classroom/${id}/students`);
      const studentsSnapshot = await get(studentsRef);

      if (studentsSnapshot.exists()) {
        const studentsData = studentsSnapshot.val();
        const scoresRef = ref(realtimeDb, `classroom/${id}/checkin/${cno}/scores`);

        // คัดลอกรายชื่อนักเรียนเข้า /scores
        const updates = {};
        Object.entries(studentsData).forEach(([studentId, studentData]) => {
          updates[studentId] = {
            uid: studentId,
            stdid: studentData.stdid || "",
            name: studentData.name || "",
            status: 0, // เริ่มต้นที่ยังไม่มา
            score: 0,
            remark: "",
            date: new Date(new Date().getTime() + 7 * 60 * 60 * 1000).toISOString(),
          };
        });

        await set(scoresRef, updates);
      }

      // ไปยังหน้าการเช็คชื่อ
      navigate(`/checkin/${id}/${cno}`);
    } catch (error) {
      console.error("Error creating check-in:", error);
    }
  };

  // สร้างรหัสสุ่มสำหรับการเช็คชื่อ
  const generateRandomCode = (length) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  // ไปที่หน้าการเช็คชื่อ
  const goToCheckin = (checkinId) => {
    navigate(`/checkin/${id}/${checkinId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="p-8 bg-white rounded-xl shadow-xl">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium text-center">
            กำลังโหลดข้อมูล
          </p>
        </div>
      </div>
    );
  }

  if (!classroom) {
    return <div>ไม่พบข้อมูลห้องเรียน</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate("/home")}
          className="group flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-white transition duration-200 mb-6"
        >
          <svg
            className="w-5 h-5 transform group-hover:-translate-x-1 transition duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="font-medium">กลับสู่หน้าหลัก</span>
        </button>

        {/* Header Section with Fixed QR Modal */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 rounded-2xl shadow-lg mb-8">
          <div className="relative z-10 p-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              {classroom.info?.name}
            </h1>
            <div className="space-y-2 text-white/90">
              <p className="text-lg">รหัสวิชา: {classroom.info?.code}</p>
              <p className="text-lg">ห้องเรียน: {classroom.info?.room}</p>
            </div>
            <button
              onClick={() => {
                setShowQR(true);
                setTimeout(generateQRCode, 100); // Add slight delay to ensure DOM is ready
              }}
              className="mt-6 px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-xl font-medium backdrop-blur-sm transition duration-200 transform hover:scale-105"
            >
              แสดง QR Code ลงทะเบียน
            </button>
          </div>
          <div className="absolute top-0 right-0 -mt-20 -mr-20">
            <div className="w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Fixed QR Code Modal */}
        {showQR && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-md w-full mx-4">
              <div className="flex justify-between items-start mb-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-800">
                    QR Code สำหรับลงทะเบียน
                  </h3>
                  <p className="text-xl font-semibold text-gray-800">
                    {classroom.info?.name}
                  </p>
                  <p className="text-lg text-gray-700 font-medium">
                    รหัสวิชา: {classroom.info?.code}
                  </p>
                </div>
                <button
                  onClick={() => setShowQR(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6 text-gray-400 hover:text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div
                ref={qrCanvasRef}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl flex justify-center items-center min-h-[320px] shadow-inner"
              />
              <p className="text-center text-gray-500 text-sm mt-4">
                สแกน QR Code เพื่อเข้าร่วมห้องเรียน
              </p>
            </div>
          </div>
        )}

        {/* Students List */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800">
              รายชื่อนักเรียนที่ลงทะเบียน
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    ลำดับ
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    รหัสนักเรียน
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    ชื่อนักเรียน
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {students.length > 0 ? (
                  students.map((student, index) => (
                    <tr
                      key={student.id}
                      className="hover:bg-gray-50/50 transition duration-150"
                    >
                      <td className="px-6 py-4 text-gray-600">{index + 1}</td>
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {student.stdid}
                      </td>
                      <td className="px-6 py-4 text-gray-800">
                        {student.name}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center py-4 text-gray-600">
                      ไม่พบข้อมูลนักเรียน
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Checkin History */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center flex-wrap">
            <h2 className="text-2xl font-bold text-gray-800">
              ประวัติการเช็คชื่อ
            </h2>
            <div className="flex items-center space-x-4 mt-2 sm:mt-0">
              <div className="flex flex-col">
                <label htmlFor="dateFilter" className="text-sm text-gray-600 mb-1">
                  กรองตามวันที่
                </label>
                <input
                  id="dateFilter"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="text-xs text-gray-500 mt-1">
                  วันที่แสดง: {formatThaiDate(selectedDate)}
                </div>
              </div>
              <button
                onClick={handleAddCheckin}
                className="px-6 py-3 bg-blue-500 text-white rounded-xl font-medium shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition duration-200 transform hover:scale-105"
              >
                เพิ่มการเช็คชื่อ
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    ลำดับ
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    วัน-เวลา
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    จำนวนคนเข้าเรียน
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    สถานะ
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    จัดการ
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredCheckins.length > 0 ? (
                  filteredCheckins.map((checkin, index) => (
                    <tr
                      key={checkin.id}
                      className="hover:bg-gray-50/50 transition duration-150"
                    >
                      <td className="px-6 py-4 text-gray-600">{index + 1}</td>
                      <td className="px-6 py-4 text-gray-800">
                        {formatThaiDate(checkin.date)}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {checkin.attendanceCount || 0} คน
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                            checkin.status === 2
                              ? "bg-green-50 text-green-700 ring-1 ring-green-600/20"
                              : checkin.status === 1
                              ? "bg-yellow-50 text-yellow-700 ring-1 ring-yellow-600/20"
                              : "bg-gray-50 text-gray-700 ring-1 ring-gray-600/20"
                          }`}
                        >
                          {checkin.status === 2
                            ? "เสร็จสิ้น"
                            : checkin.status === 1
                            ? "กำลังเช็คชื่อ"
                            : "ยังไม่เริ่ม"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => goToCheckin(checkin.id)}
                          className="text-blue-500 hover:text-blue-700 font-medium transition-colors"
                        >
                          เช็คชื่อ
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-4 text-gray-600">
                      ไม่พบข้อมูลการเช็คชื่อ
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageClassroom;
