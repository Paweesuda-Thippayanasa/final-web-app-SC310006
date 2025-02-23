import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const App = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserSession = async () => {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        router.replace("/(home)"); // ✅ Redirect to home instead of /(home)/index
      } else {
        router.replace("/login"); // ✅ Redirect to login if not authenticated
      }
      setLoading(false);
    };

    checkUserSession();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#007AFF" />;

  return <View />;
};

export default App;
