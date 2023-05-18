import './style.sass'
import React from 'react'
import { $started } from '../cards'
import { started } from '../../data'
// import { Link } from 'react-router-dom'


export default function () {
    return <section id="started" className='column-flex'>
        <div className="title">
            <h2>get started</h2>
        </div>
        <div className="content">
            {started.map((item, key) => <$started key={key} num={++key} {...item} />)}
        </div>
    </section>
} 
