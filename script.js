import{ getAuth , onAuthStateChanged } from "./Firebase Auth/firebase.js"

        // Check if user is already SignIn or not
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user) {
           console.log("User is hear")
           window.location.href = './Registered User/registeredUser.html';
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            // ...
          } else {
           console.log("User is not hear")
            // User is signed out
            // ...
          //  window.location.href = '/index.html';

          }
        });
        