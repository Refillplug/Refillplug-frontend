import './style.sass'
import React from "react"
import * as forms from '../forms'

import { subscribe, subscribeConfig } from '../../config'

export default function () {
    // states
    const [data, setData] = React.useState({})

    // methods
    const handleChange = ({ currentTarget: t }) => setData(prev => ({ ...prev, [t.name]: t.value }))
    return <section id="subscribe" className="column-flex">
        <div className="title">
            <h2>Subscribe to our newsletter</h2>
        </div>
        <div className="content">
            <div className="image"><img src={subscribe} alt="" /></div>
            <forms.form {...subscribeConfig} onChange={handleChange} style={{ form: { boxShadow: 'none' } }} />
        </div>
    </section>
} 
