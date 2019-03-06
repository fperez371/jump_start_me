import { connect } from 'react-redux';
import {logout} from '../actions/session_actions';
import NavBar from './nav_bar';
import {openModal} from '../actions/modal_actions';

const msp = state => {
  return {
    loggedIn: Boolean(state.session.id)
  };
};

const mdp = dispatch => {
  return  {
    logout: () => dispatch(logout()),
    openModal: () => dispatch(openModal('greeting'))
  };
};



export default connect(msp, mdp)(NavBar);