import React from "react"
import * as forms from '../../components/forms'

// consfig
import { resetPasswordConfig } from '../../config'

// store
import { useMyDispatch, useMyStore } from '../../store'

export default function () {
    // custom hooks
    const [{ }, { auth }] = [useMyDispatch(), useMyStore()];

    // method
    const handleSubmit = (e, data) => {
        e.preventDefault();
    };

    return <forms.form {...resetPasswordConfig} onSubmit={handleSubmit} />
} 
