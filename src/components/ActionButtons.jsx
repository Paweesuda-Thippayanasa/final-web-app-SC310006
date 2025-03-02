// src/components/checkin/ActionButtons.jsx
import React from "react";

const ActionButtons = ({ generateQRCode, navigateToQuestion }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
      <button 
        onClick={generateQRCode}
        className="px-6 py-4 bg-blue-500 text-white rounded-xl font-medium shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition duration-200 transform hover:scale-105 flex items-center justify-center"
      >
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
        แสดง QR Code สำหรับเช็คชื่อ
      </button>
      <button 
        onClick={navigateToQuestion}
        className="px-6 py-4 bg-purple-500 text-white rounded-xl font-medium shadow-lg shadow-purple-500/20 hover:bg-purple-600 transition duration-200 transform hover:scale-105 flex items-center justify-center"
      >
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        สร้างคำถามในห้องเรียน
      </button>
    </div>
  );
};

export default ActionButtons;
