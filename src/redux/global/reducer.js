import * as actionTypes from './actionTypes';

const initialState = {
  lightState: 'OFF',
  counter: 1,
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
    case actionTypes.ADD_ONE:
      return { ...state, counter: state.counter + 1 };
    case actionTypes.REMOVE_ONE:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};
