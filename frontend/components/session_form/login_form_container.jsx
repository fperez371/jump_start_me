import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = (state) => {
  return {
    formType: 'Log in',
    buttonName: 'Log me in!',
    navLink: <Link to="/signup">New to JumpStartMe? Sign up</Link>,
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
  };
};

export default connect(msp, mdp)(SessionForm);