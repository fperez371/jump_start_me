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
    this.props.createProject(project);
  }

  update(field) {

    return e => this.setState({ [field]: e.currentTarget.value });
  }

  showDrop() {
    document.getElementById("myDropdown").classList.toggle("show");
  }



  render() {

    return (
      <div className="create-project-page">
        <h2 className="create-project-greeting">First, let's get you set up</h2>
        <form onSubmit={this.handleSubmit} className="create-proj-form">
          <textarea className="create-proj-body" type="text" onChange={this.update('body')} value={this.state.body} placeholder="Describe your project"></textarea>
          <textarea className="create-proj-name" type="text" onChange={this.update("name")} value={this.state.name} placeholder="Give your Project a title"></textarea>
          <label> Set an amount for your funding goal:
            <input className="create-goal-amt" type="number" onChange={this.update('goal_amt')} value={this.state.goal_amt} />
          </label>
          <div className="dropdown">
            <button className="dropbtn" type="button" onClick={() => this.showDrop()}>Choose a Category</button>
            <div className="dropdown-content" id="myDropdown">
              <ul className="dropdown-ul">
                <li><button className="dropdown-button" type="button" onClick={this.update("category")} value="Arts">Arts</button></li>
                <li><button className="dropdown-button" type="button" onClick={this.update("category")} value="Comics&Illustration">Comics&Illustration</button></li>
                <li><button className="dropdown-button" type="button" onClick={this.update("category")} value="Design&Tech">Design&Tech</button></li>
                <li><button className="dropdown-button" type="button" onClick={this.update("category")} value="Film">Film</button></li>
                <li><button className="dropdown-button" type="button" onClick={this.update("category")} value="Food&Craft">Food&Craft</button></li>
                <li><button className="dropdown-button" type="button" onClick={this.update("category")} value="Games">Games</button></li>
                <li><button className="dropdown-button" type="button" onClick={this.update("category")} value="Music">Music</button></li>
                <li><button className="dropdown-button" type="button" onClick={this.update("category")} value="Publishing">Publishing</button></li>
              </ul>
            </div>
          </div>
          <input className="create-proj-submit" type="submit" value="Create a Project" />
        </form>
      </div>
    )
  }


}


export default connect(msp, mdp)(CreateProjectForm);