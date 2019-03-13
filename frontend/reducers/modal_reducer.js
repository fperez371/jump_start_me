import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

export default function modalReducer(state = null, action) {
  Object.freeze(state);
  switch (action.type) {
    case LOGOUT_CURRENT_USER:
      return null;
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}
