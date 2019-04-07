import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProject } from "../../actions/project_actions";
import { fetchRewards } from "../../actions/reward_actions";
import { RewardContainer } from "../rewards/reward_container";

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
    this.calculateTimeLeft = this.calculateTimeLeft.bind(this);
  }

  componentDidMount() {
    this.props
      .fetchProject(this.props.match.params.projectId)
      .then(() => this.props.fetchRewards())
      .then(() => this.setState({ isLoading: false }));
  }

  handleClick() {
    this.props.history.push("/");
  }

  calculateTimeLeft(endDate) {
    const daysLeft = (Date.parse(endDate) - Date.now()) / 1000 / 60 / 60 / 24;

    if (daysLeft > 1) {
      return (
        <>
          <div>
            <span id="pledges-total">{Math.round(daysLeft)}</span>
          </div>
          <span className="goal-amt-text">days to go</span>
        </>
      );
    } else if (daysLeft > 0) {
      return <h5>Ends Today!</h5>;
    } else {
      return <h5>Ended</h5>;
    }
  }

  render() {
    debugger;
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    let rewardDivs = null;
    // let rewards = this.state.entities.rewards;
    // if (this.state.entities.rewards) {
    //   rewardDivs = rewards.map(reward => (
    //     <div className="rewardDiv">{reward.name}</div>
    //   ));
    // } else {
    //   rewardDivs = null;
    // }

    const percentage = {
      width: `${this.props.project.percentToGoal}%`,
    };

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
            <div className="funding-border" style={percentage} />
            <div>
              <span className="funded-amt-text">
                ${this.props.project.totalRaised}
              </span>
              <div>
                <span className="goal-amt-text">
                  pledged of ${this.props.project.goal_amt} goal
                </span>
              </div>
            </div>
            <div className="backers-amt">
              <span id="pledges-total">{this.props.project.totalPledges}</span>
              <br />
              <span className="goal-amt-text">Backers</span>
            </div>
            <div>{this.calculateTimeLeft(this.props.project.deadline)}</div>
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
          <h2 className="about-proj">About</h2>
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
