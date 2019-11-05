import * as actionTypes from '../actions/actionTypes';

const initialState = {
  someKey: 'someVal',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TEST:
      return action.result;
    default:
      return state;
  }
};

export default reducer;