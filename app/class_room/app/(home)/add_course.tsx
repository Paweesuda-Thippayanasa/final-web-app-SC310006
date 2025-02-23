import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { CameraView, useCameraPermissions } from "expo-camera"; // Updated import
import { PlusCircle, QrCode } from "lucide-react-native";
import { getDatabase, ref, set } from "firebase/database";
import { auth } from "../../services/firebase";
import { addStudentToCourse } from "../../services/firebaseCourse";

const AddCourse = () => {
    const router = useRouter();
    const [cid, setCid] = useState("");
    const [stdid, setStdid] = useState("");
    const [name, setName] = useState("");
    const [scanning, setScanning] = useState(false);
    const [facing, setFacing] = useState<'back' | 'front'>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [hasPermission, setHasPermission] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await requestPermission();
            setHasPermission(status === "granted");
        })();
    }, []);

    const handleRegister = async () => {
        if (!cid || !stdid || !name) {
            Alert.alert("กรุณากรอกข้อมูลให้ครบถ้วน");
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

            Alert.alert("สำเร็จ!", "ลงทะเบียนเข้าห้องเรียนเรียบร้อยแล้ว");
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

    if (scanning) {
        return (
            <CameraView
                style={StyleSheet.absoluteFillObject}
                facing={facing}
                onBarcodeScanned={handleBarCodeScanned}
                barcodeScannerSettings={{
                    barcodeTypes: ["qr"],
                }}
            >
                <View style={styles.scanContainer}>
                    <TouchableOpacity style={styles.closeButton} onPress={() => setScanning(false)}>
                        <Text style={styles.closeButtonText}>ปิด</Text>
                    </TouchableOpacity>
                </View>
            </CameraView>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>เพิ่มวิชาเรียน</Text>

            <View style={styles.inputContainer} >
                <TextInput
                    style={[styles.input, { flex: 1 }]}
                    placeholder="กรอกรหัสวิชา (CID)"
                    value={cid}
                    onChangeText={setCid}
                />
                <TouchableOpacity style={styles.scanButton} onPress={handleScanQR}>
                    <QrCode size={24} color="#ffffff" />
                    {/* <Text style={styles.scanButtonText}>สแกน QR Code</Text> */}
                </TouchableOpacity>
            </View>

            <TextInput
                style={styles.input}
                placeholder="กรอกรหัสนักศึกษา"
                value={stdid}
                onChangeText={setStdid}
            />
            <TextInput
                style={styles.input}
                placeholder="กรอกชื่อ-สกุล"
                value={name}
                onChangeText={setName}
            />


            <TouchableOpacity style={styles.addButton} onPress={handleRegister}>
                <PlusCircle size={24} color="#ffffff" />
                <Text style={styles.addButtonText}>ลงทะเบียน</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8fafc",
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
        color: "#1e3a8a",
    },
    inputContainer: {
        flexDirection: "row",  // This makes the elements align in a row
        alignItems: "center",  // Vertically center the elements
        width: "100%",  // Full width to make them fill horizontally
    },
    input: {
        width: "100%",
        padding: 12,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        marginBottom: 16,
        backgroundColor: "#fff",
    },
    scanButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#10b981",
        padding: 12,
        borderRadius: 8,
        marginBottom: 16,
        marginLeft: 8,
    },
    scanButtonText: {
        color: "#fff",
        fontSize: 16,
        marginLeft: 8,
    },
    addButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#3b82f6",
        padding: 12,
        borderRadius: 8,
    },
    addButtonText: {
        color: "#fff",
        fontSize: 16,
        marginLeft: 8,
    },
    scanContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 24,
    },
    closeButton: {
        backgroundColor: "#3b82f6",
        padding: 12,
        borderRadius: 8,
    },
    closeButtonText: {
        color: "#fff",
        fontSize: 16,
    },
});

export default AddCourse;