import React, { useEffect } from "react";
import "./CSS/navbar.css";
import './CSS/Sidepanel.css'
import { img } from "../Data";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFilterArray, addGender, addGenderArray, clearAll, fillAll } from "../Redux/productRedux";

const Navbar = () => {
  const cart_quantity = useSelector((state) => state.cart.quantity);
  const wishlist_quantity = useSelector((state) => state.wishlist.quantity);
  const productsArray = useSelector(state => state.productFilter.products);
  const filterArray = useSelector(state => state.productFilter.filterArray)
  const dispatch = useDispatch()

  useEffect(() => {
    if (cart_quantity === 0) {
      document.querySelector(".navbar-cart-numberbubble").style.display =
        "none";
    }
    else{
      document.querySelector(".navbar-cart-numberbubble").style.display =
      "block";
    }
    if (wishlist_quantity === 0) {
      document.querySelector(".navbar-wishlist-numberbubble").style.display =
        "none";
    }
    else{
      document.querySelector(".navbar-wishlist-numberbubble").style.display =
        "block";
    }

    document.querySelector('.navbar-search-input').addEventListener('click',()=>{
      document.querySelector('.navbar-search-div').style.background = 'rgb(243, 243, 243)'
      document.querySelector('.navbar-search-input').style.background = 'rgb(243, 243, 243)'
      document.querySelector('.navbar-search-div').style.border = '1px solid rgb(196, 196, 196)';
    })
    document.querySelector('.navbar-search-div').addEventListener('mouseout',()=>{
      document.querySelector('.navbar-search-div').style.background = ' rgb(232, 232, 232)'
      document.querySelector('.navbar-search-input').style.background = 'rgb(232, 232, 232)'
      document.querySelector('.navbar-search-div').style.border = 'none';
    })



    document.querySelector('.profile-div').addEventListener('click', ()=>{
      document.querySelector('.navbar-profile-text').style.color = 'red'
      document.querySelector('.navbar-profile-hover').style.display = 'block'
    })

    document.querySelector('.profile-div').addEventListener('mouseout', ()=>{
      document.querySelector('.navbar-profile-text').style.color = 'black'
      document.querySelector('.navbar-profile-hover').style.display = 'none'
    })
  });

  const search = () => {
    
    const val = document.querySelector('.navbar-search-input').value
      dispatch(clearAll({}))  
      productsArray.filter(item => {
        if(item.brand.toUpperCase().includes(val.toUpperCase()) || 
                      item.category.toUpperCase()===val.toUpperCase() ||
                      (val.toUpperCase() !== 'MEN' && val.toUpperCase() !== 'WOMEN'
                      && item.title.toUpperCase().includes(val.toUpperCase()))){

                        console.log(val)
          dispatch(addFilterArray({...item}))
          dispatch(addGenderArray({...item})) 
        }
        item.color.forEach(e => {
          if(e.toUpperCase() === val.toUpperCase()){
            dispatch(addFilterArray({...item}))
            dispatch(addGenderArray({...item})) 
          }
        })
      })
      if(val !== ''){
        let gender = ''
        gender = 'searched'+' '+val
       
        dispatch(addGender({gender}))
      }
      
      document.querySelector('.navbar-search-input').value = ""

      document.querySelector('.filter-heading').style.transform = 'translate(0px)'
      document.querySelector('.filter-clearall').style.display = 'block'
  };

  return (
    <div className="navbar-container">
      <div className="left">
        <div className="navbar-myntra-logo">
          <Link to={"/"}>
            <img
              className="navbar-myntra-logo-img"
              src={img}
              alt="Myntra logo"
            />
          </Link>
        </div>
      </div>
      <div className="right">
        <div className="navbar-search-div">
          <div className="navbar-search-icon" onClick={search}>
            <img
              className="navbar-search-icon-img"
              src={img}
              alt="search Icon"
            />
          </div>
          <input
            className="navbar-search-input"
            placeholder="Search for products, brands and more"
            onKeyPress={e => {
              if(e.key === 'Enter') search()
            }}
          />
        </div>
        <div className="navbar-icon-div profile-div" style={{cursor:'pointer'}}>
          <div className="navbar-profile-icon-div"></div>
          <div className="navbar-profile-text">Profile</div>
          <div className="navbar-profile-hover">
            <div className="navbar-profile-hover-title1"><div className="navbar-profile-img"></div>GUEST</div>
            <div className="navbar-profile-hover-title2">LOGIN/SIGNUP</div>
          </div>
        </div>
        <div className="navbar-icon-div">
          <Link
            to={"/wishlist"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="navbar-whishlist-icon-div">
              <span className="navbar-wishlist-numberbubble">
                {wishlist_quantity}
              </span>
            </div>
            <div>Wishlist</div>
          </Link>
        </div>
        <div className="navbar-icon-div">
          <Link to={"/cart"} style={{ textDecoration: "none", color: "black" }}>
            <div className="navbar-cart-icon-div">
              <span className="navbar-cart-numberbubble">{cart_quantity}</span>
            </div>
            <div style={{ padding: "0px 5px" }}>Cart</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
