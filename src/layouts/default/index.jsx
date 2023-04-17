import './style.sass'
import React from 'react'

// components
import Header from '../../components/header'
import Footer from '../../components/footer'

export default (Element) => () => {
    return <>
        <Header />
        <Element />
        <Footer />
    </>
} 
