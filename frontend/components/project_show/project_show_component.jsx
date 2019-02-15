import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProject } from '../../util/project_api_util';


const msp = (state, ownProps) => {
  const project = state.entities.projects[ownProps.match.params.projectId];
  const creator = state.entities.users[project.creator_id];
  return {
    currentUserId: state.session.id,
    creator: creator,
    project: project,
  };
};

const mdp = (dispatch) => {
  return {
    fetchProject: (id) => dispatch(fetchProject(id))
  };
};

class ProjectShowComponent extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchProject(this.props.project.id);
  }
  /*  outer is grid container for page. next is large header with project title aka top row description
    next layer is proj main picture for like 70% give or take, with proj deadline next to it
    
  */
  render () {
    const projTitle = this.props.project? this.props.project.title : null; 
    
    return (
      <div className="proj-show-grid">
        <div className="top-row-description">
          <h1>{projTitle}</h1>
        </div>
        <div className="proj-show-left-picture"></div>
        <div className="proj-show-right-deadline"></div>
        <div className="proj-show-about-left"></div>
        <div className="proj-show-rewards-right"></div>
      </div>
    )
  }
}




export default withRouter(connect(msp, mdp)(ProjectShowComponent));



