
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    User,
    signInWithPhoneNumber,
    RecaptchaVerifier,
    ConfirmationResult,
    Auth
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from './firebase'; 



/**
 * Register a new user with Firebase Authentication.
 * @param {string} fullName - Full name of the user.
 * @param {string} email - User's email.
 * @param {string} password - User's password.
 * @returns {Promise<User | null>}
 */
export const registerUser = async (fullName: string, email: string, password: string): Promise<User | null> => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: fullName });

        // Store user in AsyncStorage
        await AsyncStorage.setItem("user", JSON.stringify(userCredential.user));

        return userCredential.user;
    } catch (error: any) {
        console.error("Register Error:", error.message);
        throw new Error(error.message);
    }
};

/**
 * Log in a user with Firebase Authentication.
 * @param {string} email - User's email.
 * @param {string} password - User's password.
 * @returns {Promise<User | null>}
 */
export const loginUser = async (email: string, password: string): Promise<User | null> => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        // Store user in AsyncStorage
        await AsyncStorage.setItem("user", JSON.stringify(userCredential.user));

        return userCredential.user;
    } catch (error: any) {
        console.error("Login Error:", error.message);
        throw new Error(error.message);
    }
};

/**
 * Log out the current user.
 * @returns {Promise<void>}
 */
export const logoutUser = async (): Promise<void> => {
    try {
        await signOut(auth);
        await AsyncStorage.removeItem("user");
    } catch (error: any) {
        console.error("Logout Error:", error.message);
        throw new Error(error.message);
    }
};

/**
 * Check if a user is already logged in.
 * @returns {Promise<User | null>}
 */
export const getCurrentUser = async (): Promise<User | null> => {
    const userJson = await AsyncStorage.getItem("user");
    return userJson ? JSON.parse(userJson) : null;
};

/**
import { auth } from "./firebase";
import { signInWithPhoneNumber, ConfirmationResult } from "firebase/auth";

/**
 * Send OTP for phone authentication.
 * @param {string} phoneNumber - User's phone number in international format.
 * @returns {Promise<ConfirmationResult>}
 */
export const sendOTP = async (auth: any, phoneNumber: string) => {
    try {
      // Directly use signInWithPhoneNumber without reCAPTCHA
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber);
      return confirmationResult;
    } catch (error: unknown) {
      if (error instanceof Error) {
        // Now TypeScript knows error is an instance of Error and has a message
        throw new Error(error.message);
      } else {
        // Handle unexpected error type (optional)
        throw new Error("An unknown error occurred during OTP sending.");
      }
    }
  };

/**
 * Verify OTP and complete phone authentication.
 * @param {ConfirmationResult} confirmationResult - Firebase confirmation result object.
 * @param {string} otp - User-entered OTP.
 * @returns {Promise<User | null>}
 */
export const verifyOTP = async (confirmationResult: ConfirmationResult, otp: string): Promise<User | null> => {
    try {
        const userCredential = await confirmationResult.confirm(otp);

        // Store user in AsyncStorage
        await AsyncStorage.setItem("user", JSON.stringify(userCredential.user));

        return userCredential.user;
    } catch (error: any) {
        console.error("OTP Verification Error:", error.message);
        throw new Error(error.message);
    }
};
