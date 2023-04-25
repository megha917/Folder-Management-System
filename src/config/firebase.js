import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBVWSXlIvRGRvPLX-OwGWCEStrMOfOQM50",
  authDomain: "folder-management-11592.firebaseapp.com",
  databaseURL: "https://folder-management-11592-default-rtdb.firebaseio.com",
  projectId: "folder-management-11592",
  storageBucket: "folder-management-11592.appspot.com",
  messagingSenderId: "690232300720",
  appId: "1:690232300720:web:c38eec9ebc388383c35775",
};

const fire = firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export const database = {
  users: firestore.collection("users"),
  date: firebase.firestore.FieldValue.serverTimestamp(),
};

export const storage = firebase.storage();

export default fire;
