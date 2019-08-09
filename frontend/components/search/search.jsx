import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
    fetchSearchResults,
    receiveSearchResults,
} from "../../actions/search_actions";

const msp = state => {
    let results = state.entities.results || null;
    return {
        results: results,
    };
};

const mdp = dispatch => {
    return {
        fetchResults: query => dispatch(fetchSearchResults(query)),
        clearResults: () => dispatch(receiveSearchResults({})),
    };
};

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    edit(query) {
        return e =>
            this.setState({
                [query]: e.currentTarget.value,
            });
    }

    handleSubmit(e) {
        e.preventDefault();
        let query = this.state.query;
        if (query.length < 1) return;
        this.props.fetchResults(query).then(() => {
            this.props.toggleSearch;
        });
    }

    componentWillUnmount() {
        this.props.clearResults();
    }

    render() {
        let projects;
        if (this.props.searchList && this.props.results) {
            projects = Object.values(this.props.results).map((project, idx) => {
                return (
                    <li key={idx} className="search-proj-li">
                        <Link
                            onClick={this.props.toggleSearch}
                            to={`/projects/${project.id}`}
                        >
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
        } else if (
            this.props.searchList &&
            Object.values(this.props.results).length === 0
        ) {
            projects = <li className="search-proj-li">No matches found</li>;
        } else {
            projects = null;
        }
        if (!this.props.search) {
            return <div className="hidden" />;
        }
        return (
            <div className="search-bar">
                <form onSubmit={this.handleSubmit}>
                    <div className="seach-div">
                        <input
                            className="search-input"
                            type="text"
                            value={this.state.query}
                            placeholder="search for a project by name"
                            onChange={this.edit("query")}
                        />
                        <button
                            id="close-search"
                            type="button"
                            onClick={this.props.toggleSearch}
                        >
                            X
                        </button>
                    </div>
                </form>
                <div
                    className={this.props.searchList ? "search-list" : "hidden"}
                >
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
