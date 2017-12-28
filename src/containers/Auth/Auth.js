import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Form, Button } from 'semantic-ui-react';
import { CircleLoader } from 'react-spinners';
import * as actions from '../../store/actions/index';

class Auth extends Component {

    state = {
        email: '',
        password: '',
        confirmPassword: '',
        securityCode: '',
        isSignup: true
    };

    // Updates values for input fields as user types
    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    // Submits form
    submitHandler = (event) => {
        event.preventDefault();
        // Insert Validation function of fields
        this.props.onAuth(this.state.email, this.state.password, this.state.securityCode, this.state.isSignup);
    };

    // Switches between Register and Login form
    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {
                isSignup: !prevState.isSignup
            };
        })
    };

    render() {
        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            )
        }
        if (this.props.loading) {
            return (
                <div className='sweet-loading'>
                    <CircleLoader
                        color={'#f39c12'}
                    />
                </div>
            )
        } else {
            return (
                <div>
                    <Form onSubmit={this.submitHandler}>
                        {errorMessage}
                        <Form.Field>
                            <label>Email</label>
                            <input
                                value={this.state.email}
                                onChange={this.changeHandler}
                                name="email" 
                                placeholder='Email' />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input
                                value={this.state.password}
                                onChange={this.changeHandler}
                                type="password"
                                name="password" 
                                placeholder='Password' />
                        </Form.Field>
                        <Form.Field>
                            <label>Confirm Password</label>
                            <input
                                value={this.state.confirmPassword}
                                onChange={this.changeHandler}
                                type="password"
                                name="confirmPassword" 
                                placeholder='Confirm Password' />
                        </Form.Field>
                        <Form.Field>
                            <label>Security Code</label>
                            <input
                                value={this.state.securityCode}
                                onChange={this.changeHandler}
                                name="securityCode" 
                                placeholder='Security Code' />
                        </Form.Field>
                        <Button
                            className="ui green button"
                            type='submit'>
                            SUBMIT
                        </Button>
                    </Form>
                    <Button
                        className="ui blue button"
                        onClick={this.switchAuthModeHandler}
                        type='submit'>
                        SWITCH TO {this.state.isSignup ? 'LOGIN' : 'REGISTER'}
                    </Button>
                </div>
            )

        }
    };
};

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, securityCode, isSignup) => dispatch(actions.auth(email, password, securityCode, isSignup))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
