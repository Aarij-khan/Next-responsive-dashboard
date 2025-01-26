import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCOllNdwlj903fOX6MfRo8om5AJ4Vm5x8U",
  authDomain: "fir-project-b4b78.firebaseapp.com",
  projectId: "fir-project-b4b78",
  storageBucket: "fir-project-b4b78.firebasestorage.app",
  messagingSenderId: "166483299834",
  appId: "1:166483299834:web:5441d96decfeb989e76843"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);