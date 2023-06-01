import {GET_LIST, ADD_LIST_IN_STORE, IS_LOADING} from '../TYPES';

const initialState = {
  list: [],
  isLoading: false,
};

function listReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_LIST_IN_STORE:
      return {...state, list: action.payload};
    case GET_LIST:
      return {...state, list: action.payload};
    case IS_LOADING:
      return {...state, isLoading: action.payload};
    default:
      return state;
  }
}

export {listReducer};
