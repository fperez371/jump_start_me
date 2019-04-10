import React from "react";

class Pledge extends React.Component {
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

  submitPledge() {
    this.props.createPledge({
      backer_id: this.props.backer_id,
      proj_id: this.props.proj_id,
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
        <h5>{this.props.reward.est_delivery}</h5>
        <div className={this.state.clicked ? "" : "hidden"}>
          <h2>Pledge Amount</h2>
          <div className="input-div">
            <div className="currency-border">
              <span className="dolla">$</span>
            </div>
            <input
              className="pledge-input"
              type="number"
              onChange={e => {
                this.setState({ amount: e.currentTarget.value });
              }}
              min={this.props.reward.amount}
            />
          </div>
          <button
            className={!this.props.userId ? "pledge-button" : "deactivated"}
            onClick={this.submitPledge.bind(this)}
          >
            Continue
          </button>
        </div>
        <div
          id="foreground"
          className={this.state.clicked ? "hidden" : ""}
          onClick={this.handleClick.bind(this)}
        >
          Select This Reward
        </div>
      </div>
    );
  }
}

export default Pledge;
