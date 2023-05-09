import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export const dataState = {
    products: null,
};

export const fetchProductsReducer = (state = dataState, action) => {
    if (action.type === 'FETCH_PRODUCTS') {
        return {...state, products: action.payload}
    }
    return state
}

export const productsFetchAction = (payload) => ({type: 'FETCH_PRODUCTS', payload});

export const store = createStore(fetchProductsReducer, applyMiddleware(thunk));