// Import Firebase methods and elements
import {
    getStorage,
    storage,
    ref,
    uploadBytes,
    getDownloadURL,
    createUserWithEmailAndPassword,
    auth,
    provider,
    GoogleAuthProvider, 
    signInWithPopup
} from "../../Firebase Auth/firebase.js";

// Import elements from HTML
const userFirstName = document.getElementById("firstName");
const userLastName = document.getElementById("lastName");
const userEmail = document.getElementById("emailUser");
const userPassword = document.getElementById("passwordUser");
const profileIcon = document.getElementById("profileIcon");
const profilePicture = document.getElementById("profilePicture");
const profileImage = document.getElementById("profileImage");
const profileContainer = document.getElementById("profileContainer");
const loadingSpinner = document.getElementById("loadingSpinner");
const signUpBtn = document.getElementById("signUp");
const googleSignUp = document.getElementById("googleSignUpBtn");

// Event listener to show the file input when the profile icon is clicked
profileContainer.addEventListener("click", () => {
    profilePicture.click();
});

profilePicture.addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (file) {
        const storageRef = ref(storage, 'profilePictures/' + file.name);
        try {
            loadingSpinner.classList.remove("hidden");
            profileIcon.classList.add("hidden");

            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);

            loadingSpinner.classList.add("hidden");

            profileImage.classList.remove("hidden");
            profileImage.src = downloadURL;
        } catch (error) {
            loadingSpinner.classList.add("hidden");
            profileIcon.classList.remove("hidden");
            console.error('Error uploading file:', error);
        }
    }
});

// Event listener for the sign-up button
signUpBtn.addEventListener("click", createUserAccount);

async function createUserAccount() {
    try {
        signUpBtn.innerText = "Account Creating...";
        signUpBtn.disabled = true;

        const userCredential = await createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value);
        const user = userCredential.user;

        const fullName = `${userFirstName.value} ${userLastName.value}`;

        window.location.href = "../../Authencation/For Login/login.html";
    } catch (error) {
        alert("Error In making Account: " + error.message);

        userFirstName.value = "";
        userLastName.value = "";
        userEmail.value = "";
        userPassword.value = "";

        signUpBtn.innerText = "Sign Up";
        signUpBtn.disabled = false;
    }
}

// Handle Google Sign-In
googleSignUp.addEventListener("click", signUpWithGoogle);

async function signUpWithGoogle() {
    try {
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        console.log('User:', user);
        console.log('Token:', token);

    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}
