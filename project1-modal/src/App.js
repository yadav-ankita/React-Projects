import React, { useState } from 'react'
import './App.css'
import Modal from './components/Modal'
export default function App() {
  const [showModal,setShowModal]=useState(false)
  const toggleState=()=>{
      setShowModal(!showModal);
  }
  return (
    <div className='container'>
           <div>
               <button className='modalBtn' onClick={toggleState}>Open Modal</button>
                {
                   showModal && <Modal modalState={showModal} setState={setShowModal}/>
                }
           </div>
    </div>
  )
}
