import React, { useState, useEffect } from 'react';
import { db } from '../../firebase-config';
import { doc, getDoc } from 'firebase/firestore';

const ManageClassroom = ({ cid }) => {
  const [classroom, setClassroom] = useState(null);

  useEffect(() => {
    const fetchClassroomData = async () => {
      const docRef = doc(db, "classroom", cid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setClassroom(docSnap.data());
      }
    };
    fetchClassroomData();
  }, [cid]);

  return (
    <div>
      {classroom && (
        <>
          <h1>{classroom.name}</h1>
          <p>Course Code: {classroom.code}</p>
          <p>Classroom: {classroom.room}</p>
          <img src={classroom.photo} alt={classroom.name} width="200" />
          {/* Additional buttons and features for checkin, student list, etc. */}
        </>
      )}
    </div>
  );
};

export default ManageClassroom;
