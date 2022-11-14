import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "school-management-system-f4c7d.firebaseapp.com",
  projectId: "school-management-system-f4c7d",
  storageBucket: "school-management-system-f4c7d.appspot.com",
  messagingSenderId: "114509342567",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
