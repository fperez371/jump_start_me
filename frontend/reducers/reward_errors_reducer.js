import {
  RECEIVE_REWARD_ERRORS,
  RECEIVE_REWARD,
} from "../actions/reward_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REWARD_ERRORS:
      return action.errors;
    case RECEIVE_REWARD:
      return [];
    default:
      return state;
  }
};
