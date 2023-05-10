import {ADD_LIST_IN_STORE, GET_LIST} from '../TYPES.ts';

export function addListInSore({id, name}) {
  return {
    type: ADD_LIST_IN_STORE,
    payload: {
      id,
      name,
    },
  };
}

export function getListFromStore(id) {
  return {
    type: GET_LIST,
    payload: id,
  };
}
