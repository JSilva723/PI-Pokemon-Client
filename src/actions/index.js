import { Service } from '../utils/service'
import { REQUEST_FAILED, GET_TYPES } from './types'

const api = new Service()

export const getTypes = () => ((dispatch) => {
  api.types()
    .then(resp => {
        const names = resp.map(type => type.name)
        dispatch({
          type: GET_TYPES,
          payload: names
        })
    }) 
    .catch(err => {
      dispatch({
        type: REQUEST_FAILED,
        payload: err
      })
    })
})

export const delError = () => ({
  type: REQUEST_FAILED,
  payload: ''
})