// src/components/checkin/StudentList.jsx
import React from "react";
import { getDatabase, ref, remove, update } from "firebase/database";

const StudentList = ({ students, classroomId, checkinId }) => {
  // ลบนักเรียนจากรายการเช็คชื่อ
  const deleteStudent = async (studentId) => {
    try {
      const db = getDatabase();
      const studentRef = ref(db, `classroom/${classroomId}/checkin/${checkinId}/students/${studentId}`);
      await remove(studentRef);
      
      // อัพเดทสถานะในคะแนนเป็น "ไม่มา"
      const scoreRef = ref(db, `classroom/${classroomId}/checkin/${checkinId}/scores/${studentId}`);
      await update(scoreRef, { status: 0 });
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">
          รายชื่อผู้ที่เช็คชื่อ
        </h2>
        <p className="text-gray-500">
          จำนวน {students.length} คน
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                ลำดับ
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                รหัส
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                ชื่อ
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                หมายเหตุ
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                เวลาเช็คชื่อ
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                จัดการ
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
                  <td className="px-6 py-4 text-gray-800">{student.name}</td>
                  <td className="px-6 py-4 text-gray-600">
                    {student.remark}
                  </td>
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
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-8 text-gray-500">
                  <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p className="text-lg">ยังไม่มีนักเรียนเช็คชื่อ</p>
                  <p className="mt-1 text-sm text-gray-400">ให้นักเรียนสแกน QR Code เพื่อเช็คชื่อ</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
