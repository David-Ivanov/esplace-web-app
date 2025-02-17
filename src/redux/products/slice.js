import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "./operations";

const slice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        isLoading: false,
        error: false
    },
    extraReducers: builder => 
        builder
            .addCase(getAllProducts.pending, state => {
                state.error = false;
                state.isLoading = true;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.isLoading = false;
            })
            .addCase(getAllProducts.rejected, state => {
                state.error = true;
				state.isLoading = false;
            })
});

export default slice.reducer;