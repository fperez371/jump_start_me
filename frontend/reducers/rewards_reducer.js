import { RECEIVE_ALL_REWARDS, RECEIVE_REWARD } from "../actions/reward_actions";
import merge from "lodash/merge";

const rewardReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_REWARDS:
      return action.rewards;
    case RECEIVE_REWARD:
      return merge({}, { [action.reward.id]: action.reward });
    default:
      return state;
  }
};

export default rewardReducer;
