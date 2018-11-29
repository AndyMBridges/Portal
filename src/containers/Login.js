//@flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Formik} from 'formik';
import {login, logout} from '../actions/login';
import LoginSelectors from '../selectors/login';
import {Button, ButtonSecondary, Input, Form, Text} from '../theme/Form';

const Label = styled.label`
    display: flex;
    flex-direction: column;
    color: #14233c;
    font-size: 0.8em;
    margin: 0.5em 0;
    position: relative;
    width: 100%;
`;

const LoginPage = styled.div`
    background: #FFF;
    margin: 0 auto;
    max-width: 360px;
    width: 100%;
    padding: 2rem;
    border-radius: 3px;
`;

type TestProps = {
    login: ({email: string, password: string}) => void,
    getLogin: {
        payload: {
            token: string
        },
        error?: string
    }
}

class Login extends Component<TestProps> {

    goToApp() {
        return (
            <div className="goToApp">
                <p>Already logged in</p>
                <ButtonSecondary to="/apps">Go to app</ButtonSecondary>
            </div>
        );
    }

    render() {

        const isLoggedIn = !this.props.getLogin.payload || this.props.getLogin.payload.token === null ?
            false : true;

        return (
            <LoginPage className="login">
                <h1>Login</h1>
                {!isLoggedIn ? <Formik
                    initialValues={{email: '', password: ''}}
                    validate={values => {

                        let errors = {};
                        let regex = /\S+@\S+\.\S+/;

                        if (!values.email) {
                            errors.email = 'Email is required';
                        } else if (!regex.test(values.email)) {
                            errors.email = 'Invalid email address';
                        }
                        if (!values.password) {
                            errors.password = 'A password is required';
                        } else if (values.password.length < 4) {
                            errors.password = 'Password must be 4 characters';
                        }

                        return errors;

                    }}
                    onSubmit={values => {
                        this.props.login(values);

                    }}
                    render={({
                        isSubmitting,
                        errors,
                        values,
                        handleChange,
                        handleBlur,
                        handleSubmit
                    }) => (
                        <Form onSubmit={handleSubmit}>
                            <Label>
                            Email *
                                <Input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    border={errors.email && '1px solid red'}
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                />
                                {errors.email && <Text color="red">{errors.email}</Text>}
                            </Label>
                            <Label>
                            Password *
                                <Input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    border={errors.password && '1px solid red'}
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                                {errors.password && <Text color="red">{errors.password}</Text>}
                            </Label>
                            <Button
                                disabled={errors.email || errors.password}
                                type="submit">Submit</Button>
                            {this.props.getLogin.error && <Text color="red">Incorrect details</Text>}
                        </Form>
                    )}
                /> : this.goToApp()}
            </LoginPage>
        );
    }
}

const mapStateToProps = state => {
    return {
        getLogin: LoginSelectors.getLogin(state)
    };
};

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
