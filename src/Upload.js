import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import {getAuth  ,  createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import {getDatabase , ref , set , get , child} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";

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

document.getElementById("Sign").addEventListener('click' , Upload);
console.log('out');
function Upload(){
  console.log('in');
  const EmailId = localStorage.getItem("Email");
  const Password = localStorage.getItem("Password");
  const Fname = document.getElementById("Fname").value;
  const Lname = document.getElementById("Lname").value;
  const PhNo = document.getElementById("PhNo").value;
  const Gender = document.getElementById("Gender").value;
  
  console.log('now to auth');
  createUserWithEmailAndPassword(auth , EmailId , Password);
    var User = auth.currentUser;
    const userId = User.uid; 
  
  db(Fname , Lname , EmailId , PhNo , Gender);
  /*alert("Your account is Signed Up successfully...")
  window.location.href = "/dist/SignIn.html";*/

  const dbRef = ref(getDatabase());
      //var userId = user.uid;
      //console.log(userId);
      get(child(dbRef, `Users/${userId}`)).then((snapshot) => {
        if (snapshot.exists()) {
          //console.log(snapshot.val());
          var Name = snapshot.val().FirstName + " " + snapshot.val().LastName;
          //console.log(Name);
          localStorage.setItem("Name" , Name);
          setTimeout( function() { window.location.href = "/dist/Welcome.html" }, 5000 );
        } else {
          console.log("No data available");
        }
        //window.location.href = '/dist/Welcome.html';
      }).catch((error) => {
        console.error(error);
      });

  //setTimeout( function() { window.location.href = "/dist/Welcome.html" }, 5000 );


}

function db(Fname , Lname , EmailId , PhNo , Gender){
  var User = auth.currentUser;
  const userId = User.uid; 
  console.log('now to DB data '+userId);
  set(ref(DB , 'Users/'+userId , userId) , {
      
      FirstName  : Fname,
      LastName   : Lname,
      EmailID    : EmailId,
      PhoneNumber: PhNo,
      Gender     : Gender
  });
  console.log('Success');
}