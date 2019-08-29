import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProject } from "../../actions/project_actions";
import { fetchRewards } from "../../actions/reward_actions";
import { createPledge } from "../../actions/pledge_actions";
import Loading from "../loading/loading";
import RewardContainer from "../rewards/reward_container";

const msp = (state, ownProps) => {
    let project =
        state.entities.projects[ownProps.match.params.projectId] || null;
    let creator = project ? state.entities.users[project.creator_id] : null;
    let rewards;
    if (project && project.rewards) {
        rewards = Object.values(project.rewards).filter(reward => {
            return reward.proj_id === parseInt(ownProps.match.params.projectId);
        });
    } else {
        rewards = [];
    }

    return {
        currentUserId: state.session.id,
        creator: creator,
        project: project,
        rewards: rewards,
    };
};

const mdp = dispatch => {
    return {
        fetchProject: id => dispatch(fetchProject(id)),
        fetchRewards: () => dispatch(fetchRewards()),
        createPledge: pledge => dispatch(createPledge(pledge)),
    };
};

class ProjectShowComponent extends React.Component {
    constructor(props) {
        super(props);
        this.calculateTimeLeft = this.calculateTimeLeft.bind(this);
    }

    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId);
    }

    componentWillReceiveProps(nextProps) {
        if (
            this.props.project &&
            this.props.project.id !== parseInt(nextProps.match.params.projectId)
        ) {
            this.props.fetchProject(nextProps.match.params.projectId);
        }
    }

    calculateTimeLeft(endDate) {
        const daysLeft =
            (Date.parse(endDate) - Date.now()) / 1000 / 60 / 60 / 24;

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
        if (!this.props.project) {
            return <Loading />;
        }

        let percentage;
        if (this.props.project && this.props.project.percentToGoal <= 100) {
            percentage = {
                width: `${this.props.project.percentToGoal}%`,
            };
        } else {
            percentage = { width: "100%" };
        }
        return (
            <div className="proj-show-grid">
                <div className="top-row-description flex-nowrap">
                    <div className="proj-creator-show">
                        <div className="project-name-show">
                            <p className="proj-show-title">
                                {this.props.project.name}
                            </p>
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
                                    pledged of ${this.props.project.goal_amt}{" "}
                                    goal
                                </span>
                            </div>
                        </div>
                        <div className="backers-amt">
                            <span id="pledges-total">
                                {this.props.project.totalPledges}
                            </span>
                            <br />
                            <span className="goal-amt-text">Backers</span>
                        </div>
                        <div>
                            {this.calculateTimeLeft(
                                this.props.project.deadline
                            )}
                        </div>
                        <button
                            className="back-project-button"
                            onClick={() => {
                                window.scrollBy({
                                    top: 900,
                                    behavior: "smooth",
                                });
                            }}
                        >
                            Back this Project
                        </button>
                        <span>
                            This project will only be funded if it reaches its
                            goal by {this.props.project.deadline.slice(0, 10)}{" "}
                            12AM EST
                        </span>
                    </div>
                </div>
                <div className="proj-show-about-rewards">
                    <div className="about-proj-div">
                        <h2 className="about-proj">About </h2>
                        <div className="proj-show-body">
                            {this.props.project.body}
                        </div>
                    </div>
                    <div className="proj-show-rewards-right">
                        <h2 className="about-proj">Support</h2>
                        <RewardContainer
                            userId={this.props.currentUserId}
                            rewards={this.props.rewards}
                            createPledge={this.props.createPledge}
                            proj_id={this.props.project.id}
                            backer_id={this.props.project.creator.id}
                        />
                    </div>
                </div>
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
