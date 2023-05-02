import './style.sass'
import React from 'react'
import { $review } from '../cards'
import { customer } from '../../data'

export default function () {
    return <section id="review" className='column-flex'>
        <div className="title">
            <h2>What our Customers Say</h2>
        </div>
        <div className="content">
            {customer.map((item, key) => <$review key={key} {...item} />)}
        </div>
    </section>
} 
