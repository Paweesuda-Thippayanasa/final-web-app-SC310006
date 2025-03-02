// src/components/checkin/QRCodeModal.jsx
import React from "react";

const QRCodeModal = ({ checkInCode, qrCodeData, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-md w-full mx-4">
        <div className="flex justify-between items-start mb-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-gray-800">
              QR Code สำหรับเช็คชื่อ
            </h3>
            <p className="text-lg font-medium text-gray-700">
              รหัสเช็คชื่อ: <span className="font-mono font-bold">{checkInCode}</span>
            </p>
          </div>
          <button
            onClick={onClose}
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
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl flex justify-center items-center min-h-[320px] shadow-inner">
          {qrCodeData ? (
            <img src={qrCodeData} alt="QR Code สำหรับเช็คชื่อ" className="max-w-full" />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">กำลังสร้าง QR Code...</p>
            </div>
          )}
        </div>
        <p className="text-center text-gray-500 text-sm mt-4">
          ให้นักเรียนสแกน QR Code เพื่อเช็คชื่อเข้าเรียน
        </p>
      </div>
    </div>
  );
};

export default QRCodeModal;
