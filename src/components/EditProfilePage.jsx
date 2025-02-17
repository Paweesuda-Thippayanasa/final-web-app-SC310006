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
  const [newPhotoURL, setNewPhotoURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      navigate("/");
      return;
    }

    setDisplayName(currentUser.displayName || "");
    setEmail(currentUser.email || "");
    setPhotoURL(currentUser.photoURL || "");

    const userRef = ref(db, `users/${currentUser.uid}/profile`);
    get(userRef).then((snapshot) => {
      if (snapshot.exists()) {
        const userData = snapshot.val();
        if (userData.displayName) setDisplayName(userData.displayName);
        if (userData.photoURL) setPhotoURL(userData.photoURL);
      }
    });
  }, [auth, db, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");
  
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) throw new Error("ไม่พบข้อมูลผู้ใช้");
  
      let updatedPhotoURL = newPhotoURL || photoURL;
  
      await updateProfile(currentUser, {
        displayName,
        photoURL: updatedPhotoURL,
      });
  
      setSuccessMessage("อัปเดตข้อมูลผู้ใช้ในระบบแล้ว");
      setIsLoading(false);
      
      navigate("/home");
  
      await update(ref(db, `users/${currentUser.uid}/profile`), {
        displayName,
        email,
        photoURL: updatedPhotoURL,
      });
  
      const userRef = ref(db, `users/${currentUser.uid}/profile`);
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        const userData = snapshot.val();
        setDisplayName(userData.displayName);
        setPhotoURL(userData.photoURL);
      }
  
      setNewPhotoURL("");
  
    } catch (error) {
      console.error("Error updating profile:", error);
      setErrorMessage("เกิดข้อผิดพลาดในการอัปเดตข้อมูล: " + error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className=" bg-white/80 rounded-3xl shadow-2xl overflow-hidden border border-white/50">
            {/* Header with improved gradient and pattern */}
            <div className="px-8 py-8 bg-gradient-to-r from-indigo-600 to-purple-600 relative">
              <div className="absolute inset-0 bg-pattern opacity-10"></div>
              <div className="relative z-10">
                <h1 className="text-3xl font-bold text-white text-center mb-2">แก้ไขข้อมูลส่วนตัว</h1>
                <p className="text-indigo-100 text-center text-sm">ปรับแต่งโปรไฟล์ของคุณให้ตรงกับตัวตน</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 sm:p-10">
              {/* Profile Image Section with improved styling */}
              <div className="mb-12">
                <div className="relative w-36 h-36 mx-auto">
                  <div className="w-full h-full rounded-full border-4 border-white shadow-xl overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 ring-4 ring-indigo-100/50">
                    {(photoURL || newPhotoURL) ? (
                      <img
                        src={newPhotoURL || photoURL}
                        alt="Profile"
                        className="w-full h-full object-cover transition-all duration-300"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "";
                          e.target.className = "hidden";
                          e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-sm text-red-500 bg-red-50">ไม่สามารถโหลดรูปได้</div>';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50">
                        <span className="text-5xl">👤</span>
                      </div>
                    )}
                  </div>
                  <div className="absolute -bottom-2 -right-2 p-2.5 bg-white rounded-full shadow-lg ring-2 ring-indigo-100/50">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Alert Messages with improved styling */}
              {errorMessage && (
                <div className="mb-8 p-4 bg-red-50/80  border border-red-200 rounded-2xl animate-fadeIn">
                  <div className="flex items-center text-red-700">
                    <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <p className="text-sm font-medium">{errorMessage}</p>
                  </div>
                </div>
              )}

              {successMessage && (
                <div className="mb-8 p-4 bg-green-50/80  border border-green-200 rounded-2xl animate-fadeIn">
                  <div className="flex items-center text-green-700">
                    <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm font-medium">{successMessage}</p>
                  </div>
                </div>
              )}

              <div className="space-y-8">
                {/* Display Name Input with improved styling */}
                <div>
                  <label htmlFor="display-name" className="block text-sm font-medium text-gray-700 mb-2">
                    ชื่อผู้ใช้
                  </label>
                  <input
                    type="text"
                    id="display-name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="w-full px-4 py-3.5 bg-white/50  border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                  />
                </div>

                {/* Email Input with improved styling */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    อีเมล
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled
                    className="w-full px-4 py-3.5 bg-gray-100/80  border border-gray-200 rounded-xl text-gray-500 cursor-not-allowed"
                  />
                </div>

                {/* Photo URL Input with improved styling */}
                <div>
                  <label htmlFor="photo-url" className="block text-sm font-medium text-gray-700 mb-2">
                    ใส่ลิงก์รูปภาพใหม่
                  </label>
                  <input
                    type="text"
                    id="photo-url"
                    value={newPhotoURL}
                    onChange={(e) => setNewPhotoURL(e.target.value)}
                    placeholder="ใส่ URL รูปภาพ"
                    className="w-full px-4 py-3.5 bg-white/50  border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Action Buttons with improved styling */}
              <div className="mt-12 flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => navigate("/home")}
                  className="px-6 py-3 border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-200 font-medium focus:ring-2 focus:ring-gray-200"
                >
                  ยกเลิก
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed font-medium focus:ring-2 focus:ring-indigo-500 shadow-lg shadow-indigo-500/20"
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      กำลังบันทึก...
                    </span>
                  ) : (
                    "บันทึก"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
