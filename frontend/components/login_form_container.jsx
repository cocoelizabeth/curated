import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearSessionErrors, } from '../actions/session_actions';
import SessionForm from './session_form';


export const mapStateToProps = ({ state }) => {

    return {
        errors: state.errors.session,
        formType: 'login',
        buttonText: "Log In",
        navLink: '/signup',
        navLinkText: 'Sign Up',
        bottomLink: <Link to="/signup">Not on curated yet? Sign up</Link>,

    };
};

export const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearSessionErrors()),
        closeModal: () => dispatch(closeModal()),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);