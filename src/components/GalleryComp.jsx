import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../assets/image/Artboard 1 Mockup (1).jpg";

const GalleryComp = () => {
  return (
    <div className="gallery min-vh-100 d-flex align-items-center ">
      <Container className="">
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4 ">
          <Col>
            <img src={Image1} alt="image1" data-aos="fade-up" />
            <h4 className="text-center" data-aos="fade-up">
              Hoodie
            </h4>
          </Col>
          <Col>
            <img src={Image1} alt="image1" data-aos="fade-up" />
            <h4 className="text-center" data-aos="fade-up">
              kaos
            </h4>
          </Col>
          <Col>
            <img src={Image1} alt="image1" data-aos="fade-up" />
            <h4 className="text-center pb-5 " data-aos="fade-up">
              kaos
            </h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GalleryComp;
