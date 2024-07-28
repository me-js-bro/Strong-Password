import React, { useRef, useState } from 'react';
import './Home.css'
import toast from 'react-hot-toast';

const Home = () => {
    const [ prompt, setPrompt ] = useState("");
    const [ password, setPassword ] = useState("")
    // const btnRef = useRef(null)


    function generatePassword(input) {
        // Mix case randomly
        let mixedCase = "";
        for (let i = 0; i < input.length; i++) {
            if (Math.random() > 0.5) {
                mixedCase += input[i].toUpperCase();
            } else {
                mixedCase += input[i].toLowerCase();
            }
        }
    
        // Replace spaces with '_' or '/' or '#'
        const separators = ['_', '/', '#'];
        let withSeparators = "";
        for (let i = 0; i < mixedCase.length; i++) {
            if (mixedCase[i] === ' ') {
                withSeparators += separators[Math.floor(Math.random() * separators.length)];
            } else {
                withSeparators += mixedCase[i];
            }
        }
    
        // Add random special characters and numbers at the beginning and end
        const specialChars = "`~!@#$%^&*,<.>'/[]{}()-_=+";
        let beginning = "";
        let end = "";
    
        // Add 3-5 random numbers and special characters at the beginning
        for (let i = 0; i < Math.floor(Math.random() * 3) + 3; i++) {
            if (Math.random() > 0.5) {
                beginning += Math.floor(Math.random() * 10);
            } else {
                beginning += specialChars[Math.floor(Math.random() * specialChars.length)];
            }
        }
    
        // Add 3-5 random numbers and special characters at the end
        for (let i = 0; i < Math.floor(Math.random() * 3) + 3; i++) {
            if (Math.random() > 0.5) {
                end += Math.floor(Math.random() * 10);
            } else {
                end += specialChars[Math.floor(Math.random() * specialChars.length)];
            }
        }
    
        // Combine all parts
        let password = beginning + withSeparators + end;
    
        return password;
    };

    const getPrompt = e => {
        setPrompt(e.target.value)
    }

    const handleInput = () => {
        if ( !prompt == "" ) {
            const strongPassword = generatePassword(prompt);
            setPassword(strongPassword)
        } else {
            setPassword(" ")
        }

        // if (btnRef.current) {
        //     btnRef.current.blur();
        // }
    }

    const handleCopy = () => {
        if ( !password == " " ) {
            navigator.clipboard.writeText(password). then(() => {
                toast.success( "Copied to clipboard" );
            }).catch(err => {
                toast.error( err + "Could not copy to clipboard" );
            })
        }
    }

    return (
        <div className='home'>
            <h1 className='header'>Let's create a strong password for you</h1>

            <div className='extra'>
                <div className='line'></div>
                <h3>Write your favourite text here</h3>
                <div className='line'></div>
            </div>

            <input
            className="prompt"
            type="text"
            name="prompt"
            placeholder='Your Text'
            onChange={getPrompt}
            onKeyUp={(e) => e.key === "Enter" && handleInput()}
            />

            <button className='submit' onClick={handleInput}>
                <div className='btn-line line1'>
                </div>
                generate
                <div className='btn-line line2'>
                </div>
            </button>

            <p className='text'>Your Strong Password is: </p>
            <p className='pass'>{password}</p>
            <button className="copy" onClick={handleCopy}>COPY</button>
        </div>
    );
};

export default Home;