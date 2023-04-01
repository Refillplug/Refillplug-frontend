import './style.sass'
import React from 'react'

// components
import Header from '../../components/header'

export default (Element) => () => {
    return <>
        <Header />
        <Element />
    </>
} 
