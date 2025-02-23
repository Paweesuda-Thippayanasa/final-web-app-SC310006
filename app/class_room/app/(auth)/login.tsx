import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { getAuth } from "firebase/auth";
import { loginUser, sendOTP, verifyOTP } from "../../services/firebaseAuth";

const LoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState<any>(null);
  const [isEmailLogin, setIsEmailLogin] = useState(true);
  const [loading, setLoading] = useState(false);



  const handleEmailLogin = async () => {
    setLoading(true);
    try {
      const user = await loginUser(email, password);
      if (user) {
        router.replace("/(home)");
      }
    } catch (error: any) {
      Alert.alert("Login Failed", error.message);
    }
    setLoading(false);
  };

  const handleSendOTP = async () => {
    setLoading(true);
    try {
      const auth = getAuth(); // Get the Auth instance
      const confirmationResult = await sendOTP(auth, phone); // Pass auth and phone
      setConfirmation(confirmationResult);
      Alert.alert('Success', 'OTP has been sent to your phone.');
    } catch (error: unknown) {
      // Type checking for error
      if (error instanceof Error) {
        Alert.alert('OTP Error', error.message);
      } else {
        Alert.alert('OTP Error', 'An unknown error occurred.');
      }
    }
    setLoading(false);
  };
  

  const handleVerifyOTP = async () => {
    setLoading(true);
    try {
      if (!confirmation) {
        Alert.alert("Error", "No OTP confirmation found.");
        return;
      }
      const user = await verifyOTP(confirmation, otp);
      if (user) {
        router.replace("/(home)");
      }
    } catch (error: any) {
      Alert.alert("Verification Failed", error.message);
    }
    setLoading(false);
  };

  return (
    <ImageBackground
      source={{ uri: "https://your-background-image.jpg" }}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardView}
        >
          <View style={styles.formContainer}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Sign in to continue</Text>

            <View style={styles.toggleContainer}>
              <TouchableOpacity
                style={[
                  styles.toggleButton,
                  isEmailLogin && styles.toggleButtonActive,
                ]}
                onPress={() => setIsEmailLogin(true)}
              >
                <Text
                  style={[
                    styles.toggleText,
                    isEmailLogin && styles.toggleTextActive,
                  ]}
                >
                  Email
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.toggleButton,
                  !isEmailLogin && styles.toggleButtonActive,
                ]}
                onPress={() => setIsEmailLogin(false)}
              >
                <Text
                  style={[
                    styles.toggleText,
                    !isEmailLogin && styles.toggleTextActive,
                  ]}
                >
                  Phone
                </Text>
              </TouchableOpacity>
            </View>

            {isEmailLogin ? (
              // Email Login Form
              <>
                <TextInput
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                  style={styles.input}
                  placeholderTextColor="#666"
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
                <TextInput
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                  style={styles.input}
                  placeholderTextColor="#666"
                />
                <TouchableOpacity onPress={handleEmailLogin} style={styles.primaryButton}>
                  {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.primaryButtonText}>Sign In</Text>}
                </TouchableOpacity>
              </>
            ) : (
              // Phone Login Form
              <>
                <View id="recaptcha-container" />

                <TextInput
                  placeholder="Phone Number (+1234567890)"
                  value={phone}
                  onChangeText={setPhone}
                  style={styles.input}
                  placeholderTextColor="#666"
                  keyboardType="phone-pad"
                />
                <TouchableOpacity onPress={handleSendOTP} style={styles.primaryButton}>
                  {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.primaryButtonText}>Send OTP</Text>}
                </TouchableOpacity>

                {confirmation && (
                  <>
                    <TextInput
                      placeholder="Enter OTP"
                      value={otp}
                      onChangeText={setOtp}
                      style={styles.input}
                      placeholderTextColor="#666"
                      keyboardType="number-pad"
                    />
                    <TouchableOpacity onPress={handleVerifyOTP} style={styles.primaryButton}>
                      {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.primaryButtonText}>Verify OTP</Text>}
                    </TouchableOpacity>
                  </>
                )}
              </>
            )}
          </View>

          <View id="recaptcha-container" />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    backgroundColor: "#f5f5f5", // Fallback color
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
  },
  keyboardView: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
    margin: 20,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginBottom: 20,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 10,
  },
  toggleButtonActive: {
    backgroundColor: "#007AFF",
  },
  toggleText: {
    fontSize: 16,
    color: "#666",
  },
  toggleTextActive: {
    color: "#fff",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#f8f8f8",
    height: 55,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#eee",
  },
  primaryButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotPassword: {
    alignSelf: "center",
    marginTop: 20,
  },
  forgotPasswordText: {
    color: "#007AFF",
    fontSize: 14,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signupText: {
    color: "#666",
    fontSize: 14,
  },
  signupLink: {
    color: "#007AFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default LoginScreen;
