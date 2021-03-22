import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderMain.scss'

const HeaderMain = ({ hideNav }) => {

    hideNav = hideNav ? true : false
    console.log(hideNav)


    return (
        <header className='mainHeader'>
            <img src={`${process.env.PUBLIC_URL}/logo-new.png`} alt="" />
            {
                hideNav ? null : (
                    <nav>
                        <ul>
                            <li><Link to={'/employee-profile'}>Employee Profile</Link></li>
                            <li><Link to={'/'}>Admin Portal</Link></li>
                            <li><Link to={'/'}>Policies</Link></li>
                            <li><Link to={'/'}>Vouchers</Link></li>
                            <li><Link to={'/'}>My Inbox</Link></li>
                            <li><Link to={'/'}>Sign Out</Link></li>
                        </ul>
                    </nav>
                )
            }
        </header>
    )
}

export default HeaderMain
