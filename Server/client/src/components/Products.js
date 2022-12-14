import React, { useEffect, useState } from 'react'
import './CSS/Products.css'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addproduct } from '../Redux/cartRedux'
import { addProduct } from '../Redux/wishlistRedux'
import { toast } from 'react-toastify';


const Products = ({item}) => {

  const dispatch = useDispatch();
  const [isShown, setIsShown] = useState(false);


  function wishlistOnClick(e){
    e.preventDefault();
    dispatch(addProduct({...item}));
    // toast("Product added to Wishlist");
  }

  
  const cartOnClick = (e) => {
    e.preventDefault();
    dispatch(addproduct({...item}))
    // toast("Product added to Cart");
  }

  return (
    <div className='products-container' onMouseEnter={()=> setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
      <Link to={`/product/${item._id}`} style={{'textDecoration' : 'none'}}>
          <img className='products-img' src={item.img} alt='product'/>
          <div className='products-info products-hover'>
           {isShown && (<div className='products-btn-wrapper' id='products-btn-wrapper'>
               <button className='products-btn products-wishlist-btn' onClick={wishlistOnClick}>
                 <span class="web_sprite products-wishlist-icon"></span>
                  WISHLIST
                 </button>
               <button className='products-btn products-cart-btn' onClick={cartOnClick}>
                  <span className='web_sprite products-cart-icon'></span>
                 ADD TO CART
                 </button>
           </div>
            )}
           <div className='products-desc'>
              <div className='products-desc-brand'>{item.brand}</div>
              <div className='products-desc-title'>{item.title}</div>
              <div className='products-desc-price'>&#8377;{item.price}</div>
           </div>
          </div>
      </Link>
      
    </div>
  )
}

export default Products