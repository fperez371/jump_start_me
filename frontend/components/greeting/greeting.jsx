import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {
  const sessionLink = () => (
    <li><nav className= "login">
      <Link to='/login'>Log in</Link>
    </nav></li>
  )

  const personalGreeting = () => (
    <li>
      <button className="user-dropdown" onClick={() => logout()}> <img className="user-avatar" src='https://ksr-ugc.imgix.net/missing_user_avatar.png?ixlib=rb-1.1.0&w=40&h=40&fit=crop&v=&auto=format&frame=1&q=92&s=c8baefb239621e7b5b26957577e078db' alt=""/></button>
    </li>
  );

  return currentUser ? personalGreeting() : sessionLink()
}

export default Greeting;
