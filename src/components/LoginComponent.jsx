import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../../firebase-config";

const LoginPage = () => {
	const navigate = useNavigate();

	// ตรวจสอบว่า user มีข้อมูลใน localStorage หรือไม่
	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));
		if (user) {
			// ถ้ามีข้อมูลผู้ใช้แล้ว ก็ให้ redirect ไปที่หน้า /home
			navigate("/home");
		}
	}, [navigate]);

	const handleSignIn = () => {
		signInWithGoogle(navigate)
			.then((userCredential) => {
				const user = userCredential.user;
				// เก็บข้อมูลผู้ใช้ใน localStorage
				localStorage.setItem("user", JSON.stringify(user));
				navigate("/home");
			})
			.catch((error) => {
				console.error("Error during sign in: ", error.message);
				alert("เกิดข้อผิดพลาดในการเข้าสู่ระบบ: " + error.message);
			});
	};

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
					className="w-full flex items-center justify-center px-6 py-4 
                   text-gray-700 bg-white rounded-xl 
                   border-2 border-gray-200
                   hover:bg-gray-50 hover:border-blue-300 
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                   transform transition-all duration-200 active:scale-95
                   shadow-sm hover:shadow-md"
				>
					<svg className="w-6 h-6 mr-3" viewBox="0 0 24 24">
						<path
							d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
							fill="#4285F4"
						/>
						<path
							d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
							fill="#34A853"
						/>
						<path
							d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
							fill="#FBBC05"
						/>
						<path
							d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
							fill="#EA4335"
						/>
					</svg>
					<span className="text-lg font-medium cursor-pointer">
						เข้าสู่ระบบด้วย Google
					</span>
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
