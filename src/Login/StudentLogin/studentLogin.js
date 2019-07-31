import React, { Component } from 'react';
import box from '../../assetts/box-purple.png';
import {
    LoginWrap,
    LoginFormWrap,
    InputFields,
    ButtonWrap,
    Form
} from '../../Styles/Login/login';
import { Buttons } from '../../Styles/Shared/reusable';
import { Link } from 'react-router-dom';

export default class StudentLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SID: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }


    render() {
        return (
            <LoginWrap>
                <LoginFormWrap>
                    <div>
                        <img src={box} alt="logo" />
                        <h3>
                            LOGIN
                        </h3>
                    </div>
                    <Form>
                        <InputFields
                            name="SID"
                            placeholder="Student ID"
                            value={this.state.SID}
                            onChange={this.handleChange}
                        />
                        <InputFields
                            name="password"
                            placeholder="Password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </Form>

                    <ButtonWrap center={true}>
                        <Buttons large={true}>
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
}