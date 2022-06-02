import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANPgikoDThRN3Vcw_8VLjTkKgQHQx8DiY",
  authDomain: "finance-tracker-38980.firebaseapp.com",
  projectId: "finance-tracker-38980",
  storageBucket: "finance-tracker-38980.appspot.com",
  messagingSenderId: "83113766899",
  appId: "1:83113766899:web:dcc574bac0ef766b97ac86",
};

//init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
