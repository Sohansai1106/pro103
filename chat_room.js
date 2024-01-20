const firebaseConfig = {
    apiKey: "AIzaSyCr67_ZkRZdrS0H8-7lC0g_jrQC2UKGb-Y",
    authDomain: "project102-9143f.firebaseapp.com",
    databaseURL: "https://project102-9143f-default-rtdb.firebaseio.com",
    projectId: "project102-9143f",
    storageBucket: "project102-9143f.appspot.com",
    messagingSenderId: "590948407187",
    appId: "1:590948407187:web:edac68769aa2227d21ba66"
  };

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
        localStorage.setItem("room_name" , room_name);

        window.location ="chat_room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
  console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
  document.getElementById("output").innerHTML +=row;
 //End code
 });});}
getData();    


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "chat_page.html";
}
