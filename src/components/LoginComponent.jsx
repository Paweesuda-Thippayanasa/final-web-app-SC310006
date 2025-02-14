// LoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';  // นำเข้า useNavigate
import { signInWithGoogle } from '../../firebase-config'; // Assume this function is implemented in firebase.js

const LoginPage = () => {
  const navigate = useNavigate();  // สร้าง instance ของ navigate

  const handleSignIn = () => {
    signInWithGoogle(navigate);  // ส่ง navigate เข้าไปในฟังก์ชัน signInWithGoogle
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">ระบบจัดการห้องเรียนสำหรับอาจารย์</h1>
          <p className="text-gray-600">กรุณาเข้าสู่ระบบเพื่อใช้งาน</p>
        </div>
        
        <button
          onClick={handleSignIn}  // เรียกใช้งาน handleSignIn
          className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 bg-white rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" className="w-6 h-6 mr-2" />
          <span>เข้าสู่ระบบด้วย Google</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
