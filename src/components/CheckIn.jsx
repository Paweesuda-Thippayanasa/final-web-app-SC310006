import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CheckIn = () => {
  const { classroomId } = useParams();
  const navigate = useNavigate();
  
  // Mock Data Declarations
  const mockClassroom = {
    info: {
      name: "Computer Programming",
      code: "SC310001",
      photo: "https://via.placeholder.com/200",
      room: "SC5101",
    },
  };

  const mockCheckIns = [
    {
      id: "checkin1",
      code: "ABC123",
      date: "10/02/2025 13:00",
      status: 1, // กำลังเช็คชื่อ
    },
    {
      id: "checkin2",
      code: "XYZ456",
      date: "17/02/2025 13:00",
      status: 2, // เสร็จสิ้นการเช็คชื่อ
    },
  ];

  const mockStudents = [
    {
      id: "student1",
      stdid: "63010001",
      name: "John Doe",
      remark: "มาเรียน",
      date: "10/02/2025 13:05",
    },
    {
      id: "student2",
      stdid: "63010002",
      name: "Jane Smith",
      remark: "มาสาย",
      date: "10/02/2025 13:10",
    },
  ];

  const mockScores = [
    {
      id: "student1",
      stdid: "63010001",
      name: "John Doe",
      remark: "มาเรียน",
      date: "10/02/2025 13:05",
      score: 10,
      status: "1", // มาเรียน
    },
    {
      id: "student2",
      stdid: "63010002",
      name: "Jane Smith",
      remark: "มาสาย",
      date: "10/02/2025 13:10",
      score: 5,
      status: "2", // มาสาย
    },
  ];

  // State declarations
  const [classroom, setClassroom] = useState(mockClassroom);
  const [checkIns, setCheckIns] = useState(mockCheckIns);
  const [students, setStudents] = useState(mockStudents);
  const [scores, setScores] = useState(mockScores);
  const [currentCheckIn, setCurrentCheckIn] = useState("checkin1");

  const deleteStudent = (studentId) => {
    setStudents(students.filter((student) => student.id !== studentId));
  };

  const handleBack = () => {
    navigate(`/manage-classroom/${classroomId}`);
  };

  const handleCreateQuestion = () => {
    navigate(`/checkin/${classroomId}/question`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={handleBack}
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
          <span className="font-medium">กลับสู่หน้าจัดการห้องเรียน</span>
        </button>

        {/* Header Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 rounded-2xl shadow-lg mb-8">
          <div className="relative z-10 p-8">
            <h1 className="text-4xl font-bold text-white mb-4">{classroom.info.name}</h1>
            <div className="space-y-2 text-white/90">
              <p className="text-lg">รหัสวิชา: {classroom.info.code}</p>
              <p className="text-lg">ห้องเรียน: {classroom.info.room}</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 -mt-20 -mr-20">
            <div className="w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-xl font-medium shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition duration-200 transform hover:scale-105">
            เปิดเช็คชื่อ
          </button>
          <button className="px-6 py-3 bg-red-500 text-white rounded-xl font-medium shadow-lg shadow-red-500/20 hover:bg-red-600 transition duration-200 transform hover:scale-105">
            ปิดเช็คชื่อ
          </button>
          <button className="px-6 py-3 bg-green-500 text-white rounded-xl font-medium shadow-lg shadow-green-500/20 hover:bg-green-600 transition duration-200 transform hover:scale-105">
            บันทึกการเช็คชื่อ
          </button>
          <button
            onClick={handleCreateQuestion}
            className="px-6 py-3 bg-purple-500 text-white rounded-xl font-medium shadow-lg shadow-purple-500/20 hover:bg-purple-600 transition duration-200 transform hover:scale-105"
          >
            สร้างคำถาม
          </button>
        </div>

        {/* Check-in List */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800">รายชื่อผู้ที่เช็คชื่อ</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">ลำดับ</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">รหัส</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">ชื่อ</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">หมายเหตุ</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">วันเวลา</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">จัดการ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {students.map((student, index) => (
                  <tr key={student.id} className="hover:bg-gray-50/50 transition duration-150">
                    <td className="px-6 py-4 text-gray-600">{index + 1}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">{student.stdid}</td>
                    <td className="px-6 py-4 text-gray-800">{student.name}</td>
                    <td className="px-6 py-4 text-gray-600">{student.remark}</td>
                    <td className="px-6 py-4 text-gray-600">{student.date}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => deleteStudent(student.id)}
                        className="text-red-500 hover:text-red-700 font-medium transition-colors"
                      >
                        ลบ
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Scores Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800">คะแนนการเข้าเรียน</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">ลำดับ</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">รหัส</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">ชื่อ</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">หมายเหตุ</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">วันเวลา</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">คะแนน</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">สถานะ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {scores.map((score, index) => (
                  <tr key={score.id} className="hover:bg-gray-50/50 transition duration-150">
                    <td className="px-6 py-4 text-gray-600">{index + 1}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">{score.stdid}</td>
                    <td className="px-6 py-4 text-gray-800">{score.name}</td>
                    <td className="px-6 py-4 text-gray-600">{score.remark}</td>
                    <td className="px-6 py-4 text-gray-600">{score.date}</td>
                    <td className="px-6 py-4">
                      <input
                        type="text"
                        value={score.score}
                        onChange={(e) => {
                          const newScores = [...scores];
                          newScores[index].score = e.target.value;
                          setScores(newScores);
                        }}
                        className="w-16 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={score.status}
                        onChange={(e) => {
                          const newScores = [...scores];
                          newScores[index].status = e.target.value;
                          setScores(newScores);
                        }}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="0">ไม่มา</option>
                        <option value="1">มาเรียน</option>
                        <option value="2">มาสาย</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 border-t border-gray-100">
            <button
              onClick={() => alert("บันทึกคะแนนเรียบร้อย")}
              className="px-6 py-3 bg-green-500 text-white rounded-xl font-medium shadow-lg shadow-green-500/20 hover:bg-green-600 transition duration-200 transform hover:scale-105"
            >
              บันทึกคะแนน
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckIn;
