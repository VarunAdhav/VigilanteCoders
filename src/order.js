import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import {getAuth  ,  signInWithEmailAndPassword , sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import {getDatabase , ref , set ,child  } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";

const firebaseapp = initializeApp({
    apiKey: "AIzaSyD4R56cce3iLf3U_KWex5yhky_Wn2U2uo4",
    authDomain: "vigilantecoders.firebaseapp.com",
    databaseURL: "https://vigilantecoders-default-rtdb.firebaseio.com",
    projectId: "vigilantecoders",
    storageBucket: "vigilantecoders.appspot.com",
    messagingSenderId: "1027873335526",
    appId: "1:1027873335526:web:d25a5d0973a849d7667327",
    measurementId: "G-9X8TB6YMTS"
  });
  
  // Initialize Firebase
  const auth = getAuth(firebaseapp);
  const db = getDatabase(firebaseapp);

  
  console.log(localStorage.getItem("UserId"));

 document.getElementById("Order").addEventListener('click' , Order)

 function Order(){
    const BreakFast = document.getElementById("breakfast").value;
    const Lunch = document.getElementById("lunch").value;
    const Dinner = document.getElementById("dinner").value;

    var UserID = localStorage.getItem("UserId")

    orderdb(UserID ,BreakFast , Lunch , Dinner )
 }

function orderdb(userid, BreakFast , Lunch , Dinner){
    var userId = userid
    console.log(userid);
    set(ref(db , 'Users/'+userId+'/Preset' , userId) , {
        BreakFast  : BreakFast,
        Lunch   : Lunch,
        Dinner    : Dinner,
    });
    console.log('Success');
  }