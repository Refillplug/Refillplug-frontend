import './style.sass'
import React from "react"
import * as forms from '../forms'

import { api } from '../../utils' // api util
import { subscribe, subscribeConfig } from '../../config'

export default function () {
    // states
    const [state, setState] = React.useState({ error: null, load: false });

    // methods
    const handleSubmit = async data => {
        setState(prev => ({ ...prev, load: true }));
        try {
            let res = await api.post('newsletter/subscribe/', data);
            console.log(res?.subscribed);
            setState(prev => ({ load: false, error: null }));
        } catch (error) { setState(prev => ({ load: false, error })) }
    };

    return <section id="subscribe" className="column-flex">
        <div className="title">
            <h2>Subscribe to our newsletter</h2>
        </div>
        <div className="content">
            <div className="image"><img src={subscribe} alt="" /></div>
            <forms.form {...subscribeConfig} style={{ form: { boxShadow: 'none' } }} onSubmit={handleSubmit} loading={state.load} />
        </div>
    </section>
} 
