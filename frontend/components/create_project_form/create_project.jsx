import { connect } from 'react-redux';
import { createProject } from '../../actions/project_actions';
import React from 'react';

const msp = state => {
  return {
    errors: state.errors.session,
  };
};

const mdp = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  };
};

class CreateProjectForm extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      body: "",
      name: "",
      category: "",
      proj_image_url: "",
      goal_amt: 0,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const project = Object.assign({}, this.state);
    this.props.createProject(project)
  }

  update(field){
    return e => this.setState({[field]: e.target.value})
  }


} 


export default connect(msp, mdp)(CreateProjectForm);