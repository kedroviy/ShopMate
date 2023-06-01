import {ADD_LIST_IN_STORE, GET_LIST, IS_LOADING} from '../TYPES.ts';

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

export function isLoad(loading: boolean) {
  return {
    type: IS_LOADING,
    payload: loading,
  };
}
