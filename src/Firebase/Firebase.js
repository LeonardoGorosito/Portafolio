import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAr7-xAJB0y6x92gTDlI-dPSdmgQ4kDJps",
  authDomain: "portafilioleog.firebaseapp.com",
  projectId: "portafilioleog",
  storageBucket: "portafilioleog.appspot.com",
  messagingSenderId: "240679313740",
  appId: "1:240679313740:web:d043c40a8a8827c1c1afe9"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
