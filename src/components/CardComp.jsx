import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Image1 from "../assets/image/Hoodie.png";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getProduct,
  productSelectors,
  deleteProduct,
} from "../features/ProductSlice";
import { Container, Row, Col, Button } from "react-bootstrap";

const CardsComp = () => {
  const dispatch = useDispatch();
  const products = useSelector(productSelectors.selectAll);
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <div className="min-vh-100 d-flex justify-content-center">
      <div className="">
        <Container>
          <Row className="row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4">
            {products.map((product, index) => {
              return (
                <Col>
                  <Card style={{ width: "18rem" }} key={product.id}>
                    <Card.Img variant="top" src={Image1} />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>price {product.price} </Card.Text>
                      <NavLink
                        className="btn btn-primary"
                        to={`/edit/${product.id}`}
                      >
                        Edit
                      </NavLink>
                      <Button
                        onClick={() => dispatch(deleteProduct(product.id))}
                        className="btn btn-danger"
                        to="/"
                      >
                        Delete
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CardsComp;
