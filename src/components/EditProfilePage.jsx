import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import { getDatabase, ref, update, get } from "firebase/database";

const EditProfilePage = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getDatabase();

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [newPhotoURL, setNewPhotoURL] = useState(""); // To store the new photo URL input
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      navigate("/"); // หากไม่ได้ล็อกอิน ให้กลับไปหน้า login
      return;
    }

    setDisplayName(currentUser.displayName || "");
    setEmail(currentUser.email || "");
    setPhotoURL(currentUser.photoURL || "");

    const userRef = ref(db, `users/${currentUser.uid}/profile`);
    get(userRef).then((snapshot) => {
      if (snapshot.exists()) {
        const userData = snapshot.val();
        console.log("userData", userData); // ตรวจสอบข้อมูลจาก Firebase
        if (userData.displayName) setDisplayName(userData.displayName);
        if (userData.photoURL) setPhotoURL(userData.photoURL);
      }
    });
  }, [auth, db, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // เริ่มการโหลด
    setErrorMessage("");
    setSuccessMessage("");
  
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) throw new Error("ไม่พบข้อมูลผู้ใช้");
  
      let updatedPhotoURL = newPhotoURL || photoURL; // ใช้ newPhotoURL ถ้ามี หรือใช้ค่าเดิมถ้าไม่มี
  
      // อัปเดตข้อมูลผู้ใช้ใน Firebase Authentication
      await updateProfile(currentUser, {
        displayName,
        photoURL: updatedPhotoURL,
      });
      console.log("Profile updated in Firebase Authentication");
  
      // แจ้งสำเร็จเมื่อการอัปเดต Firebase Authentication เสร็จ
      setSuccessMessage("อัปเดตข้อมูลผู้ใช้ในระบบแล้ว");
      setIsLoading(false);
      
      // Redirect ไปยังหน้า /home เมื่อเสร็จ
      navigate("/home");
  
      // ต่อไปให้ทำการอัปเดตข้อมูลใน Firebase Realtime Database (ถ้าต้องการ)
      // อัปเดตข้อมูลผู้ใช้ใน Firebase Realtime Database
      await update(ref(db, `users/${currentUser.uid}/profile`), {
        displayName,
        email,
        photoURL: updatedPhotoURL,
      });
      console.log("Profile updated in Firebase Realtime Database");
  
      // ดึงข้อมูลล่าสุดจาก Realtime Database
      const userRef = ref(db, `users/${currentUser.uid}/profile`);
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        const userData = snapshot.val();
        console.log("userData", userData);
        setDisplayName(userData.displayName);
        setPhotoURL(userData.photoURL);
      }
  
      setNewPhotoURL(""); // Clear the new photo URL input
  
    } catch (error) {
      console.error("Error updating profile:", error);
      setErrorMessage("เกิดข้อผิดพลาดในการอัปเดตข้อมูล: " + error.message);
      setIsLoading(false); // ปิดการโหลดหากมีข้อผิดพลาด
    }
  };
  
  
  
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 bg-blue-500">
          <h1 className="text-xl font-bold text-white">แก้ไขข้อมูลส่วนตัว</h1>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-4">
          {errorMessage && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
              {errorMessage}
            </div>
          )}

          {successMessage && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
              {successMessage}
            </div>
          )}

          <div className="mb-4">
            <label
              htmlFor="display-name"
              className="block text-sm font-semibold"
            >
              ชื่อผู้ใช้
            </label>
            <input
              type="text"
              id="display-name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold">
              อีเมล
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled
              className="mt-2 w-full px-4 py-2 border rounded-md bg-gray-200"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="photo-url"
              className="block text-sm font-semibold"
            >
              ใส่ลิงก์รูปภาพ
            </label>
            <input
              type="text"
              id="photo-url"
              value={newPhotoURL}
              onChange={(e) => setNewPhotoURL(e.target.value)}
              placeholder="ใส่ URL รูปภาพ"
              className="mt-2 w-full px-4 py-2 border rounded-md"
            />
          </div>

          {photoURL && !newPhotoURL && (
            <div className="mb-4">
              <img
                src={photoURL}
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto"
              />
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => navigate("/home")}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              ยกเลิก
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              disabled={isLoading}
            >
              {isLoading ? "กำลังบันทึก..." : "บันทึก"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfilePage;
