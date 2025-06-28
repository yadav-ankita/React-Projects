import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
export default function ModalShown({ modalState, setState }) {
  const toggleState = () => {
    setState(!modalState)
  }
  return (
    <>
      <div className='modalContainer'>
        <div className='modal'>
          <p>Modal Content</p>
          <span className='closeicon' onClick={toggleState}><AiOutlineClose /></span>
        </div>
      </div>
    </>
  )
}
