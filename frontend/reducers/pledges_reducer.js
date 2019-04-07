import { RECEIVE_PLEDGE } from "../actions/pledge_actions";
import merge from "lodash/merge";

const pledgeReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLEDGE:
      return merge({}, { [action.pledge.id]: action.pledge });
    default:
      return state;
  }
};

export default pledgeReducer;
