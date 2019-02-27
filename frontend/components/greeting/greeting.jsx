import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {
  const sessionLink = () => (
    <li><nav className= "login">
      <Link to='/login'>Log in</Link>
    </nav></li>
  )

  const personalGreeting = () => (
    <li><hgroup className = "login">
      <button className="header-button" onClick={() => logout()}> <img className="user-avatar" src='../../../app/assets/images/missing_user_avatar.png' alt=""/></button>
    </hgroup></li>
  );

  return currentUser ? personalGreeting() : sessionLink()
}

export default Greeting;
