import admin from 'firebase-admin'

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

const serviceAccount = require('../service_account.json');



try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  })
  console.log('Initialized.')
} catch (error) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error.message)) {
    console.error('Firebase admin initialization error', error.stack)
  }
}

export default admin
