import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signup, receiveErrors } from "../../actions/session_actions";
import SignUpForm from "./signup_form";

const msp = ({ errors }) => {
  return {
    formType: "Sign up",
    navLink: <Link to="/login">log in instead</Link>,
    errors: errors.session,
  };
};

const mdp = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(receiveErrors([])),
  };
};

export default connect(
  msp,
  mdp
)(SignUpForm);
