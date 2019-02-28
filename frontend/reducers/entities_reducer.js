import { combineReducers } from 'redux';

import users from './users_reducer';
import projects from './projects_reducer';
import rewards from './rewards_reducer';

export default combineReducers({
  users,
  projects,
  rewards,
});