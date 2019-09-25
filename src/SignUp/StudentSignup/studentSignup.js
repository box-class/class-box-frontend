import React, { Component } from 'react';
import box from '../../assetts/box.png';
import {
    SignupWrap,
    SignupFormWrap,
    WelcomeWrap,
    InputFields,
    ButtonWrap,
    WelcomeContent
} from '../../Styles/Signup/signup';
import { Buttons } from '../../Styles/Shared/reusable';
import { Link } from 'react-router-dom';

export default class StudentSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentId: "",
            firstName: "",
            lastName: "",
            dob: "",
            street: "",
            city: "",
            state: "",
            zipcode: "",
            major: ""
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
            <SignupWrap>
                <SignupFormWrap>
                    <div>
                        <h1 className="title">Get Started:</h1>
                    </div>
                    <div>
                        <p>SID:</p>
                        <InputFields
                            className="small"
                            name="studentId"
                            placeholder="Id"
                            value={this.state.studentId}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <p>Student Info:</p>
                        <InputFields
                            name="firstName"
                            placeholder="First Name"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                        />
                        <InputFields
                            name="lastName"
                            placeholder="Last Name"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                        <InputFields
                            name="dob"
                            className="medium"
                            placeholder="Date of Birth"
                            value={this.state.dob}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <p>Address:</p>
                        <InputFields
                            name="street"
                            placeholder="Street"
                            value={this.state.street}
                            onChange={this.handleChange}
                        />
                        <InputFields
                            name="city"
                            placeholder="City"
                            value={this.state.city}
                            onChange={this.handleChange}
                        />
                        <InputFields
                            className="xs"
                            name="state"
                            placeholder="State"
                            value={this.state.state}
                            onChange={this.handleChange}
                        />
                        <InputFields
                            className="small"
                            name="zipcode"
                            placeholder="Zip"
                            value={this.state.zipcode}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <p>Major:</p>
                        <InputFields
                            className="large"
                            name="major"
                            placeholder="Area of Study"
                            value={this.state.major}
                            onChange={this.handleChange}
                        />
                    </div>

                    <ButtonWrap>
                        <Buttons>
                            <Link to='/'>
                                Cancel
                            </Link>
                        </Buttons>
                        <Buttons>
                            <Link to='/student/login'>
                                Sign Up
                            </Link>
                        </Buttons>
                    </ButtonWrap>
                </SignupFormWrap>

                <WelcomeWrap>
                    <WelcomeContent>
                        <h3>WELCOME TO</h3>
                        <img src={box} alt="box" />
                        <h1>CLASS BOX</h1>
                        <p>Designed to make your college experience simpler.</p>
                    </WelcomeContent>
                </WelcomeWrap>
            </SignupWrap>
        )
    }
}