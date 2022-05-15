import React, { Component } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { ListGroup, ListGroupItem } from "reactstrap";
import "./App.css";
import Navbar from "./navbar";
import DisplayProducts from "./displayProducts";

// import nav bar ; call it return statement on the render function

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 0,
          image: "./products/cologne.jpg",
          desc: "Unisex Cologne",
          value: 0,
          ratings: 3.4,
        },
        {
          id: 1,
          image: "./products/iwatch.jpg",
          desc: "Apple iWatch",
          value: 0,
          ratings: 4.5,
        },
        {
          id: 2,
          image: "./products/mug.jpg",
          desc: "Unique Mug",
          value: 0,
          ratings: 3.3,
        },
        {
          id: 3,
          image: "./products/wallet.jpg",
          desc: "Mens Wallet",
          value: 0,
          ratings: 3.8,
        },
      ],
    };
  }

  handleIncrement = (addValue) => {
    if (addValue.value < 10) {
      const updatedValue = addValue.value++;
      this.setState({ updatedValue });
    }
  };

  handleDecrement = (subtractValue) => {
    if (subtractValue.value < 10) {
      const updatedValue = subtractValue.value--;
      this.setState({ updatedValue });
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar
          totalQuantity={this.state.products
            .map((p) => p.value)
            .reduce((previousV, currentV, index) => previousV + currentV, 0)}
          prods={this.state.products}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
        />
        <DisplayProducts
          products={this.state.products}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default App;
