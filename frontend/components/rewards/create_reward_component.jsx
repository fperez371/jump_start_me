import React from 'react';
import { connect } from 'react-redux';


const msp = (state, ownProps) => {
  return {
    errors: state.errors.reward,
    proj_id: ownProps.match.params.id
  };
};

const mdp = dispatch => {
  return {
    createReward: (reward) => dispatch(createReward(reward))
  };
};

class CreateRewardComponent extends React.component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      amount: 0,
      description: "",
      name: "",
      est_delivery: null,
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const reward = Object.assign({}, this.state);
    this.props.createReward(reward).then(() => {
      this.props.history.push(`/`)}
      );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="rewards-page-container">
        <div className="add-rewards-header">
          <h1>Add your rewards</h1>
          <div>Offer simple, meaningful rewards that bring backers closer to your project. Rewards don’t have to be physical items. Consider special experiences or behind-the-scenes peeks into your project.</div>
        </div>
        <div className="flex-rewards">
          <div className="add-reward-div">
            <h3>Add a reward</h3>
            <div>Offer tangible or intangible things that bring backers closer to your project.</div>
          </div>
          <div className="reward-name">
            <div>Title</div>
            <div>Briefly describe this reward.</div>
            <input className="reward-name-input" onChange={this.update("name")} value={this.state.name} type="text" placeholder="Signed limited edition"/>
          </div>
          <div className="reward-amount">
            <div>Pledge amount</div>
            <div>Set a minimum pledge amount for this reward.</div>
            <input className="reward-name-input" onChange={this.update("amount")} value={this.state.amount} type="number" min="1" max="100000000" placeholder="1"/>
          </div>
          <div className="reward-amount">
            <div>Description</div>
            <div>Describe this reward in more detail.</div>
            <textarea onChange={this.update("description")} className="reward-desc-text" value={this.state.description}  placeholder="Get an early copy, hot of the presses!"/>
          </div>
          <div className="reward-amount">
            <div>Estimated Delivery</div>
            <div>Give yourself plenty of time. It's better to deliver to backers ahead of schedule than behind.</div>
            <input onChange={this.update("est_delivery")} value={this.state.est_delivery} type="date" />
          </div>
        </div>
        <button className="add-reward-button">Add reward</button>
      </form>
    )
  }
}



export default connect(msp, mdp)(CreateRewardComponent);