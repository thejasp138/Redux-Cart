import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slises/productSlice'
import wishlistReducer from './slises/wishlistSlice'
import cartReducer from './slises/cartSlice'

const productStore=configureStore({
    reducer:{
        productReducer,
        wishlistReducer,
        cartReducer

    }
})


export default productStore