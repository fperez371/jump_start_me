import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.sessionLink = this.sessionLink.bind(this);
    this.personalGreeting = this.personalGreeting.bind(this);
  }

  sessionLink(){
    return ( <li><nav className="login">
      <Link to='/login'>Log in</Link>
    </nav></li>
    )
  }

  personalGreeting(){
    return (
      <button onClick={ this.props.openModal }>
        <img className="user-avatar" src='https://ksr-ugc.imgix.net/missing_user_avatar.png?ixlib=rb-1.1.0&w=40&h=40&fit=crop&v=&auto=format&frame=1&q=92&s=c8baefb239621e7b5b26957577e078db' alt="" />
      </button>
    )
  }

  render() {



    return (
      <div className="nav-bar">
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
            <li><button className="search-nav">Search
            <i className="fas fa-search"></i>
            { this.props.loggedIn ? this.personalGreeting() : this.sessionLink() }
            </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }

};
export default NavBar;