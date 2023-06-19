import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJNWCc1Qn0AjUhtmIjohE36rttxnO5OkY",
  authDomain: "yarn-chat-6aeb1.firebaseapp.com",
  projectId: "yarn-chat-6aeb1",
  storageBucket: "yarn-chat-6aeb1.appspot.com",
  messagingSenderId: "763393784644",
  appId: "1:763393784644:web:d3dba971de3c28dac07511"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
