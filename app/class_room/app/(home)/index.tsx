import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Image,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import { auth, dbRealtime } from "../../services/firebase"; // Import Realtime Database instance
import { ref, get, child } from "firebase/database"; // Realtime Database methods
import { db } from "../../services/firebase"; // Assuming dbFirestore is your Firestore instance
import { doc, getDoc } from "firebase/firestore"; // Firestore methods
import {
  GraduationCap,
  PlusCircle,
  BookOpen
} from "lucide-react-native";

const HomeScreen = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
    };

    const fetchEnrolledCourses = async () => {
      const user = auth.currentUser;
      if (user) {
        const coursesRef = ref(dbRealtime, `users/${user.uid}/classroom`);
        try {
          const snapshot = await get(coursesRef);
          if (snapshot.exists()) {
            // Convert the snapshot to an array of courses
            const coursesData = Object.entries(snapshot.val()).map(([key, value]) => ({
              cid: key, // Use the key as the course ID
              ...(value as any), // Include other fields (e.g., status)
            })).filter((course: any) => course.status === 2); // Filter courses by status: 2 (enrolled)
    
            // Log coursesData from Realtime Database
            console.log("Courses Data from Realtime DB:", coursesData);
    
            // Fetch course names from Firestore for each course
            const coursesWithNames = await Promise.all(coursesData.map(async (course: any) => {
              const courseRef = doc(db, `classroom/${course.cid}`);
              const courseSnapshot = await getDoc(courseRef);
    
              // Log Firestore document ID and snapshot
              console.log("Firestore Document ID:", course.cid);
              console.log("Firestore Snapshot:", courseSnapshot.exists() ? courseSnapshot.data() : "Document does not exist");
    
              // Check if course exists in Firestore and fetch the name from the 'info' field
              const courseName = courseSnapshot.exists()
                ? courseSnapshot.data().info?.name || "Unknown Course"
                : "Unknown Course";
    
              // Return the updated course data including the course name from Firestore
              return { ...course, courseName };
            }));
    
            // Log the final coursesWithNames
            console.log("Courses with Names:", coursesWithNames);
    
            setEnrolledCourses(coursesWithNames);
          } else {
            console.log("No enrolled courses found in Realtime DB.");
          }
        } catch (error) {
          console.error("Error fetching courses: ", error);
        }
      }
    };


    fetchUser();
    fetchEnrolledCourses();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      await AsyncStorage.removeItem("user");
      router.replace("/login");
    } catch (error: unknown) {
      console.error("Logout Failed", error);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  const isLargeScreen = width > 600;

  return (
    <SafeAreaView style={styles.container}>
      {/* Profile Section */}
      <View style={[styles.profileCard, isLargeScreen && styles.profileCardLarge]}>
        <Image
          source={{ uri: user?.photoURL || "https://via.placeholder.com/100" }}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{user?.displayName || "Mina Kokila"}</Text>
          <Text style={styles.profileEmail}>{user?.email || "User@gmail.com"}</Text>
          <Text style={styles.profilePhone}>0651236589</Text>
        </View>
      </View>

      {/* Subject Header */}
      <View style={styles.headerContainer}>
        <GraduationCap size={24} color="#1e3a8a" />
        <Text style={styles.headerText}>วิชาเรียน</Text>
      </View>

      {/* Grid Navigation - Display Enrolled Courses */}
      <View style={[styles.gridContainer, isLargeScreen && styles.gridContainerLarge]}>
        {enrolledCourses.length > 0 ? (
          enrolledCourses.map((course, index) => (
            <TouchableOpacity key={index} style={[styles.gridItem, isLargeScreen && styles.gridItemLarge]}    onPress={() => {router.navigate(`/(attendance)/classroom/${course.cid}`);}}>
              <View style={[styles.iconCircle, { backgroundColor: '#bbf7d0' }]}>
                <BookOpen size={24} color="#15803d" />
              </View>
              <Text style={styles.gridText}>{course.courseName}</Text> {/* Display course name */}
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noCoursesText}>No courses enrolled yet.</Text>
        )}
      </View>

      {/* Add Subject Button */}
      <TouchableOpacity style={styles.addButton} onPress={() => router.push('/(home)/add_course')}>
        <PlusCircle size={24} color="#ffffff" />
        <Text style={styles.addButtonText}>เพิ่มวิชา</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profileCard: {
    backgroundColor: "#f0f9ff",
    flexDirection: "row",
    padding: 20,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    alignItems: "center",
    elevation: 2,
  },
  profileCardLarge: {
    padding: 30,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  profileInfo: {
    marginLeft: 16,
    flex: 1,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "600",
    color: "#1e3a8a",
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1e3a8a",
    marginLeft: 8,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
    justifyContent: 'space-between',
  },
  gridContainerLarge: {
    justifyContent: 'center',
  },
  gridItem: {
    width: '30%',
    aspectRatio: 1,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    margin: 5,
  },
  gridItemLarge: {
    width: '22%',
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridText: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: "#3b82f6",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    margin: 16,
  },
  addButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 8,
  },
  noCoursesText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1e3a8a",
    textAlign: "center",
    marginTop: 16,
  }
});

export default HomeScreen;
