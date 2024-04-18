// selectors.js
import {createSelector} from '@reduxjs/toolkit';

const authUserSelector = (state) => state.user;
export const selectUser = createSelector([authUserSelector], (user) => user);

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

const directorySelector = (state) => state.directory.section;
export const selectDirectorySection = createSelector([directorySelector], (directory) => {
  return directory;
});

const shopDataSelector = (state) => state.shop.shopData;

export const selectShopData = createSelector([shopDataSelector], (shopData) => {
  return shopData;
});

export const selectCollectionData = createSelector(
  [shopDataSelector, (_, collectionId) => collectionId],
  (shopData, collectionId) => {
    const collection = shopData?.find((item) => item.routeName === collectionId);
    return collection ? collection.items : [];
  }
);
