import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const wishlistSlice = createSlice({
    name : "wishlist",
    initialState : {
        products : [],
        quantity : 0,
    },
    reducers : {
        addProduct : (state,action) => {
            if(!state.products.find(e => e._id === action.payload._id)){
                state.products.push(action.payload)
                toast.success("product added to Wishlist")
            }
            else{
                toast.error("product already added to Wishlist")
            }
            state.quantity=state.products.length;
        },
        removeProduct : (state,action) => {
            state.products = state.products.filter(e => e._id !== action.payload._id)
            state.quantity=state.products.length;
            toast.success("product removed from Wishlist")
        }
    }
})

export const {addProduct,removeProduct} = wishlistSlice.actions
export default wishlistSlice.reducer;