import './style.sass'
import React from 'react'
import { Link } from 'react-router-dom';

import {copy} from '../../config'

export default () => {
    return <footer>
        <div className="top"></div>
        <div className="middle"></div>
        <div className="bottom">
            <span><img src={copy} alt="" />2022</span>
            <div className="links">
                <Link to='/'>Terms and Conditions</Link>
                <Link to='/'>Privacy Policy</Link>
            </div>
        </div>
    </footer>
}; 
