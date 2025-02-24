import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
	getFirestore,
	doc,
	getDoc,
	collection,
	getDocs,
	addDoc,
	updateDoc,
	deleteDoc,
	writeBatch,
	arrayUnion,
} from "firebase/firestore";
import {
	getDatabase,
	ref,
	push,
	set,
	get,
	serverTimestamp,
	onValue,
	off,
} from "firebase/database";
import { database } from "../../firebase-config";
import QRCode from "qrcode";

const ManageClassroom = () => {
	const { id } = useParams();
	const db = getFirestore();
	const [classroom, setClassroom] = useState(null);
	const [students, setStudents] = useState([]);
	const [checkins, setCheckins] = useState([]);
	const [loading, setLoading] = useState(true);
	const [showQR, setShowQR] = useState(false);
	const [selectedDate, setSelectedDate] = useState(
		new Date().toISOString().split("T")[0]
	); // Default to current date
	const qrCanvasRef = useRef(null);
	const navigate = useNavigate();

	useEffect(() => {
		const db = getDatabase();
		const studentsRef = ref(db, `classroom/${id}/students`);

		// สร้าง listener สำหรับดึงข้อมูลนักเรียน
		const listener = onValue(studentsRef, (snapshot) => {
			console.log("🔥 Student Data from Firebase:", snapshot.val());

			if (snapshot.exists()) {
				const data = snapshot.val();
				const studentsList = Object.entries(data).map(([key, value]) => ({
					id: key, // Firebase Key
					name: value.name, // ชื่อนักเรียน
					stdid: value.stdid, // รหัสนักเรียน
				}));
				console.log("📌 Students List:", studentsList);
				if (studentsList.length !== students.length) {
					// ตรวจสอบว่า state จะไม่ถูกอัปเดตซ้ำ
					setStudents(studentsList); // อัปเดต state
				}
			} else {
				console.log("❌ No student data found!");
				setStudents([]); // หากไม่มีข้อมูล ให้ตั้งค่าเป็น array ว่าง
			}
			setLoading(false); // หยุด loading
		});

		// Cleanup function เพื่อยกเลิก listener เมื่อ Component ถูก Unmount
		return () => {
			off(studentsRef, listener); // ยกเลิก listener
		};
	}, [id, students.length]); // เพิ่ม `students.length` เพื่อไม่ให้เกิดการอัปเดตซ้ำ

	// Cleanup function เพื่อยกเลิก listener เมื่อ Component ถูก Unmount

	useEffect(() => {
		const fetchData = async () => {
			try {
				// Fetch classroom data
				const docRef = doc(db, "classroom", id);
				const docSnap = await getDoc(docRef);
				if (docSnap.exists()) {
					setClassroom(docSnap.data());
				}

				// Fetch students
				const studentsRef = collection(db, "classroom", id, "students");
				const studentsSnap = await getDocs(studentsRef);
				setStudents(
					studentsSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
				);

				// Fetch checkins
				const checkinsRef = collection(db, "classroom", id, "checkin");
				const checkinsSnap = await getDocs(checkinsRef);
				setCheckins(
					checkinsSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
				);

				setLoading(false);
			} catch (error) {
				console.error("Error fetching data:", error);
				setLoading(false);
			}
		};

		fetchData();
	}, [id, db]);

	// Filter checkins based on selected date
	const filteredCheckins = selectedDate
		? checkins.filter((checkin) => {
				const checkinDate = new Date(checkin.date).toLocaleDateString("th-TH");
				const selectedDateFormatted = new Date(selectedDate).toLocaleDateString(
					"th-TH"
				);
				return checkinDate === selectedDateFormatted;
		  })
		: checkins;

	const generateQRCode = async () => {
		if (qrCanvasRef.current) {
			try {
				const canvas = document.createElement("canvas");
				await QRCode.toCanvas(canvas, String(id), {
					width: 256,
					margin: 2,
					color: {
						dark: "#000000",
						light: "#ffffff",
					},
				});

				qrCanvasRef.current.innerHTML = "";
				qrCanvasRef.current.appendChild(canvas);
			} catch (error) {
				console.error("Error generating QR Code:", error);
			}
		}
	};

	const addCheckin = async () => {
		try {
			const checkinData = {
				date: new Date(),
				students: students.map((student) => ({
					...student,
					status: 0,
				})),
			};

			const checkinRef = await addDoc(
				collection(db, "classroom", id, "checkin"),
				checkinData
			);

			setCheckins((prev) => [...prev, { id: checkinRef.id, ...checkinData }]);
		} catch (error) {
			console.error("Error adding checkin:", error);
		}
	};

	const updateCheckinStatus = async (checkinId, studentId) => {
		try {
			const checkinRef = doc(db, "classroom", id, "checkin", checkinId);
			await updateDoc(checkinRef, {
				students: arrayUnion({ studentId, status: 1 }),
			});

			setCheckins((prev) =>
				prev.map((checkin) =>
					checkin.id === checkinId
						? {
								...checkin,
								students: checkin.students.map((student) =>
									student.id === studentId ? { ...student, status: 1 } : student
								),
						  }
						: checkin
				)
			);
		} catch (error) {
			console.error("Error updating checkin status:", error);
		}
	};

	const handleAddCheckin = async () => {
		try {
			const db = getDatabase(); // ใช้ getDatabase() เพื่อเชื่อมต่อกับ Firebase
			const checkinRef = ref(db, `classroom/${id}/checkin`);
			const newCheckinRef = push(checkinRef);
			const cno = newCheckinRef.key;

			// ใช้ serverTimestamp() ของ Firebase
			await set(newCheckinRef, {
				createdAt: serverTimestamp(), // กำหนดเวลาเป็นเวลาของ Firebase Server
				status: 0,
			});

			// ดึงรายชื่อนักเรียนจาก /students
			const studentsRef = ref(db, `classroom/${id}/students`);
			const studentsSnapshot = await get(studentsRef);

			if (studentsSnapshot.exists()) {
				const studentsData = studentsSnapshot.val();
				const scoresRef = ref(db, `classroom/${id}/checkin/${cno}/scores`);

				// คัดลอกรายชื่อนักเรียนเข้า /scores
				const updates = {};
				Object.keys(studentsData).forEach((studentId) => {
					updates[studentId] = {
						...studentsData[studentId],
						status: 0,
					};
				});

				await set(scoresRef, updates);
			}

			// ไปยังหน้าการเช็คชื่อ
			navigate(`/checkin/${id}/${cno}`);
		} catch (error) {
			console.error("Error creating check-in:", error);
		}
	};

	if (loading) {
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
	}

	if (!classroom) {
		return <div>...</div>;
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Back Button */}
				<button
					onClick={() => navigate("/home")}
					className="group flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-white transition duration-200 mb-6"
				>
					<svg
						className="w-5 h-5 transform group-hover:-translate-x-1 transition duration-200"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M10 19l-7-7m0 0l7-7m-7 7h18"
						/>
					</svg>
					<span className="font-medium">กลับสู่หน้าหลัก</span>
				</button>

				{/* Header Section with Fixed QR Modal */}
				<div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 rounded-2xl shadow-lg mb-8">
					<div className="relative z-10 p-8">
						<h1 className="text-4xl font-bold text-white mb-4">
							{classroom.info?.name}
						</h1>
						<div className="space-y-2 text-white/90">
							<p className="text-lg">รหัสวิชา: {classroom.info?.code}</p>
							<p className="text-lg">ห้องเรียน: {classroom.info?.room}</p>
						</div>
						<button
							onClick={() => {
								setShowQR(true);
								setTimeout(generateQRCode, 100); // Add slight delay to ensure DOM is ready
							}}
							className="mt-6 px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-xl font-medium backdrop-blur-sm transition duration-200 transform hover:scale-105"
						>
							แสดง QR Code ลงทะเบียน
						</button>
					</div>
					<div className="absolute top-0 right-0 -mt-20 -mr-20">
						<div className="w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
					</div>
				</div>

				{/* Fixed QR Code Modal */}
				{showQR && (
					<div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
						<div className="bg-white rounded-3xl p-8 shadow-2xl max-w-md w-full mx-4">
							<div className="flex justify-between items-start mb-6">
								<div className="space-y-2">
									<h3 className="text-2xl font-bold text-gray-800">
										QR Code สำหรับลงทะเบียน
									</h3>
									<p className="text-xl font-semibold text-gray-800">
										{classroom.info?.name}
									</p>
									<p className="text-lg text-gray-700 font-medium">
										รหัสวิชา: {classroom.info?.code}
									</p>
								</div>
								<button
									onClick={() => setShowQR(false)}
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
							<div
								ref={qrCanvasRef}
								className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl flex justify-center items-center min-h-[320px] shadow-inner"
							/>
							<p className="text-center text-gray-500 text-sm mt-4">
								สแกน QR Code เพื่อเข้าร่วมห้องเรียน
							</p>
						</div>
					</div>
				)}

				{/* Students List */}
				<div className="bg-white rounded-2xl shadow-lg overflow-hidden">
					<div className="p-6 border-b border-gray-100">
						<h2 className="text-2xl font-bold text-gray-800">
							รายชื่อนักเรียนที่ลงทะเบียน
						</h2>
					</div>
					<div className="overflow-x-auto">
						<table className="w-full">
							<thead>
								<tr className="bg-gray-50">
									<th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
										ลำดับ
									</th>
									<th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
										รหัสนักเรียน
									</th>
									<th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
										ชื่อนักเรียน
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-100">
								{loading ? ( // ใช้เงื่อนไขการโหลด
									<tr>
										<td colSpan="3" className="text-center py-4 text-gray-600">
											กำลังโหลดข้อมูล...
										</td>
									</tr>
								) : students.length > 0 ? (
									students.map((student, index) => (
										<tr
											key={student.id}
											className="hover:bg-gray-50/50 transition duration-150"
										>
											<td className="px-6 py-4 text-gray-600">{index + 1}</td>
											<td className="px-6 py-4 font-medium text-gray-900">
												{student.stdid}
											</td>
											<td className="px-6 py-4 text-gray-800">
												{student.name}
											</td>
										</tr>
									))
								) : (
									<tr>
										<td colSpan="3" className="text-center py-4 text-gray-600">
											ไม่พบข้อมูลนักเรียน
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>

					{/* Checkin History */}
					<div className="bg-white rounded-2xl shadow-lg overflow-hidden">
						<div className="p-6 border-b border-gray-100 flex justify-between items-center">
							<h2 className="text-2xl font-bold text-gray-800">
								ประวัติการเช็คชื่อ
							</h2>
							<div className="flex items-center space-x-4">
								<input
									type="date"
									value={selectedDate}
									onChange={(e) => setSelectedDate(e.target.value)}
									className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
								<button
									onClick={handleAddCheckin}
									className="px-6 py-3 bg-blue-500 text-white rounded-xl font-medium shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition duration-200 transform hover:scale-105"
								>
									เพิ่มการเช็คชื่อ
								</button>
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
											วัน-เวลา
										</th>
										<th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
											จำนวนคนเข้าเรียน
										</th>
										<th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
											สถานะ
										</th>
										<th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
											จัดการ
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-100">
									{filteredCheckins.map((checkin, index) => (
										<tr
											key={checkin.id}
											className="hover:bg-gray-50/50 transition duration-150"
										>
											<td className="px-6 py-4 text-gray-600">{index + 1}</td>
											<td className="px-6 py-4 text-gray-800">
												{new Date(checkin.date).toLocaleString("th-TH")}
											</td>
											<td className="px-6 py-4 font-medium text-gray-900">
												{checkin.students?.filter((s) => s.status === 1)
													.length || 0}{" "}
												คน
											</td>
											<td className="px-6 py-4">
												<span
													className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
														checkin.students?.every((s) => s.status === 1)
															? "bg-green-50 text-green-700 ring-1 ring-green-600/20"
															: "bg-yellow-50 text-yellow-700 ring-1 ring-yellow-600/20"
													}`}
												>
													{checkin.students?.every((s) => s.status === 1)
														? "จบการเช็คชื่อ"
														: "กำลังเรียน"}
												</span>
											</td>
											<td className="px-6 py-4">
												<button
													onClick={() => updateCheckinStatus(checkin.id)}
													className="text-blue-500 hover:text-blue-700 font-medium transition-colors"
												>
													เช็คชื่อ
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ManageClassroom;
