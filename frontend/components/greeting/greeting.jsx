import React from 'react';
import { Link } from 'react-router-dom';

//  let userProjs = entities.projects.filter(project => project.creator_id === currentUser.id)
class GreetingModal extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const current = this.props.currentUser;
    const { closeModal } = this.props;
    let projsDiv;
    if (current.projects) {
      if (current.projects.length > 3) {
        projsDiv = current.projects.slice(0, 3).map((project, idx) => {
          return (
            <li className="no-dec-li" onClick={() => closeModal()}>
              <Link className="user-modal-projects" key={idx} to={`/projects/${project.id}`}>
                {project.name}
              </Link>
            </li>
          )

        })

      } else {
        projsDiv = current.projects.map((project, idx) => {
          return (
            <li className="no-dec-li" onClick={() => closeModal()}>
              <Link className="user-modal-projects" key={idx} to={`/projects/${project.id}`}>{project.name}</Link>
            </li>
          )
        })
      };
    } else {
      projsDiv = null
    }
    return (
      <div className="user-modal">
        <header className="username-header"> Welcome {this.props.currentUser.name}!</header>
        <div className="projects-div">
          <h3 className="my-projects">My Projects</h3>
          {projsDiv}
        </div>
        <div className="logout-button-div">
          <button className="logout" onClick={this.props.logout}>Log Out!</button>
        </div>
      </div>
    )
  }
}

export default GreetingModal;
