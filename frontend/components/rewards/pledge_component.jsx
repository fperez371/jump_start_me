import React from "react";

class Reward extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      amount: this.props.reward.amount,
    };
  }

  handleClick() {
    this.setState({ clicked: true });
  }

  submitBacking() {
    this.props.createPledge({
      user_id: this.props.userId,
      project_id: this.props.projectId,
      amount: this.state.amount,
      reward_id: this.props.reward.id,
    });
    this.setState({ amount: "", clicked: false });
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div id="reward-pane">
        <h1>Pledge of ${this.props.reward.amount} or more</h1>
        <h3>{this.props.reward.name}</h3>
        <h6>{this.props.reward.description}</h6>
        <h4>ESTIMATED DELIVERY</h4>
        <h5>{this.props.reward.delivery_date}</h5>
        <div className={this.state.clicked ? "" : "hidden"}>
          <h2>Pledge Amount</h2>
          <input
            type="number"
            onChange={e => {
              this.setState({ amount: e.currentTarget.value });
            }}
            min={this.props.reward.amount}
          />
          <button
            className={
              this.props.userId === this.props.creator_id || !this.props.userId
                ? "deactivated pale"
                : ""
            }
            onClick={this.submitBacking.bind(this)}
          >
            Continue
          </button>
        </div>
        <div
          id="foregorund"
          className={this.state.clicked ? "hidden" : ""}
          onClick={this.handleClick.bind(this)}
        >
          Select This Reward
        </div>
      </div>
    );
  }
}

export default Reward;
