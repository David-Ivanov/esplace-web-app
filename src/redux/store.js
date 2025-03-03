import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './products/slice.js';
import cartReducer from './cart/slice.js';


export const store = configureStore({
	reducer: {
		products: productsReducer,
		cart: cartReducer
	},
});

export default store;
