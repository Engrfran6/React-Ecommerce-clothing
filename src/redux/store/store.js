import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {rootReducer} from '../rootReducer/root';

const middlewares = [];

if (process.env.NODE_ENV == 'production') {
  middlewares.push(logger);
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'directory', 'shop'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middlewares),
});

export const persistore = persistStore(store);
