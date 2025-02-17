import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const AddCourse = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getFirestore();
  
  const [formData, setFormData] = useState({
    courseCode: '',
    courseName: '',
    className: '',
    imageUrl: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (formData.imageUrl) {
      const img = new Image();
      img.onload = () => {
        setImagePreview(formData.imageUrl);
        setImageError(false);
      };
      img.onerror = () => {
        setImagePreview(null);
        setImageError(true);
      };
      img.src = formData.imageUrl;
    } else {
      setImagePreview(null);
      setImageError(false);
    }
  }, [formData.imageUrl]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateCid = () => {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        throw new Error('ไม่พบข้อมูลผู้ใช้ กรุณาเข้าสู่ระบบใหม่');
      }

      if (!formData.courseCode || !formData.courseName || !formData.className) {
        throw new Error('กรุณากรอกข้อมูลให้ครบถ้วน');
      }

      let imageUrl = formData.imageUrl;
      
      if (!imageUrl || !imageUrl.startsWith('http') || imageError) {
        imageUrl = 'https://via.placeholder.com/400x200?text=No+Image';
      }

      const cid = generateCid();

      await setDoc(doc(db, "classroom", cid), {
        owner: currentUser.uid,
        info: {
          code: formData.courseCode,
          name: formData.courseName,
          room: formData.className,
          photo: imageUrl
        }
      });

      await setDoc(doc(db, "users", currentUser.uid, "classroom", cid), {
        status: 1,
        info: {
          code: formData.courseCode,
          name: formData.courseName,
          room: formData.className,
          photo: imageUrl
        }
      });

      navigate('/home');

    } catch (error) {
      console.error('Error adding course:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className=" bg-white/90 rounded-3xl shadow-2xl overflow-hidden border border-white/50 transform hover:scale-[1.01] transition-all duration-300">
            <div className="px-8 py-12 bg-gradient-to-r from-indigo-600 to-purple-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.2)_0%,transparent_50%)] opacity-70"></div>
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h1 className="text-4xl font-bold text-white text-center mb-3 tracking-tight">เพิ่มวิชาใหม่</h1>
                <p className="text-indigo-100 text-center text-lg font-light">สร้างรายวิชาใหม่สำหรับการเรียนการสอน</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-10 space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div className="group">
                    <label className="block text-base font-medium text-gray-700 mb-2 group-focus-within:text-indigo-600 transition-colors">
                      รหัสวิชา
                    </label>
                    <input
                      type="text"
                      name="courseCode"
                      value={formData.courseCode}
                      onChange={handleChange}
                      placeholder="เช่น SC310001"
                      required
                      className="w-full px-5 py-4 bg-white/80  border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-gray-400"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-base font-medium text-gray-700 mb-2 group-focus-within:text-indigo-600 transition-colors">
                      ชื่อวิชา
                    </label>
                    <input
                      type="text"
                      name="courseName"
                      value={formData.courseName}
                      onChange={handleChange}
                      placeholder="เช่น Computer Programming"
                      required
                      className="w-full px-5 py-4 bg-white/80  border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-gray-400"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-base font-medium text-gray-700 mb-2 group-focus-within:text-indigo-600 transition-colors">
                      ห้องเรียน
                    </label>
                    <input
                      type="text"
                      name="className"
                      value={formData.className}
                      onChange={handleChange}
                      placeholder="เช่น SC5101"
                      required
                      className="w-full px-5 py-4 bg-white/80  border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="group">
                    <label className="block text-base font-medium text-gray-700 mb-2 group-focus-within:text-indigo-600 transition-colors">
                      รูปภาพปก
                    </label>
                    <input
                      type="url"
                      name="imageUrl"
                      value={formData.imageUrl}
                      onChange={handleChange}
                      placeholder="https://example.com/image.jpg"
                      className="w-full px-5 py-4 bg-white/80  border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-gray-400"
                    />
                    {imageError && (
                      <div className="mt-3 p-4 bg-red-50/90  border-2 border-red-100 rounded-2xl animate-pulse">
                        <div className="flex items-center text-red-700">
                          <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <p className="text-sm font-medium">ไม่สามารถโหลดรูปภาพได้ กรุณาตรวจสอบ URL อีกครั้ง</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6">
                    <p className="text-base font-medium text-gray-700 mb-2">ตัวอย่างรูปภาพ</p>
                    <div className="border-2 border-gray-100 rounded-2xl overflow-hidden aspect-video bg-white/80  group hover:border-indigo-200 transition-all duration-300">
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          alt="Course preview"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg">
                          {imageError ? 'ไม่สามารถโหลดรูปภาพได้' : 'ไม่มีรูปภาพ'}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {error && (
                <div className="p-4 bg-red-50/90  border-2 border-red-100 rounded-2xl animate-pulse">
                  <div className="flex items-center text-red-700">
                    <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <p className="text-sm font-medium">{error}</p>
                  </div>
                </div>
              )}

              <div className="flex justify-end space-x-4 pt-8 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => navigate('/home')}
                  className="px-8 py-4 border-2 border-gray-200 rounded-2xl text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 font-medium focus:ring-4 focus:ring-gray-200/50  text-base"
                >
                  ยกเลิก
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed font-medium focus:ring-4 focus:ring-indigo-500/50 shadow-xl shadow-indigo-500/20 text-base relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.2)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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

export default AddCourse;
