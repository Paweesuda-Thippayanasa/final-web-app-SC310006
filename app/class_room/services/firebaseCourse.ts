import { ref, set } from "firebase/database"; // Import Realtime Database methods
import { auth, dbRealtime } from "./firebase"; // Make sure to import the Realtime Database instance

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
            status: 2, // Set status as '2' for enrolled (you can adjust this status if needed)
        });

        console.log("Student successfully registered to the course!");

    } catch (error) {
        console.error("Error adding student to course: ", error);
        // Optionally, you can alert the user or show a UI message based on the error
        throw new Error("Failed to register the student. Please try again.");
    }
}
