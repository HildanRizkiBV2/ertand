import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Image1 from "../assets/image/Hoodie.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import AddProduct from "../pages/AddProduct";
import axios from "axios";
const CardsComp = () => {
  const [data, setData] = useState([]);
  const fatchData = async () => {
    const res = await axios.get("http://localhost:3001/api/v1/product");
    setData(res.data.data);
  };
  useEffect(() => {
    fatchData();
  });
  const { title, price } = useSelector((state) => state.product);
  return (
    <div className="min-vh-100">
      <div className="d-flex justify-content-center">
        {data.map((item) => {
          return (
            <Card style={{ width: "18rem" }} key={item.id}>
              <Card.Img variant="top" src={Image1} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>price {item.price}</Card.Text>
                <NavLink className="btn btn-primary" to="/product">
                  Go product
                </NavLink>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <AddProduct />
    </div>
  );
};

export default CardsComp;
