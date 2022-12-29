import React, { useEffect, useState } from 'react'
import Message from './Message'
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from '../firebase'


const Chat = () => {
    const [messages, setMessages] = useState([]);


    useEffect(() => {
        const q = query(collection(db, "messages"));
        onSnapshot(q, (querySnapshot) => {
          const getMessages = [];
          querySnapshot.forEach((doc) => {
            getMessages.push({...doc.data(), id: doc.id});
          });
          setMessages(getMessages);
        });
    },[]);
    return (
        <div>
            <main className='flex flex-col'>
                {messages?.map((message) => (
                    <Message key={message.id} message={message} />
                ))}

            </main>
            <span>

            </span>
        </div>
    )
}

export default Chat