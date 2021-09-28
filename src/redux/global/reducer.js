import * as actionTypes from './actionTypes';

const initialState = {
  lightState: 'OFF',
  isLoadingApi: false,
  fetchApiFailed: null,
  fetchApiSucceed: null,
};

export default (state = initialState, action) => {
  console.log('reducer', action);
  switch (action.type) {
    case actionTypes.PUT_ON:
      return { ...state, lightState: 'ON' };
    case actionTypes.PUT_OFF:
      return { ...state, lightState: 'OFF' };
    case actionTypes.SWITCH_LIGHT:
      return { ...state, lightState: action.payload ? 'ON' : 'OFF' };

    case actionTypes.FETCH_API_LOADING:
      return {
        ...state, isLoadingApi: true, fetchApiSucceed: null, fetchApiFailed: null,
      };
    case actionTypes.FETCH_API_FAILURE:
      return {
        ...state, isLoadingApi: false, fetchApiFailed: action.payload, fetchApiSucceed: null,
      };
    case actionTypes.FETCH_API_SUCCESS:
      return {
        ...state, isLoadingApi: false, fetchApiSucceed: action.payload, fetchApiFailed: null,
      };
    default:
      return state;
  }
};
