import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";

const extra = Constants.expoConfig?.extra;
if (!extra) {
  throw new Error("expoConfig.extra is undefined. Check your app.json.");
}

const firebaseConfig = {
  apiKey: extra.API_KEY,
  authDomain: extra.AUTH_DOMAIN,
  projectId: extra.PROJECT_ID,
  storageBucket: extra.STORAGE_BUCKET,
  messagingSenderId: extra.MESSAGING_SENDER_ID,
  appId: extra.APP_ID,
  measurementId: extra.MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
