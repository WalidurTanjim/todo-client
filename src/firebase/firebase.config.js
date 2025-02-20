import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCkdvIwpUCegj3n6paOqC5_ICnHm5BM3LY",
  authDomain: "task-management-scic-34e1f.firebaseapp.com",
  projectId: "task-management-scic-34e1f",
  storageBucket: "task-management-scic-34e1f.firebasestorage.app",
  messagingSenderId: "38774018732",
  appId: "1:38774018732:web:969abece4e9f3f3d250509"
};

const app = initializeApp(firebaseConfig);
const appAuth = getAuth(app);
export default appAuth;