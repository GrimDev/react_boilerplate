import * as actionTypes from './actionTypes';

export const putOn = () => ({
  type: actionTypes.PUT_ON,
});

export const putOff = () => ({
  type: actionTypes.PUT_OFF,
});

export const switchLight = (onOff) => ({
  type: actionTypes.SWITCH_LIGHT,
  payload: onOff,
});

export const addOne = () => ({
  type: actionTypes.ADD_ONE,
});

export const removeOne = () => ({
  type: actionTypes.REMOVE_ONE,
});
