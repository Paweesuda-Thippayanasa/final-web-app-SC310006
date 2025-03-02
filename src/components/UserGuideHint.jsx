// สร้างไฟล์ใหม่ src/components/checkin/UserGuideHint.jsx
import React, { useState } from "react";

const UserGuideHint = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  if (!isVisible) return null;
  
  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
      <div className="flex justify-between">
        <div className="flex">
          <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="text-lg font-semibold text-blue-800">คำแนะนำในการใช้งาน</h3>
            <ul className="mt-1 list-disc list-inside text-blue-700 ml-2">
              <li>คุณสามารถดูรายชื่อนักเรียนที่เช็คชื่อในแท็บ "รายชื่อผู้เช็คชื่อ"</li>
              <li>ไปที่แท็บ "การให้คะแนน" เพื่อให้คะแนนและปรับสถานะนักเรียน</li>
              <li>เมื่อเสร็จแล้ว คลิกที่ปุ่ม <span className="font-medium">"บันทึกคะแนนและปิดการเช็คชื่อ"</span> เพื่อบันทึกข้อมูลและปิดการเช็คชื่อ</li>
            </ul>
          </div>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-blue-500 hover:text-blue-700"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UserGuideHint;
