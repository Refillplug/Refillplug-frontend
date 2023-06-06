import './style.sass'
import React from 'react'
import { Link } from 'react-router-dom'

import { banner } from '../../config'

export default function () {
    return <section id="banner">
        <div className="txt">
            <h2>
                Do you need to personalise your <span>prescription plan</span> or never want to run out of your medications?
            </h2>
            <p>
                Enjoy personalised medication plans with automated refills, free deliveries and ongoing support from healthcare Specialists
            </p>
            <div className="btn">

                <Link to='/'>buy now</Link>
                <Link to='/'>view plans</Link>
            </div>
        </div>
        <div className="img">
            <img src={banner} alt="" />
        </div>
    </section>
}
