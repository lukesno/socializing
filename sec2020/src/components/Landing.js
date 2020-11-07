import './Landing.css';

import React, { useState } from 'react';
import fire from '../firebase.js';
import Login from './Login.js';

const Landing = () => {

    return (
        <div>
            <h1 className={'Landing-header'}>Engineering Social</h1>
            <div>
                <button className={'Landing-button-1'} onClick={() => window.location.href = "http://localhost:3000/login"}>
                    <div className={'1,Landing-div'}>Login</div>
                </button>
            </div>
            <div>
            <button className={'Landing-button-2'} onClick={() => window.location.href = "http://localhost:3000/register"}>
            <div className={'Landing-div'}>Register</div>
                </button>
            </div>
        </div>

    
    );
}

export default Landing;