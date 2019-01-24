import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SignUpForm from './signup_form';


const msp = (state) => {
  return {
    formType: 'Sign up',
    navLink: <Link to="/login">log in instead</Link>,
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
  };
};

export default connect(msp, mdp)(SignUpForm);