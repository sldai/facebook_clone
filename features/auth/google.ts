import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';

const provider = new GoogleAuthProvider();

export async function signIn() {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential!.accessToken;
    // The signed-in user info.
    const user = result.user;
  } catch (error: any) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
  }
}
