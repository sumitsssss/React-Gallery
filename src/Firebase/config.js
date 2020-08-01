import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAPD16Pap9VAMK3OT2caXdSH15geg1nmtw",
  authDomain: "react-gallery-d43fe.firebaseapp.com",
  databaseURL: "https://react-gallery-d43fe.firebaseio.com",
  projectId: "react-gallery-d43fe",
  storageBucket: "react-gallery-d43fe.appspot.com",
  messagingSenderId: "1036473326854",
  appId: "1:1036473326854:web:28eaebff5563b327569287",
};

firebase.initializeApp(firebaseConfig);

export const projectFirestore = firebase.firestore();
export const projectStorage = firebase.storage();
export const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
