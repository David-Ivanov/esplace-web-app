import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://esplace-bot.onrender.com/api";

export const getAllProducts = createAsyncThunk(
    'products/getAllProducts',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/product');
            return response.data;
        } catch (error) {
			return thunkAPI.rejectWithValue(error.message);
        }
    }
)