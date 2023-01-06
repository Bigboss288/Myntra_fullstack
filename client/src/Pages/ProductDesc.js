import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./CSS/ProductDesc.css";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { addproduct } from "../Redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../Redux/wishlistRedux";
import { toast } from "react-toastify";

const ProductDesc = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/product/find/" + id);
        setProduct(res.data);
      } catch {}
    };

    getProduct();
  });

  const cartOnClick = () => {
    dispatch(addproduct({ ...product }));
  };

  const wishlistOnClick = () => {
    dispatch(addProduct({ ...product }));
  };

  return (
    <div className="product_desc-container">
      <Navbar />
      <div className="product_desc-homepage">
        <div className="product_desc-content">
          <div className="product_desc-img-wrapper">
            <img
              className="product_desc-img"
              src={product.img}
              alt="product"
            ></img>
          </div>
          <div className="product_desc-desc-wrapper">
            <div className="product_desc-brand">{product.brand}</div>
            <div className="product_desc-title">{product.title}</div>
            <div className="product_desc-price">&#8377;{product.price}</div>
            <div className="product_desc-tax">inclusive of all taxes</div>
            <div className="product_desc-btn-wrapper">
              <button
                className="product_desc-btn product_desc-wishlist-btn"
                onClick={() => wishlistOnClick()}
              >
                <span className="product_desc-wishlist-icon"></span>
                WISHLIST
              </button>
              <button
                className="product_desc-btn product_desc-cart-btn"
                onClick={() => cartOnClick()}
              >
                <span className="product_desc-cart-icon"></span>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDesc;
