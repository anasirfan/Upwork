import { Container, Row, Col } from "react-bootstrap";
import Anchor from "../anchor";

const CategoryGridFive = () => {
  return (
    <div className="category-area space-mb--r100">
      <Container>
        <Row className="align-items-center">
          <Col lg={4} md={6} className="offset-lg-1 space-mb--30">
            <div className="single-category single-category--one">
              <div className="single-category__image single-category__image--one">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/category/category-cosmetics-1.jpg"
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
          <Col md={6} className="offset-lg-1 space-mb--30">
            <div className="single-banner single-banner--style-two">
              <div className="single-banner__image">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/banners/organic.png"
                  }
                  alt=""
                />
              </div>
              <div className="single-banner__content">
                <h3 className="title">
                  Organic <br /> Cosmetology
                </h3>
                <Anchor path="/shop/left-sidebar" className="link">
                  Shop Now
                </Anchor>
              </div>
            </div>
          </Col>
          <Col lg={5} md={6} className="offset-lg-1 space-mb--30">
            <div className="single-category single-category--one">
              <div className="single-category__image single-category__image--one">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/category/category-cosmetics-2.jpg"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                <div className="title">
                  <p>Perfumes</p>
                  <Anchor path="/shop/left-sidebar">
                    + Online store
                  </Anchor>
                </div>
                <p className="product-count">999</p>
              </div>
              <Anchor path="/shop/left-sidebar" className="banner-link"/>
            </div>
          </Col>
          <Col lg={4} md={6} className="offset-lg-2 space-mb--30">
            <div className="single-category single-category--one">
              <div className="single-category__image single-category__image--one">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/category/category-cosmetics-3.jpg"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                <div className="title">
                  <p>For Body</p>
                  <Anchor path="/shop/left-sidebar">
                    + Online store
                  </Anchor>
                </div>
                <p className="product-count">999</p>
              </div>
              <Anchor path="/shop/left-sidebar" className="banner-link"/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryGridFive;
