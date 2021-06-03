import * as actionTypes from './actionTypes'
import axios from 'axios'

export const setUser = (user) => dispatch => {
    dispatch({
        type: actionTypes.SET_USER,
        payload: user
    })
}
export const login = async (formData) => {
        try {
            const res = await axios.post('/login', formData, { nonAuth: true });
          return res.data;
      } catch (e) {
        return e.message;
      }
};

export const getProduct = () => async dispatch => {
    dispatch({
        type: actionTypes.GET_PRODUCT,
        payload: false
    })
    try {
       const res = await axios.get('/getProduct')
        dispatch( {
            type: actionTypes.GET_PRODUCT,
            payload: res.data.data
        })
    }
   catch(err) {
        console.log(err)
    };
}