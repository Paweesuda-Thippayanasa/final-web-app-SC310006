import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../../firebase-config";

const LoginPage = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
  
	useEffect(() => {
	  const user = JSON.parse(localStorage.getItem("user"));
	  if (user) {
		navigate("/home");
	  }
	}, [navigate]);
  
	const handleSignIn = () => {
	  setLoading(true); // เริ่ม loading เมื่อกดปุ่ม login
	  signInWithGoogle(navigate)
		.then((userCredential) => {
		  const user = userCredential.user;
		  localStorage.setItem("user", JSON.stringify(user));
		  navigate("/home");
		})
		.catch((error) => {
		  console.error("Error during sign in: ", error.message);
		  alert("เกิดข้อผิดพลาดในการเข้าสู่ระบบ: " + error.message);
		})
		.finally(() => {
		  setLoading(false); // หยุด loading ไม่ว่าจะสำเร็จหรือไม่
		});
	};
  
	if (loading) {
	  return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
		  <div className="p-8 bg-white rounded-xl shadow-xl">
			<div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
			<p className="mt-4 text-gray-600 font-medium text-center">กำลังเข้าสู่ระบบ...</p>
		  </div>
		</div>
	  );
	}
	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
			<div className="max-w-md w-full space-y-8 p-10 bg-white rounded-2xl shadow-xl transform transition-all hover:scale-[1.01]">
				<div className="text-center">
					<div className="flex justify-center mb-8">
						<div className="p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full shadow-inner">
							<svg
								className="w-14 h-14 text-blue-600"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.5"
							>
								<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
								<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
							</svg>
						</div>
					</div>

					<h1 className="text-4xl font-bold mb-3 text-gray-800 tracking-tight">
						ระบบจัดการห้องเรียน
					</h1>
					<h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
						สำหรับอาจารย์
					</h2>
					<p className="text-gray-600 text-lg">
						กรุณาเข้าสู่ระบบด้วยบัญชี Google ของท่าน
					</p>
				</div>

				<button
					onClick={handleSignIn}
					disabled={loading} // ปิดปุ่มระหว่าง loading
					className={`w-full flex items-center justify-center px-6 py-4 
            text-gray-700 bg-white rounded-xl 
            border-2 border-gray-200
            hover:bg-gray-50 hover:border-blue-300 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            transform transition-all duration-200 active:scale-95
            shadow-sm hover:shadow-md
            ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
				>
					{loading ? (
						<div className="w-6 h-6 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
					) : (
						<>
							<svg className="w-6 h-6 mr-3" viewBox="0 0 24 24">
								{/* ... Google icon SVG ... */}
							</svg>
							<span className="text-lg font-medium cursor-pointer">
								เข้าสู่ระบบด้วย Google
							</span>
						</>
					)}
				</button>

				<div className="mt-8 text-center text-sm text-gray-500">
					<span className="bg-yellow-50 px-3 py-1 rounded-full">
						ระบบนี้รองรับการใช้งานผ่านบัญชี Google เท่านั้น
					</span>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
