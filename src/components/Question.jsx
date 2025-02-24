import React, { useState, useEffect } from "react";
import { getDatabase, ref, set, onValue, off } from "firebase/database";
import { database } from "../../firebase-config";
import { useParams, useNavigate } from "react-router-dom";
import "../css/ques.css";

const Question = () => {
	const navigate = useNavigate();
	const [questions, setQuestions] = useState([]); // เก็บรายการคำถาม
	const [answers, setAnswers] = useState([]);
	const [isQuestionActive, setIsQuestionActive] = useState(false);
	const [showQuestionsPopup, setShowQuestionsPopup] = useState(false); // สถานะแสดง Popup คำถาม
	const [isQuestionCreated, setIsQuestionCreated] = useState(false); // สถานะตรวจสอบว่ามีการสร้างคำถามแล้วหรือไม่
	const { classroomId } = useParams();

	// Mock checkInId (cno) ชั่วคราว
	const checkInId = "1"; // กำหนดค่า cno เป็น "1" ชั่วคราว

	useEffect(() => {
		const answersRef = ref(
			database,
			`classroom/${classroomId}/checkin/${checkInId}/answers`
		);
		onValue(answersRef, (snapshot) => {
			const data = snapshot.val();
			if (data) {
				const answerList = Object.keys(data).map((key) => ({
					id: key,
					...data[key],
				}));
				setAnswers(answerList);
			} else {
				setAnswers([]);
			}
		});

		return () => off(answersRef);
	}, [classroomId]);

	// เพิ่มคำถามใหม่
	const addQuestion = (type) => {
		const newQuestion = {
			id: questions.length + 1,
			type: type, // 'text' หรือ 'choice'
			questionNo: "",
			questionText: "",
			choices: type === "choice" ? ["", ""] : [], // ถ้าเป็น choice ให้มีตัวเลือก 2 ตัวเริ่มต้น
			isEditing: true, // เพิ่มสถานะการแก้ไข
		};
		setQuestions([...questions, newQuestion]);
		setIsQuestionCreated(true); // ตั้งค่าเป็น true เมื่อสร้างคำถาม
	};

	// อัพเดทคำถาม
	const updateQuestion = (id, field, value) => {
		const updatedQuestions = questions.map((q) =>
			q.id === id ? { ...q, [field]: value } : q
		);
		setQuestions(updatedQuestions);
	};

	// เพิ่มตัวเลือกในคำถามแบบ choice
	const addChoice = (questionId) => {
		const updatedQuestions = questions.map((q) =>
			q.id === questionId ? { ...q, choices: [...q.choices, ""] } : q
		);
		setQuestions(updatedQuestions);
	};

	// ยกเลิกการสร้างคำถาม
	const cancelQuestion = (questionId) => {
		const updatedQuestions = questions.filter((q) => q.id !== questionId);
		setQuestions(updatedQuestions);

		// เซ็ต question_show เป็น false ใน Firestore
		const questionRef = ref(
			database,
			`classroom/${classroomId}/checkin/${checkInId}`
		);
		set(questionRef, {
			question_show: false,
		})
			.then(() => {
				setIsQuestionActive(false);
			})
			.catch((error) => {
				console.error("เกิดข้อผิดพลาด: ", error);
			});
        
       
	};

	// เริ่มถามคำถามทั้งหมด
	
	const startQuestions = () => {
		if (questions.length === 0) {
			alert("กรุณาเพิ่มคำถามก่อน");
			return;
		}

		const questionRef = ref(
			database,
			`classroom/${classroomId}/checkin/${checkInId}`
		);
		const questionsData = questions.reduce((acc, q) => {
			acc[q.id] = {
				question_no: q.questionNo,
				question_text: q.questionText,
				type: q.type,
				choices: q.type === "choice" ? q.choices : null,
			};
			return acc;
		}, {});

		set(questionRef, {
			questions: questionsData,
			question_show: true,
		})
			.then(() => {
				setIsQuestionActive(true);
				setShowQuestionsPopup(true); // แสดง Popup คำถาม
				alert("เริ่มถามคำถามเรียบร้อย");
			})
			.catch((error) => {
				console.error("เกิดข้อผิดพลาด: ", error);
			});
	};

	// ปิดคำถาม
	const endQuestion = () => {
		const questionRef = ref(
			database,
			`classroom/${classroomId}/checkin/${checkInId}`
		);
		set(questionRef, {
			question_show: false,
		})
			.then(() => {
				setIsQuestionActive(false);
				alert("ปิดคำถามเรียบร้อย");
			})
			.catch((error) => {
				console.error("เกิดข้อผิดพลาด: ", error);
			});
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Back Button */}
				<button
					onClick={() => navigate(-1)}
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
					<span className="font-medium">กลับสู่หน้าเช็คชื่อ</span>
				</button>

				{/* Header Section */}
				<div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 rounded-2xl shadow-lg mb-8">
					<div className="relative z-10 p-8">
						<h1 className="text-4xl font-bold text-white mb-2">
							ถาม-ตอบในห้องเรียน
						</h1>
						<p className="text-white/90">
							สร้างคำถามและดูคำตอบจากนักเรียนแบบเรียลไทม์
						</p>
					</div>
					<div className="absolute top-0 right-0 -mt-20 -mr-20">
						<div className="w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
					</div>
				</div>

				{/* Question Form Section */}
				<div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8 border border-gray-100">
					<div className="bg-gradient-to-r from-purple-500 to-blue-500 p-8">
						<h2 className="text-3xl font-bold text-white">ตั้งคำถาม</h2>
					</div>
					<div className="p-8 space-y-8">
						{/* ปุ่มเพิ่มคำถาม */}
						<div className="flex gap-4">
							<button
								onClick={() => addQuestion("text")}
								className="flex-1 px-6 py-4 bg-gradient-to-r from-emerald-400 to-green-500 text-white rounded-2xl font-medium shadow-lg hover:from-emerald-500 hover:to-green-600 transition-all duration-300 transform hover:-translate-y-1"
							>
								✏️ เพิ่มคำถามแบบข้อความ
							</button>
							<button
								onClick={() => addQuestion("choice")}
								className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-2xl font-medium shadow-lg hover:from-blue-500 hover:to-indigo-600 transition-all duration-300 transform hover:-translate-y-1"
							>
								🎯 เพิ่มคำถามแบบตัวเลือก
							</button>
						</div>

						{/* รายการคำถาม */}
						{questions.map((q) => (
							<div
								key={q.id}
								className="space-y-6 bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-purple-200 transition-all duration-300"
							>
								<div className="flex justify-between items-center">
									<div className="flex items-center gap-3">
										<span className="w-10 h-10 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full font-bold">
											{q.id}
										</span>
										<h3 className="text-xl font-bold text-gray-800">
											คำถาม {q.type === "text" ? "ข้อความ" : "ตัวเลือก"}
										</h3>
									</div>
									<button
										onClick={() => cancelQuestion(q.id)}
										className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition duration-300 transform hover:-translate-y-1 shadow-lg shadow-red-500/20"
									>
										ยกเลิก
									</button>
								</div>
								<div className="space-y-3">
									<label className="block text-sm font-semibold text-gray-700">
										ข้อที่
									</label>
									<input
										type="text"
										value={q.questionNo}
										onChange={(e) =>
											updateQuestion(q.id, "questionNo", e.target.value)
										}
										placeholder="กรอกข้อที่ของคำถาม"
										className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 hover:border-purple-300"
									/>
								</div>
								<div className="space-y-3">
									<label className="block text-sm font-semibold text-gray-700">
										คำถาม
									</label>
									<textarea
										value={q.questionText}
										onChange={(e) =>
											updateQuestion(q.id, "questionText", e.target.value)
										}
										placeholder="พิมพ์คำถามที่ต้องการถาม..."
										rows="4"
										className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 hover:border-purple-300"
									/>
								</div>
								{q.type === "choice" && (
									<div className="space-y-4">
										<label className="block text-sm font-semibold text-gray-700">
											ตัวเลือก
										</label>
										{q.choices.map((choice, index) => (
											<div key={index} className="flex gap-3">
												<input
													type="text"
													value={choice}
													onChange={(e) => {
														const updatedChoices = [...q.choices];
														updatedChoices[index] = e.target.value;
														updateQuestion(q.id, "choices", updatedChoices);
													}}
													placeholder={`ตัวเลือก ${index + 1}`}
													className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 hover:border-purple-300"
												/>
												{index >= 2 && (
													<button
														onClick={() => {
															const updatedChoices = q.choices.filter(
																(_, i) => i !== index
															);
															updateQuestion(q.id, "choices", updatedChoices);
														}}
														className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition duration-300 transform hover:-translate-y-1 shadow-lg shadow-red-500/20"
													>
														ลบ
													</button>
												)}
											</div>
										))}
										<button
											onClick={() => addChoice(q.id)}
											className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition duration-300 transform hover:-translate-y-1 shadow-md"
										>
											➕ เพิ่มตัวเลือก
										</button>
									</div>
								)}
							</div>
						))}

						{/* ปุ่มเริ่มถามและปิดคำถาม */}
						{isQuestionCreated && (
							<div className="flex gap-4">
								<button
									onClick={startQuestions}
									disabled={isQuestionActive}
									className={`flex-1 px-6 py-4 rounded-2xl font-medium shadow-lg transition-all duration-300 transform hover:-translate-y-1
        ${
					isQuestionActive
						? "bg-gray-300 cursor-not-allowed"
						: "bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-blue-500/20 hover:from-blue-500 hover:to-blue-700"
				}`}
								>
									🚀 เริ่มถามคำถามทั้งหมด
								</button>
								<button
									onClick={endQuestion}
									disabled={!isQuestionActive}
									className={`flex-1 px-6 py-4 rounded-2xl font-medium shadow-lg transition-all duration-300 transform hover:-translate-y-1
        ${
					!isQuestionActive
						? "bg-gray-300 cursor-not-allowed"
						: "bg-gradient-to-r from-red-400 to-red-600 text-white shadow-red-500/20 hover:from-red-500 hover:to-red-700"
				}`}
								>
									🛑 ปิดคำถาม
								</button>
								<button
									onClick={() => setShowQuestionsPopup(true)}
									className="flex-1 px-6 py-4 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-2xl font-medium shadow-lg hover:from-purple-500 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 shadow-purple-500/20"
								>
									👁️ แสดงคำถาม
								</button>
							</div>
						)}
					</div>
				</div>

				{/* Answers Section */}
				<div className="bg-white rounded-2xl shadow-lg overflow-hidden">
					<div className="p-6 border-b border-gray-100">
						<h2 className="text-2xl font-bold text-gray-800">
							คำตอบจากนักเรียน
						</h2>
					</div>
					<div className="p-6">
						{answers.length > 0 ? (
							<div className="grid gap-4">
								{answers.map((answer) => (
									<div
										key={answer.id}
										className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-purple-200 transition duration-200"
									>
										<p className="text-gray-800 text-lg mb-2">{answer.text}</p>
										<div className="flex items-center text-sm text-gray-500">
											<svg
												className="w-4 h-4 mr-1"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
												/>
											</svg>
											{answer.time}
										</div>
									</div>
								))}
							</div>
						) : (
							<div className="text-center py-12">
								<p className="text-gray-500 text-lg">
									ยังไม่มีคำตอบจากนักเรียน
								</p>
								{isQuestionActive && (
									<p className="text-gray-400 mt-2">รอคำตอบจากนักเรียน...</p>
								)}
							</div>
						)}
					</div>
				</div>

				{/* Popup แสดงคำถามที่ถามไป */}
				{showQuestionsPopup && (
					<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 popup-ques">
						<div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl p-6 space-y-6">
							<h2 className="text-2xl font-bold text-gray-800">
								คำถามที่ถามไป
							</h2>
							<div className="space-y-4">
								{questions.map((q) => (
									<div
										key={q.id}
										className="bg-gray-50 p-8 rounded-xl space-y-6"
									>
										<h3 className="text-2xl font-bold text-gray-900">
											คำถาม {q.id} ({q.type === "text" ? "ข้อความ" : "ตัวเลือก"}
											)
										</h3>
										<p className="text-2xl text-gray-800 leading-relaxed">
											{q.questionText}
										</p>
										{q.type === "choice" && (
											<ol className="list-decimal  space-y-3">
												{q.choices.map((choice, index) => (
													<li key={index} className="text-xl text-gray-700">
														{choice}
													</li>
												))}
											</ol>
										)}
									</div>
								))}
							</div>
							<button
								onClick={() => setShowQuestionsPopup(false)}
								className="px-6 py-3 bg-blue-500 text-white rounded-xl font-medium shadow-lg hover:bg-blue-600 transition duration-200"
							>
								ปิด
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Question;
