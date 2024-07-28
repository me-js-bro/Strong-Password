import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav>
            <div className={`ham ${isOpen ? 'change' : ''}`} onClick={toggleOpen}>
                <span className='span bar1'></span>
                <span className='span bar2'></span>
                <span className='span bar3'></span>
            </div>
            <div className={`nav-link ${isOpen ? 'change' : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/check-password">Check Password</Link>
                <a target='_blank' href="https://github.com/me-js-bro/strong-password">
                    Source Code
                </a>
            </div>
        </nav>
    );
};

export default Header;