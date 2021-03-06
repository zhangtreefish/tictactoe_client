import {
  LOAD_DATA_INITIATION,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAILURE,
  CLEAR_DATA_ERROR,
} from './constants';

export const initialState = {
  isLoading: false,
  games: null,
  errors: null,
};

/**
 * @function featureComponent
 * @description A redux reducer function
 *              Takes state and an action and returns next state.
 * @param {state} - the state tree of the application
 * @param {action} - the dispatched redux action
 */
const landingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA_INITIATION:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case LOAD_DATA_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        games: action.games,
      });
    case LOAD_DATA_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        errors: action.errors,
      });
    case CLEAR_DATA_ERROR:
      return Object.assign({}, state, {
        errors: null,
      });
    default:
      return state;
  }
};

export default landingReducer;
