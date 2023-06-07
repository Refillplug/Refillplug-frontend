import './style.sass'
import React from 'react'

export default function ({ title, validility, description, price }) {
    return <div className="plan">
        <h3>{title}</h3>
        <p>
            {description}
        </p>
        <div className="info">
            <span className="month">{validility}</span>
            <span className="price">
               ₦{price}
            </span>
        </div>
    </div>
} 
