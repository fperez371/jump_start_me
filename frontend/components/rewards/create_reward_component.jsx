import React from 'react';
import { connect } from 'react-redux';


const msp = state => {
  return {
    errors: state.errors.session,
  };
};

const mdp = dispatch => {
  return {
    createReward: (reward) => dispatch(createReward(reward))
  };
};