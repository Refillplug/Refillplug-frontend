import React from "react"
import * as forms from '../../components/forms'

// consfig
import { signupConfig } from '../../config'

// store
import { useMyDispatch, useMyStore } from '../../store'

export default function () {
    // custom hooks
    const [{ login }, { auth }] = [useMyDispatch(), useMyStore()];

    // method
    const handleSubmit = (e, data) => {
        e.preventDefault();
    };

    return <forms.form {...signupConfig} onSubmit={handleSubmit} />
} 
