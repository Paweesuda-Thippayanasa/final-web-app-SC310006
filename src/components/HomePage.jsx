import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { getDatabase, ref, onValue } from 'firebase/database';
import { Link } from 'react-router-dom';
import '../css/hompage.css'

const HomePage = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getDatabase();
  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState(null);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
      
      const userCoursesRef = ref(db, `/users/${currentUser.uid}/classroom`);
      onValue(userCoursesRef, (snapshot) => {
        const coursesData = snapshot.val();
        if (coursesData) {
          const coursesList = [];
          Object.keys(coursesData).forEach((cid) => {
            if (coursesData[cid].status === 1) {
              const courseRef = ref(db, `/classroom/${cid}`);
              onValue(courseRef, (courseSnapshot) => {
                const course = courseSnapshot.val();
                if (course) {
                  coursesList.push({
                    id: cid,
                    ...course
                  });
                  setCourses(prevCourses => [...prevCourses, ...coursesList]);
                }
              });
            }
          });
        }
      });
    } else {
      navigate('/');
    }
  }, [auth, db, navigate]);

  const handleLogoutClick = () => {
    setShowLogoutDialog(true);
  };

  const handleConfirmLogout = async () => {
    try {
      await signOut(auth);
      navigate('/', { replace: true });
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setShowLogoutDialog(false);
    }
  };

  const handleCancelLogout = () => {
    setShowLogoutDialog(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">ระบบจัดการห้องเรียน</h1>
          <div className="flex items-center">
            {user && (
              <div className="flex items-center mr-4">
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div>
                  <p className="text-sm font-medium">{user.displayName}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>
            )}
            <div className="flex space-x-2">
              <Link
                to="/edit-profile"
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                แก้ไขข้อมูลส่วนตัว
              </Link>
              <Link
                to="/add-course"
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              >
                เพิ่มวิชา
              </Link>
              <button
                onClick={handleLogoutClick}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                ออกจากระบบ
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="text-xl font-semibold mb-4">รายวิชาที่สอน</h2>
        {courses.length === 0 ? (
          <p className="text-gray-500">ยังไม่มีรายวิชาที่สอน กรุณาเพิ่มวิชาใหม่</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow"
              >
                <div
                  className="h-40 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${course.imageUrl || 'https://via.placeholder.com/400x200?text=No+Image'})`,
                  }}
                ></div>
                <div className="p-4">
                  <h3 className="text-lg font-medium">{course.courseName}</h3>
                  <p className="text-gray-600 text-sm">รหัสวิชา: {course.courseCode}</p>
                  <p className="text-gray-600 text-sm mb-4">ห้องเรียน: {course.className}</p>
                  <Link
                    to={`/manage-classroom/${course.id}`}
                    className="block w-full text-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    จัดการห้องเรียน
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Logout Confirmation Modal */}
      {showLogoutDialog && (
        <div className="fixed inset-0  flex items-center justify-center z-50 popup-logout">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-semibold mb-2">ยืนยันการออกจากระบบ</h3>
            <p className="text-gray-600 mb-4">คุณต้องการออกจากระบบใช่หรือไม่?</p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={handleCancelLogout}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                ยกเลิก
              </button>
              <button
                onClick={handleConfirmLogout}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
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
