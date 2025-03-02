import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { CameraView, useCameraPermissions } from "expo-camera";
import { PlusCircle, QrCode, ArrowLeft, Pencil, User, School } from "lucide-react-native";
import { getDatabase, ref, set } from "firebase/database";
import { auth } from "../../services/firebase";
import { addStudentToCourse } from "../../services/firebaseCourse";
import { LinearGradient } from "expo-linear-gradient";

const AddCourse = () => {
  const router = useRouter();
  const [cid, setCid] = useState("");
  const [stdid, setStdid] = useState("");
  const [name, setName] = useState("");
  const [scanning, setScanning] = useState(false);
  const [facing, setFacing] = useState<"back" | "front">("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [hasPermission, setHasPermission] = useState(false);
  const [isFocused, setIsFocused] = useState({
    cid: false,
    stdid: false,
    name: false,
  });

  useEffect(() => {
    (async () => {
      const { status } = await requestPermission();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleRegister = async () => {
    if (!cid || !stdid || !name) {
      Alert.alert("ข้อมูลไม่ครบถ้วน", "กรุณากรอกข้อมูลให้ครบทุกช่อง");
      return;
    }

    try {
      const user = auth.currentUser;
      if (!user) {
        Alert.alert("เกิดข้อผิดพลาด", "กรุณาเข้าสู่ระบบใหม่");
        return;
      }

      // Call the addStudentToCourse function to save data
      await addStudentToCourse(cid, stdid, name);

      Alert.alert("ลงทะเบียนสำเร็จ", "คุณได้ลงทะเบียนเข้าห้องเรียนเรียบร้อยแล้ว");
      router.replace("/(home)");
    } catch (error) {
      Alert.alert("เกิดข้อผิดพลาด", "ไม่สามารถลงทะเบียนได้");
      console.error(error);
    }
  };

  const handleScanQR = () => {
    if (!permission?.granted) {
      Alert.alert("ไม่มีสิทธิ์เข้าถึงกล้อง", "กรุณาให้สิทธิ์การใช้กล้อง");
      return;
    }
    setScanning(true);
  };

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setCid(data); // Set the scanned QR code data as the course ID
    setScanning(false); // Stop scanning after a successful scan
  };

  const handleGoBack = () => {
    router.back();
  };

  if (scanning) {
    return (
      <View style={styles.cameraContainer}>
        <CameraView
          style={StyleSheet.absoluteFillObject}
          facing={facing}
          onBarcodeScanned={handleBarCodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ["qr"],
          }}
        >
          <View style={styles.scanOverlay}>
            <View style={styles.scanFrame}>
              <View style={[styles.cornerTL, styles.corner]} />
              <View style={[styles.cornerTR, styles.corner]} />
              <View style={[styles.cornerBL, styles.corner]} />
              <View style={[styles.cornerBR, styles.corner]} />
            </View>
            <Text style={styles.scanText}>กรุณาสแกน QR Code</Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => setScanning(false)}>
              <Text style={styles.closeButtonText}>ยกเลิก</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#f8fafc" />
      <LinearGradient
        colors={["#eef2ff", "#f8fafc"]}
        style={styles.gradientBackground}
      />
      
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
            <ArrowLeft size={24} color="#4338ca" />
          </TouchableOpacity>
          <View style={styles.headerTitleContainer}>
            <School size={28} color="#4338ca" />
            <Text style={styles.title}>ลงทะเบียนเข้าชั้นเรียน</Text>
          </View>
        </View>


        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>กรอกข้อมูลการลงทะเบียน</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>รหัสวิชา</Text>
            <View style={styles.inputContainer}>
              <QrCode size={20} color={isFocused.cid ? "#4338ca" : "#9ca3af"} />
              <TextInput
                style={[
                  styles.input, 
                  isFocused.cid && styles.inputFocused,
                  { flex: 1 }
                ]}
                placeholder="กรอกรหัสวิชา (CID)"
                placeholderTextColor="#9ca3af"
                value={cid}
                onChangeText={setCid}
                onFocus={() => setIsFocused({...isFocused, cid: true})}
                onBlur={() => setIsFocused({...isFocused, cid: false})}
              />
              <TouchableOpacity 
                style={styles.scanButton} 
                onPress={handleScanQR}
                activeOpacity={0.7}
              >
                <QrCode size={18} color="#ffffff" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>รหัสนักศึกษา</Text>
            <View style={styles.inputContainer}>
              <School size={20} color={isFocused.stdid ? "#4338ca" : "#9ca3af"} />
              <TextInput
                style={[
                  styles.input, 
                  isFocused.stdid && styles.inputFocused
                ]}
                placeholder="กรอกรหัสนักศึกษา"
                placeholderTextColor="#9ca3af"
                value={stdid}
                onChangeText={setStdid}
                onFocus={() => setIsFocused({...isFocused, stdid: true})}
                onBlur={() => setIsFocused({...isFocused, stdid: false})}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>ชื่อ-นามสกุล</Text>
            <View style={styles.inputContainer}>
              <User size={20} color={isFocused.name ? "#4338ca" : "#9ca3af"} />
              <TextInput
                style={[
                  styles.input, 
                  isFocused.name && styles.inputFocused
                ]}
                placeholder="กรอกชื่อ-สกุล"
                placeholderTextColor="#9ca3af"
                value={name}
                onChangeText={setName}
                onFocus={() => setIsFocused({...isFocused, name: true})}
                onBlur={() => setIsFocused({...isFocused, name: false})}
              />
            </View>
          </View>

          <TouchableOpacity 
            style={styles.registerButton} 
            onPress={handleRegister}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={["#4338ca", "#3730a3"]}
              start={[0, 0]}
              end={[1, 0]}
              style={styles.buttonGradient}
            >
              <Text style={styles.registerButtonText}>ลงทะเบียน</Text>
              <PlusCircle size={20} color="#ffffff" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  gradientBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "ios" ? 50 : 20,
    paddingBottom: 10,
  },
  backButton: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: "#eef2ff",
  },
  headerTitleContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 40, // To offset the back button width
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1e3a8a",
    marginLeft: 10,
  },

  formContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    marginHorizontal: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 3,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 24,
    textAlign: "center",
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#4b5563",
    marginBottom: 8,
    paddingLeft: 2,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9fafb",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    padding: 14,
    fontSize: 16,
    color: "#1f2937",
  },
  inputFocused: {
    borderColor: "#4338ca",
  },
  scanButton: {
    backgroundColor: "#10b981",
    padding: 10,
    borderRadius: 10,
    marginLeft: 8,
  },
  registerButton: {
    marginTop: 10,
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#4338ca",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonGradient: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginRight: 10,
  },
  // Camera screen styles
  cameraContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  scanOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  scanFrame: {
    width: 250,
    height: 250,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  corner: {
    position: "absolute",
    width: 30,
    height: 30,
    borderColor: "#ffffff",
    borderWidth: 4,
  },
  cornerTL: {
    top: 0,
    left: 0,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderTopLeftRadius: 16,
  },
  cornerTR: {
    top: 0,
    right: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderTopRightRadius: 16,
  },
  cornerBL: {
    bottom: 0,
    left: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomLeftRadius: 16,
  },
  cornerBR: {
    bottom: 0,
    right: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderBottomRightRadius: 16,
  },
  scanText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 30,
    textAlign: "center",
  },
  closeButton: {
    marginTop: 40,
    backgroundColor: "#ef4444",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default AddCourse;