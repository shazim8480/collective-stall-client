import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeLoginFramework = () => {
  // condition for not appearing "firebase default" prompt every time//
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
};

//google sign in method //
export const handleGoogleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return (
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        const { displayName, email, photoURL } = res.user;
        const signedInUser = {
          isLoggedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
          success: true,
        };
        return signedInUser;

        //   console.log(displayName, email, photoURL);
      })
      //handle error//
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      })
  );
};

// for sign in//
export const signInWithEmailAndPassword = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      // Signed in
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.success = true;
      return newUserInfo;
      //   console.log("User info", res.user);
    })
    .catch((error) => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // // ..
    });
};
