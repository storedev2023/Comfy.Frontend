import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart-reducer";
import productReducer from "./reducers/product-reducer";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
    }
});