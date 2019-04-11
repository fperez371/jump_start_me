import * as UserAPIUtil from "../util/user_api_util";
import { receiveCurrentUser } from "../actions/session_actions";

export const updateUser = user => {
  return UserAPIUtil.updateUser(user).then(user =>
    dispatch(receiveCurrentUser(user))
  );
};
