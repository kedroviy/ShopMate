import {GET_LIST, ADD_LIST_IN_STORE, SET_CURRENT_SCREEN} from '../TYPES';

const initialState = {
  list: [],
  currentScreen: '',
};

function listReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_LIST_IN_STORE:
      return {...state, list: action.payload};
    case GET_LIST:
      return {...state, list: action.payload};
    case SET_CURRENT_SCREEN:
      return {...state, currentScreen: action.payload};
    default:
      return state;
  }
}

export {listReducer};
