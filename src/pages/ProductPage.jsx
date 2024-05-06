import React from "react";
import CardsComp from "../components/CardComp";
import { Link } from "react-router-dom";

const ProductPage = () => {
  return (
    <div className="min=vh-100">
      <div className="product-list ">
        <Link to="/add" className="btn btn-primary d-block mb-5 ">
          Add product
        </Link>
        <CardsComp />
      </div>
    </div>
  );
};

export default ProductPage;
