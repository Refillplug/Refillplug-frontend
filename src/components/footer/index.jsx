import './style.sass'
import React from 'react'
import { Link } from 'react-router-dom'
import { copy, mail, phone, logo2, twitter, facebook, instagram } from '../../config'


export default () => {
    return <footer>
        <div className="top">
            <div className="flex">
                <img src={phone} alt="" />
                <span>+2348060230285</span>
            </div>
            <div className="flex">
                <img src={mail} alt="" />
                <span>mminuwaali@gmail.com</span>
            </div>
            <div className="flex">
                <span>Social Network</span>
                <img src={instagram} alt="" />
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
            </div>
        </div>
        <div className="middle">
            <div className="flex">
                <img src={logo2} alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi quas officiis itaque sunt nobis
                    laboriosam reprehenderit ratione
                </p>
            </div>
            <div className="flex">
                <h3>company</h3>
                <div className="links">
                    <Link to="/">about</Link>
                    <Link to="/">services</Link>
                    <Link to="/">blog</Link>
                </div>
            </div>
            <div className="flex">
                <h3>plan</h3>
                <div className="links">
                    <Link to="/">basic</Link>
                    <Link to="/">premium</Link>
                    <Link to="/">executive</Link>
                </div>
            </div>
            <div className="flex">
                <h3>quick links</h3>
                <div className="links">
                    <Link to="/">contact us</Link>
                    <Link to="/">about</Link>
                    <Link to="/">delivery</Link>
                </div>
            </div>
        </div>
        <div className="bottom">
            <span><img src={copy} alt="" />2022</span>
            <div className="links">
                <Link to='/'>Terms and Conditions</Link>
                <Link to='/'>Privacy Policy</Link>
            </div>
        </div>
    </footer>
}; 
