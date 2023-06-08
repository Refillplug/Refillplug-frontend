import './style.sass'
import React from 'react'
import { useMyStore } from '../../store'

// components
import Header from '../../components/header'
import { useNavigate } from 'react-router-dom'
import * as forms from '../../components/forms'

export default (Element) => () => {
    // hooks
    const nav = useNavigate()

    // store
    const { auth } = useMyStore()

    // effects
    React.useEffect(() => {
        if (!auth.load && 'email' in auth.user) nav('/', { replace: true });
    }, [auth.load, auth.user])

    return <section id="auth">
        <Element form={forms.form} />
    </section>
} 
