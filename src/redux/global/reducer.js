import * as actionTypes from './actionTypes';

const initialState = {
  lightState: 'OFF',
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
    default:
      return state;
  }
};
