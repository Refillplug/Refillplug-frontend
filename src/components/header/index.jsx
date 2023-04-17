import './style.sass'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsPeopleFill } from 'react-icons/bs'
import { HiOutlineShoppingCart } from 'react-icons/hi'

// store
import { useMyStore } from '../../store'

// config
import { logo } from '../../config'

export default () => {
    // store
    const { cart } = useMyStore();

    // states
    const [open, setOpen] = React.useState(false);

    // methods
    const handleNav = () => setOpen(prev => !prev);

    return <header>
        <b className={`btnp ${open ? 'open' : ''}`} onClick={handleNav}><i /><i /></b>
        <Link to='/' id='logo'><img src={logo} alt="" /></Link>
        <nav className={`main ${open ? 'open' : ''}`}>
            <Link to='/'>home</Link>
            <Link to='/'>plan</Link>
            <Link to='/'>services</Link>
            <Link to='/'>product</Link>
        </nav>
        <nav className="aside">
            <Link to='/' className='icon'>
                <BsPeopleFill />
                <b>2</b>
            </Link>
            <Link to='/' className='icon'>
                <HiOutlineShoppingCart />
                {cart.data.length ? <b>{cart.data.length}</b> : null}
            </Link>
            <Link to='/register'>sign up</Link>
        </nav>
    </header>
}; 
