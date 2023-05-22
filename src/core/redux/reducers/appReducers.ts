import {
  GET_LIST,
  ADD_LIST_IN_STORE,
  OPEN_NEW_LIST_WINDOW_CREATOR,
} from '../TYPES';

const initialState = {
  login: '',
  list: [],
  newListModalWindow: false,
};

function listReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_LIST_IN_STORE:
      return {...state, list: action.payload};
    case GET_LIST:
      return {...state, list: action.payload};
    case OPEN_NEW_LIST_WINDOW_CREATOR:
      return {...state, newListModalWindow: action.payload};
    default:
      return state;
  }
}

export {listReducer};
