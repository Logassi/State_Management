// import { useState } from 'react'
import './App.css'
import LocalStorage from './localStorage/localStorage'
import SessionStorage from './sessionStorage/sessionStorage';
// import Local from './localState/local';
// import State from './localState/state';

function App() {
  const user = localStorage.getItem("user");
  const userSession = sessionStorage.getItem("tokenn");
  
  return (
    <>
    {user}
    <LocalStorage/>
    {userSession}
    <SessionStorage/>

     {/* <Local/>
     <State/> */}
    </>
  )
}

export default App
