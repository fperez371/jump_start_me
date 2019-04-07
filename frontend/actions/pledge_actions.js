import * as PledgeUtil from "../util/pledge_api_util.js";

export const RECEIVE_PLEDGE = "RECEIVE_PLEDGE";

export const receivePledge = pledge => {
  return {
    type: RECEIVE_PLEDGE,
    pledge: pledge,
  };
};

export const createPledge = pledge => {
  return dispatch => {
    PledgeUtil.createPledge(pledge).then(pledge => {
      dispatch(receiveProject(pledge));
    });
  };
};