import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  writeBatch,
  arrayUnion,
} from "firebase/firestore";
import QRCode from "qrcode";

const ManageClassroom = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const db = getFirestore();
  const [classroom, setClassroom] = useState(null);
  const [students, setStudents] = useState([]);
  const [checkins, setCheckins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showQR, setShowQR] = useState(false);
  const qrCanvasRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch classroom data
        const docRef = doc(db, "classroom", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setClassroom(docSnap.data());
        }

        // Fetch students
        const studentsRef = collection(db, "classroom", id, "students");
        const studentsSnap = await getDocs(studentsRef);
        setStudents(studentsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));

        // Fetch checkins
        const checkinsRef = collection(db, "classroom", id, "checkin");
        const checkinsSnap = await getDocs(checkinsRef);
        setCheckins(checkinsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id, db]);

  const generateQRCode = async () => {
    if (qrCanvasRef.current) {
      const qrData = JSON.stringify({ classroomId: id });
  
      try {
        const canvas = document.createElement("canvas");
        await QRCode.toCanvas(canvas, qrData, { 
          width: 256,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#ffffff'
          }
        });
  
        qrCanvasRef.current.innerHTML = '';
        qrCanvasRef.current.appendChild(canvas);
      } catch (error) {
        console.error("Error generating QR Code:", error);
      }
    }
  };
  
  const addCheckin = async () => {
    try {
      const checkinData = {
        date: new Date(),
        students: students.map(student => ({
          ...student,
          status: 0
        }))
      };

      const checkinRef = await addDoc(
        collection(db, "classroom", id, "checkin"),
        checkinData
      );

      setCheckins(prev => [...prev, { id: checkinRef.id, ...checkinData }]);
    } catch (error) {
      console.error("Error adding checkin:", error);
    }
  };

  const updateCheckinStatus = async (checkinId, studentId) => {
    try {
      const checkinRef = doc(db, "classroom", id, "checkin", checkinId);
      await updateDoc(checkinRef, {
        students: arrayUnion({ studentId, status: 1 })
      });

      setCheckins(prev =>
        prev.map(checkin =>
          checkin.id === checkinId
            ? {
                ...checkin,
                students: checkin.students.map(student =>
                  student.id === studentId
                    ? { ...student, status: 1 }
                    : student
                )
              }
            : checkin
        )
      );
    } catch (error) {
      console.error("Error updating checkin status:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="p-8 bg-white rounded-xl shadow-xl">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium text-center">กำลังโหลดข้อมูล...</p>
        </div>
      </div>
    );
  }

  if (!classroom) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="p-8 bg-white rounded-xl shadow-xl text-center max-w-md mx-4">
          <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">ไม่พบข้อมูลห้องเรียน</h2>
          <p className="text-gray-600">กรุณาตรวจสอบข้อมูลและลองใหม่อีกครั้ง</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/home')}
          className="group flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-white transition duration-200 mb-6"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-medium">กลับสู่หน้าหลัก</span>
        </button>

      {/* Header Section with Fixed QR Modal */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 rounded-2xl shadow-lg mb-8">
          <div className="relative z-10 p-8">
            <h1 className="text-4xl font-bold text-white mb-4">{classroom.info?.name}</h1>
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
            <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-md w-full mx-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">QR Code สำหรับลงทะเบียน</h3>
                <button 
                  onClick={() => setShowQR(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition duration-200"
                >
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div 
                ref={qrCanvasRef} 
                className="bg-gray-50 p-6 rounded-xl flex justify-center items-center min-h-[300px]"
              />
            </div>
          </div>
        )}

        {/* Content Grid */}
        <div className="grid gap-8">
          {/* Students List */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800">รายชื่อนักเรียนที่ลงทะเบียน</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">ลำดับ</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">รหัส</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">ชื่อ</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">รูปภาพ</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">สถานะ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {students.map((student, index) => (
                    <tr key={student.id} className="hover:bg-gray-50/50 transition duration-150">
                      <td className="px-6 py-4 text-gray-600">{index + 1}</td>
                      <td className="px-6 py-4 font-medium text-gray-900">{student.code}</td>
                      <td className="px-6 py-4 text-gray-800">{student.name}</td>
                      <td className="px-6 py-4">
                        <img 
                          src={student.imageUrl || "/api/placeholder/40/40"}
                          alt={student.name}
                          className="w-10 h-10 rounded-full ring-2 ring-gray-100"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                          student.status === 1 
                            ? "bg-green-50 text-green-700 ring-1 ring-green-600/20" 
                            : "bg-gray-50 text-gray-600 ring-1 ring-gray-500/20"
                        }`}>
                          {student.status === 1 ? "เช็คชื่อแล้ว" : "ยังไม่ได้เช็คชื่อ"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Checkin History */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">ประวัติการเช็คชื่อ</h2>
              <button 
                onClick={addCheckin}
                className="px-6 py-3 bg-blue-500 text-white rounded-xl font-medium shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition duration-200 transform hover:scale-105"
              >
                เพิ่มการเช็คชื่อ
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">ลำดับ</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">วัน-เวลา</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">จำนวนคนเข้าเรียน</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">สถานะ</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">จัดการ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {checkins.map((checkin, index) => (
                    <tr key={checkin.id} className="hover:bg-gray-50/50 transition duration-150">
                      <td className="px-6 py-4 text-gray-600">{index + 1}</td>
                      <td className="px-6 py-4 text-gray-800">
                        {new Date(checkin.date).toLocaleString('th-TH')}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {checkin.students?.filter(s => s.status === 1).length || 0} คน
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                          checkin.students?.every(s => s.status === 1)
                            ? "bg-green-50 text-green-700 ring-1 ring-green-600/20"
                            : "bg-yellow-50 text-yellow-700 ring-1 ring-yellow-600/20"
                        }`}>
                          {checkin.students?.every(s => s.status === 1)
                            ? "จบการเช็คชื่อ"
                            : "กำลังเรียน"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => updateCheckinStatus(checkin.id)}
                          className="text-blue-500 hover:text-blue-700 font-medium transition-colors"
                        >
                          เช็คชื่อ
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageClassroom;
