import { connect } from "react-redux";

import { logout } from "../../actions/session_actions";
import GreetingModal from "./greeting";
import { closeModal } from "../../actions/modal_actions";

const msp = ({ session, entities: { users, projects } }) => {
  let userProjects;
  if (users[session.id]) {
    userProjects = Object.values(projects).filter(project => {
      return project.creator_id === session.id;
    });
  } else {
    userProjects = [];
  }
  return {
    currentUser: users[session.id],
    projects: userProjects,
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
