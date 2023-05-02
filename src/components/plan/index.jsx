import './style.sass'
import React from 'react'
import { $plan } from '../cards'
import { Link } from 'react-router-dom'


export default function () {
    return <section id="plan" className='column-flex'>
        <div className="title">
            <h2>medication plan</h2>
        </div>
        <div className="content">
            {Array(10).fill(0).map((_, key) => <$plan key={key} />)}
        </div>
        <div className="btn"><Link to='/'>read more</Link></div>
    </section>
} 
