import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAc1mSAPH1gi8YoJS9HgzHTOT9L0Vvpho",
  authDomain: "quiz-6783e.firebaseapp.com",
  projectId: "quiz-6783e",
  storageBucket: "quiz-6783e.appspot.com",
  messagingSenderId: "566235343037",
  appId: "1:566235343037:web:4007ca1748a84f758f6fd4",
  measurementId: "G-8QLBKXTRL6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
