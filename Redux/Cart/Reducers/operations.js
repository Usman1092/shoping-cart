

// import { ADD_TO_CART } from '../Actions/actionTypes';
// const initialState = {
//   items: [],
// };

// const operationsReducer = (state = initialState, action) => {
//   console.log('Action received:', action); 
  
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       console.log('Adding to cart:', action.payload);
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     default:
//       return state;
//   }
// };

// export default operationsReducer;



import {ADD_TO_CART, REMOVE_ITEM } from "../Actions/actionTypes";
const initialState = {
  items: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cartItems')) || [] : [],
};

const operationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItems = [...state.items, action.payload];
      if (typeof window !== 'undefined') {
        localStorage.setItem('cartItems', JSON.stringify(newItems));
      }
      return {
        ...state,
        items: newItems,
      };
     
     
      case REMOVE_ITEM:
        const filteredItems = state.items.filter((item) => item.id !== action.payload);
        if (typeof window !== 'undefined') {
          localStorage.setItem('cartItems', JSON.stringify(filteredItems));
        }
        return {
          ...state,
          items: filteredItems,
        };
    
    default:
      return state;
  }
};

export default operationsReducer;



