import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import {getAuth , createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import {getDatabase } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";

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
  const DB = getDatabase(firebaseapp);

  var btnnext = document.getElementById("next");
  btnnext.addEventListener('click' , next);
  //console.log('out');
  function next(){
    //console.log('in');
    const EmailId = document.getElementById("emailid").value;
    const Password = document.getElementById("Password").value;
    const ConfirmPassword = document.getElementById("ConfirmPassword").value;

    if(validateEmail(EmailId) == false){
      alert("Please enter a valid Email Id");
      return;
    }
    if(PasswordMatch(Password, ConfirmPassword) == false){
      alert("Passwords doesn't match...");
      return;
    }
    if(Validate(EmailId , Password , ConfirmPassword) == false){
      if(EmailId == null){
        alert('Please fill Email Id Field!!!')
        return;
      }
      if(Password == null){
        alert('Please fill Password Field!!!')
        return;
      }
      if(ConfirmPassword == null){
        alert('Please fill Email Id Field!!!');
        return;
      }
    }
    window.location.href = "/dist/SignUp.html";
    localStorage.setItem("Email" , EmailId);
    localStorage.setItem("Password" , Password);
    //console.log('1');
  }

  
  


//Validate Funtions
function validateEmail(Email){
  const exp = /^[^@]+@\w+(\.\w+)+\w$/;
  if(exp.test(Email) == true){
      return true;
  }else{
      return false;
  }
}
 
function PasswordMatch(Password , ConfirmPassword){
  if(Password != ConfirmPassword){
      return false;
  }else{
      return true;
  }
}   
function Validate(Email , Password , ConfirmPassword){
  if(Email == null || Password == null || ConfirmPassword == null){
    return false;
  }
}