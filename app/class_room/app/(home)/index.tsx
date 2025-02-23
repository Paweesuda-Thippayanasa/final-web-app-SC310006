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
import { auth } from "../../services/firebase";
import { 
  GraduationCap, 
  PlusCircle, 
  Calculator,
  BookOpen,
  Clock,
  UsersRound,
  Binary,
  MessagesSquare
} from "lucide-react-native";

const HomeScreen = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
    };

    fetchUser();
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

      {/* Grid Navigation */}
      <View style={[styles.gridContainer, isLargeScreen && styles.gridContainerLarge]}>
        {[ 
          { icon: Calculator, color: '#0369a1', bg: '#bae6fd', text: 'คณิตศาสตร์' },
          { icon: BookOpen, color: '#15803d', bg: '#bbf7d0', text: 'ภาษาไทย' },
          { icon: Clock, color: '#b45309', bg: '#fde68a', text: 'ประวัติศาสตร์' },
          { icon: UsersRound, color: '#6d28d9', bg: '#ddd6fe', text: 'สังคมศึกษา' },
          { icon: Binary, color: '#c2410c', bg: '#fed7aa', text: 'วิทยาศาสตร์' },
          { icon: MessagesSquare, color: '#1d4ed8', bg: '#bfdbfe', text: 'ภาษาอังกฤษ' },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={[styles.gridItem, isLargeScreen && styles.gridItemLarge]}>
            <View style={[styles.iconCircle, { backgroundColor: item.bg }]}> 
              <item.icon size={24} color={item.color} />
            </View>
            <Text style={styles.gridText}>{item.text}</Text>
          </TouchableOpacity>
        ))}
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
});

export default HomeScreen;
