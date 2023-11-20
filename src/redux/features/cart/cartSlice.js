import {createSelector, createSlice} from '@reduxjs/toolkit';
import {addItemToCart, removeItemFromCart} from './cart-utils';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartHidden: true,
    cartItems: [],
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
  },
});

const cartHiddenSelector = (state) => state.cart.cartHidden;
export const selectCartHidden = createSelector([cartHiddenSelector], (cartHidden) => cartHidden);

const cartItemsSelector = (state) => state.cart.cartItems;
export const selectCartItems = createSelector([cartItemsSelector], (cartItems) => cartItems);

const totalItemsSelector = (state) =>
  state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);
export const selectTotalItems = createSelector(
  [totalItemsSelector],
  (totalCartItems) => totalCartItems
);

const totalItemsPriceSelector = (state) =>
  state.cart.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
export const selectedTotalItemsPrice = createSelector(
  [totalItemsPriceSelector],
  (totalCartItemsPrice) => totalCartItemsPrice
);

export const {toggleCart, addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;
