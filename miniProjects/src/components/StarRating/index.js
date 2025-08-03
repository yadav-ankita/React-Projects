import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import '../../App.css'
export default function StarRating({ noOfStars }) {
    const [hover, setHover] = useState();
    const [rating, setRating] = useState();
    const handleMove = (idx) => {
        setHover(idx);
        console.log(idx);
    }
    const handleRating = (idx) => {
        setRating(idx);
        console.log(idx)
    }
    const handleleave = () => {
        setHover(rating);
        console.log(`the ratign is ${rating}`)
    }
    return (
        <div style={{textAlign:'center',marginTop:'100px'}}>
            <h3>Star Rating</h3>
            {
                [...Array(noOfStars)].map((_, idx) => {
                    return (
                        <FaStar
                            className={idx+1 <= (hover || rating) ? 'active' : 'inactive'}
                            key={idx+1}
                            size={40}
                            onMouseMove={() => handleMove(idx+1)}
                            onClick={() => handleRating(idx+1)}
                            onMouseLeave={handleleave}
                        />
                    )
                })
            }
        </div>
    )
}
