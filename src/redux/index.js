import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

const preloadedState = {};

const reducer = {};

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
});

export default store;
