import './style.sass'
import React from 'react'
import { $plan } from '../cards'
import { plan } from '../../data'
import { Link } from 'react-router-dom'


export default function () {
    return <section id="plan" className='column-flex'>
        <div className="title">
            <h2>medication plan</h2>
        </div>
        <div className="content">
            {plan.map((items, key) => <$plan key={key} {...items} />)}
        </div>
        </section>}
