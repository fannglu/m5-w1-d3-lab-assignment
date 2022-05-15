import React from "react";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  faShoppingCart,
  faRegistered,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DisplayProducts from "./displayProducts";

export default function Navbar(props) {
  return (
    <Router>
      <nav>
        <Link to="/">
          <span>Shop 2</span>
          <FontAwesomeIcon icon={faRegistered} />
        </Link>
        <Link to="/showCart">
          <FontAwesomeIcon icon={faShoppingCart} size="sm" />
          <span> {props.totalQuantity} </span>
        </Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <DisplayProducts
              products={props.prods}
              onIncrement={props.handleIncrement}
              onDecrement={props.handleDecrement}
            />
          }
        />
      </Routes>
    </Router>
  );
}

//  renderCart() {
//     let totalQuantity = 0;
//     this.state.value.forEach((item) => {
//       totalQuantity += item;
//     });
//     return (
//       <div className="cart">
//         <FontAwesomeIcon icon={faShoppingCart} size="sm" />
//         <span> {totalQuantity} items</span>
//       </div>
//     );
//   }
