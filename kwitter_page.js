    const firebaseConfig = {
        apiKey: "AIzaSyD3koNW8Y8P1R-L_0SlMM3d49bBdiZpQV8",
        authDomain: "project-93-kwitter-ddf82.firebaseapp.com",
        projectId: "project-93-kwitter-ddf82",
        storageBucket: "project-93-kwitter-ddf82.appspot.com",
        messagingSenderId: "623914366990",
        appId: "1:623914366990:web:c75580070f5ad9f6fae45f"
      };

          // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");


function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
    });
    document.getElementById("msg").value = "";
}
