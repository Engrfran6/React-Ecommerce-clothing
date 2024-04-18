import userReducer from '../features/userSlice/userSlice';
import cartReducer from '../features/cartSlice/cartSlice';
import directoryReducer from '../features/directorySlice/directoryDataSlice';
import shopSlice from '../features/shopSlice/shopSlice';
import {combineReducers} from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopSlice,
});
