import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = ({ errors }) => {
  return {
    formType: 'Log in',
    errors: errors.session,
    navLink: <Link to="/signup">Sign up!</Link>,
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    demoLogin: () => dispatch(login({email: "demo@demoemail.net", password: "starwars123"}))
  };
};

export default connect(msp, mdp)(SessionForm);