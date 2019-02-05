import { connect } from 'react-redux';
import { createProject } from '../../actions/project_actions';
import React from 'react';
import { withRouter } from 'react-router-dom';

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

class CreateProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      body: "",
      name: "",
      category: "",
      proj_image_url: "default",
      goal_amt: 0,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const project = Object.assign({}, this.state);
    this.props.createProject(project).then(() => this.props.history.push("/"));
  }

  update(field) {
    return e => {
      debugger
      this.setState({ [field]: e.currentTarget.value });
    };
  }






  render() {

    return (
      <div className="create-project-page">
        <h2 className="create-project-greeting">First, let's get you set up</h2>
        <form onSubmit={this.handleSubmit} className="create-proj-form">
          <textarea className="create-proj-body" type="text" onChange={this.update('body')} value={this.state.body} placeholder="Describe your project"></textarea>
          <textarea className="create-proj-name" type="text" onChange={this.update("name")} value={this.state.name} placeholder="Give your Project a title"></textarea>
          <h3>Set an amount for your funding goal:</h3>
          <input className="create-goal-amt" type="number" onChange={this.update('goal_amt')} value={this.state.goal_amt} />
          <div className="dropdown">
            <select className="dropdown-list" value={this.value} onChange={this.update("category")} >
              <option selected disabled hidden>Choose a category</option>
              <option className="dropdown-option" onChange={this.update("category")} value="Arts">Arts</option>
              <option className="dropdown-option" onChange={this.update("category")} value="Comics&Illustration">Comics&Illustration</option>
              <option className="dropdown-option" onChange={this.update("category")} value="Design&Tech">Design&Tech</option>
              <option className="dropdown-option" onChange={this.update("category")} value="Film">Film</option>
              <option className="dropdown-option" onChange={this.update("category")} value="Food&Craft">Food&Craft</option>
              <option className="dropdown-option" onChange={this.update("category")} value="Games">Games</option>
              <option className="dropdown-option" onChange={this.update("category")} value="Music">Music</option>
              <option className="dropdown-option" onChange={this.update("category")} value="Publishing">Publishing</option>
            </select>
          </div>
          <input className="create-proj-submit" type="submit" value="Get Jumpstarted!" />
        </form>
      </div>
    )
  }


}


export default withRouter(connect(msp, mdp)(CreateProjectForm));