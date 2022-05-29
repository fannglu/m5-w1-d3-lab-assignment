import React, { Component } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { ListGroup, ListGroupItem } from "reactstrap";
import "./App.css";
import Navbar from "./navbar";
// import DisplayProducts from "./displayProducts";
import products from "./products";


// import nav bar ; call it return statement on the render function

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
      sortType: "norm",
      listNum: "",
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

  handleSort = (listNum, sortType) => {
    listNum.sort((a, b) => {
      switch (sortType) {
        case "norm":
          return a.id - b.id;
          break;
        case "asc":
          return a.price - b.price;
          break;
        case "desc":
          return b.price - a.price;
      }
    });
    this.setState({ sortType });
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
          handleSort={this.handleSort}
          listNum={this.state.listNum}
          sortType={this.state.sortType}
        />
        {/* <DisplayProducts
          products={this.state.products}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        /> */}
      </div>
    );
  }
}

export default App;
