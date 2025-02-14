// EditProfilePage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, set, get } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

const EditProfilePage = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getDatabase();
  const storage = getStorage();

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [newPhotoFile, setNewPhotoFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      navigate('/login');
      return;
    }

    setDisplayName(currentUser.displayName || '');
    setEmail(currentUser.email || '');
    setPhotoURL(currentUser.photoURL || '');

    const userRef = ref(db, `/users/${currentUser.uid}/profile`);
    get(userRef).then((snapshot) => {
      if (snapshot.exists()) {
        const userData = snapshot.val();
        if (userData.displayName) setDisplayName(userData.displayName);
        if (userData.photoURL) setPhotoURL(userData.photoURL);
      }
    });
  }, [auth, db, navigate]);

  const handlePhotoChange = (e) => {
    if (e.target.files[0]) {
      setNewPhotoFile(e.target.files[0]);
      const reader = new FileReader();
      reader.onload = (event) => {
        setPhotoURL(event.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const currentUser = auth.currentUser;
      if (!currentUser) throw new Error('ไม่พบข้อมูลผู้ใช้');

      let updatedPhotoURL = photoURL;

      if (newPhotoFile) {
        const imageRef = storageRef(storage, `profile_images/${currentUser.uid}/${Date.now()}_${newPhotoFile.name}`);
        await uploadBytes(imageRef, newPhotoFile);
        updatedPhotoURL = await getDownloadURL(imageRef);
      }

      await currentUser.updateProfile({
        displayName,
        photoURL: updatedPhotoURL
      });

      await set(ref(db, `/users/${currentUser.uid}/profile`), {
        displayName,
        email,
        photoURL: updatedPhotoURL
      });

      setSuccessMessage('อัปเดตข้อมูลส่วนตัวเรียบร้อยแล้ว');
      
      setNewPhotoFile(null);
      const fileInput = document.getElementById('photo-upload');
      if (fileInput) fileInput.value = '';
    } catch (error) {
      console.error('Error updating profile:', error);
      setErrorMessage('เกิดข้อผิดพลาดในการอัปเดตข้อมูล: ' + error.message);
    } finally {
      setIsLoading(false);
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
            <label htmlFor="display-name" className="block text-sm font-semibold">ชื่อผู้ใช้</label>
            <input
              type="text"
              id="display-name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold">อีเมล</label>
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
            <label htmlFor="photo-upload" className="block text-sm font-semibold">อัปโหลดรูปภาพ</label>
            <input
              type="file"
              id="photo-upload"
              accept="image/*"
              onChange={handlePhotoChange}
              className="mt-2 w-full px-4 py-2 border rounded-md"
            />
          </div>

          {photoURL && !newPhotoFile && (
            <div className="mb-4">
              <img src={photoURL} alt="Profile" className="w-24 h-24 rounded-full mx-auto" />
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              disabled={isLoading}
            >
              {isLoading ? 'กำลังบันทึก...' : 'บันทึก'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfilePage;
