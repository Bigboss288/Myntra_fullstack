import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import './CSS/wishlist.css'
import Wishlistitem from '../components/Wishlistitem'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Wishlist = () => {

    const products = useSelector(state => state.wishlist.products)
    const quantity = useSelector(state => state.wishlist.quantity)

    useEffect(()=>{
        if(quantity === 0){
           document.querySelector('.wishlist-content-wrapper').style.display = 'none'
           document.querySelector('.wishlist-content-empty').style.display = 'block'
        }
        else{
            document.querySelector('.wishlist-content-wrapper').style.display = 'block'
            document.querySelector('.wishlist-content-empty').style.display = 'none'
        }
    })

  return (
    <div className='wishlist-container'>
        <Navbar/>
        <div className='wishlist-content-wrapper'>
            <div className='wishlist-content-quantity'>
                <span className='wishlist-content-quantity-1'>My Wishlist -</span>
                <span className='wishlist-content-quantity-2'> {quantity} {quantity === 1? "item": "items" } </span>
            </div>
            <div className='wishlist-content-list'>
                {products.map((item)=>(
                    <Wishlistitem item={item} key={item.id}/>
                ))}
            </div>
        </div>
        <div className='wishlist-content-empty'>
            <div className='wishlist-empty-title1'>YOUR WISHLIST IS EMPTY</div>
            <div className='wishlist-empty-title2'>Add items that you like to your wishlist. Review them anytime and easily move them to the bag.</div>
            <div className='wishlist-empty-img'></div>
            <Link to={'/'} style={{textDecoration : 'none'}}><button className='wishlist-empty-btn'>CONTINUE SHOPPING</button></Link>
        </div>
        <Footer/>
    </div>
  )
}

export default Wishlist