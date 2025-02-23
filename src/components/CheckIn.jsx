import React, { useState, useEffect } from 'react';

const CheckIn = () => {
  const [students, setStudents] = useState([]);
  const [scores, setScores] = useState([]);
  const [showStudentList, setShowStudentList] = useState(false);
  const [showScores, setShowScores] = useState(false);
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);

  const courseInfo = {
    code: "CS101",
    name: "Introduction to Computer Science",
    backgroundImage: "/api/placeholder/1200/400",
    instructor: "Dr. John Smith",
    semester: "1/2024"
  };

  const fetchStudents = () => {
    const mockStudents = [
      { id: 1, code: "6401234", name: "John Doe", note: "", timestamp: "2024-02-23 10:00" },
      { id: 2, code: "6401235", name: "Jane Smith", note: "", timestamp: "2024-02-23 10:01" }
    ];
    setStudents(mockStudents);
  };

  const fetchScores = () => {
    const mockScores = [
      { id: 1, code: "6401234", name: "John Doe", note: "", timestamp: "2024-02-23 10:00", score: 10, status: 1 },
      { id: 2, code: "6401235", name: "Jane Smith", note: "", timestamp: "2024-02-23 10:01", score: 10, status: 1 }
    ];
    setScores(mockScores);
  };

  useEffect(() => {
    if (showStudentList) fetchStudents();
    if (showScores) fetchScores();
  }, [showStudentList, showScores]);

  const handleDeleteStudent = (studentId) => {
    setStudents(students.filter(student => student.id !== studentId));
  };

  const handleSaveCheckin = () => {
    console.log("Saving check-in data...");
  };

  const handleScoreChange = (id, field, value) => {
    setScores(scores.map(score => 
      score.id === id ? { ...score, [field]: value } : score
    ));
  };

  const handleSaveScores = () => {
    console.log("Saving scores...", scores);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Course Header */}
      <div className="relative h-64 mb-16 overflow-hidden">
        <img 
          src={courseInfo.backgroundImage} 
          alt="Course background" 
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">{courseInfo.code}</h1>
            <h2 className="text-2xl mb-2">{courseInfo.name}</h2>
            <div className="flex items-center gap-4 text-sm">
              <span>{courseInfo.instructor}</span>
              <span>•</span>
              <span>ภาคการศึกษา {courseInfo.semester}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Status Card */}
        <div className="bg-white rounded-xl shadow-sm mb-8 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-1">สถานะการเช็คชื่อ</h3>
              <p className={`text-sm ${isCheckInOpen ? 'text-green-600' : 'text-red-600'}`}>
                {isCheckInOpen ? '🟢 กำลังเปิดรับการเช็คชื่อ' : '🔴 ปิดการเช็คชื่อ'}
              </p>
            </div>
            <button 
              className={`
                px-6 py-2 rounded-lg font-medium transition-all
                ${isCheckInOpen 
                  ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                  : 'bg-green-100 text-green-700 hover:bg-green-200'
                }
              `}
              onClick={() => setIsCheckInOpen(!isCheckInOpen)}
            >
              {isCheckInOpen ? 'ปิดเช็คชื่อ' : 'เปิดเช็คชื่อ'}
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg shadow-sm transition-all">
            บันทึกการเช็คชื่อ
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg shadow-sm transition-all">
            แสดงรหัสเช็คชื่อ
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-lg shadow-sm transition-all">
            แสดง QR Code
          </button>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white p-4 rounded-lg shadow-sm transition-all">
            ถาม-ตอบ
          </button>
          <button 
            className={`
              p-4 rounded-lg shadow-sm transition-all
              ${showStudentList 
                ? 'bg-gray-800 text-white' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }
            `}
            onClick={() => {
              setShowStudentList(!showStudentList);
              setShowScores(false);
            }}
          >
            แสดงรายชื่อ
          </button>
          <button 
            className={`
              p-4 rounded-lg shadow-sm transition-all
              ${showScores 
                ? 'bg-gray-800 text-white' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }
            `}
            onClick={() => {
              setShowScores(!showScores);
              setShowStudentList(false);
            }}
          >
            แสดงคะแนน
          </button>
        </div>

        {/* Student List Table */}
        {showStudentList && (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8 overflow-x-auto">
            <h3 className="text-lg font-semibold mb-4">รายชื่อนักศึกษาที่เช็คชื่อ</h3>
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left">ลำดับ</th>
                  <th className="px-4 py-3 text-left">รหัส</th>
                  <th className="px-4 py-3 text-left">ชื่อ</th>
                  <th className="px-4 py-3 text-left">หมายเหตุ</th>
                  <th className="px-4 py-3 text-left">วันเวลา</th>
                  <th className="px-4 py-3 text-left">การจัดการ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {students.map((student, index) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3 font-medium">{student.code}</td>
                    <td className="px-4 py-3">{student.name}</td>
                    <td className="px-4 py-3">{student.note}</td>
                    <td className="px-4 py-3 text-gray-600">{student.timestamp}</td>
                    <td className="px-4 py-3">
                      <button 
                        className="bg-red-100 text-red-700 hover:bg-red-200 px-3 py-1 rounded-lg transition-all"
                        onClick={() => handleDeleteStudent(student.id)}
                      >
                        ลบ
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Scores Table */}
        {showScores && (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">คะแนนการเข้าเรียน</h3>
              <button 
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all"
                onClick={handleSaveScores}
              >
                บันทึกข้อมูล
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left">ลำดับ</th>
                    <th className="px-4 py-3 text-left">รหัส</th>
                    <th className="px-4 py-3 text-left">ชื่อ</th>
                    <th className="px-4 py-3 text-left">หมายเหตุ</th>
                    <th className="px-4 py-3 text-left">วันเวลา</th>
                    <th className="px-4 py-3 text-left">คะแนน</th>
                    <th className="px-4 py-3 text-left">สถานะ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {scores.map((score, index) => (
                    <tr key={score.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3">{index + 1}</td>
                      <td className="px-4 py-3 font-medium">{score.code}</td>
                      <td className="px-4 py-3">{score.name}</td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          value={score.note}
                          onChange={(e) => handleScoreChange(score.id, 'note', e.target.value)}
                          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        />
                      </td>
                      <td className="px-4 py-3 text-gray-600">{score.timestamp}</td>
                      <td className="px-4 py-3">
                        <input
                          type="number"
                          value={score.score}
                          onChange={(e) => handleScoreChange(score.id, 'score', e.target.value)}
                          className="w-24 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <select
                          value={score.status}
                          onChange={(e) => handleScoreChange(score.id, 'status', e.target.value)}
                          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        >
                          <option value="1">เข้าเรียน</option>
                          <option value="0">ขาดเรียน</option>
                          <option value="2">ลา</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckIn;
