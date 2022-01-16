
//ADD YOUR FIREBASE LINKS HERE
 
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBT-04euK8f-3_8gEyl5CsT2H-fJpnd4Eo",
  authDomain: "kpop-70646.firebaseapp.com",
  databaseURL: "https://kpop-70646-default-rtdb.firebaseio.com",
  projectId: "kpop-70646",
  storageBucket: "kpop-70646.appspot.com",
  messagingSenderId: "89621644071",
  appId: "1:89621644071:web:08d09ff295b3fe38d95f02"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
