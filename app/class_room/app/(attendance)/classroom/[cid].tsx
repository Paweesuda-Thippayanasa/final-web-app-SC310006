import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
  ScrollView,
  StatusBar,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth } from "firebase/auth";
import { ArrowLeft, ArrowRight, QrCode, CheckCircle } from "lucide-react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { 
  checkIfUserIsCheckedIn, 
  submitCheckIn, 
  fetchCourseDetails,
  setupQuestionListener as setupListener,
  submitAnswer,
  fetchUserAnswer
} from "../../../services/firebaseCourse";

const ClassroomDetail = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  // แปลงค่า cid ให้เป็น string เสมอ
  const cid = typeof params.cid === 'string' ? params.cid : Array.isArray(params.cid) ? params.cid[0] : '';
  
  const [course, setCourse] = useState<any>(null);
  const [ownerName, setOwnerName] = useState<string>("");
  const [loading, setLoading] = useState(true);

  // Check-in related states
  const [showCheckInModal, setShowCheckInModal] = useState(false);
  const [cnoInput, setCnoInput] = useState("");
  const [codeInput, setCodeInput] = useState("");
  const [checkedIn, setCheckedIn] = useState(false);
  const [currentCno, setCurrentCno] = useState("");
  const [activeCheckInId, setActiveCheckInId] = useState(""); // Store current active check-in ID

  // QR code scanning states
  const [scanning, setScanning] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();
  const [hasPermission, setHasPermission] = useState(false);

  // Question related states
  const [showQuestion, setShowQuestion] = useState(false);
  const [questions, setQuestions] = useState<any[]>([]); // Store all questions
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track current question
  const [questionAnswer, setQuestionAnswer] = useState("");
  const [answerSubmitted, setAnswerSubmitted] = useState<{ [key: string]: boolean }>({}); // Track answers for each question

  const auth = getAuth();
  const currentUser = auth.currentUser;

  // ตั้งค่า Listener สำหรับคำถาม
  const setupQuestionListener = (checkInId: string) => {
    return setupListener(cid, checkInId, (data) => {
      const isQuestionActive = data.question_show === true;
      
      // Only show questions if user is checked in
      setShowQuestion(isQuestionActive && checkedIn);

      if (isQuestionActive && data.questions) {
        const questionsData = Object.values(data.questions) as any[];
        setQuestions(questionsData);
        setCurrentQuestionIndex(0); // Reset to first question
        setAnswerSubmitted({}); // Reset submitted answers
        
        // Pre-fetch the answer for the first question if available
        if (questionsData.length > 0 && currentUser) {
          fetchUserAnswer(cid, checkInId, questionsData[0].question_no)
            .then(({ answer, submitted }) => {
              if (submitted) {
                setQuestionAnswer(answer);
                setAnswerSubmitted(prev => ({ ...prev, [questionsData[0].question_no]: true }));
              } else {
                setQuestionAnswer("");
              }
            })
            .catch(error => console.error("Error fetching answer:", error));
        }
      }
    });
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        // ตรวจสอบว่ามีค่า cid หรือไม่
        if (!cid) {
          Alert.alert("Error", "No classroom ID provided");
          router.back();
          return;
        }

        // ดึงข้อมูลรายวิชา
        const { course: courseData, ownerName: ownerNameData } = await fetchCourseDetails(cid);
        setCourse(courseData);
        setOwnerName(ownerNameData || "Unknown Owner");

        // ตรวจสอบสถานะการเช็คอิน
        const { isCheckedIn, checkInId } = await checkIfUserIsCheckedIn(cid);
        setCheckedIn(isCheckedIn);
        
        if (checkInId) {
          setCurrentCno(checkInId);
          setActiveCheckInId(checkInId);
          // ตั้งค่า listener หลังจากรู้ค่า checkInId แล้ว
          setupQuestionListener(checkInId);
        } else {
          // ใช้ค่า default ถ้าไม่มี checkInId
          setupQuestionListener("-OKLa1zNGxELcL8mMdxS");
        }
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();

    // Setup camera permissions
    (async () => {
      const { status } = await requestPermission();
      setHasPermission(status === "granted");
    })();

    // Clean up listener when component unmounts
    return () => {
      // Note: You should ideally store the unsubscribe function in state 
      // and call it here for cleanup
    };
  }, [cid, router]);

  // Re-setup question listener when check-in status changes
  useEffect(() => {
    if (checkedIn && activeCheckInId) {
      setupQuestionListener(activeCheckInId);
    }
  }, [checkedIn, activeCheckInId]);

  // Fetch question details for a specific question
  const fetchQuestionDetails = async (questionNumber: string) => {
    const question = questions.find(q => q.question_no === questionNumber);
    if (!question) {
      console.error("Question not found:", questionNumber);
      return;
    }
    
    setQuestionAnswer("");
    setAnswerSubmitted(prev => ({ ...prev, [questionNumber]: false }));

    if (currentUser && currentCno) {
      try {
        const { answer, submitted } = await fetchUserAnswer(cid, currentCno, questionNumber);
        if (submitted) {
          setQuestionAnswer(answer);
          setAnswerSubmitted(prev => ({ ...prev, [questionNumber]: true }));
        }
      } catch (error) {
        console.error("Error fetching answer:", error);
      }
    }
  };

  // Handle answer submission for a specific question
  const handleAnswerSubmit = async (questionNumber: string) => {
    if (!questionAnswer.trim()) {
      Alert.alert("Error", "Please enter your answer");
      return;
    }

    try {
      const result = await submitAnswer(cid, currentCno, questionNumber, questionAnswer);
      if (result.success) {
        setAnswerSubmitted(prev => ({ ...prev, [questionNumber]: true }));
        Alert.alert("Success", "Answer submitted successfully!");
      }
    } catch (error) {
      console.error("Error submitting answer:", error);
      Alert.alert("Error", "Failed to submit answer. Please try again.");
    }
  };

  // Handle check-in submission with stdid from classroom data
  const handleCheckIn = async () => {
    if (!cnoInput || !codeInput) {
      Alert.alert("Error", "Please enter both CNO and code");
      return;
    }

    try {
      const result = await submitCheckIn(cid, cnoInput, codeInput);

      // Set state for checked in
      setCurrentCno(result.checkInId);
      setCheckedIn(true);
      setActiveCheckInId(result.checkInId);
      
      // Setup question listener with new check-in ID
      setupQuestionListener(result.checkInId);

      // แสดงข้อความแจ้งเตือน
      if (result.foundStudent) {
        Alert.alert("Success", "You have checked in successfully!");
      } else {
        Alert.alert("Success", "You have checked in successfully with default student ID. Please update your profile in the classroom.");
      }

      setShowCheckInModal(false);
    } catch (error: any) {
      console.error("Error checking in:", error);
      Alert.alert("Error", error.message || "Failed to check in. Please try again.");
    }
  };

  // Handler for scanning QR codes
  const handleBarCodeScanned = ({ data }: { data: string }) => {
    try {
      // Parse the QR code data
      const scanData = JSON.parse(data);

      // Check if the QR code has the expected format
      if (scanData && scanData.classroomId && scanData.checkinId && scanData.code) {
        // Fill the form fields with the scanned data
        setCnoInput(scanData.checkinId);
        setCodeInput(scanData.code);

        // Exit scanning mode
        setScanning(false);
      } else {
        Alert.alert("Invalid QR Code", "The QR code does not contain the required check-in information.");
        setScanning(false);
      }
    } catch (error) {
      console.error("Error parsing QR code:", error);
      Alert.alert("Error", "Could not parse QR code data. Please try again.");
      setScanning(false);
    }
  };

  // Handler for starting QR code scanning
  const handleScanQR = () => {
    if (!permission?.granted) {
      Alert.alert("Camera Permission", "Please grant camera permission to scan QR codes");
      requestPermission();
      return;
    }
    setScanning(true);
  };

  // Navigate to next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      
      const nextQuestion = questions[nextIndex];
      if (nextQuestion) {
        fetchQuestionDetails(nextQuestion.question_no);
      }
    }
  };

  // Navigate to previous question
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      const prevIndex = currentQuestionIndex - 1;
      setCurrentQuestionIndex(prevIndex);
      
      const prevQuestion = questions[prevIndex];
      if (prevQuestion) {
        fetchQuestionDetails(prevQuestion.question_no);
      }
    }
  };

  // ตรวจสอบว่ามีการตอบคำถามหรือไม่
  const hasAnswer = () => {
    return questionAnswer.trim().length > 0;
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (!course) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Course not found.</Text>
      </View>
    );
  }

  const currentQuestion = questions[currentQuestionIndex] || {};

  // QR code scanning screen
  if (scanning) {
    return (
      <View style={styles.cameraContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#000000" />
        <CameraView
          style={StyleSheet.absoluteFillObject}
          facing="back"
          onBarcodeScanned={handleBarCodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ["qr"],
          }}
        >
          <View style={styles.scanOverlay}>
            <View style={styles.scanFrame}>
              <View style={[styles.cornerTL, styles.corner]} />
              <View style={[styles.cornerTR, styles.corner]} />
              <View style={[styles.cornerBL, styles.corner]} />
              <View style={[styles.cornerBR, styles.corner]} />
            </View>
            <Text style={styles.scanText}>กรุณาสแกน QR Code สำหรับเช็คชื่อ</Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => setScanning(false)}>
              <Text style={styles.closeButtonText}>ยกเลิก</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Course Image, Name, Code, Room, Owner (unchanged) */}
      <Image
        source={{ uri: course.info?.photo || "https://via.placeholder.com/400x200" }}
        style={styles.courseImage}
      />
      <Text style={styles.courseName}>{course.info?.name || "Unknown Course"}</Text>
      <Text style={styles.courseCode}>Code: {course.info?.code || "N/A"}</Text>
      <Text style={styles.courseRoom}>Room: {course.info?.room || "N/A"}</Text>
      <Text style={styles.courseOwner}>Owner: {ownerName}</Text>

      {/* Check-in Status Banner */}
      <View style={[
        styles.statusBanner,
        checkedIn ? styles.checkedInBanner : styles.notCheckedInBanner
      ]}>
        <View style={styles.statusIconContainer}>
          {checkedIn ? (
            <CheckCircle size={24} color="#FFFFFF" />
          ) : (
            <Text style={styles.statusIcon}>!</Text>
          )}
        </View>
        <Text style={styles.statusText}>
          {checkedIn 
            ? "You are checked in for this class" 
            : "You need to check in to access questions"}
        </Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity
          style={[
            styles.checkInButton,
            checkedIn && styles.checkedInButton
          ]}
          onPress={() => setShowCheckInModal(true)}
          disabled={checkedIn}
        >
          <Text style={styles.buttonText}>
            {checkedIn ? "Checked In" : "Check In"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Question Section - Now directly on the screen */}
      {showQuestion && checkedIn && questions.length > 0 && (
        <View style={styles.questionSection}>
          <View style={styles.questionHeader}>
            <TouchableOpacity 
              onPress={handlePrevQuestion} 
              disabled={currentQuestionIndex === 0}
              style={styles.navArrow}
            >
              <ArrowLeft size={24} color={currentQuestionIndex === 0 ? "#ccc" : "#000"} />
            </TouchableOpacity>
            
            <Text style={styles.questionTitle}>
              Question #{currentQuestion.question_no}
            </Text>
            
            <TouchableOpacity 
              onPress={handleNextQuestion} 
              disabled={currentQuestionIndex === questions.length - 1}
              style={styles.navArrow}
            >
              <ArrowRight size={24} color={currentQuestionIndex === questions.length - 1 ? "#ccc" : "#000"} />
            </TouchableOpacity>
          </View>

          {currentQuestion.question_text ? (
            <View style={styles.questionBox}>
              <Text style={styles.questionText}>{currentQuestion.question_text}</Text>
            </View>
          ) : (
            <ActivityIndicator size="small" color="#007AFF" />
          )}

          {/* Display choices if the question type is "choice" */}
          {currentQuestion.type === "choice" && currentQuestion.choices && (
            <View style={styles.choicesContainer}>
              {(Object.values(currentQuestion.choices) as string[]).map((choice: string, index: number) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.choiceButton,
                    questionAnswer === choice && styles.selectedChoiceButton
                  ]}
                  onPress={() => setQuestionAnswer(choice)}
                  disabled={answerSubmitted[currentQuestion.question_no]}
                >
                  <Text
                    style={[
                      styles.choiceText,
                      questionAnswer === choice && styles.selectedChoiceText
                    ]}
                  >
                    {choice}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* Display text input for non-choice questions */}
          {currentQuestion.type !== "choice" && (
            <TextInput
              style={[styles.input, styles.questionInput]}
              placeholder="Type your answer here..."
              value={questionAnswer}
              onChangeText={setQuestionAnswer}
              multiline
              editable={!answerSubmitted[currentQuestion.question_no]}
            />
          )}

          {answerSubmitted[currentQuestion.question_no] ? (
            <View style={styles.answeredContainer}>
              <Text style={styles.answeredText}>
                ✓ Your answer has been submitted!
              </Text>
            </View>
          ) : (
            <TouchableOpacity
              style={[
                styles.submitButton,
                !hasAnswer() && styles.disabledButton
              ]}
              onPress={() => handleAnswerSubmit(currentQuestion.question_no)}
              disabled={!hasAnswer()}
            >
              <Text style={styles.buttonText}>Submit Answer</Text>
            </TouchableOpacity>
          )}

          <View style={styles.questionCounter}>
            <Text style={styles.counterText}>
              Question {currentQuestionIndex + 1} of {questions.length}
            </Text>
          </View>
        </View>
      )}

      {/* Message when no active questions */}
      {checkedIn && (!showQuestion || questions.length === 0) && (
        <View style={styles.noQuestionsContainer}>
          <Text style={styles.noQuestionsText}>
            No active questions at this time
          </Text>
        </View>
      )}

      {/* Check-in Modal */}
      <Modal visible={showCheckInModal} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitleCheckIn}>Check In to Class</Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter CNO..."
                value={cnoInput}
                onChangeText={setCnoInput}
                keyboardType="default"
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter Code..."
                value={codeInput}
                onChangeText={setCodeInput}
                keyboardType="default"
              />
            </View>

            <TouchableOpacity
              style={styles.scanQRButton}
              onPress={handleScanQR}
              activeOpacity={0.7}
            >
              <QrCode size={20} color="#FFFFFF" />
              <Text style={styles.scanButtonText}>Scan QR Code</Text>
            </TouchableOpacity>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setShowCheckInModal(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.confirmButton]}
                onPress={handleCheckIn}
              >
                <Text style={styles.buttonText}>Check In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // หมวดหน้าจอหลัก
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8fafc",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "#ff0000",
    textAlign: "center",
    marginTop: 20,
  },

  // หมวดข้อมูลคลาสเรียน
  courseImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  courseName: {
    fontSize: 24,
    fontWeight: "600",
    color: "#1e3a8a",
    marginBottom: 8,
  },
  courseCode: {
    fontSize: 18,
    color: "#4b5563",
    marginBottom: 8,
  },
  courseRoom: {
    fontSize: 18,
    color: "#4b5563",
    marginBottom: 8,
  },
  courseOwner: {
    fontSize: 18,
    color: "#4b5563",
    marginBottom: 20,
  },
  
  // หมวดแบนเนอร์สถานะการเช็คชื่อ
  statusBanner: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
  },
  checkedInBanner: {
    backgroundColor: "#10b981", // สีเขียว
  },
  notCheckedInBanner: {
    backgroundColor: "#f59e0b", // สีส้ม
  },
  statusIconContainer: {
    width: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  statusIcon: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  statusText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    marginLeft: 8,
    flex: 1,
  },
  
  // หมวดปุ่มการทำงานหลัก
  actionButtonsContainer: {
    marginBottom: 16,
  },
  checkInButton: {
    backgroundColor: "#3b82f6", // สีน้ำเงิน
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  checkedInButton: {
    backgroundColor: "#10b981", // สีเขียว
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  
  // หมวดคำถามบนหน้าจอหลัก
  questionSection: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  questionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  questionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111827",
  },
  navArrow: {
    padding: 8,
  },
  questionCounter: {
    alignItems: "center",
    marginTop: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
  },
  counterText: {
    fontSize: 14,
    color: "#6b7280",
  },
  noQuestionsContainer: {
    backgroundColor: "#f3f4f6",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  noQuestionsText: {
    fontSize: 16,
    color: "#6b7280",
  },
  submitButton: {
    backgroundColor: "#3b82f6", // สีน้ำเงิน
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  disabledButton: {
    backgroundColor: "#9ca3af", // สีเทา
  },
  
  // หมวดช่องกรอกข้อมูล
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 12,
    marginBottom: 14,
    fontSize: 16,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 5,
  },
  scanQRButton: {
    backgroundColor: "#10b981", // สีเขียว
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  scanButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    marginLeft: 8,
  },
  questionInput: {
    height: 120,
    textAlignVertical: "top",
  },
  
  // หมวดโมดัล
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    width: "85%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTitleCheckIn: {
    fontSize: 20,
    marginBottom: 16,
    fontWeight: "600",
    textAlign: "center",
    color: "#111827",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  modalButton: {
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: "#6b7280", // สีเทาเข้ม
  },
  confirmButton: {
    backgroundColor: "#3b82f6", // สีน้ำเงิน
  },
  
  // หมวดคำถาม
  questionBox: {
    backgroundColor: "#f3f4f6",
    padding: 12,
    borderRadius: 8,
    marginBottom: 14,
  },
  questionText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#111827",
  },
  answeredContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  answeredText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#059669", // สีเขียว
  },
  choicesContainer: {
    marginVertical: 16,
  },
  choiceButton: {
    backgroundColor: "#e2e8f0", // สีฟ้าอ่อน
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    alignItems: "center",
  },
  selectedChoiceButton: {
    backgroundColor: "#3b82f6", // สีน้ำเงิน
  },
  choiceText: {
    fontSize: 16,
    color: "#1e293b",
  },
  selectedChoiceText: {
    color: "#ffffff",
    fontWeight: "600",
  },
  
  // หมวดกล้องและการสแกน
  cameraContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  scanOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  scanFrame: {
    width: 250,
    height: 250,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  corner: {
    position: "absolute",
    width: 30,
    height: 30,
    borderColor: "#ffffff",
    borderWidth: 4,
  },
  cornerTL: {
    top: 0,
    left: 0,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderTopLeftRadius: 16,
  },
  cornerTR: {
    top: 0,
    right: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderTopRightRadius: 16,
  },
  cornerBL: {
    bottom: 0,
    left: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomLeftRadius: 16,
  },
  cornerBR: {
    bottom: 0,
    right: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderBottomRightRadius: 16,
  },
  scanText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 30,
    textAlign: "center",
  },
  closeButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#6b7280", // สีเทาเข้ม
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    width: "50%",
  },
});

export default ClassroomDetail;