export const ADD_APP = "ADD_APP";
export const REMOVE_APP = "REMOVE_APP";
export const SET_USER = "SET_USER";
export const UNSET_USER = "UNSET_USER";

export function addApp(app) {
  return { type: ADD_APP, app: app };
}

export function removeApp() {
  return { type: REMOVE_APP };
}

export function setUser(user) {
  return { type: SET_USER, user: user };
}

export function unsetUser() {
  return { type: UNSET_USER };
}
