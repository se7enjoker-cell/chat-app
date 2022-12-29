import React, { useState } from 'react'
import { doc, collection, addDoc, Timestamp } from "firebase/firestore"; 
import {auth} from '../firebase'
import {db} from '../firebase'

const SendMessage = () => {
    const style = {
        form: 'w-full flex absolute bottom-0 max-w-[728px] h-14',
        input: 'w-[80%] bg-slate-800 text-white outline-none border-none px-2',
        button: 'w-[20%] h-full m-auto bg-green-300'
    }
    const [input, setInput] = useState('');
    const SendMessage = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "messages"), {
            text: input,
          });
    }

  return (
    <form className={style.form} onSubmit={SendMessage}>
        <input onChange={(e) => setInput(e.target.value)} className={style.input} placeholder='Message' type='text' />
        <button className={style.button} type='submit'>Send</button>
    </form>
  )
}

export default SendMessage