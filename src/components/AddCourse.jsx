import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFirestore, doc, setDoc } from 'firebase/firestore'; 
import { getAuth } from 'firebase/auth';

const AddCourse = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getFirestore(); // สำหรับการเชื่อมต่อกับ Firestore
  
  const [formData, setFormData] = useState({
    courseCode: '',
    courseName: '',
    className: '',
    imageUrl: '', // รูปภาพจะเป็น URL ที่ผู้ใช้กรอก
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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
      
      // หากผู้ใช้ไม่ได้กรอก URL ของรูปภาพ จะใช้ URL เริ่มต้น
      if (!imageUrl || !imageUrl.startsWith('http')) {
        imageUrl = 'https://via.placeholder.com/400x200?text=No+Image';
      }

      const cid = generateCid(); // สร้าง unique course ID

      // บันทึกข้อมูลวิชาใน Firestore
      await setDoc(doc(db, "classroom", cid), {
        owner: currentUser.uid,
        info: {
          code: formData.courseCode,
          name: formData.courseName,
          room: formData.className,
          photo: imageUrl // บันทึกรูปภาพในรูปแบบ URL
        }
      });

      // บันทึกข้อมูลวิชาในโปรไฟล์ของผู้ใช้
      await setDoc(doc(db, "users", currentUser.uid, "classroom", cid), {
        status: 1, 
        info: {
          code: formData.courseCode,
          name: formData.courseName,
          room: formData.className,
          photo: imageUrl
        }
      });

      navigate('/home'); // ไปที่หน้า home หลังจากบันทึกข้อมูลเสร็จ

    } catch (error) {
      console.error('Error adding course:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">เพิ่มวิชาใหม่</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                รหัสวิชา
              </label>
              <input
                type="text"
                name="courseCode"
                value={formData.courseCode}
                onChange={handleChange}
                placeholder="เช่น SC310001"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ชื่อวิชา
              </label>
              <input
                type="text"
                name="courseName"
                value={formData.courseName}
                onChange={handleChange}
                placeholder="เช่น Computer Programming"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ห้องเรียน
              </label>
              <input
                type="text"
                name="className"
                value={formData.className}
                onChange={handleChange}
                placeholder="เช่น SC5101"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                URL รูปภาพ
              </label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <div className="flex justify-end space-x-4 mt-6">
              <button
                type="button"
                onClick={() => navigate('/home')}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                ยกเลิก
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-blue-300"
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
