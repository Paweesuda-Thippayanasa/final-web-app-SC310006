// database.ts
import { ref, onValue, get, set } from "firebase/database";
import { auth, dbRealtime } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

/**
 * Add a student to a course in the classroom.
 * @param {string} cid - Classroom ID.
 * @param {string} stdid - Student ID.
 * @param {string} name - Student name.
 */
export async function addStudentToCourse(cid: string, stdid: string, name: string) {
    try {
        const user = auth.currentUser;
        
        // Ensure the user is authenticated
        if (!user) {
            throw new Error("User not authenticated. Please log in again.");
        }
        
        // Reference to store student data in Realtime Database
        const studentRef = ref(dbRealtime, `classroom/${cid}/students/${user.uid}`);
        await set(studentRef, {
            stdid: stdid,
            name: name,
        });
        
        // Reference to store classroom status for the user in Realtime Database
        const userClassRef = ref(dbRealtime, `users/${user.uid}/classroom/${cid}`);
        await set(userClassRef, {
            status: 2,
        });
        
        console.log("Student successfully registered to the course!");
    } catch (error) {
        console.error("Error adding student to course: ", error);
        // Optionally, you can alert the user or show a UI message based on the error
        throw new Error("Failed to register the student. Please try again.");
    }
}

/**
 * Check if user is already checked in to a classroom session
 * @param {string} cid - Classroom ID
 */
export async function checkIfUserIsCheckedIn(cid: string) {
    const user = auth.currentUser;
    if (!user) return { isCheckedIn: false };

    try {
        // ตรวจสอบว่าผู้ใช้เช็คอินในเซสชันใดๆ ไม่จำเป็นต้องมี question_show
        const checkInsRef = ref(dbRealtime, `classroom/${cid}/checkin`);
        const checkInsSnapshot = await get(checkInsRef);

        if (checkInsSnapshot.exists()) {
            let isUserCheckedIn = false;
            let activeCheckIn = "";
            let latestCheckIn = "";
            let latestTime = 0;

            // ตรวจสอบทุกเซสชันการเช็คอิน
            checkInsSnapshot.forEach((checkInSnapshot) => {
                const checkInData = checkInSnapshot.val();
                const checkInId = checkInSnapshot.key || "";
                
                // หาเซสชันที่ active (มี question_show)
                if (checkInData.question_show !== undefined) {
                    activeCheckIn = checkInId;
                }
                
                // ตรวจสอบว่าผู้ใช้เช็คอินในเซสชันนี้หรือไม่
                if (checkInData.students && checkInData.students[user.uid]) {
                    isUserCheckedIn = true;
                    
                    // หาเซสชันล่าสุดที่ผู้ใช้เช็คอิน (ใช้ในกรณีที่ไม่พบเซสชันที่ active)
                    const checkInTime = new Date(checkInData.students[user.uid].date || 0).getTime();
                    if (checkInTime > latestTime) {
                        latestTime = checkInTime;
                        latestCheckIn = checkInId;
                    }
                }
            });

            // ใช้เซสชัน active ถ้ามี หรือใช้เซสชันล่าสุดที่ผู้ใช้เช็คอิน
            const finalCheckInId = activeCheckIn || latestCheckIn;
            
            if (isUserCheckedIn && finalCheckInId) {
                return {
                    isCheckedIn: true,
                    checkInId: finalCheckInId
                };
            }
        }
        
        return { isCheckedIn: false };
    } catch (error) {
        console.error("Error checking if user is checked in:", error);
        return { isCheckedIn: false, error };
    }
}

/**
 * Submit a check-in to a class session
 * @param {string} cid - Classroom ID
 * @param {string} cnoInput - Check-in number
 * @param {string} codeInput - Check-in code
 */
export async function submitCheckIn(cid: string, cnoInput: string, codeInput: string) {
    const user = auth.currentUser;
    if (!user) {
        throw new Error("You must be logged in to check in");
    }

    // ตรวจสอบรหัสการเช็คอินจาก Realtime Database
    const checkInRef = ref(dbRealtime, `classroom/${cid}/checkin/${cnoInput}`);
    const checkInSnapshot = await get(checkInRef);

    if (!checkInSnapshot.exists() || checkInSnapshot.val().code !== codeInput) {
        throw new Error("Invalid CNO or code");
    }

    // ค้นหาข้อมูลรหัสนักศึกษาจากฐานข้อมูลคลาสเรียน
    const studentsRef = ref(dbRealtime, `classroom/${cid}/students`);
    const studentsSnapshot = await get(studentsRef);

    let studentId = "653380280-0"; // ค่าเริ่มต้นหากไม่พบข้อมูล
    let foundStudent = false;

    // ตรวจสอบว่ามีข้อมูลนักศึกษาในคลาสเรียนหรือไม่
    if (studentsSnapshot.exists()) {
        // วนลูปข้อมูลนักศึกษาทั้งหมดเพื่อหาข้อมูลที่ตรงกับ uid ของผู้ใช้ปัจจุบัน
        studentsSnapshot.forEach((childSnapshot) => {
            const studentData = childSnapshot.val();

            // ถ้าพบ uid ที่ตรงกัน ให้ใช้ stdid จากข้อมูลนั้น
            if (studentData.uid === user.uid) {
                studentId = studentData.stdid;
                foundStudent = true;
                return true; // หยุดการวนลูป
            }
            return false;
        });
    }

    const currentDate = new Date(new Date().getTime() + 7 * 60 * 60 * 1000).toISOString();
    const studentCheckInRef = ref(dbRealtime, `classroom/${cid}/checkin/${cnoInput}/students/${user.uid}`);

    // บันทึกข้อมูลเช็คอินพร้อมรหัสนักศึกษาที่ดึงมาได้
    await set(studentCheckInRef, {
        stdid: studentId,
        name: user.displayName || "Anonymous",
        date: currentDate,
    });

    return {
        success: true,
        foundStudent,
        checkInId: cnoInput
    };
}

/**
 * Fetch course details including owner information
 * @param {string} cid - Classroom ID
 */
export async function fetchCourseDetails(cid: string) {
    const courseRef = doc(db, `classroom/${cid}`);
    const courseSnapshot = await getDoc(courseRef);

    if (!courseSnapshot.exists()) {
        return { course: null };
    }

    const courseData = courseSnapshot.data();
    
    let ownerName = "Unknown Owner";
    const ownerId = courseData.owner;
    
    if (ownerId) {
        const ownerRef = doc(db, `users/${ownerId}`);
        const ownerSnapshot = await getDoc(ownerRef);

        if (ownerSnapshot.exists()) {
            const ownerData = ownerSnapshot.data();
            ownerName = ownerData.name || "Unknown Owner";
        }
    }
    
    return { course: courseData, ownerName };
}

/**
 * Set up real-time listener for questions in a check-in session
 * @param {string} cid - Classroom ID
 * @param {string} checkInId - Check-in session ID
 * @param {Function} callback - Callback function to handle data
 */
export function setupQuestionListener(cid: string, checkInId: string, callback: (data: any) => void) {
    // Use provided check-in ID or fallback
    let checkInToListen = checkInId || "-OKLa1zNGxELcL8mMdxS"; // Fallback ID
    
    const questionRef = ref(dbRealtime, `/classroom/${cid}/checkin/${checkInToListen}`);

    return onValue(questionRef, (snapshot) => {
        if (snapshot.exists()) {
            callback(snapshot.val());
        }
    }, (error) => {
        console.error("Error setting up question listener:", error);
    });
}

/**
 * Submit an answer to a question
 * @param {string} cid - Classroom ID
 * @param {string} checkInId - Check-in ID
 * @param {string} questionNumber - Question number
 * @param {string} answer - Answer text
 */
export async function submitAnswer(cid: string, checkInId: string, questionNumber: string, answer: string) {
    const user = auth.currentUser;
    if (!user) {
        throw new Error("User not authenticated");
    }
    
    if (!answer.trim()) {
        throw new Error("Please enter your answer");
    }
 
    try {
        // Find the student ID in the classroom
        const studentsRef = ref(dbRealtime, `classroom/${cid}/students`);
        const studentsSnapshot = await get(studentsRef);
        
        let studentId = user.uid; // Default to user UID
 
        if (studentsSnapshot.exists()) {
            studentsSnapshot.forEach((childSnapshot) => {
                const studentData = childSnapshot.val();
                
                // Find student with matching UID
                if (studentData.uid === user.uid) {
                    studentId = studentData.stdid || user.uid;
                    return true; // Stop iteration
                }
                return false;
            });
        }
 
        // Save to Realtime Database
        const answerRef = ref(dbRealtime, `classroom/${cid}/checkin/${checkInId}/answers/${questionNumber}/${studentId}`);
        
        await set(answerRef, {
            text: answer,
            timestamp: new Date(new Date().getTime() + 7 * 60 * 60 * 1000).toISOString(),

        });
        
        return { 
            success: true,
            studentId: studentId
        };
    } catch (error) {
        console.error("Error submitting answer:", error);
        throw new Error("Failed to submit answer. Please try again.");
    }
 }

/**
 * Fetch user's answer for a specific question
 * @param {string} cid - Classroom ID
 * @param {string} checkInId - Check-in ID
 * @param {string} questionNumber - Question number
 */
export async function fetchUserAnswer(cid: string, checkInId: string, questionNumber: string) {
    const user = auth.currentUser;
    if (!user) return { answer: "", submitted: false };

    try {
        // Find the student ID in the classroom
        const studentsRef = ref(dbRealtime, `classroom/${cid}/students`);
        const studentsSnapshot = await get(studentsRef);
        
        let studentId = user.uid; // Default to user UID

        if (studentsSnapshot.exists()) {
            studentsSnapshot.forEach((childSnapshot) => {
                const studentData = childSnapshot.val();
                
                // Find student with matching UID
                if (studentData.uid === user.uid) {
                    studentId = studentData.stdid || user.uid;
                    return true; // Stop iteration
                }
                return false;
            });
        }

        // Query for the answer using the found student ID
        const answerRef = ref(dbRealtime, `classroom/${cid}/checkin/${checkInId}/answers/${questionNumber}/${studentId}`);
        const answerSnapshot = await get(answerRef);
        
        if (answerSnapshot.exists()) {
            return {
                answer: answerSnapshot.val().text || "",
                submitted: true
            };
        }
        
        return { answer: "", submitted: false };
    } catch (error) {
        console.error("Error fetching user answer:", error);
        return { answer: "", submitted: false };
    }
}