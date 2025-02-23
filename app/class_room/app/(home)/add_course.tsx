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
import { Camera, CameraView } from "expo-camera"; // ตรวจสอบการนำเข้า
import { PlusCircle, QrCode } from "lucide-react-native"; // ตรวจสอบการนำเข้า
import { getDatabase, ref, set } from "firebase/database";
import { auth } from "../../services/firebase";

const AddCourse = () => {
    const router = useRouter();
    const [cid, setCid] = useState("");
    const [stdid, setStdid] = useState("");
    const [name, setName] = useState("");
    const [scanning, setScanning] = useState(false);
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
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

            const db = getDatabase();
            const userRef = ref(db, `/classroom/${cid}/students/${user.uid}`);
            const userClassRef = ref(db, `/users/${user.uid}/classroom/${cid}`);

            await set(userRef, {
                stdid: stdid,
                name: name,
            });

            await set(userClassRef, {
                status: 2,
            });

            Alert.alert("สำเร็จ!", "ลงทะเบียนเข้าห้องเรียนเรียบร้อยแล้ว");
            router.replace("/(home)");
        } catch (error) {
            Alert.alert("เกิดข้อผิดพลาด", "ไม่สามารถลงทะเบียนได้");
            console.error(error);
        }
    };

    const handleScanQR = () => {
        if (hasPermission === false) {
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

            <CameraView style={StyleSheet.absoluteFillObject}
                barcodeScannerSettings={{
                    barcodeTypes: ["qr"],
                }}
            />
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>เพิ่มวิชาเรียน</Text>
            <TextInput
                style={styles.input}
                placeholder="กรอกรหัสวิชา (CID)"
                value={cid}
                onChangeText={setCid}
            />
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

            <TouchableOpacity style={styles.scanButton} onPress={handleScanQR}>
                <QrCode size={24} color="#ffffff" />
                <Text style={styles.scanButtonText}>สแกน QR Code</Text>
            </TouchableOpacity>

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
});

export default AddCourse;
