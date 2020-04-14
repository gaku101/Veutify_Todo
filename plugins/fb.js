import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM405xsa18XmdM3krNxzGcHjZY2XvGDbk",
  authDomain: "vuetifytodo-fc6c6.firebaseapp.com",
  databaseURL: "https://vuetifytodo-fc6c6.firebaseio.com",
  projectId: "vuetifytodo-fc6c6",
  storageBucket: "vuetifytodo-fc6c6.appspot.com",
  messagingSenderId: "387907923471",
  appId: "1:387907923471:web:194fa4c17648947026fd7a",
  measurementId: "G-EJK21JZFRD"
};
// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// firebase.initializeApp(firebaseConfig)
// firebase.analytics();
const db = firebase.firestore();

// db.settings({ timestampsInSnapshots: true})

export default db;