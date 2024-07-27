import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <h1 className='header'>Let's create a strong password for you</h1>

            <div className='extra'>
                <div className='line'></div>
                <h3>Write your favourite text here.</h3>
                <div className='line'></div>
            </div>

            <input className="prompt" type="text" placeholder='Your Text'/>

            <button className='submit'>
                <div className='btn-line line1'>
                </div>
                generate
                <div className='btn-line line2'>
                </div>
            </button>
        </div>
    );
};

export default Home;