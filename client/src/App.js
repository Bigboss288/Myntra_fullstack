import './App.css';
import Home from './Pages/Home';
import {Route, Routes} from 'react-router-dom'
import ProductDesc from './Pages/ProductDesc';
import Cart from './Pages/Cart'
import Wishlist from './Pages/Wishlist';
import React, { useEffect, useState } from 'react';
// import { products } from './Data';
import { useDispatch } from 'react-redux';
import { addFilterArray, addGenderArray, addproduct, clearFilterArray, fillAll } from './Redux/productRedux';
import { publicRequest } from './requestMethods';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LazyHome = React.lazy(()=>import('./Pages/Home'))

function App() {

  const dispatch = useDispatch()
  

  useEffect(()=>{
    const getProducts = async () =>{
      try{
        const res = await publicRequest.get("/product/findall")
        // setProducts(res.data)
        await res.data.forEach(e => {dispatch(addproduct(e))})
        await res.data.forEach(e => {dispatch(addFilterArray(e))})
        await res.data.forEach(e => {dispatch(addGenderArray(e))})
      }
      catch(err){}
    }

    getProducts()

    // products.forEach(e => {dispatch(addproduct(e))})
    // dispatch(fillAll({}))
    
  },[])

  
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<React.Suspense fallback='loading'>
          <LazyHome/>
        </React.Suspense>}></Route>
        <Route path='/product/:id' element={<ProductDesc/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/wishlist' element={<Wishlist/>}></Route>
      </Routes>
      <ToastContainer theme="dark" autoClose={1000} 
      className = 'Toastify__toast-container--top-right'/>
    </div>
  );
}

export default App;
