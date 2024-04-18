import {createSlice} from '@reduxjs/toolkit';
import {addItemToCart, removeItemFromCart, increaseQuantity, decreaseQuantity} from './cart-utils';
import * as cartSelectors from '../../selectors/selector'; // Import the selectors

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartHidden: false,
    cartItems: [],
    itemDetails: null,
  },
  reducers: {
    toggleCart: (state) => {
      return {
        ...state,
        cartHidden: !state.cartHidden,
      };
    },

    addToCart: (state, action) => {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    },

    removeFromCart: (state, action) => {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    },
    clearCart: (state) => {
      return {
        ...state,
        cartItems: [],
      };
    },
    increaseItem: (state, action) => {
      return {
        ...state,
        cartItems: increaseQuantity(state.cartItems, action.payload),
      };
    },
    decreaseItem: (state, action) => {
      return {
        ...state,
        cartItems: decreaseQuantity(state.cartItems, action.payload),
      };
    },
    addItemDetails: (state, action) => {
      return {
        ...state,
        itemDetails: action.payload,
      };
    },
    clearItemDetails: (state) => {
      return {
        ...state,
        itemDetails: null,
      };
    },
  },
});

export const {
  toggleCart,
  addToCart,
  removeFromCart,
  clearCart,
  increaseItem,
  decreaseItem,
  addItemDetails,
  clearItemDetails,
} = cartSlice.actions;

export default cartSlice.reducer;
export {cartSelectors};
