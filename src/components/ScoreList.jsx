// src/components/checkin/ScoreList.jsx
import React from "react";
import { getDatabase, ref, update } from "firebase/database";

const ScoreList = ({ scores, setScores, saveAllScores, classroomId, checkinId }) => {
  // อัปเดตคะแนนและสถานะของนักเรียน
  const updateScore = async (studentId, field, value) => {
    try {
      const db = getDatabase();
      const scoreRef = ref(db, `classroom/${classroomId}/checkin/${checkinId}/scores/${studentId}`);
      await update(scoreRef, { [field]: value });
    } catch (error) {
      console.error(`Error updating student ${field}:`, error);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-800">
          คะแนนการเข้าเรียน
        </h2>
        <div className="flex flex-col items-end">
          <button
            onClick={saveAllScores}
            className="px-6 py-3 bg-green-500 text-white rounded-xl font-medium shadow-lg shadow-green-500/20 hover:bg-green-600 transition duration-200 flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            บันทึกคะแนนและปิดการเช็คชื่อ
          </button>
          <p className="text-xs text-gray-500 mt-1">
            หมายเหตุ: การกดปุ่มนี้จะบันทึกคะแนนและปิดการเช็คชื่อ และนำคุณกลับสู่หน้าจัดการห้องเรียน
          </p>
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
                รหัส
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                ชื่อ
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                หมายเหตุ
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                วันเวลา
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                คะแนน
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                สถานะ
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {scores.length > 0 ? (
              scores.map((score, index) => (
                <tr
                  key={score.id}
                  className="hover:bg-gray-50/50 transition duration-150"
                >
                  <td className="px-6 py-4 text-gray-600">{index + 1}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {score.stdid}
                  </td>
                  <td className="px-6 py-4 text-gray-800">{score.name}</td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      value={score.remark || ""}
                      onChange={(e) => {
                        const updatedScores = [...scores];
                        updatedScores[index].remark = e.target.value;
                        setScores(updatedScores);
                      }}
                      onBlur={() => updateScore(score.id, "remark", score.remark)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </td>
                  <td className="px-6 py-4 text-gray-600">{score.date}</td>
                  <td className="px-6 py-4">
                    <input
                      type="number"
                      value={score.score}
                      onChange={(e) => {
                        const updatedScores = [...scores];
                        updatedScores[index].score = e.target.value;
                        setScores(updatedScores);
                      }}
                      onBlur={() => updateScore(score.id, "score", score.score)}
                      className="w-16 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <select
                      value={score.status !== undefined ? score.status : "0"}
                      onChange={(e) => {
                        const updatedScores = [...scores];
                        updatedScores[index].status = e.target.value;
                        setScores(updatedScores);
                      }}
                      onBlur={() => updateScore(score.id, "status", parseInt(score.status))}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="0">ไม่มา</option>
                      <option value="1">มาเรียน</option>
                      <option value="2">มาสาย</option>
                    </select>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-8 text-gray-500">
                  <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p className="text-lg">ไม่พบข้อมูลคะแนน</p>
                  <p className="mt-1 text-sm text-gray-400">รอให้นักเรียนเช็คชื่อก่อน</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {scores.length > 0 && (
        <div className="p-4 bg-yellow-50 border-t border-yellow-100">
          <div className="flex items-start">
            <svg className="w-5 h-5 mt-0.5 text-yellow-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <p className="text-sm text-yellow-700">
                <span className="font-medium">โปรดจำ:</span> อย่าลืมกดปุ่ม "บันทึกคะแนนและปิดการเช็คชื่อ" ด้านบนเพื่อบันทึกการเปลี่ยนแปลงและปิดการเช็คชื่อครั้งนี้
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScoreList;
