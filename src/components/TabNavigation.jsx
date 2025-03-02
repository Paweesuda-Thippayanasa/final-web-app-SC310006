// เพิ่มใน src/components/checkin/TabNavigation.jsx
import React from "react";

const TabNavigation = ({ activeTab, setActiveTab, studentCount, scoreCount }) => {
  return (
    <div className="mb-6">
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("studentList")}
          className={`px-6 py-3 font-medium text-lg transition-colors ${
            activeTab === "studentList"
              ? "text-blue-600 border-b-2 border-blue-500"
              : "text-gray-500 hover:text-gray-900"
          }`}
        >
          รายชื่อผู้เช็คชื่อ ({studentCount})
        </button>
        <button
          onClick={() => setActiveTab("scoreList")}
          className={`px-6 py-3 font-medium text-lg transition-colors ${
            activeTab === "scoreList"
              ? "text-blue-600 border-b-2 border-blue-500"
              : "text-gray-500 hover:text-gray-900"
          }`}
        >
          การให้คะแนน ({scoreCount})
        </button>
      </div>
      
      {/* เพิ่ม hint ให้ผู้ใช้ */}
      <div className="text-sm text-gray-500 mt-1 flex items-center">
        <svg className="w-4 h-4 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>หมายเหตุ: ไปที่แท็บ <span className="font-medium text-blue-600">"การให้คะแนน"</span> เพื่อบันทึกคะแนนและปิดการเช็คชื่อ</span>
      </div>
    </div>
  );
};

export default TabNavigation;
