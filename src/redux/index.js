import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import Reducers from './reducers';

const preloadedState = {};

const store = configureStore({
    reducer: Reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
});

export default store;
