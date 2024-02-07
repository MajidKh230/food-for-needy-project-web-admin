import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC2Vb05LuhLqqWUsadhKrxyZB7zzMFupK8",
    authDomain: "khana-saab-ky-liye.firebaseapp.com",
    projectId: "khana-saab-ky-liye",
    storageBucket: "khana-saab-ky-liye.appspot.com",
    messagingSenderId: "737836427024",
    appId: "1:737836427024:web:3eb85cdc6765aa5787a795"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }


