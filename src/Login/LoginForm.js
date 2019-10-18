import React from 'react';
import { useDispatch } from 'react-redux';
import { SET_LOGGEDIN_STATUS } from '../Actions/AuthActions';
import {
    LoginWrap,
    LoginFormWrap,
    ButtonWrap,
    Form
} from '../Styles/Login/login';
import LinkToButtons from '../Shared/LinkToButtons';
import ForgotPassword from './ForgotPassword';
import InputField from './InputField';
import LoginLogoWrap from './LoginLogoWrap';

const LoginForm = (props) => {
    const dispatch = useDispatch();
    const { link } = props;

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
                <LoginLogoWrap />
                <Form>
                    <InputField type={"text"} name={"Email"} placeholder={"Email Address"} />
                    <InputField type={"password"} name={"password"} placeholder={"Password"} />
                </Form>

                <ButtonWrap center={true}>
                    <LinkToButtons
                        large={true}
                        handleClick={handleLogin}
                        url={link}
                        text={"Sign In"}
                    />
                </ButtonWrap>
                <ForgotPassword />
            </LoginFormWrap>
        </LoginWrap>
    )
}

export default LoginForm