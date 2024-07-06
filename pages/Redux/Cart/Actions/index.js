import { ADD_TO_CART } from "./actionTypes";
import { REMOVE_ITEM } from "./actionTypes";
export const addToCart = (productInfo) => ({
  type: ADD_TO_CART,
  payload: productInfo,
});



export const removeItem = (payload) => {
  return {
    type: REMOVE_ITEM,
    payload,
  };
};
