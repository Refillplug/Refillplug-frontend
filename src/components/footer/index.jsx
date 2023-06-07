import './style.sass'
import React from 'react'
import { Link } from 'react-router-dom'
import { copy, mail, phone, logo2, twitter, facebook, instagram } from '../../config'


export default () => {
    return <footer>
        <div className="top">
            <div className="flex">
                <img src={phone} alt="" />
                <span>070REFILLPLUG</span>
            </div>
            <div className="flex">
                <img src={mail} alt="" />
                <span>support@refillplug.com</span>
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
                    <Link to="/">Career</Link>
                    <Link to="/">Services</Link>
                    <Link to="/">Blog</Link>
                </div>
            </div>
            <div className="flex">
                <h3>plan</h3>
                <div className="links">
                    <Link to="/">Basic</Link>
                    <Link to="/">Premium</Link>
                    <Link to="/">Executive</Link>
                </div>
            </div>
            <div className="flex">
                <h3>quick links</h3>
                <div className="links">
                    <Link to="/">Contact us</Link>
                    <Link to="/">About</Link>
                    <Link to="/">Delivery</Link>
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
