import { connect } from "react-redux";

import { logout } from "../../actions/session_actions";
import GreetingModal from "./greeting";
import { closeModal } from "../../actions/modal_actions";

const msp = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(
  msp,
  mdp
)(GreetingModal);
