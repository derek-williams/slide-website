import { ADD_APP, REMOVE_APP, SET_USER, UNSET_USER } from './actions';

const initialState = {
  user: null,
  app: null
};

export default function rootReducer(state = initialState, action) {
  switch(action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user
      };
    case UNSET_USER:
      return {
        ...state,
        user: null
      };
    case ADD_APP:
      return {
        ...state,
        app: action.app
      };
    case REMOVE_APP:
      return {
        ...state,
        app: null
      };
    default:
      return state;
  }
}
