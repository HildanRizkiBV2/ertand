import React from "react";
import Card from "react-bootstrap/Card";
import Image1 from "../assets/image/Hoodie.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import AddProduct from "../pages/AddProduct";

const CardsComp = () => {
  const { title, price } = useSelector((state) => state.product);
  return (
    <div className="min-vh-100">
      <div className="d-flex justify-content-center">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Image1} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>price {price}</Card.Text>
            <NavLink className="btn btn-primary" to="/product">
              Go product
            </NavLink>
          </Card.Body>
        </Card>
      </div>
      <AddProduct />
    </div>
  );
};

export default CardsComp;
