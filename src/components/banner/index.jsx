import './style.sass'
import React from 'react'
import { Link } from 'react-router-dom'

import { banner } from '../../config'

export default function () {
    return <section id="banner">
        <div className="txt">
            <h2>
                Need to talk to a <span>pharmacist</span> or get a drug prescription?
            </h2>
            <p>
                Enjoy personalised treatment plans with automated refills, free deliveries and ongoing support from our Care Specialists
            </p>
            <div className="btn">

                <Link to='/'>get now</Link>
                <Link to='/'>view plan</Link>
            </div>
        </div>
        <div className="img">
            <img src={banner} alt="" />
        </div>
    </section>
}
