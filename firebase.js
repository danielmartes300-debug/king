// Importaciones Firebase v10
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCSVi5P_io7AQoRnmD3Pza9rFtAeraIciA",
  authDomain: "panel-f09d2.firebaseapp.com",
  projectId: "panel-f09d2",
  storageBucket: "panel-f09d2.firebasestorage.app",
  messagingSenderId: "753858794234",
  appId: "1:753858794234:web:f6d34f2921e99db5b92f43",
  measurementId: "G-3GPEF5PGJT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
