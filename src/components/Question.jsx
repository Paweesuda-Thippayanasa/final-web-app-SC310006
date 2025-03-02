import React, { useState, useEffect } from "react";
import { getDatabase, ref, set, onValue, off, update, push, get, remove } from "firebase/database";
import { useParams, useNavigate } from "react-router-dom";
import "../css/ques.css";

const Question = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]); // เก็บรายการคำถาม
  const [answers, setAnswers] = useState([]); // เก็บคำตอบ
  const [activeQuestionNo, setActiveQuestionNo] = useState(""); // คำถามที่กำลังถาม
  const [isQuestionActive, setIsQuestionActive] = useState(false);
  const [showQuestionsPopup, setShowQuestionsPopup] = useState(false); // สถานะแสดง Popup คำถาม
  const [isQuestionCreated, setIsQuestionCreated] = useState(false); // สถานะตรวจสอบว่ามีการสร้างคำถามแล้วหรือไม่
  const { classroomId, checkinId } = useParams();
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState({}); // เก็บข้อมูลนักเรียนในห้องเรียน

  // ดึงข้อมูลนักเรียนในห้องเรียนเพื่อใช้แสดงชื่อในคำตอบ
  useEffect(() => {
    const fetchStudentsData = async () => {
      try {
        const db = getDatabase();
        const studentsRef = ref(db, `classroom/${classroomId}/students`);
        
        onValue(studentsRef, (snapshot) => {
          if (snapshot.exists()) {
            setStudents(snapshot.val());
          }
        });
      } catch (error) {
        console.error("Error fetching students data:", error);
      }
    };
    
    fetchStudentsData();
    
    return () => {
      const db = getDatabase();
      const studentsRef = ref(db, `classroom/${classroomId}/students`);
      off(studentsRef);
    };
  }, [classroomId]);

  // ดึงข้อมูลคำถามและคำตอบจาก Firebase เมื่อโหลดหน้า
  useEffect(() => {
    const fetchQuestionData = async () => {
      try {
        const db = getDatabase();
        
        // ตรวจสอบสถานะคำถาม (question_show)
        const questionStatusRef = ref(db, `classroom/${classroomId}/checkin/${checkinId}/question_show`);
        onValue(questionStatusRef, (snapshot) => {
          if (snapshot.exists()) {
            setIsQuestionActive(snapshot.val());
          } else {
            setIsQuestionActive(false);
          }
        });

        // ดึงข้อมูลคำถาม
        const questionsRef = ref(db, `classroom/${classroomId}/checkin/${checkinId}/questions`);
        onValue(questionsRef, (snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            // ตรวจสอบว่า data เป็น array และมีค่าที่ไม่ใช่ null
            if (Array.isArray(data) && data.some(item => item !== null)) {
              const questionsList = data
                .filter(item => item !== null) // กรองค่า null ออก
                .map((value, index) => ({
                  id: index,
                  questionNo: value.question_no || "",
                  questionText: value.question_text || "",
                  type: value.type || "text",
                  choices: value.choices || [],
                  isEditing: false,
                }));
              
              setQuestions(questionsList);
              setIsQuestionCreated(true);
              
              // ถ้ามีคำถามอยู่แล้ว และกำลังแสดงคำถาม
              if (questionsList.length > 0 && isQuestionActive) {
                // ดึงคำถามล่าสุด
                const latestQuestion = questionsList[questionsList.length - 1];
                setActiveQuestionNo(latestQuestion.questionNo);
              }
            } else if (!Array.isArray(data)) {
              // ถ้าไม่ใช่ array ให้แปลงเป็น array
              const questionsList = Object.entries(data)
                .filter(([_, value]) => value !== null)
                .map(([key, value]) => ({
                  id: parseInt(key),
                  questionNo: value.question_no || "",
                  questionText: value.question_text || "",
                  type: value.type || "text",
                  choices: value.choices || [],
                  isEditing: false,
                }));
              
              setQuestions(questionsList);
              setIsQuestionCreated(true);
              
              if (questionsList.length > 0 && isQuestionActive) {
                const latestQuestion = questionsList[questionsList.length - 1];
                setActiveQuestionNo(latestQuestion.questionNo);
              }
            } else {
              setQuestions([]);
            }
          } else {
            setQuestions([]);
          }
          setLoading(false);
        });
        
        // ดึงข้อมูลคำตอบ เมื่อ activeQuestionNo มีค่า
        if (activeQuestionNo) {
          // แก้ไขโครงสร้างการอ่านข้อมูลคำตอบ
          const answersRef = ref(db, `classroom/${classroomId}/checkin/${checkinId}/answers/${activeQuestionNo}`);
          onValue(answersRef, (snapshot) => {
            if (snapshot.exists()) {
              const data = snapshot.val();
              const answersList = [];
              
              // วนลูปเพื่อดึงข้อมูลคำตอบของแต่ละนักเรียน
              // โครงสร้างใหม่ตาม JSON ที่ให้มา จะเป็น { studentId: { text, timestamp } }
              for (const studentId in data) {
                const answerData = data[studentId];
                
                // ข้ามถ้าไม่ใช่ object (เช่น text, timestamp)
                if (typeof answerData !== 'object' || answerData === null) continue;
                
                // หาข้อมูลนักเรียนจาก students object
                let studentName = "";
                
                // ค้นหาข้อมูลนักเรียนจาก key หรือ stdid
                for (const uid in students) {
                  if (uid === studentId || students[uid].stdid === studentId) {
                    studentName = students[uid].name;
                    break;
                  }
                }
                
                // ถ้าไม่พบชื่อจาก students ให้ใช้ชื่อจาก checkin/students ถ้ามี
                if (!studentName) {
                  const checkInStudentsRef = ref(db, `classroom/${classroomId}/checkin/${checkinId}/students`);
                  get(checkInStudentsRef).then((studentSnapshot) => {
                    if (studentSnapshot.exists()) {
                      const checkInStudents = studentSnapshot.val();
                      for (const uid in checkInStudents) {
                        if (uid === studentId || checkInStudents[uid].stdid === studentId) {
                          studentName = checkInStudents[uid].name;
                          break;
                        }
                      }
                    }
                  });
                }
                
                // สร้าง object เก็บคำตอบและข้อมูลนักเรียน
                answersList.push({
                  id: studentId,
                  text: answerData.text || "",
                  time: answerData.timestamp ? new Date(answerData.timestamp).toLocaleString("th-TH") : new Date().toLocaleString("th-TH"),
                  studentId: studentId,
                  studentName: studentName || `นักเรียน (${studentId})`,
                });
              }
              
              setAnswers(answersList);
            } else {
              setAnswers([]);
            }
          });
        }
      } catch (error) {
        console.error("Error fetching question data:", error);
        setLoading(false);
      }
    };

    fetchQuestionData();
    
    // Clean up
    return () => {
      const db = getDatabase();
      const questionStatusRef = ref(db, `classroom/${classroomId}/checkin/${checkinId}/question_show`);
      const questionsRef = ref(db, `classroom/${classroomId}/checkin/${checkinId}/questions`);
      
      if (activeQuestionNo) {
        const answersRef = ref(db, `classroom/${classroomId}/checkin/${checkinId}/answers/${activeQuestionNo}`);
        off(answersRef);
      }
      
      off(questionStatusRef);
      off(questionsRef);
    };
  }, [classroomId, checkinId, activeQuestionNo, isQuestionActive, students]);

  // เพิ่มคำถาม
  const addQuestion = (type) => {
    const newQuestion = {
      id: questions.length + 1,
      type: type,
      questionNo: "",
      questionText: "",
      choices: type === "choice" ? ["", ""] : [],
      isEditing: true,
    };
    setQuestions([...questions, newQuestion]);
    setIsQuestionCreated(true);
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

    if (updatedQuestions.length === 0) {
      setIsQuestionCreated(false);
    }
  };

  // เริ่มถามคำถาม
  const startQuestions = async () => {
    if (questions.length === 0) {
      alert("กรุณาเพิ่มคำถามก่อน");
      return;
    }

    try {
      const db = getDatabase();
      
      // บันทึกข้อมูลคำถาม
      const questionsRef = ref(db, `classroom/${classroomId}/checkin/${checkinId}/questions`);
      const questionsData = {};
      
      questions.forEach((q) => {
        questionsData[q.id] = {
          question_no: q.questionNo,
          question_text: q.questionText,
          type: q.type,
          choices: q.type === "choice" ? q.choices : null,
        };
      });
      
      // บันทึกคำถามลงใน Firebase
      await set(questionsRef, questionsData);
      
      // กำหนดค่า question_no และ question_text ของคำถามล่าสุด
      const latestQuestion = questions[questions.length - 1];
      await update(ref(db, `classroom/${classroomId}/checkin/${checkinId}`), {
        question_no: latestQuestion.questionNo,
        question_text: latestQuestion.questionText,
        question_show: true
      });
      
      // เตรียมพื้นที่สำหรับเก็บคำตอบ - ปรับโครงสร้างตาม JSON ใหม่
      const answerRef = ref(db, `classroom/${classroomId}/checkin/${checkinId}/answers/${latestQuestion.questionNo}`);
      await set(answerRef, {});
      
      setIsQuestionActive(true);
      setActiveQuestionNo(latestQuestion.questionNo);
      setShowQuestionsPopup(true);
      alert("เริ่มถามคำถามเรียบร้อย");
    } catch (error) {
      console.error("Error starting questions:", error);
      alert("เกิดข้อผิดพลาดในการเริ่มคำถาม");
    }
  };

  // ปิดคำถาม
  const endQuestion = async () => {
    try {
      const db = getDatabase();
      await update(ref(db, `classroom/${classroomId}/checkin/${checkinId}`), {
        question_show: false
      });
      
      setIsQuestionActive(false);
      alert("ปิดคำถามเรียบร้อย");
    } catch (error) {
      console.error("Error ending question:", error);
      alert("เกิดข้อผิดพลาดในการปิดคำถาม");
    }
  };

  // จบคำถามทั้งหมดสำหรับคลาสครั้งนี้
  const endAllQuestions = async () => {
    if (window.confirm("คุณต้องการจบคำถามทั้งหมดสำหรับคลาสครั้งนี้ใช่หรือไม่? ข้อมูลคำถามและคำตอบทั้งหมดจะถูกลบ")) {
      try {
        const db = getDatabase();
        
        // อัปเดตสถานะคำถามเป็นปิด และล้างค่าต่างๆ
        await update(ref(db, `classroom/${classroomId}/checkin/${checkinId}`), {
          question_show: false,
          question_no: "",
          question_text: ""
        });
        
        // ลบข้อมูลคำถามและคำตอบทั้งหมด
        await remove(ref(db, `classroom/${classroomId}/checkin/${checkinId}/questions`));
        await remove(ref(db, `classroom/${classroomId}/checkin/${checkinId}/answers`));
        
        // รีเซ็ตสถานะในคอมโพเนนต์
        setIsQuestionActive(false);
        setActiveQuestionNo("");
        setQuestions([]);
        setAnswers([]);
        setIsQuestionCreated(false);
        
        alert("จบคำถามทั้งหมดเรียบร้อย ข้อมูลคำถามและคำตอบทั้งหมดถูกลบแล้ว");
        
        // นำกลับไปยังหน้าเช็คชื่อ
        navigate(`/checkin/${classroomId}/${checkinId}`);
      } catch (error) {
        console.error("Error ending all questions:", error);
        alert("เกิดข้อผิดพลาดในการจบคำถามทั้งหมด");
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 flex items-center justify-center">
        <div className="p-8 bg-white rounded-xl shadow-xl">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium text-center">
            กำลังโหลดข้อมูล
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button และปุ่มจบคำถามทั้งหมด */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-white transition duration-200"
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
          
          <button
            onClick={endAllQuestions}
            className="px-6 py-3 bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-xl font-medium shadow-lg shadow-red-500/20 hover:from-red-600 hover:to-rose-700 transition duration-200 transform hover:scale-105"
          >
            🚫 จบคำถามทั้งหมดสำหรับคลาสนี้
          </button>
        </div>

        {/* Header Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 rounded-2xl shadow-lg mb-8">
          <div className="relative z-10 p-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              ถาม-ตอบในห้องเรียน
            </h1>
            <p className="text-white/90">
              สร้างคำถามและดูคำตอบจากนักเรียนแบบเรียลไทม์
            </p>
            {isQuestionActive && (
              <div className="mt-4 px-4 py-2 bg-white/20 rounded-xl backdrop-blur-sm inline-block">
                <p className="text-white">
                  สถานะ: <span className="font-semibold">กำลังถามคำถาม</span>
                </p>
                {activeQuestionNo && (
                  <p className="text-white">คำถามที่กำลังถาม: {activeQuestionNo}</p>
                )}
              </div>
            )}
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
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">
              คำตอบจากนักเรียน
            </h2>
            {activeQuestionNo && (
              <div className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-xl">
                กำลังแสดงคำตอบจากคำถามข้อที่: {activeQuestionNo}
              </div>
            )}
          </div>
          <div className="p-6">
            {answers.length > 0 ? (
              <div className="grid gap-4">
                {answers.map((answer) => (
                  <div
                    key={answer.id}
                    className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-purple-200 transition duration-200"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold mr-3">
                          {answer.studentName ? answer.studentName.charAt(0) : "?"}
                        </div>
                        <p className="text-gray-800 text-lg font-medium">{answer.studentName}</p>
                      </div>
                      <span className="text-sm text-gray-500">{answer.time}</span>
                    </div>
                    <div className="mt-2 pt-2 border-t border-gray-100">
                      <p className="text-gray-800 text-lg">{answer.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) :  (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  ยังไม่มีคำตอบจากนักเรียน
                </p>
                {isQuestionActive && activeQuestionNo && (
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
                      คำถาม  ({q.type === "text" ? "ข้อความ" : "ตัวเลือก"}
                      )
                    </h3>
                    <p className="text-2xl text-gray-800 leading-relaxed">
                      {q.questionText}
                    </p>
                    {q.type === "choice" && (
                      <ol className="list-decimal space-y-3">
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
