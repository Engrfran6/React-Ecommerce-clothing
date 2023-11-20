import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import cartReducer from '../features/cart/cartSlice';
import logger from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {auth, createUserFromProfileDocument} from '../../firebase/firebase.utils';
import {createUserWithEmailAndPassword} from 'firebase/auth';

const middlewares = [logger];

const userPersistConfig = {
  key: 'cart',
  storage,
};
const cartPersistConfig = {
  key: 'cart',
  storage,
  blacklist: [createUserFromProfileDocument, createUserWithEmailAndPassword, auth],
};

const cartPersistedReducer = persistReducer(cartPersistConfig, cartReducer);
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    cart: cartPersistedReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middlewares),
});

export const persistor = persistStore(store);
