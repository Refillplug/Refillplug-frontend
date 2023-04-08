import './style.sass'
import React from 'react'

export default function () {
    // states
    const [email, setEmail] = React.useState('');

    // meethods
    const handleSubmit = () => { };

    return <form id="subscribe">
        <h2>subscribe to our newsletter</h2>
        <div className="group">
            <input type="email" required />
            <button>subscribe</button>
        </div>
    </form>
}