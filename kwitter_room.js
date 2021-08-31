
const firebaseConfig = {
      apiKey: "AIzaSyBeWKN9m2Lqi11jZHhjCP2BwD1k_A9TvG0",
      authDomain: "kwitter-d8f4f.firebaseapp.com",
      databaseURL: "https://kwitter-d8f4f-default-rtdb.firebaseio.com",
      projectId: "kwitter-d8f4f",
      storageBucket: "kwitter-d8f4f.appspot.com",
      messagingSenderId: "472086760901",
      appId: "1:472086760901:web:50cff1f2b9b155dae30fac"
    };
   
    firebase.intializeApp(config);
   user_name = localStorage.getItem(user_name);

function getData() 
{
      firebase.database().ref("/").on('value', 
      function(snapshot) 
{
      document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) 

{ 
      childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
