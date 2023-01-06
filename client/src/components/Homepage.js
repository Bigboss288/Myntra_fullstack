import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAll, fillAll } from "../Redux/productRedux";
import "./CSS/Homepage.css";
import Product from "./Product";
import Sidepanel from "./Sidepanel";

const Homepage = () => {
  const gender = useSelector((state) => state.productFilter.gender);
  const genderArray = useSelector((state) => state.productFilter.genderArray);
  const filterArray = useSelector((state) => state.productFilter.filterArray);
  const dispatch = useDispatch();

  function fillArray() {
    dispatch(clearAll({}));
    dispatch(fillAll({}));
    console.log("yes");
  }

  return (
    <div className="home-container">
      {filterArray.length !== 0 && (
        <div>
          {gender.gender.split(" ")[0] === "searched" ? (
            <div className="home-heading">
              <div className="heading1">
                Searched results for {gender.gender.split(" ")[1]}-
              </div>
              <div className="heading2"> {filterArray.length} items</div>
            </div>
          ) : (
            <div className="home-heading">
              <div className="heading1">Shirts for {gender.gender} -</div>
              <div className="heading2"> {filterArray.length} items</div>
            </div>
          )}
        </div>
      )}

      <div className="home-content">
        {filterArray.length !== 0 && <Sidepanel />}
        <Product />
      </div>

      { gender.gender.split(" ")[0] === "searched" && filterArray.length === 0 && (
        <div className="home-searched-empty">
          <div className="home-searched-title1">
            <div>You searched for </div>
            <span style={{ color: "rgb(50, 94, 204)", marginLeft: "4px" }}>
              {gender.gender.split(" ")[1]}
            </span>
          </div>
          <div className="home-searched-title2">
            We couldn't find any matches!
          </div>
          <div className="home-searched-title3">
            Please check the spelling or try searching something else
          </div>
          <div className="home-searched-button-wrap">
            <button
              className="home-searched-button"
              onClick={() => fillArray()}
            >
              Home Page
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
