import React from "react";
import Pledge from "./pledge";

class RewardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      amount: "",
    };
  }

  handleClick() {
    this.setState({ clicked: true });
  }

  submitPledge() {
    this.props.createPledge({
      backer_id: this.props.backer_id,
      proj_id: this.props.proj_id,
      amount: this.state.amount,
    });
    this.setState({ amount: "", clicked: false });
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  defaultSupportField() {
    return (
      <div id="reward-pane">
        <div className="pledge-amount">
          <h1>Make a pledge without a reward</h1>
        </div>
        <input
          className="pledge-input"
          type="number"
          onFocus={this.handleClick.bind(this)}
          value={this.state.amount}
          onChange={e => {
            this.setState({ amount: e.currentTarget.value });
          }}
        />
        <div>
          <button
            className="pledge-button"
            onClick={this.submitPledge.bind(this)}
          >
            Continue
          </button>
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
            <Pledge
              key={idx}
              reward={reward}
              backer_id={this.props.backer_id}
              project_id={this.props.projectId}
              createPledge={this.props.createPledge}
            />
          );
        })}
      </div>
    );
  }
}

export default RewardContainer;
