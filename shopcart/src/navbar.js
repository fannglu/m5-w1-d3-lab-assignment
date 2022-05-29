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
import  SignIn  from "./signin";
import Checkout from "./signin";

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
              handleSort={props.handleSort}
              sortType={props.sortType}
              lisNum={props.listNum}
            />
          }
        />
        <Route
          exact
          path="/showcart"
          element={
            <ShowCart
              products={props.prods}
              totalQuantity={props.totalQuantity}
            />
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}
