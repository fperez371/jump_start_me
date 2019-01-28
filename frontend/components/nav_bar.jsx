import React from 'react';

import { Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';

class NavBar extends React.Component {




  render() {



    return (
      <div className="nav-bar group">
        <div className="site-nav-left" >
          <ul className="nav-bar-items">
            <li><Link className="nav-link" to='/projects'>Explore</Link></li>
            <li><Link className="nav-link" to='/startProject'>Start a project</Link></li>
          </ul>
        </div>
        <div className="site-nav-middle">
          <Link to="/">JumpStartMe</Link>
        </div>
        <div className="site-nav-right">
          <ul className="nav-bar-items">
            <GreetingContainer />
            <li><Link className="search-nav" to='/search'>Search</Link></li>
          </ul>
        </div>
      </div>
    );
  }

};
export default NavBar;