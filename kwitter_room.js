const firebaseConfig = {
    apiKey: "AIzaSyD3koNW8Y8P1R-L_0SlMM3d49bBdiZpQV8",
    authDomain: "project-93-kwitter-ddf82.firebaseapp.com",
    projectId: "project-93-kwitter-ddf82",
    storageBucket: "project-93-kwitter-ddf82.appspot.com",
    messagingSenderId: "623914366990",
    appId: "1:623914366990:web:c75580070f5ad9f6fae45f"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!"; 

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    
           console.log("Room Name - " + Room_names);
           row = "<div class= 'room_name' id= "+ Room_names + " onclick= 'redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>";
           document.getElementById("output").innerHTML += row;
    
    });});}
    getData();
    
  function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
   });
   localStorage.setItem("room_name" , room_name);
   window.location = "kwitter_page.html";
 }

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
} 


function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

  