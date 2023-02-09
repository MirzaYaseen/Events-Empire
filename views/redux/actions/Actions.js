import {
  ADD_TO_CART,
  ADD_TO_WHISHLIST,
  REMOVE_FROM_CART,
  REMOVE_FROM_WHISHLIST,
} from '../ActionTypes';

export const addItemToCart = data => ({
  type: ADD_TO_CART,
  payload: data,
});
export const removeFromCart = index => ({
  type: REMOVE_FROM_CART,
  payload: index,
});

export const addItemToWhishList = data => ({
  type: ADD_TO_WHISHLIST,
  payload: data,
});
export const removeFromWhishList = index => ({
  type: REMOVE_FROM_WHISHLIST,
  payload: index,
});
