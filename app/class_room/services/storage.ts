import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "firebase/auth";

/**
 * บันทึกข้อมูลผู้ใช้ใน AsyncStorage
 */
export const saveUserToStorage = async (user: User) => {
    try {
        await AsyncStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
        console.error("Error saving user data:", error);
    }
};

/**
 * ดึงข้อมูลผู้ใช้ที่ล็อกอินจาก AsyncStorage
 */
export const getUserFromStorage = async (): Promise<User | null> => {
    try {
        const userJson = await AsyncStorage.getItem("user");
        return userJson ? JSON.parse(userJson) : null;
    } catch (error) {
        console.error("Error retrieving user data:", error);
        return null;
    }
};

/**
 * ลบข้อมูลผู้ใช้จาก AsyncStorage เมื่อออกจากระบบ
 */
export const removeUserFromStorage = async () => {
    try {
        await AsyncStorage.removeItem("user");
    } catch (error) {
        console.error("Error removing user data:", error);
    }
};
