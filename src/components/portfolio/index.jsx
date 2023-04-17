import './style.sass'
import React from 'react'

import { portfolio } from '../../config'

export default function () {
    return <section id="portfolio">
        {portfolio.map(item => <div className='flex' key={item.title}>
            <h3>{item.data}</h3>
            <p>{item.title}</p>
        </div>)}
    </section>
} 
