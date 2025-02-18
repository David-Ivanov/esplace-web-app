import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectProducts } from "./selectors";

axios.defaults.baseURL = "https://esplace-bot.onrender.com/api";

export const addProductToCart = createAsyncThunk(
    'cart/addProductToCart',
    async (product) => {
        console.log('product: ' + product);

        const productsInCart = useSelector(selectProducts);

        console.еф('products in cart: ' + productsInCart);

        return product
    }
)