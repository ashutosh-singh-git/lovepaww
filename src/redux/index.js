import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

const initialState = {

};

const Reducers = {

};

const store = createStore(
    Reducers,
    initialState,
    applyMiddleware(thunk)
);

export default store;