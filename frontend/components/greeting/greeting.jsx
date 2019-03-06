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
        projsDiv = current.projects.slice(0, 2).map((project, idx) => {
          return (
            <li onClick={() => closeModal()}>
              <Link key={idx} to={`/projects/${project.id}`}>
                {project.name}
              </Link>
            </li>
          )
          
        })
          
      } else {
        projsDiv = current.projects.map((project, idx) => {
          return (
            <li onClick={() => closeModal()}>
              <Link  key={idx} to={`/projects/${project.id}`}>{project.name}</Link>
            </li>
          )
        })
      };
    } else {
      projsDiv = null
    }
    return (
      <div className="user-modal">
        <h3>{this.props.currentUser.name}</h3>
        {projsDiv}
        <button onClick={this.props.logout}>Log Out!</button>
      </div>
    )
  }
}

export default GreetingModal;
