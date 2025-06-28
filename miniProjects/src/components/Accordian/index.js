import { useState } from 'react';
import './App.css'
import { FaPlus} from "react-icons/fa";
import { accordianData } from './Data';
export default function Accordian() {
  const [isSelected, setSelected] = useState();
  const [enableMulti, setEnableMulti] = useState(false)
  const [multiSelection, setMulti] = useState([]);
  const selectItem = (getId) => {
    setSelected(getId === isSelected ? null : getId);
  }
  const handleMulti = (getId) => {
    const current = [...multiSelection];
    const findIndex = current.indexOf(getId);
    if (findIndex === -1) current.push(getId)
    else current.splice(findIndex, 1);
    setMulti(current);
  }
  return (
    <>
      <div className='container'>
        <div className='accordion'>
          <button className='accBtn' onClick={() => setEnableMulti(!enableMulti)}>Enable Multi Selection</button>
          {
            accordianData.map((val) => (
              <div className='item' key={val.id}>
                <div>
                  <h4 style={{ display: 'inline' }}>{val.question}</h4>
                  <button onClick={enableMulti ? () => handleMulti(val.id) : () => selectItem(val.id)} style={{ float: 'right' }}><FaPlus /></button>
                </div>
                {
                  enableMulti ?
                    multiSelection.indexOf(val.id) !== -1 && (
                      <div>{val.answer}</div>
                    ) :
                    isSelected === val.id && (<div>{val.answer}</div>)
                }
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
