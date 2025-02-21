import { createSlice } from "@reduxjs/toolkit";
import { createOrder } from "./operations";
import toast from "react-hot-toast";


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
    },
    extraReducers: builder =>
        builder
            .addCase(createOrder.pending, state => {
                state.error = false;
                state.isLoading = true;
            })
            .addCase(createOrder.fulfilled, (state) => {
                state.order = {
                    name: null,
                    address: null,
                    number: null,
                    comment: null,
                    products: [],
                };
                state.isLoading = false;
                toast.success("Дякуємо за замовлення");
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.error = true;
                state.isLoading = false;
                toast.error(action.payload);
            })

});


export const { addProductToCart } = slice.actions;
export default slice.reducer;