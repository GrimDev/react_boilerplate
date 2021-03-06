import { createAction } from 'redux-actions';

import * as actionTypes from './actionTypes';

import fetchAction from '../fetchAction';

export const putOn = createAction(actionTypes.PUT_ON);

// ===

export const putOff = () => ({
  type: actionTypes.PUT_OFF,
});

export const switchLight = (onOff) => ({
  type: actionTypes.SWITCH_LIGHT,
  payload: onOff,
});

export const fetchApiLoading = createAction(actionTypes.FETCH_API_LOADING);
export const fetchApiFailure = createAction(actionTypes.FETCH_API_FAILURE);
export const fetchApiSuccess = createAction(actionTypes.FETCH_API_SUCCESS);

export const fetchApi = () => async (dispatch) => fetchAction(
  'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49',
  { method: 'GET' },
  dispatch,
  fetchApiLoading,
  fetchApiSuccess,
  fetchApiFailure,
);
