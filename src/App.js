import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import {auth} from './firebase'
import Chat from "./components/Chat";
import SendMessage from "./components/SendMessage";


function App() {
  const style = {
    appContainer: "max-w-[728px] mx-auto text-center",
    sectionContainer: "h-[90vh] bg-slate-200 mt-[20px] rounded-md shadow-md relative" 
  }

  const ref = useRef(99)
  console.log(ref.current);
  return (
    <div className={style.appContainer}>
        <section className={style.sectionContainer}>
          <Navbar/>
          <Chat/>
          <SendMessage/>
        </section>
    </div>
  );
}

export default App;
