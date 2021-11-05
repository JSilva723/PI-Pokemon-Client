import { REQUEST_FAILED, GET_TYPES, GET_POKES, ORDER_BY, FILTER_BY } from '../actions/types';

const initialState = {
  types: [],
  pokes: [],
  filterBy: 'default',
  orderBy: 'default',
  error: ''
};

const actionsObj = {
  [REQUEST_FAILED]: (state, payload) => ({
    ...state,
    err: payload
  }),
   [GET_TYPES]: (state, payload) => ({
    ...state,
    types: [...payload]
  }),
  [GET_POKES]: (state, payload) => ({
    ...state,
    pokes: [...payload]
  }),
  [ORDER_BY]: (state, payload) => ({
    ...state,
    orderBy: payload
  }),
  [FILTER_BY]: (state, payload) => ({
    ...state,
    filterBy: payload
  })
};

export const rootReducer = (state = initialState, action) => {
  if (!actionsObj.hasOwnProperty(action.type)) return state;
  return actionsObj[action.type](state, action.payload);
};
