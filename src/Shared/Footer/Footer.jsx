import React from 'react';
import './Footer.css'

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <div>
            <p className='footer-text'>Copyright (c) {date} Js Bro ( Md. Mahin Islam Mahi) </p>
        </div>
    );
};

export default Footer;