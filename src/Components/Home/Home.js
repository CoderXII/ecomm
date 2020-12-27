import React from "react";
import Products from "../Products/Products";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__row">
          <Products />
        
        </div>

        <img
          className="home__image"
          src="https://images.unsplash.com/photo-1596612265825-f7d7506ae4ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
          alt=""
        />
      </div>

    </div>
  );
}

export default Home;
