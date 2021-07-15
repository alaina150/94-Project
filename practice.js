// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB7-5W1jqNtxmBejDGLGlG1I5fcrb5Ycgw",
  authDomain: "class-94-134ca.firebaseapp.com",
  projectId: "class-94-134ca",
  storageBucket: "class-94-134ca.appspot.com",
  messagingSenderId: "601750517116",
  appId: "1:601750517116:web:7fac22fa4596227c7ce0f9"
};
firebase.initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}
