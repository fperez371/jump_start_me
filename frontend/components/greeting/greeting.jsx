import React from "react";
import { Link } from "react-router-dom";

//  let userProjs = entities.projects.filter(project => project.creator_id === currentUser.id)
class GreetingModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const current = this.props.currentUser;
    const { closeModal, projects } = this.props;
    let projsDiv;
    if (projects) {
      if (projects.length > 3) {
        projsDiv = projects.slice(0, 3).map((project, idx) => {
          return (
            <li className="no-dec-li" onClick={() => closeModal()}>
              <Link
                className="user-modal-projects"
                key={idx}
                to={`/projects/${project.id}`}
              >
                <div className="li-prj-img">
                  {" "}
                  <img className="modal-img" src={project.photo} alt="" />{" "}
                </div>
                {project.name}
              </Link>
            </li>
          );
        });
      } else {
        projsDiv = projects.map((project, idx) => {
          return (
            <li className="no-dec-li" onClick={() => closeModal()}>
              <Link
                className="user-modal-projects"
                key={idx}
                to={`/projects/${project.id}`}
              >
                {project.name}
              </Link>
            </li>
          );
        });
      }
    } else {
      projsDiv = null;
    }
    return (
      <div className="user-modal">
        <header className="username-header"> Welcome {current.name}!</header>
        <div className="projects-div">
          <ul className="ddm-project-list">
            <h3 className="my-projects">My Projects</h3>
            {projsDiv}
          </ul>
        </div>
        <div className="logout-button-div">
          <button className="logout" onClick={this.props.logout}>
            Log Out!
          </button>
        </div>
      </div>
    );
  }
}

export default GreetingModal;
