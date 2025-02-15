import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import {
	getFirestore,
	collection,
	query,
	where,
	getDocs,
} from "firebase/firestore"; // Import Firestore methods
import { Link } from "react-router-dom";
import "../css/hompage.css";

const HomePage = () => {
	const navigate = useNavigate();
	const auth = getAuth();
	const db = getFirestore(); // Get Firestore instance
	const [courses, setCourses] = useState([]);
	const [user, setUser] = useState(null);
	const [showLogoutDialog, setShowLogoutDialog] = useState(false);

	useEffect(() => {
		const currentUser = auth.currentUser;
		if (currentUser) {
		  setUser(currentUser);
		  
		  // ตรวจสอบว่า `currentUser.uid` ถูกต้องหรือไม่
		  const coursesRef = collection(db, "classroom");
		  const q = query(coursesRef, where("owner", "==", currentUser.uid));
	  
		  const fetchCourses = async () => {
			const querySnapshot = await getDocs(q);
			const coursesList = querySnapshot.docs.map((doc) => {
			  const data = doc.data();

			  return {
				id: doc.id,
				name: data.info?.name || "ไม่มีชื่อวิชา",  // ดึงชื่อจาก data.info
				code: data.info?.code || "ไม่มีรหัสวิชา",  // ดึงรหัสวิชาจาก data.info
				room: data.info?.room || "ไม่มีห้องเรียน",  // ดึงห้องเรียนจาก data.info
				photo: data.info?.photo || "https://via.placeholder.com/400x200?text=No+Image",  // ดึงรูปภาพจาก data.info
			  };
			});

			setCourses(coursesList);
		  };
		  
	  
		  fetchCourses();
		} else {
		  navigate("/"); // ถ้าไม่ได้เข้าสู่ระบบ ให้ไปหน้า Login
		}
	  }, [auth, db, navigate]);
	  
	// ฟังก์ชันจัดการคลิกปุ่ม Logout
	const handleLogoutClick = () => {
		setShowLogoutDialog(true);
	};

	// ฟังก์ชันยืนยันการ Logout
	const handleConfirmLogout = async () => {
		try {
			await signOut(auth);
			localStorage.removeItem("user");
			navigate("/", { replace: true });
		} catch (error) {
			console.error("Logout error:", error);
		}
	};

	const handleCancelLogout = () => {
		setShowLogoutDialog(false);
	};

	return (
		<div className="min-h-screen bg-gray-100">
			<header className="bg-white shadow">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
					<h1 className="text-2xl font-bold text-gray-900">
						ระบบจัดการห้องเรียน
					</h1>
					<div className="flex items-center">
						{user && (
							<div className="flex items-center mr-4">
								<img
									src={user.photoURL}
									alt={user.displayName}
									className="w-10 h-10 rounded-full mr-2"
								/>
								<div>
									<p className="text-sm font-medium">{user.displayName}</p>
									<p className="text-xs text-gray-500">{user.email}</p>
								</div>
							</div>
						)}
						<div className="flex space-x-2">
							<Link
								to="/edit-profile"
								className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
							>
								แก้ไขข้อมูลส่วนตัว
							</Link>
							<Link
								to="/add-course"
								className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
							>
								เพิ่มวิชา
							</Link>
							<button
								onClick={handleLogoutClick}
								className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
							>
								ออกจากระบบ
							</button>
						</div>
					</div>
				</div>
			</header>

			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
				<h2 className="text-xl font-semibold mb-4">รายวิชาที่สอน</h2>
				{courses.length === 0 ? (
					<p className="text-gray-500">
						ยังไม่มีรายวิชาที่สอน กรุณาเพิ่มวิชาใหม่
					</p>
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{courses.map((course) => (
							<div
								key={course.id}
								className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow"
							>
								<div
									className="h-40 bg-cover bg-center"
									style={{
										backgroundImage: `url(${
											course.photo ||
											"https://via.placeholder.com/400x200?text=No+Image"
										})`,
									}}
								></div>
								<div className="p-4">
									<h3 className="text-lg font-medium">{course.name}</h3>
									<p className="text-gray-600 text-sm">
										รหัสวิชา: {course.code}
									</p>
									<p className="text-gray-600 text-sm mb-4">
										ห้องเรียน: {course.room}
									</p>
									<Link
										to={`/manage-classroom/${course.id}`}
										className="block w-full text-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
									>
										จัดการห้องเรียน
									</Link>
								</div>
							</div>
						))}
					</div>
				)}
			</main>

			{/* Logout Confirmation Modal */}
			{showLogoutDialog && (
				<div className="fixed inset-0 flex items-center justify-center z-50 popup-logout">
					<div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
						<h3 className="text-lg font-semibold mb-2">ยืนยันการออกจากระบบ</h3>
						<p className="text-gray-600 mb-4">
							คุณต้องการออกจากระบบใช่หรือไม่?
						</p>
						<div className="flex justify-end space-x-2">
							<button
								onClick={handleCancelLogout}
								className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
							>
								ยกเลิก
							</button>
							<button
								onClick={handleConfirmLogout}
								className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
							>
								ยืนยัน
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default HomePage;
