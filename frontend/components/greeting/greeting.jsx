import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) => {
  const sessionLink = () => (
    <nav className= "login">
      <Link to= '/login'></Link>
    </nav>
  )

  const personalGreeting = () => (
    <hgroup className = "header-group">
      <h2 className="header-name">Hi, {currentUser.email}!</h2>
      <button className="header-button" onClick={() => logout()}>Log out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLink()
}

export default Greeting;
