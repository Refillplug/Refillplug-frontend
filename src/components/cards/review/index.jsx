import './style.sass'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'

export default function ({ rating, image, name, quote }) {
    return <div className="review-card">
        <div className="image"><img src={image} alt="" /></div>
        <div className="heading">
            <h3>{name}</h3>
            <div className="ratings">
                {Array(5).fill(0).map((_, id) => <AiFillStar key={id} className={id < rating ? 'rated' : ''} />)}
            </div>
        </div>
        <p>
            {quote}
        </p>
    </div>
} 
