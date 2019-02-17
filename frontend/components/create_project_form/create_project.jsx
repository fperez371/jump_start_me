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
    let currentDate = new Date();
    this.state = {
      body: "",
      name: "",
      category: "",
      proj_image_url: null,
      goal_amt: 0,
      deadline: currentDate,
      photo: null,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // const project = Object.assign({}, this.state);
    // this.props.createProject(project).then(() => this.props.history.push("/"));
    const formData = new FormData();
    formData.append('project[body]', this.state.body);
    formData.append('project[name]', this.state.name);
    formData.append('project[category]', this.state.category);
    formData.append('project[proj_image_url]', this.state.proj_image_url);
    formData.append('project[goal_amt]', this.state.goal_amt);
    formData.append('project[deadline]', this.state.deadline);
    formData.append('project[photo]', this.state.photo);
    this.props.createProject(formData).then((project) => this.props.history.push(`/projects/${project.id}`));
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photo: file, proj_image_url: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }





  render() {

    const preview = this.state.proj_image_url ? <img src={this.state.proj_image_url} /> : null;

    return (
      <div className="create-project-page">
        <h2 className="create-project-greeting">First, let's get you set up</h2>
        <form onSubmit={this.handleSubmit} className="create-proj-form">
          <textarea className="create-proj-body" type="text" onChange={this.update('body')} value={this.state.body} placeholder="Describe your project"></textarea>
          <textarea className="create-proj-name" type="text" onChange={this.update("name")} value={this.state.name} placeholder="Give your Project a title"></textarea>
          <h3>Set an amount for your funding goal:</h3>
          <input className="create-goal-amt" type="number" min="1" max="100000000" placeholder="500" step="1" onChange={this.update('goal_amt')} value={this.state.goal_amt} />
          <h3>Set a deadline to achieve funding goal</h3>
          <input type="date" className="create-proj-date" onChange={this.update('deadline')} value={this.state.deadline} min={this.state.deadline} required />
          <label htmlFor="create-proj-image">
            Please upload a Photo for your project. Try to choose one that will look good at different sizes.
          </label>
          <input type="file" id="create-proj-image" onChange={this.handleFile.bind(this)} />
          <div className="create-image-preview">
            <h3>Image preview</h3>
            {preview}
          </div>
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


export default withRouter(connect(msp, mdp)(CreateProjectForm))