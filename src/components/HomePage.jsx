import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import "../css/hompage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getFirestore();
  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState(null);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
      const coursesRef = collection(db, "classroom");
      const q = query(coursesRef, where("owner", "==", currentUser.uid));
  
      const fetchCourses = async () => {
        const querySnapshot = await getDocs(q);
        const coursesList = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.info?.name || "ไม่มีชื่อวิชา",
            code: data.info?.code || "ไม่มีรหัสวิชา",
            room: data.info?.room || "ไม่มีห้องเรียน",
            photo: data.info?.photo || "https://via.placeholder.com/400x200?text=No+Image",
          };
        });
        setCourses(coursesList);
      };
      fetchCourses();
    } else {
      navigate("/");
    }
  }, [auth, db, navigate]);

  const handleLogoutClick = () => {
    setShowLogoutDialog(true);
  };

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <h1 className="text-3xl font-bold text-indigo-600">
                ระบบจัดการห้องเรียน
              </h1>
            </div>
            <div className="flex items-center space-x-6">
              {user && (
                <div className="flex items-center bg-gray-50 rounded-full px-4 py-2">
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="w-10 h-10 rounded-full border-2 border-indigo-200"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-semibold text-gray-800">{user.displayName}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>
              )}
              <div className="flex items-center space-x-3">
                <Link
                  to="/edit-profile"
                  className="px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-full hover:bg-indigo-100 transition-colors duration-200"
                >
                  แก้ไขข้อมูลส่วนตัว
                </Link>
                <Link
                  to="/add-course"
                  className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-full hover:bg-green-600 transition-colors duration-200"
                >
                  เพิ่มวิชา
                </Link>
                <button
                  onClick={handleLogoutClick}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-full hover:bg-red-600 transition-colors duration-200"
                >
                  ออกจากระบบ
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">รายวิชาที่สอน</h2>
        </div>
        
        {courses.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <p className="text-gray-500 text-lg">
              ยังไม่มีรายวิชาที่สอน กรุณาเพิ่มวิชาใหม่
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-200"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${course.photo})`,
                  }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{course.name}</h3>
                  <div className="space-y-2 mb-6">
                    <p className="text-gray-600 text-sm flex items-center">
                      <span className="font-medium mr-2">รหัสวิชา:</span>
                      {course.code}
                    </p>
                    <p className="text-gray-600 text-sm flex items-center">
                      <span className="font-medium mr-2">ห้องเรียน:</span>
                      {course.room}
                    </p>
                  </div>
                  <Link
                    to={`/manage-classroom/${course.id}`}
                    className="block w-full text-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
                  >
                    จัดการห้องเรียน
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {showLogoutDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 popup-logout">
          <div className="bg-white rounded-xl p-8 max-w-sm w-full mx-4 shadow-2xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4">ยืนยันการออกจากระบบ</h3>
            <p className="text-gray-600 mb-6">
              คุณต้องการออกจากระบบใช่หรือไม่?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCancelLogout}
                className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium"
              >
                ยกเลิก
              </button>
              <button
                onClick={handleConfirmLogout}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 font-medium"
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
