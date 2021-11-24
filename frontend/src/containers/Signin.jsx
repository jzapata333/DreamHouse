import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../reducks/users/operations';
import ImgLogoIcon from '../assets/img/icon-logo.svg';
import ImgCloseIcon from '../assets/img/icon-close.svg';
import MainImage from '../components/Common/MainImage';
import { push } from 'connected-react-router';
import Header from '../components/Common/Header';

function Signin() {
    const dispatch = useDispatch();

    const closeButton = () => {
        dispatch(push('/'));
    };

    const [email, setEmail] = useState(''),
        [password, setPassword] = useState('');

    const inputEmail = event => {
        setEmail(event.target.value);
    };

    const inputPassword = event => {
        setPassword(event.target.value);
    };

    const signInButton = () => {
        dispatch(signIn(email, password));
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <MainImage />
            <div class="main2">
                <div class="signin">
                    <br />
                    <img class="logo" src={ImgLogoIcon} alt="" />
                    <p className="head">Welcome</p>
                    <p class="head">Sign in</p>
                    <p>Email</p>
                    <input type="text" onChange={inputEmail} name="" placeholder="Enter email" value={email} id="" />
                    <p>Password</p>
                    <input
                        type="password"
                        onChange={inputPassword}
                        name=""
                        placeholder="Enter Password"
                        value={password}
                        id=""
                    />
                    <button className="" onClick={signInButton}>Sign in</button>
                    {/* <a class="joinus" href="/signup"> */}
                        {/* <span className="joinus" onClick={() => dispatch(push("/signup"))}>JOIN US</span> */}
                        <p className="joinus">Don't have an account? Create one <span onClick={() => dispatch(push('/signup'))} style={{textDecoration: 'underline', color: '#3377cc', cursor: 'pointer'}}>here</span></p>
                        
                    {/* </a> */}
                </div>
            </div>
        </div>
    );
}

export default Signin;
