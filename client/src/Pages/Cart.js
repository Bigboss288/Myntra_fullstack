import React, { useEffect } from 'react'
import CartItems from '../components/CartItems'
import Navbar from '../components/Navbar'
import './CSS/cart.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'


const Cart = () => {

  const products = useSelector(state => state.cart.products)
  const quantity = useSelector(state => state.cart.quantity)
  const totaPrice = useSelector(state => state.cart.totalprice)

  useEffect(()=>{
    if(quantity>0){
      document.querySelector('.cart-content-wrapper').style.display = 'flex'
      document.querySelector('.cart-content-empty').style.display = 'none'
    }
    else{
      document.querySelector('.cart-content-wrapper').style.display = 'none'
      document.querySelector('.cart-content-empty').style.display = 'block'
    }
  })

  return (
    <div className='cart-container'>
      <Navbar/>
      
      <div className='cart-content-wrapper'>
        <div className='cart-product-list'>
              {products.map((item) => (
                <CartItems item={item} key={item.id}/>
              ))}
        </div>
        <div className='cart-product-details'>
          <div className='cart-product-price-details'>PRICE DETAILS({quantity} Item)</div>
          <div className='cart-product-totalprice'>
            <span>Total Price</span>
            <span>&#8377;{totaPrice}</span>
          </div>
          <div className='cart-product-deliveryfee'>
            <div>Delivery Fee</div>
            <div>&#8377;{totaPrice<1000?99:totaPrice<2000?50:0}</div>
          </div>
          <div className='cart-product-totalamount'>
            <div>Total Amount</div>
            <div>&#8377;{totaPrice+(totaPrice<1000?99:totaPrice<2000?50:0)}</div>
          </div>
          <button className='cart-product-proceedbtn'>PLACE ORDER</button>
        </div>
      </div>

      <div className='cart-content-empty'>
        <div className='cart-empty-bag-imgwrap'>
          <img className='cart-empty-bag-img' src='https://constant.myntassets.com/checkout/assets/img/empty-bag.png' alt='shopping bag'></img>
        </div>
        <div className='cart-empty-title1'>Hey, it feels so light!</div>
        <div className='cart-empty-title2'>There is nothing in your bag. Let's add some items.</div>
        <Link to={'/'} style={{textDecoration : 'none'}}><button className='cart-empty-continue-btn'>CONTINUE SHOPPING</button></Link>
      </div>

      <Footer/>
    </div>
  )
}

export default Cart