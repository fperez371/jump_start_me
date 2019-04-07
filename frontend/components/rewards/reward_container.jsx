import React from "react";
import Reward from "./reward";

class RewardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      value: "",
    };
  }

  handleClick() {
    this.setState({ clicked: true });
  }

  defaultSupportField() {
    return (
      <div>
        <div id="reward-pane">
          <h1>Make a pledge without a reward</h1>
          <input
            type="number"
            onFocus={this.handleClick.bind(this)}
            value={this.state.value}
            onChange={e => {
              this.setState({ value: e.currentTarget.value });
            }}
          />
          <div className={this.state.clicked ? "" : "hidden"}>
            <button
              className={
                this.props.userId === this.props.adminId || !this.props.userId
                  ? "deactivated pale"
                  : ""
              }
              onClick={this.submitBacking.bind(this)}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (this.props.rewards.length <= 0) {
      return this.defaultSupportField();
    }

    return (
      <div>
        {this.defaultSupportField()}
        {this.props.rewards.map((reward, idx) => {
          return (
            <Reward
              key={idx}
              reward={reward}
              creatorId={this.props.a}
              userId={this.props.userId}
              projectId={this.props.projectId}
              createPledge={this.props.createPledge}
            />
          );
        })}
      </div>
    );
  }
}

export default RewardContainer;
