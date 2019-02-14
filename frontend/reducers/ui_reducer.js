import { merge } from 'lodash/merge';
import {RECEIVE_PROJECT, RECEIVE_ALL_PROJECTS} from '../actions/project_actions';
import {RECEIVE_SESSION_ERRORS} from '../actions/session_actions';

// const defaultState = {
//   projectLoading: true,
// };


// const uiReducer = (state = defaultState, action) => {
//   Object.f
//   switch (action.type) {
//     case RECEIVE_PROJECT:
//       return merge({}, state, {projectLoading: false});
//     case RECEIVE_ALL_PROJECTS:
//     debugger
//       return Object.assign({}, state, {projectLoading: false});
//     default:
//       return state;
//   }
// }

// export default uiReducer;