import React, { useEffect } from 'react'
import './CSS/wishlistitem.css'
import { addproduct } from '../Redux/cartRedux';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../Redux/wishlistRedux';
import { toast } from 'react-toastify';

const Wishlistitem = ({item}) => {

    const dispatch = useDispatch()

    function handleClick(){   
        dispatch(addproduct({...item}));
        dispatch(removeProduct({...item}));
    }

    function remove(){
      dispatch(removeProduct({...item}))
      // toast("Product removed from Cart")
    }

    
  return (
    <div className='wishlistitem-container'>
      <span className='wishlistitem-remove-btn' onClick={remove}>&times;</span>
       <img className='wishlistitem-img'src={item.img} alt='wishlist'></img>
       <div className='wishlistitem-info'>
          <div className='wishlistitem-desc'>{item.brand} {item.title}</div>
          <div className='wishlistitem-price'>&#8377;{item.price}</div>
       </div>
       <button className='wishlistitem-btn' onClick={()=>handleClick()}>MOVE TO BAG</button>
    </div>
  )
}

export default Wishlistitem