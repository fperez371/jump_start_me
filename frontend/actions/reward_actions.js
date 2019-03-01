import * as APIUtil from '../util/reward_api_util';

export const RECEIVE_ALL_REWARDS =  "RECEIVE_ALL_REWARDS";
export const RECEIVE_REWARD =  "RECEIVE_REWARD";
export const RECEIVE_REWARD_ERRORS = "RECEIVE_REWARD_ERRORS";
export const RECEIVE_USER_REWARDS = "RECEIVE_USER_REWARDS";

export const receiveReward = reward => {
  return {
    type: RECEIVE_REWARD,
    reward
  };
};

export const receiveUserRewards = userRewards => {
  return {
    type: RECEIVE_USER_REWARDS,
    userRewards
  };
};

export const receiveAllRewards = rewards => {
  return{
    type: RECEIVE_ALL_REWARDS,
    rewards
  };
};

export const receiveRewardErrors = errors => {
  return{
    type: RECEIVE_REWARD_ERRORS,
    errors
  };
};

export const createReward = (reward) => dispatch => {
  return APIUtil.createReward(reward).then( reward => dispatch(receiveReward(reward)), err => (
    dispatch(receiveRewardErrors(err.statusText))
  ));
};

export const fetchRewards = () => dispatch => {
  return APIUtil.fetchRewards().then( rewards => { dispatch(receiveAllRewards(rewards)); 
  return rewards ;}, err => (
    dispatch(receiveRewardErrors(err.responseJSON))
  ));
};

export const fetchRewardsById = (creator_id) => dispatch => {
  return APIUtil.fetchRewardsById(creator_id).then( rewards => dispatch(receiveAllRewards(rewards)), err => (
    dispatch(receiveRewardErrors(err.responseJSON))
  ));
};