import React from 'react'
import LogOut from './LogOut'
import SignIn from './SignIn'
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../firebase'


const Navbar = () => {
    const style = {
        nav: 'bg-gray-800 h-20 flex items-center p-4 flex justify-between',
        heading: 'text-white text-3xl'
    }

    const [user] = useAuthState(auth);


  return (
    <div className={style.nav}>
        <h1 className={style.heading}>Chat App</h1>
        {user ? <LogOut/> : <SignIn/>}
    </div>
  )
}

export default Navbar