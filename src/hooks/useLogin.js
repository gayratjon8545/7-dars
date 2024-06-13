import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useGlobalContext } from "./useGlobalContext";
import { auth } from "../firebase/firebaseConfig";

function useLogin() {
  const { dispatch } = useGlobalContext();
  const signUpWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      dispatch({ type: "LOG_IN", payload: user });
    } catch (error) {
      const errorMessage = error.message;
    }
  };
  return { signUpWithGoogle };
}

export { useLogin };
