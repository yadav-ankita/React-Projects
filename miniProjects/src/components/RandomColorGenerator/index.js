import React, { useState } from 'react'
import ShortUniqueId from 'short-unique-id';
import axios from 'axios';
import './App.css'
export default function RandomColorGen() {
    const uid = new ShortUniqueId({ length: 6, dictionary: 'hex' });
    const [hex, setHex] = useState(true);
    const [rgb, setRgb] = useState(false);
    const [colorVal, setColorVal] = useState("#ECEDB0");
    const handleHex = () => {
        setHex(true);
        setRgb(false);
    }
    const handleRgb = () => {
        setRgb(true);
        setHex(false);
    }
    const generateColor = async () => {
        const hexCode = uid.rnd();
        console.log(hexCode);
        try {
            if (rgb) {
                const { data: { rgb: { value } } } = await axios.get(`https://www.thecolorapi.com/id?hex=${hexCode}`);
                console.log(value);
                setColorVal(value);
            }
            else {
                const { data: { hex: { value } } } = await axios.get(`https://www.thecolorapi.com/id?hex=${hexCode}`);
                console.log(value);
                setColorVal(value);
            }
        } catch (error) {
            console.log("the error is ", error);
        }
    }
    return (
        <div className='container' style={{backgroundColor:colorVal}}>
            <div className='colorGen'>
                <button onClick={handleHex}>Create Hex Color</button>
                <button onClick={handleRgb}>Create RGB Color</button>
                <button onClick={generateColor}>Create Random Color</button>
            </div>
            <div>
                {
                    hex ? <p style={{ color: 'black' }}>HEX COLORS</p> : <p style={{ color: 'black' }}>RGB COLORs</p>
                }
            </div>
            <div>
                {
                    colorVal ? <p style={{ color: 'black' }}>{colorVal}</p> : <p style={{ color: 'black' }}>{colorVal}</p>
                }
            </div>
        </div>
    )
}
