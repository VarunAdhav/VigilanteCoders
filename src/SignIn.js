import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import {getAuth  ,  signInWithEmailAndPassword , sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import {getDatabase , ref , get ,child  } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";

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
  

  document.getElementById("SignIn").addEventListener('click' , SignIn);
  function SignIn(){
    const EmailId = document.getElementById("emailid").value;
    const Password = document.getElementById("Password").value;
    signInWithEmailAndPassword(auth, EmailId, Password)
    .then((userCredential) => {
      
      const user = userCredential.user;
      
      const dbRef = ref(getDatabase());
      var userId = user.uid;
      console.log(userId);
      localStorage.setItem("UserId" , userId);
      get(child(dbRef, `Users/${userId}`)).then((snapshot) => {
        if (snapshot.exists()) {
          //console.log(snapshot.val());
          var Name = snapshot.val().FirstName + " " + snapshot.val().LastName;
          //console.log(Name);
          localStorage.setItem("Name" , Name);
        } else {
          console.log("No data available");
        }
        window.location.href = '/dist/Menu.html';
      }).catch((error) => {
        console.error(error);
      });

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
  }

  document.getElementById("FrgPass").addEventListener('click' , ForgotPassword);
  function ForgotPassword(){
    const email = document.getElementById("emailid").value;
    sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      //console.log('Check mail');
      alert('Link to reset your password is sent to '+email);
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorMessage);
    });
  }