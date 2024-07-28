import React, { useEffect, useState } from 'react';
import './Check.css';

const Check = () => {
    const [pass, setPass] = useState("");
    const [passLength, setPassLength] = useState(0)
    const [strongMsg, setStrongMsg] = useState("")
    const [notStrong, setNotStrong] = useState("")

    const specialChars = /[!@#$%^&*(),.<>'/[\]{}\-_=+`~]/;
    const numbers = /\d/;
    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/

    const getPassword = (e) => {
        setPass(e.target.value);
    };

    const checkPass = () => {
        if (pass) {
            const length = pass.length;

            const hasSpecialChars=specialChars.test(pass)
            const hasNumber=numbers.test(pass)
            const hasUpperCase=upperCase.test(pass)
            const hasLoserCase=lowerCase.test(pass)
            setPassLength(length)

            if ( hasSpecialChars && hasNumber && hasUpperCase && hasLoserCase && length > 8 ) {
                setStrongMsg("Your password is strong enough")
                setNotStrong("")
            } else {
                setNotStrong(`Your password is not enough strong.\n Use a mixer of Numbers, spacial characters, capital and small letter`)
                setStrongMsg("")
            }
        }
    };

    // useEffect(() => {
    // }, [passLength]);

    return (
        <div className='home'>
            <h1 className='header'>Let's check how strong your password is</h1>

            <div className='extra'>
                <div className='line'></div>
                <h3>Write your password here</h3>
                <div className='line'></div>
            </div>

            <input
                className="prompt"
                type="password"
                name="prompt"
                placeholder='Your Password'
                onChange={getPassword}
                onKeyUp={(e) => e.key === "Enter" && checkPass()}
            />

            <button className='submit' onClick={checkPass}>
                <div className='btn-line line1'></div>
                check
                <div className='btn-line line2'></div>
            </button>

            <p className='text'>Your password has <span>{passLength}</span> characters.</p>
            <p className='msg'>{strongMsg}{notStrong}</p>
        </div>
    );
};

export default Check;
