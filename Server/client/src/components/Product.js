import React, { useEffect, useState } from "react";
import "./CSS/Product.css";
import './CSS/Sidepanel.css'
import { publicRequest } from "../requestMethods";
import Products from "./Products";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAll,
  fillAll,
  sortAscFilterArray,
  sortDescFilterArray,
} from "../Redux/productRedux";

const Product = () => {
  const dispatch = useDispatch();

  const filtersArray = useSelector((state) => state.productFilter.filterArray);

  const filters = useSelector((state) => state.productFilter.filters);
  const [sortstate, setSort] = useState("");

  useEffect(() => {
    dispatch(clearAll({}));
    dispatch(fillAll({}));

    document.querySelectorAll(".product-dropdown").forEach((item) => {
      const select = item.querySelector(".product-dropdown-select");
      const arrow = item.querySelector(".product-dropdown-pointer");
      const menu = item.querySelector(".product-dropdown-menu");
      const options = item.querySelectorAll(".product-dropdown-menu li");

      select.addEventListener("click", () => {
        menu.classList.toggle("product-dropdown-menu-open");
        arrow.classList.toggle("product-dropdown-pointer-rotate");
      });

      options.forEach((option) => {
        option.addEventListener("click", () => {
          menu.classList.toggle("product-dropdown-menu-open");
          arrow.classList.toggle("product-dropdown-pointer-rotate");
          document.querySelector(".product-dropdown-selected").innerHTML =
            'Price: '+option.innerHTML;

          setSort(option.innerHTML);

          document.querySelector('.filter-heading').style.transform = 'translate(0px)'
          document.querySelector('.filter-clearall').style.display = 'block'

        });
      });
    });
  }, []);

 
  if (sortstate === "Low - High") {
    dispatch(sortAscFilterArray({}));
  } else if (sortstate === "High - Low") {
    dispatch(sortDescFilterArray({}));
  }

  return (
    <div className="product-container">
      <div className="product-header">
        {/* <select className='product-select' onChange={(e)=>sort(e)}>
                <option>sort by:Recommended</option>
                <option value='HtoL'>Price:High-Low</option>
                <option value='LtoH'>Price:Low-High</option>
            </select> */}
        <div className="product-dropdown">
          <div className="product-dropdown-select">
            <span className="product-dropdown-selected">Recommended</span>
            <div className="product-dropdown-pointer"></div>
          </div>
          <ul className="product-dropdown-menu">
            <li key="1">Low - High</li>
            <li key="2">High - Low</li>
          </ul>
        </div>
      </div>

      <div className="product-info">
        {filtersArray
          .filter((item) => {
            if (filters.length === 0) {
              return item;
            } else {
              for (let i = 0; i < filters.length; i++) {
                if (filters[i].brand === item.brand) {
                  return item;
                }
              }
            }
          })
          .map((item) => (
            <Products item={item} key={item.id} />
          ))}
      </div>
    </div>
  );
};

export default Product;
