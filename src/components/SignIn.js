import React from 'react'
import GoogleButton from 'react-google-button'
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import {auth} from '../firebase'



const SignIn = () => {
    const googleSingIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }

    const style = {
        wrapper: 'flex justify-center'
    }
  return (
    <div>
        <GoogleButton onClick={googleSingIn} className={style.wrapper} />
    </div>
  )
}

export default SignIn