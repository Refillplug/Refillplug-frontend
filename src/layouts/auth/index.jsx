import './style.sass'
import React from 'react'
import { useMyStore } from '../../store'

// components
import Header from '../../components/header'
import { useNavigate } from 'react-router-dom'

export default (Element) => () => {
    // location hook
    const nav = useNavigate()

    // store
    const { auth } = useMyStore()

    // effects
    React.useEffect(() => {
        if (!auth.load && auth.user) nav('/', { replace: true });
    }, [auth.load, auth.user])

    return <>
        <Header />
        <Element />
    </>
} 
