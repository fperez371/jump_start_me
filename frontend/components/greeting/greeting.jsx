import React from 'react';
import { Link } from 'react-router-dom';


//  let userProjs = entities.projects.filter(project => project.creator_id === currentUser.id)

const Greeting = ({ currentUser, logout }) => {
  const sessionLink = () => (
    <li><nav className="login">
      <Link to='/login'>Log in</Link>
    </nav></li>
  )

  const personalGreeting = () => {
    const current = currentUser
    let projsDiv;
    if (current.projects) {
      if (current.projects.length > 3) {
        projsDiv = current.projects.slice(2).map((project, idx) => <Link key={idx} to={`/projects/${project.id}`}>{project.name}</Link>)
      } else {
        projsDiv = current.projects.map((project, idx) => <Link key={idx} to={`/projects/${project.id}`}>{project.name}</Link>)
      }
    } else {
      projsDiv = nil
    }
    debugger
    return (
      <li>
        <div> <img className="user-avatar" src='https://ksr-ugc.imgix.net/missing_user_avatar.png?ixlib=rb-1.1.0&w=40&h=40&fit=crop&v=&auto=format&frame=1&q=92&s=c8baefb239621e7b5b26957577e078db' alt="" />
          {projsDiv}
          <button className="user-dropdown" onClick={() => logout()}>Log Out!</button>
        </div>
      </li>
    )
  };

  return currentUser ? personalGreeting() : sessionLink()
}

export default Greeting;
