
 const firebaseConfig = {
   apiKey: "AIzaSyDVUpTkTEapEyGetVotBsd8jgEfboBmBoU",
   authDomain: "project-92-1d47f.firebaseapp.com",
   projectId: "project-92-1d47f",
   storageBucket: "project-92-1d47f.appspot.com",
   messagingSenderId: "970057772608",
   appId: "1:970057772608:web:5cf024389c720d342e39a5"
 };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();

