import React from "react";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  faShoppingCart,
  faRegistered,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DisplayProducts from "./displayProducts";
import "./navbar.css";
import ShowCart from "./showCart";

export default function Navbar(props) {
  return (
    <Router>
      <nav>
        <Link className="logo" to="/">
          <h1>
            Shop 2
            <span>
              <FontAwesomeIcon icon={faRegistered} />
            </span>
            eact
          </h1>
        </Link>
        <Link to="/showcart" className="cart">
          <FontAwesomeIcon icon={faShoppingCart} size="sm" />
          <span> {props.totalQuantity} </span>
        </Link>
      </nav>

      <Routes>
        <Route
          exact
          path="/"
          element={
            <DisplayProducts
              products={props.prods}
              onIncrement={props.handleIncrement}
              onDecrement={props.handleDecrement}
            />
          }
        />
        <Route
          exact
          path="/showcart"
          element={<ShowCart products={props.prods} />}
        />
        {/* <Route path="login" element={<Login />} />
        <Route path="checkout" element={<Checkout />} /> */}
      </Routes>
    </Router>
  );
}
