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

class CreateRewardComponent extends React.component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      amount: 0,
      description: "",
      name: "",
      est_delivery: null,
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const reward = Object.assign({}, this.state);
    this.props.createReward(reward);
  }

  render(){
    return(
      
    )
  }
}



export default connect(msp,mdp)(CreateRewardComponent);