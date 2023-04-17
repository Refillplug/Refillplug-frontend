import './style.sass'
import React from 'react'
import { Link } from 'react-router-dom'

import * as cards from '../cards'

export default function () {
    return <section id="plan" className='column-flex'>
        <div className="title">
            <h2>medication plan</h2>
        </div>
        <div className="content">
            {Array(10).fill(0).map((_, key) => <cards.plan key={key} />)}
        </div>
        <div className="btn"><Link to='/'>read more</Link></div>
    </section>
} 