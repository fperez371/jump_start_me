import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProject } from '../../actions/project_actions';


const msp = (state, ownProps) => {
  // let projectId = ownProps.match.params.projectId;
  let project = state.entities.projects[ownProps.match.params.projectId];
  let creator = state.entities.users[project.creator_id];
  return ({
    currentUserId: state.session.id,
    creator: creator,
    project: project,
    // projectId: projectId,
  });
};

const mdp = (dispatch) => {
  debugger
  return ({
    fetchProject: (id) => dispatch(fetchProject(id)),
    // fetchProject2: (id) => dispatch(fetchProject(id))
  });
};

class ProjectShowComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  componentDidMount() {
    debugger
    this.props.fetchProject(this.props.project.id).then( () => this.setState({isLoading: false}));
    // if (!this.props.project){
    //   this.props.fetchProject2(this.props.project.id);
    // }
  }

 
  /*  outer is grid container for page. next is large header with project title aka top row description
    next layer is proj main picture for like 70% give or take, with proj deadline next to it
  */
  render() {
    if(this.state.isLoading){
      return <div>Loading...</div>
    }
    // const projTitle = this.props.project ? this.props.project.name : null;
    // const projCreator = this.props.project ? this.props.project.creator.name : null;
    // const projImg = this.props.project ? this.props.project.photo : null;
    // const currentMs = this.props.project ? this.props.project.deadline - new Date() : null;
    // const diff = ((this.props.project.deadline - new Date())/86400000)
    // const diff = new Date(new Date().setDate(this.props.project.deadline.getDate() - new Date()))
   debugger
    // const deadline = this.props.project ? ((this.props.project.deadline.getTime() - currentMs)/ 86400000) : null;

    return (
      <div className="proj-show-grid">
        <div className="top-row-description flex-nowrap">
          <div className="proj-creator-show">
            <span>By {this.props.project.creator.name}</span>
          </div>
          <div className="project-name-show">
            <span>{this.props.project.name}</span>
          </div>
        </div>
        <div className="proj-show-left-picture">
          <img src={this.props.project.photo} alt="" />
          <span>{this.props.project.deadline.slice(0,10) '12AM EST'}</span>
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



