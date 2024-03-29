import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearSessionErrors } from '../actions/session_actions';
import SessionForm from './session_form';

export const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'sign up',
        subHead: "Find new ideas to try",
        buttonText: "Continue",
        navLink: '/login',
        navLinkText: 'Log In',
        bottomLink: <Link to="/login">Already a member? Log In</Link>,
        passwordPlaceHolder: "Create a password"
    }
}

export const mapDispatchToProps = dispatch => {
    return { 
        processForm: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(clearSessionErrors()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);