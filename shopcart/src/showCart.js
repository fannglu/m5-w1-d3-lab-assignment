import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ShowCart(props) {
  return (
    <div>
      <h3 className="mx-5 pt-3">Your Cart Items</h3>
      <div>
        {props.products.map((product) => {
          if (product.value > 0) {
            return (
              <ListGroup className="products">
                <ListGroupItem key={product.id} className="product">
                  <div className="displayP ">
                    <img src={product.image} width="150" alt={product.desc} />
                    <h6>{product.desc}</h6>
                  </div>

                  <div className="displayQty">
                    <h6>
                      <strong> Quantity: {product.value} </strong>
                    </h6>
                  </div>
                </ListGroupItem>
              </ListGroup>
            );
          }
        })}
      </div>

      <Link to="/login">
        <Button color="primary" className="m-5">
          Check Out
        </Button>
      </Link>
      <Outlet />
    </div>
  );
}
