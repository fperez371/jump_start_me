import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProject } from "../../actions/project_actions";
import { fetchRewards } from "../../actions/reward_actions";

const msp = (state, ownProps) => {
  let project =
    state.entities.projects[ownProps.match.params.projectId] || null;
  let creator = project ? state.entities.users[project.creator_id] : null;
  return {
    currentUserId: state.session.id,
    creator: creator,
    project: project,
  };
};

const mdp = dispatch => {
  return {
    fetchProject: id => dispatch(fetchProject(id)),
    fetchRewards: () => dispatch(fetchRewards()),
  };
};

class ProjectShowComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props
      .fetchProject(this.props.match.params.projectId)
      .then(() => this.setState({ isLoading: false }));
    this.props.fetchRewards();
  }

  handleClick() {
    this.props.history.push("/");
  }

  render() {
    debugger;
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    let rewardDivs;
    let rewards = this.state.entities.rewards;
    if (this.state.entities.rewards) {
      rewardDivs = rewards.map(reward => (
        <div className="rewardDiv">{reward.name}</div>
      ));
    } else {
      rewardDivs = null;
    }

    return (
      <div className="proj-show-grid">
        <div className="top-row-description flex-nowrap">
          <div className="proj-creator-show">
            <div className="project-name-show">
              <p className="proj-show-title">{this.props.project.name}</p>
              <p>By {this.props.project.creator.name}</p>
            </div>
          </div>
        </div>
        <div className="proj-show-picture-deadline">
          <div className="proj-show-left-picture">
            <img
              className="proj-show-img"
              src={this.props.project.photo}
              alt=""
            />
            <div className="show-cat-location">
              <div>
                <i className="far fa-compass" />
                <span>{this.props.project.category}</span>
              </div>
              <br />
              <div>
                <i className="fas fa-map-marker-alt" />
                <span>{this.props.project.location}</span>
              </div>
            </div>
          </div>
          <div className="proj-show-right-deadline">
            <div className="funding-border" />
            <div>
              <span className="funded-amt-text">$150,000</span>
              <div>
                <span className="goal-amt-text">
                  pledged of ${this.props.project.goal_amt} goal
                </span>
              </div>
            </div>
            <div className="backers-amt">522 backers</div>
            <button className="back-project-button" onClick={this.handleClick}>
              Back this Project
            </button>
            <span>
              This project will only be funded if it reaches its goal by{" "}
              {this.props.project.deadline.slice(0, 10)} 12AM EST
            </span>
          </div>
        </div>
        <div className="proj-show-about-left">
          <div className="proj-show-body">{this.props.project.body}</div>
        </div>
        <div className="proj-show-rewards-right">{rewardDivs}</div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    msp,
    mdp
  )(ProjectShowComponent)
);
