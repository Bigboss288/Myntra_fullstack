import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const cartSlice = createSlice({
    name : "cart",
    initialState:{
        products : [],
        quantity : 0 ,
        totalprice : 0
    },
    reducers:{
        addproduct : (state,action)=>{
            if(!state.products.find(e => e._id === action.payload._id)){
                state.products.push(action.payload);
                state.totalprice += parseInt(action.payload.price);
                toast.success("product added to Cart")
            }
            else{
                toast.error("product already added to Cart")
            }
            state.quantity =state.products.length;
            
        },
        removeproduct : (state,action) => {
           state.products = state.products.filter(e => e._id !== action.payload._id)
           state.quantity=state.products.length;
           state.totalprice -= parseInt(action.payload.price)
           toast.success("product removed from Cart")
        }
    }
    
})

export const { addproduct,removeproduct } = cartSlice.actions
export default cartSlice.reducer;