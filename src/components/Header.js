/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Header.scss'

const Header = props => {
    return (
        <header className='old'>
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />

            <nav>
                <div className="actions">
                    <button className="search-btn"> <img src={`${process.env.PUBLIC_URL}/search-icon.png`} alt="search" /> </button>
                </div>
                <ul>
                    <li> <a href="#">Home</a> <div className="separator"></div> </li>
                    <li> <a href="#">About Us</a> <div className="separator"></div> </li>
                    <li> <a href="#">Services</a> <div className="separator"></div> </li>
                    <li> <a href="#">Resources</a> <div className="separator"></div> </li>
                    <li> <a href="#">Careers</a> <div className="separator"></div> </li>
                    <li> <a href="#">Alliances</a> <div className="separator"></div> </li>
                    <li> <a href="#">Contact Us</a> <div className="separator"></div> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
