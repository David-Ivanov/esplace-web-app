import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://esplace-bot.onrender.com/api";


export const createOrder = createAsyncThunk(
    'cart/sendOrder',
    async (order, thunkAPI) => {
        try {
            const response = await axios.post('/order', order);
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)