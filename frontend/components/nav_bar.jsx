import React from 'react';

import {Link} from 'react-router-dom';
import Greeting from './greeting/greeting';
class NavBar extends React.Component {







  render () {

    // debugger
    // if (this.props.loggedIn) {
    //   let navLogin = <li><button onCLick={() => this.props.logout}>Log Out</button></li>
    // } else {
    //   let navLogin = <li><Link to="login"></Link></li>
    // }


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
          {this.props.loggedIn ? <li><button onCLick={() => this.props.logout}>Log Out</button></li> : <li><Link to="/login">Log in</Link></li>}
        </div>
      </div>
    );
  }

};
export default NavBar;