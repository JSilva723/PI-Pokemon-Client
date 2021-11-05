import { Service } from '../utils/service';
import { REQUEST_FAILED, GET_TYPES, GET_POKES, ORDER_BY, FILTER_BY } from './types';

const api = new Service();

export const getTypes = () => ((dispatch) =>{
  api.getTypes()
    .then(res => {
      const names = res.map(type => type.name);
      dispatch({
        type: GET_TYPES,
        payload: names
      });
    })
    .catch(err => {
      dispatch({
        type: REQUEST_FAILED,
        payload: err
      });
    });
});

export const getPokes = (start, end) => ((dispatch) =>{
  api.getPokes(start, end)
    .then(res => {
      dispatch({
        type: GET_POKES,
        payload: res
      });
    })
    .catch(err => {
      dispatch({
        type: REQUEST_FAILED,
        payload: err
      });
    });
});

export const orderBy = (attr) => {
  return {
    type: ORDER_BY,
    payload: attr
  };
}; 

export const filterBy = (attr) => {
  return {
    type: FILTER_BY,
    payload: attr
  };
}; 
