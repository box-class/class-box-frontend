import React, { useState } from 'react';
import box from '../assetts/box-purple.png';
import { useDispatch } from 'react-redux';
import { SET_LOGGEDIN_STATUS } from '../Actions/AuthActions';
import {
    LoginWrap,
    LoginFormWrap,
    InputFields,
    ButtonWrap,
    Form
} from '../Styles/Login/login';
import { Buttons } from '../Styles/Shared/reusable';
import { Link } from 'react-router-dom';

const StudentLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleLogin = () => {
        console.log("logging in...");
        localStorage.setItem('token', "sshhhhIAmASecretToken");
        dispatch({
            type: SET_LOGGEDIN_STATUS,
            payload: true,
        })
    }

    return (
        <LoginWrap>
            <LoginFormWrap>
                <div>
                    <img src={box} alt="logo" />
                    <h3> LOGIN </h3>
                </div>
                <Form>
                    <InputFields
                        name="Email"
                        placeholder="Email Address"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <InputFields
                        name="password"
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form>

                <ButtonWrap center={true}>
                    <Buttons large={true} onClick={() => handleLogin()}>
                        <Link to='/student/dashboard'>
                            Sign In
                        </Link>
                    </Buttons>
                </ButtonWrap>
                <div>
                    <h4>Forgot Password?</h4>
                </div>
            </LoginFormWrap>
        </LoginWrap>
    )
}


export default StudentLogin