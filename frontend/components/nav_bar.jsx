import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./search/search";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.sessionLink = this.sessionLink.bind(this);
    this.personalGreeting = this.personalGreeting.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
    this.state = {
      search: false,
    };
  }

  sessionLink() {
    return (
      <li>
        <nav className="login">
          <Link to="/login">Log in</Link>
        </nav>
      </li>
    );
  }

  personalGreeting() {
    return (
      <button className="user-button" onClick={this.props.openModal}>
        <img
          className="user-avatar"
          src="https://ksr-ugc.imgix.net/missing_user_avatar.png?ixlib=rb-1.1.0&w=40&h=40&fit=crop&v=&auto=format&frame=1&q=92&s=c8baefb239621e7b5b26957577e078db"
          alt=""
        />
      </button>
    );
  }

  toggleSearch() {
    debugger;
    this.setState({ search: true });
  }

  render() {
    let search;
    if (this.state.search) {
      search = <SearchBar />;
    } else {
      search = null;
    }
    return (
      <>
        <div className={"nav-bar"}>
          <div className="site-nav-left">
            <ul className="nav-bar-items">
              <li>
                <Link className="nav-link" to="/startProject">
                  Start a project
                </Link>
              </li>
            </ul>
          </div>
          <div className="site-nav-middle">
            <Link to="/">JumpStartMe</Link>
          </div>
          <div className="site-nav-right">
            <ul className="nav-bar-items">
              <li>
                <button onClick={this.toggleSearch} className="search-nav">
                  Search
                  <i className="fas fa-search" />
                </button>
              </li>
              {this.props.loggedIn
                ? this.personalGreeting()
                : this.sessionLink()}
            </ul>
          </div>
        </div>
        {search}
      </>
    );
  }
}
export default NavBar;
