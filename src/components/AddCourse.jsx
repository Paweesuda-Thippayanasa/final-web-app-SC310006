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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8">
            <h2 className="text-3xl font-bold text-white">เพิ่มวิชาใหม่</h2>
            <p className="text-blue-100 mt-2 text-lg">สร้างรายวิชาใหม่สำหรับการเรียนการสอน</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-2">
                    รหัสวิชา
                  </label>
                  <input
                    type="text"
                    name="courseCode"
                    value={formData.courseCode}
                    onChange={handleChange}
                    placeholder="เช่น SC310001"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-2">
                    ชื่อวิชา
                  </label>
                  <input
                    type="text"
                    name="courseName"
                    value={formData.courseName}
                    onChange={handleChange}
                    placeholder="เช่น Computer Programming"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-2">
                    ห้องเรียน
                  </label>
                  <input
                    type="text"
                    name="className"
                    value={formData.className}
                    onChange={handleChange}
                    placeholder="เช่น SC5101"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-2">
                    รูปภาพปก
                  </label>
                  <input
                    type="url"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200"
                  />
                  {imageError && (
                    <p className="mt-2 text-sm text-red-600">
                      ไม่สามารถโหลดรูปภาพได้ กรุณาตรวจสอบ URL อีกครั้ง
                    </p>
                  )}
                  <p className="mt-2 text-sm text-gray-500">
                    ระบุ URL ของรูปภาพที่ต้องการใช้เป็นปกรายวิชา
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-base font-semibold text-gray-700 mb-2">ตัวอย่างรูปภาพ</p>
                  <div className="border-2 border-gray-200 rounded-xl overflow-hidden aspect-video bg-gray-100">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Course preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        {imageError ? 'ไม่สามารถโหลดรูปภาพได้' : 'ไม่มีรูปภาพ'}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            <div className="flex justify-end space-x-4 pt-6">
              <button
                type="button"
                onClick={() => navigate('/home')}
                className="px-6 py-3 border-2 border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-200"
              >
                ยกเลิก
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {loading ? 'กำลังบันทึก...' : 'บันทึก'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
