import {
  ADD_LIST_IN_STORE,
  GET_LIST,
  OPEN_NEW_LIST_WINDOW_CREATOR,
} from '../TYPES.ts';

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

export function openNewListWindow(boolean) {
  return {
    type: OPEN_NEW_LIST_WINDOW_CREATOR,
    payload: boolean,
  };
}
