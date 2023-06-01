import {ADD_LIST_IN_STORE, GET_LIST, SET_CURRENT_SCREEN} from '../TYPES.ts';

export function addListInSore({id, name}) {
  return {
    type: ADD_LIST_IN_STORE,
    payload: {
      id,
      name,
    },
  };
}

export function getListFromStore(id: number) {
  return {
    type: GET_LIST,
    payload: id,
  };
}

export function setCurrentScreen(screenName: string) {
  return {
    type: SET_CURRENT_SCREEN,
    payload: screenName,
  };
}
