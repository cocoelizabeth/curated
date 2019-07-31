import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../actions/session_actions';
import SessionForm from './session_form';

export const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'sign up',
        navLink: <Link to="/login">Already a member? Log In</Link>,
        subHead: "Find new ideas to try",
        buttonText: "Continue"
    }
}

export const mapDispatchToProps = dispatch => {
    return { 
        processForm: (user) => dispatch(signup(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);