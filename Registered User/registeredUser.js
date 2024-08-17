import { getAuth, onAuthStateChanged , databaseRef , getDatabase , get , signOut } from "../Firebase Auth/firebase.js";

const auth = getAuth();
const database = getDatabase();

onAuthStateChanged(auth, (user) => {
  const userRef = databaseRef(database, 'UserData/' + user.uid);
    console.log(user.uid, "user");
     get(userRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          console.log("User Data Retrieved: ", userData);

         displayUserData(userData)
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        onAuthStateChanged()
      });
  });
  
function displayUserData(userData) {
  console.log("Displaying user data: ", userData);
  
  document.getElementById('studentName').textContent = userData.firstName + " " + userData.lastName;
  document.getElementById('profilePicture').src = userData.profileImageUrl;
}

// LogOut
document.getElementById('logOutBtn').addEventListener('click', () => {
     const auth = getAuth();
     signOut(auth).then(() => {

       alert("Sign-out successful")
       window.location.href = "../index.html"
     }).catch((error) => {
      alert("Face Problem in SignOut")
    });
 }); 
