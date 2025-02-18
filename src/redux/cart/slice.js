import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: 'cart',
    initialState: {
        order: {
            name: null,
            address: null,
            number: null,
            comment: null,
            products: []
        },
        isLoading: false,
        error: false
    },
    reducers: {
        plusProduct: (state, action) => {
            const product = state.order.products.find(p => p.productId === action.payload);
            if (product) {
                product.quantity++;
            }
        },
        minusProduct: (state, action) => {
            const product = state.order.products.find(p => p.productId === action.payload);
            if (product) {
                product.quantity--;
            }
        },
        addProductToCart: (state, action) => {
            const productsInCart = state.order.products;
            const product = productsInCart.find(p => p.productId === action.payload);

            if (product) {
                slice.caseReducers.plusProduct(state, { payload: action.payload });
            } else {
                productsInCart.push({ productId: action.payload, quantity: 1 });
            }
        }
    }

});


export const { addProductToCart } = slice.actions;
export default slice.reducer;