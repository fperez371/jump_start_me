import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSearchResults } from "../../actions/search_actions";

const msp = state => {
  let results = state.entities.results || null;
  return {
    results: results,
  };
};

const mdp = dispatch => {
  return {
    fetchResults: query => dispatch(fetchSearchResults(query)),
  };
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchList: false,
      search: true,
      query: "",
    };
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  edit(query) {
    return e =>
      this.setState({
        [query]: e.currentTarget.value,
      });
  }

  toggleSearch() {
    this.setState({ search: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    let query = this.state.query;
    if (query.length < 1) return;
    this.props
      .fetchResults(query)
      .then(() => this.setState({ searchList: true }));
  }

  render() {
    let projects;
    if (this.state.searchList) {
      projects = Object.values(this.props.results).map((project, idx) => {
        return (
          <li key={idx} className="search-proj-li">
            <Link onClick={this.toggleSearch} to={`/projects/${project.id}`}>
              <div className="search-proj-img">
                <img src={project.photo} alt="" />
              </div>
              <div id="search-text">
                <h3>{project.name}</h3>
                <h3> By {project.creator.name}</h3>
              </div>
            </Link>
          </li>
        );
      });
    } else {
      projects = null;
    }
    if (!this.state.search) {
      return <div className="hidden" />;
    }
    return (
      <div className="search-bar">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="seach-div">
            <input
              className="search-input"
              type="text"
              value={this.state.query}
              placeholder="search for a project by name"
              onChange={this.edit("query")}
            />
            <button id="close-search" type="button" onClick={this.toggleSearch}>
              X
            </button>
          </div>
        </form>
        <div className={this.state.searchList ? "search-list" : "hidden"}>
          <ul className="search-list-ul">{projects}</ul>
        </div>
      </div>
    );
  }
}

export default connect(
  msp,
  mdp
)(SearchBar);
