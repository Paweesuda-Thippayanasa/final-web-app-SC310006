// src/components/checkin/LoadingSpinner.jsx
import React from "react";

const LoadingSpinner = () => {
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
};

export default LoadingSpinner;
