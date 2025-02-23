import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebase";

const HomeScreen = () => {
  const router = useRouter();
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
      await signOut(auth); // Firebase logout
      await AsyncStorage.removeItem("user"); // Remove from local storage
      router.replace("/login"); // Redirect to login screen
    } catch (error: any) {
      console.error("Logout Failed", error.message);
    }
  };

  if (loading) return <ActivityIndicator size="large" color="#007AFF" />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {user?.displayName || "User"}!</Text>
      <Text style={styles.subtitle}>Your email: {user?.email}</Text>

      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#666", marginBottom: 20 },
  logoutButton: { backgroundColor: "#ff3b30", padding: 15, borderRadius: 10, alignItems: "center" },
  logoutText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default HomeScreen;
