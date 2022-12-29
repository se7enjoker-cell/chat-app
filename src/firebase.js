import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAhHllHSD1V5BPZb3_Rae1YHwt_w1LH34U",
  authDomain: "chat-app-6d0aa.firebaseapp.com",
  projectId: "chat-app-6d0aa",
  storageBucket: "chat-app-6d0aa.appspot.com",
  messagingSenderId: "247000822432",
  appId: "1:247000822432:web:4a800c0265565bfc9ccfc5",
  measurementId: "G-7SEPJD1XDB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const db = getFirestore(app);
