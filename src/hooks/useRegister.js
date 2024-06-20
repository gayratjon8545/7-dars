import { auth } from "../firebase/firebaseConfig";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function useRegister() {
  const registerWithEmailPassword = async (userData) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );

      await updateProfile(auth.currentUser, {
        displayName: userData.displayName,
        photoURL: userData.photoURL,
      });
      const userCredential = result.user;
      //   dispatch({"LOG_IN", payload: userCredential})
    } catch (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    }
  };
  return { registerWithEmailPassword };
}

export { useRegister };
