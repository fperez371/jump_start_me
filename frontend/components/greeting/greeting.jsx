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
      <h2 className="header-name">Hi, {currentUser.email}!</h2>
      <button className="header-button" onClick={() => logout()}>Log out</button>
    </hgroup></li>
  );

  return currentUser ? personalGreeting() : sessionLink()
}

export default Greeting;
