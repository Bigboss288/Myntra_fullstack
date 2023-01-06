
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux"
import wishlistReducer from './wishlistRedux'
import productReducer from './productRedux'

export default configureStore({
    reducer:{
        cart : cartReducer,
        wishlist : wishlistReducer,
        productFilter : productReducer,
    }
})

