import {GET_LIST, ADD_LIST_IN_STORE} from '../TYPES';

const initialState = {
  login: '',
  list: [],
};

function listReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_LIST_IN_STORE:
      return {...state, list: action.payload};
    case GET_LIST:
      return {...state, list: action.payload};
    default:
      return state;
  }
}

export {listReducer};
