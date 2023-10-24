import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhl0CRbGMFrPjDOJ7UI7B75KTJO-_j4o0",
  authDomain: "spark-ai-7695a.firebaseapp.com",
  projectId: "spark-ai-7695a",
  storageBucket: "spark-ai-7695a.appspot.com",
  messagingSenderId: "184845609254",
  appId: "1:184845609254:web:22b18452bb31fcc65f79e7",
  measurementId: "G-G7SFZ4J997"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
