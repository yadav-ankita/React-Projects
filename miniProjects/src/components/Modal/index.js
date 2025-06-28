import React, { useState } from 'react'
import './App.css'
import ModalShown from './ModalShown'
export default function Modal() {
  const [showModal,setShowModal]=useState(false)
  const toggleState=()=>{
      setShowModal(!showModal);
  }
  return (
    <div className='container'>
           <div>
               <button className='modalBtn' onClick={toggleState}>Open Modal</button>
                {
                   showModal && <ModalShown modalState={showModal} setState={setShowModal}/>
                }
           </div>
    </div>
  )
}
