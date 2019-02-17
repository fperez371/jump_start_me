import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProject } from '../../actions/project_actions';


const msp = (state, ownProps) => {
  const project = state.entities.projects[ownProps.match.params.projectId] || null;
  debugger
  const creator = project ? state.entities.users[project.creator_id] : null;
  return {
    currentUserId: state.session.id,
    creator: creator,
    project: project,
  };
};

const mdp = (dispatch) => {
  return {
    fetchProject: (id) => dispatch(fetchProject(Number(window.location.hash.split('').pop())))
  };
};

class ProjectShowComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger
    this.props.fetchProject();
  }
  /*  outer is grid container for page. next is large header with project title aka top row description
    next layer is proj main picture for like 70% give or take, with proj deadline next to it
  */
  render() {
    debugger
    const projTitle = this.props.project ? this.props.project.name : null;
    const projCreator = this.props.project ? this.props.project.creator.name : null;
    const projImg = this.props.project ? this.props.project.photo : null; 
    const deadline = this.props.project ? this.props.project.deadline : null;

    return (
      <div className="proj-show-grid">
        <div className="top-row-description flex-nowrap">
          <div className="proj-creator-show">
            <span>By {projCreator}</span>
          </div>
          <div className="project-name-show">
            <span>{projTitle}</span>
          </div>
        </div>
        <div className="proj-show-left-picture">
          <img src={projImg} alt=""/>
          <span>{deadline}</span>
          <h4>Days to go</h4>
        </div>
        <div className="proj-show-right-deadline">
        </div>
        <div className="proj-show-about-left"></div>
        <div className="proj-show-rewards-right"></div>
      </div>
    )
  }
}




export default withRouter(connect(msp, mdp)(ProjectShowComponent));



