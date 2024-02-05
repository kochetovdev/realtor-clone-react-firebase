// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPzss_hnfrGBWC4TyUxEq2Dyk7cfrbU4A",
  authDomain: "realtor-clone-react-e3c6a.firebaseapp.com",
  projectId: "realtor-clone-react-e3c6a",
  storageBucket: "realtor-clone-react-e3c6a.appspot.com",
  messagingSenderId: "1052736368812",
  appId: "1:1052736368812:web:06a0bd2929655df516af09",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
