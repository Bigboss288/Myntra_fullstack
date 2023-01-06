import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name : "productFilter",
    initialState : {
        products : [],
        genderArray : [],
        filterArray : [],
        gender : {
                    gender : 'everyone',
                },
        filters : [],
    },
    reducers : {
        addproduct : (state,action) => {
            if(!state.products.find(e => e._id === action.payload._id)){
                state.products.push(action.payload)
            }
        },
        removeproduct : (state,action) => {
            state.products = state.products.filter(e => e._id !== action.payload._id)
        },
        addGenderArray : (state,action) => {
            if(!state.genderArray.find(e => e.brand === action.payload.brand)){
                state.genderArray.push(action.payload)
            }
        },
        // removeGenderArray : (state,action) => {
        //     state.genderArray = state.products.filter(e => e._id !== action.payload._id)
        // },
        addGender : (state,action) =>{
            state.gender = action.payload
        },
        removeGender : (state,action) =>{
            state.gender = '';
        },
        addFilterArray : (state,action) => {
            if(!state.filterArray.find(e => e._id === action.payload._id)){
                state.filterArray.push(action.payload);
            }
        },
        removeFilterArray : (state,action) => {
            state.filterArray = state.filterArray.filter(e => e.brand !== action.payload.brand)
        },
        clearFilterArray : (state,action) => {
            state.filterArray = []
        },
        sortAscFilterArray : (state,action) => {
            state.filterArray.sort((a,b)=> parseInt(a.price) - parseInt(b.price));
        },
        sortDescFilterArray : (state,action) => {
            state.filterArray.sort((a,b)=> parseInt(b.price) - parseInt(a.price));
        },
        fillAll : (state,action) => {
            state.filterArray = []
            state.products.map((item)=>{
                state.filterArray.push(item)
            })
            state.genderArray = []
            state.products.map((item)=>{
                if(!state.genderArray.find(e => e.brand === item.brand)){
                    state.genderArray.push(item)
                }
            })
        },
        clearAll : (state,action) =>{
            state.filterArray = []
            state.genderArray = []
            // state.filters = []
            state.gender.gender = 'everyone';
        },
        addFilters : (state,action) =>{
            // state.filters = state.filters()
            if(!state.filters.find(e => e.brand === action.payload.brand)){
                state.filters.push(action.payload)
            }
        },
        removeFilters : (state,action) => {
            state.filters = state.filters.filter(item => item.brand !== action.payload.brand)
        },
        clearFilters : (state,action) => {
            state.filters = []
        }
    }
})

export const {addFilterArray,removeFilterArray,addGenderArray,addGender,removeGender,addproduct,removeproduct,
              clearFilterArray,fillAll,clearAll,addFilters,removeFilters,sortAscFilterArray,
              sortDescFilterArray,clearFilters} = productSlice.actions;
export default productSlice.reducer;