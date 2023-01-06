import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { removeproduct } from '../Redux/cartRedux';
import { addProduct } from '../Redux/wishlistRedux';
import './CSS/Cartitems.css'
import { toast } from 'react-toastify';

const CartItems = ({item}) => {

  const dispatch = useDispatch();

  function moveTowishlist(){
    dispatch(removeproduct({...item}))
    dispatch(addProduct({...item}))
  }

  function removeFromCart(){
    dispatch(removeproduct({...item}))
    console.log(item)
    // toast("Product removed from Cart")
  }
  

  return (
    <div className='cartitem-container'>
        <div className='cartitem-contents'>
            <div className='cartitem-img-wrapper'>
                <img className='cartitem-img' src={item.img} alt='cartitem'></img>
            </div>
            <div className='cartitem-details-wrapper'>
                <div className='cartitem-details-brand'>{item.brand}</div>
                <div className='cartitem-details-title'>{item.title}</div>
                <div className='cartitem-details-price'>&#8377;{item.price}</div>
                <button className='cartitem-details-btn' onClick={()=>moveTowishlist()}>WISHLIST</button>
            </div>
            <button className='cartitem-remove-cross' onClick={()=>removeFromCart()}>
              <span className='cartitem-remove-cross-span'>&times;</span>
            </button>
        </div>
    </div>
  )
}

export default CartItems