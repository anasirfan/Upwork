import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";
import Anchor from "../anchor";

const HoverBannerOne = ({ spaceBottomClass }) => {
  return (
    <div className={clsx("hover-banner-area", spaceBottomClass)}>
      <Container className="wide">
        <Row className="space-mb--m30">
          <Col md={4} className="space-mb--30">
            <div className="single-category single-category--three">
              <div className="single-category__image single-category__image--three single-category__image--three--creativehome single-category__image--three--banner">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/banners/banner-furniture-1.jpg"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="single-category__content single-category__content--three single-category__content--three--creativehome  single-category__content--three--banner space-mt--25 space-mb--25">
                <div className="title">
                  <p>
                    <Anchor path="/shop/left-sidebar">
                        Wooden <span>Chair</span>
                    </Anchor>
                  </p>
                  <Anchor path="/shop/left-sidebar">
                    Shop Now
                  </Anchor>
                </div>
              </div>
              <Anchor path="/shop/left-sidebar" className="banner-link" />
            </div>
          </Col>
          <Col md={4} className="space-mb--30">
            <div className="single-category single-category--three">
              <div className="single-category__image single-category__image--three single-category__image--three--creativehome single-category__image--three--banner">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/banners/banner-furniture-2.jpg"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="single-category__content single-category__content--three single-category__content--three--creativehome  single-category__content--three--banner space-mt--25 space-mb--25">
                <div className="title">
                  <p>
                    <Anchor path="/shop/left-sidebar">
                      Thumbler <span>Alarm Clock</span>
                    </Anchor>
                  </p>
                  <Anchor path="/shop/left-sidebar">
                    Shop Now
                  </Anchor>
                </div>
              </div>
              <Anchor path="/shop/left-sidebar" className="banner-link" />
            </div>
          </Col>
          <Col md={4} className="space-mb--30">
            <div className="single-category single-category--three">
              <div className="single-category__image single-category__image--three single-category__image--three--creativehome single-category__image--three--banner">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/banners/banner-furniture-3.jpg"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="single-category__content single-category__content--three single-category__content--three--creativehome  single-category__content--three--banner space-mt--25 space-mb--25">
                <div className="title">
                  <p>
                    <Anchor path="/shop/left-sidebar">
                      Home <span>Decoration</span>
                    </Anchor>
                  </p>
                  <Anchor path="/shop/left-sidebar">
                    Shop Now
                  </Anchor>
                </div>
              </div>
              <Anchor path="/shop/left-sidebar" className="banner-link" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HoverBannerOne;
