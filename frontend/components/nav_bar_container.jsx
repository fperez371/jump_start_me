import { connect } from 'react-redux';
import React from 'react';
import {logout} from '../actions/session_actions';
import NavBar from './nav_bar';

const msp = state => {
  return {
    loggedIn: Boolean(state.session.id)
  };
};

const mdp = dispatch => {
  return  {
    logout: () => dispatch(logout())
  };
};



export default connect(msp, mdp)(NavBar);