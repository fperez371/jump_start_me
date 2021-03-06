import React from "react";

class Pledge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            amount: this.props.reward.amount,
        };
        this.submitPledge = this.submitPledge.bind(this);
        this.handleClick = this.handleClick.bind(this);
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
                    <div className="input-div">
                        <div className="currency-border">
                            <span className="dolla">$</span>
                        </div>
                        <input
                            className="pledge-input"
                            type="number"
                            onChange={e => {
                                this.setState({
                                    amount: e.currentTarget.value,
                                });
                            }}
                            min={this.props.reward.amount}
                        />
                    </div>
                    <button
                        className={
                            this.props.backer_id
                                ? "pledge-button"
                                : "deactivated"
                        }
                        onClick={this.submitPledge}
                    >
                        {this.props.backer_id
                            ? "Continue"
                            : "Log in to support projects!"}
                    </button>
                </div>
                <div
                    id="foreground"
                    className={this.state.clicked ? "hidden" : ""}
                    onClick={this.handleClick}
                >
                    Select This Reward
                </div>
            </div>
        );
    }
}

export default Pledge;
