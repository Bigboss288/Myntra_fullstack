import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFilterArray,
  addFilters,
  addGender,
  addGenderArray,
  clearAll,
  clearFilterArray,
  clearFilters,
  removeFilterArray,
  removeFilters,
} from "../Redux/productRedux";
import "./CSS/Sidepanel.css";

const Sidepanel = () => {
  const mystyle = {
    //styling
    fontWeight: 600,
  };

  const dispatch = useDispatch();
  const productArray = useSelector((state) => state.productFilter.products);
  const genderArray = useSelector((state) => state.productFilter.genderArray);
  const filtersArray = useSelector((state) => state.productFilter.filterArray);
  const filters = useSelector((state) => state.productFilter.filters);

  useEffect(() => {
    const radio = document
      .querySelectorAll(".filter-radiobtn")
      .forEach((button) => {
        button.onclick = (e) => {
          if (e.target.checked) {
            dispatch(clearAll({}));

            let gender = e.target.value;
            dispatch(addGender({ gender }));
            dispatch(clearFilters({}));

            productArray
              .filter((item) => item.category === e.target.value)
              .map((item) => {
                dispatch(addFilterArray({ ...item }));
                dispatch(addGenderArray({ ...item }));
              });
          }

          document.querySelector('.filter-heading').style.transform = 'translate(0px)'
          document.querySelector('.filter-clearall').style.display = 'block'
        };
      });

    document.querySelectorAll(".filter-checkbox").forEach((button) => {
      button.onclick = (e) => {
        const brand = e.target.value;
        if (e.target.checked === true) {
          dispatch(addFilters({ brand }));
        } else {
          dispatch(removeFilters({ brand }));
        }

        document.querySelector('.filter-heading').style.transform = 'translate(0px)'
        document.querySelector('.filter-clearall').style.display = 'block'

      };
    });


  });

  let brandFilters = genderArray.map((item) => {
    return (
      <div key={item.brand}>
        <input
          type="checkbox"
          className="filter-checkbox"
          id={item.brand}
          value={item.brand}
        ></input>
        <label for={item.brand}>{item.brand}</label>
      </div>
    );
  });

  const func = () => {
    window.location.reload()
  }

  // const transition = () =>{
  //   document.querySelector('.filter-heading').classList.toggle('filter-heading-transition')
  //   document.querySelector('.filter-clearall').classList.toggle('filter-transition')
  // }
  
  return (
    <div className="filter-content">
      <div className="filter-filter">
        <div className="filter-heading-div">
          <div className="filter-heading">FILTERS</div>
        </div>
        <button className="filter-clearall" onClick={func}>Clear All</button>
        <div
          className="filter-gender"
          id="filter-container-gender"
          style={mystyle}
        >
          {/*styling*/}
          <label for="Men" id="gender-label">
            <input
              type="Radio"
              className="filter-radiobtn"
              id="men-checkbox"
              name="radio-btn"
              value="men"
             
            ></input>
            Men
          </label>
          <label for="Women" id="gender-label">
            <input
              type="Radio"
              className="filter-radiobtn"
              id="women-checkbox"
              name="radio-btn"
              value="women"
            ></input>
            Women
          </label>
          <label for="Boys" id="gender-label">
            <input
              type="Radio"
              className="filter-radiobtn"
              name="radio-btn"
              value="boys"
            ></input>
            Boys
          </label>
          <label for="Girls" id="gender-label">
            <input
              type="Radio"
              className="filter-radiobtn"
              name="radio-btn"
              value="girls"
            ></input>
            Girls
          </label>
        </div>
        <div className="filter-brand" id="filter-container-brand">
          <div className="filter-brand-heading">BRAND</div>
          {brandFilters}
        </div>
      </div>
    </div>
  );
};

export default Sidepanel;
