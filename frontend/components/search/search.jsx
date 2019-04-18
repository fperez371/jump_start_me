import React from "react";
import { connect } from "react-redux";
import { fetchSearchResults } from "../../actions/search_actions";

const mdp = dispatch => {
  debugger;
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
      .then(() => this.setState({ [searchList]: true }));
  }

  render() {
    let projects;
    if (this.state.searchList) {
      projects = this.props.results.map((project, idx) => {
        <li key={idx} className="search-proj-li">
          <Link onClick={this.toggleSearch} to={`api/projects/${project.id}`}>
            <h3>{project.name}</h3>
            <h3> By {project.creator.name}</h3>
            <img src={project.photo} alt="" />
          </Link>
        </li>;
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
        <div className={this.searchList ? "search-list" : "hidden"}>
          <ul>{projects}</ul>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  mdp
)(SearchBar);
