import React from "react";
import Pledge from "./pledge";

class RewardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: "",
        };
    }

    submitPledge() {
        this.props.createPledge({
            backer_id: this.props.backer_id,
            proj_id: this.props.proj_id,
            amount: this.state.amount,
        });
        this.setState({ amount: "" });
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
                <div className="input-div">
                    <div className="currency-border">
                        <span className="dolla">$</span>
                    </div>
                    <input
                        className="pledge-input"
                        type="number"
                        value={this.state.amount}
                        onChange={e => {
                            this.setState({ amount: e.currentTarget.value });
                        }}
                    />
                </div>
                <div>
                    <button
                        className={
                            this.props.userId ? "pledge-button" : "deactivated"
                        }
                        onClick={this.submitPledge.bind(this)}
                    >
                        {this.props.userId ? "Continue" : "Log in first!"}
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
                            proj_id={this.props.proj_id}
                            createPledge={this.props.createPledge}
                        />
                    );
                })}
            </div>
        );
    }
}

export default RewardContainer;
