import * as actionTypes from './actionTypes'

const initialState = {
  user: false,
  product: false,
  loding:false,
} 
const reducer =  (state = initialState, action) => {
  switch (action.type) {  
    case actionTypes.SET_USER:
      return { ...state, user: action.payload }
    case actionTypes.GET_PRODUCT:
      return {...state,product: action.payload}
    default:
      return state
  }
}

export default reducer;