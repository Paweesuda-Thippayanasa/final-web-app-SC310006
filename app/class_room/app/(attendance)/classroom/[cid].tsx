import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../services/firebase";
const ClassroomDetail = () => {
  const { cid } = useLocalSearchParams(); // Get the course ID from the route
  const [course, setCourse] = useState<any>(null);
  const [ownerName, setOwnerName] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        // Fetch course details
        const courseRef = doc(db, `classroom/${cid}`);
        const courseSnapshot = await getDoc(courseRef);

        if (courseSnapshot.exists()) {
          const courseData = courseSnapshot.data();
          setCourse(courseData);

          // Fetch owner details
          const ownerId = courseData.owner;
          if (ownerId) {
            const ownerRef = doc(db, `users/${ownerId}`);
            const ownerSnapshot = await getDoc(ownerRef);

            if (ownerSnapshot.exists()) {
              const ownerData = ownerSnapshot.data();
              setOwnerName(ownerData.name || "Unknown Owner");
            } else {
              console.log("Owner not found.");
            }
          }
        } else {
          console.log("Course not found.");
        }
      } catch (error) {
        console.error("Error fetching course details: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [cid]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (!course) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Course not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Course Image */}
      <Image
        source={{ uri: course.info?.photo || "https://via.placeholder.com/400x200" }}
        style={styles.courseImage}
      />

      {/* Course Name */}
      <Text style={styles.courseName}>{course.info?.name || "Unknown Course"}</Text>

      {/* Course Code */}
      <Text style={styles.courseCode}>Code: {course.info?.code || "N/A"}</Text>

      {/* Course Room */}
      <Text style={styles.courseRoom}>Room: {course.info?.room || "N/A"}</Text>

      {/* Course Owner */}
      <Text style={styles.courseOwner}>Owner: {ownerName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8fafc",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "#ff0000",
    textAlign: "center",
    marginTop: 20,
  },
  courseImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
    marginTop: 28,
  },
  courseName: {
    fontSize: 24,
    fontWeight: "600",
    color: "#1e3a8a",
    marginBottom: 8,
  },
  courseCode: {
    fontSize: 18,
    color: "#4b5563",
    marginBottom: 8,
  },
  courseRoom: {
    fontSize: 18,
    color: "#4b5563",
    marginBottom: 8,
  },
  courseOwner: {
    fontSize: 18,
    color: "#4b5563",
  },
});

export default ClassroomDetail;