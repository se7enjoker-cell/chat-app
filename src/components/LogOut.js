import React from 'react'
import { signOut } from "firebase/auth";
import {auth} from '../firebase'

const LogOut = () => {
    const googleLogOut = () => {
        signOut(auth);
    }

    const style = {
        wrapper: 'bg-slate-100 px-2 py-2 rounded-md hover:bg-slate-400'
    }
  return (
    <button onClick={googleLogOut} className={style.wrapper}>
        Log Out
    </button>
  )
}

export default LogOut