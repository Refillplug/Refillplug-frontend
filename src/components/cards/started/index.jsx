import './style.sass'
import React from 'react'

export default function ({ num = 0, image, title }) {
    return <div className="started">
        <span className="num">{num}.</span>
        <img src={image} alt="" />
        <h3>{title}</h3>
    </div>
} 
