import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";
import Anchor from "../anchor";

const CategoryGridTwo = ({ spaceBottomClass }) => {
  return (
    <div className={clsx("product-category-container", spaceBottomClass)}>
      <Container className="wide">
        <Row>
          <Col lg={3} md={6}>
            <div className="single-category single-category--one">
              <div className="single-category__image single-category__image--one">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/category/category-women.jpg"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                <div className="title">
                  <p>Women</p>
                  <Anchor path="/shop/left-sidebar">
                    + Online store
                  </Anchor>
                </div>
                <p className="product-count">999</p>
              </div>
              <Anchor path="/shop/left-sidebar" className="banner-link"/>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="single-category single-category--one">
              <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                <div className="title">
                  <p>Shoes</p>
                  <Anchor path="/shop/left-sidebar">
                    + Online store
                  </Anchor>
                </div>
                <p className="product-count">222</p>
              </div>

              <div className="single-category__image single-category__image--one">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/category/category-shoes.jpg"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>

              <Anchor path="/shop/left-sidebar" className="banner-link"/>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="single-category single-category--one">
              <div className="single-category__image single-category__image--one">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/category/category-bags.jpg"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                <div className="title">
                  <p>Bags</p>
                  <Anchor path="/shop/left-sidebar">
                    + Online store
                  </Anchor>
                </div>
                <p className="product-count">4</p>
              </div>
              <Anchor path="/shop/left-sidebar" className="banner-link"/>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="single-category single-category--one">
              <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                <div className="title">
                  <p>Men</p>
                  <Anchor path="/shop/left-sidebar">
                    + Online store
                  </Anchor>
                </div>
                <p className="product-count">4</p>
              </div>

              <div className="single-category__image single-category__image--one">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/category/category-men.jpg"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>

              <Anchor path="/shop/left-sidebar" className="banner-link"/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryGridTwo;
