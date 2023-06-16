import { Container, Row, Col } from "react-bootstrap";
import { ProductGridWrapper } from "../ProductThumb";
import Anchor from "../anchor";

const ProductsWithBannerOne = ({
  products,
  bannerImage,
  bannerTitle,
  bannerUrl,
  bannerPosition
}) => {
  return (
    <div className="banner-with-product-area space-mb--r130">
      <Container className="wide">
        <Row>
          <Col
            lg={8}
            className={
              bannerPosition === "left" ? "order-2" : "order-2 order-lg-1"
            }
          >
            <Row className="space-mb--rm50">
              <ProductGridWrapper
                products={products}
                bottomSpace="space-mb--r50"
              />
            </Row>
          </Col>
          <Col
            lg={4}
            className={
              bannerPosition === "left" ? "order-1" : "order-1 order-lg-2"
            }
          >
            <div className="product-side-banner space-mb-mobile-only--30">
              <Anchor path={bannerUrl} className="space-mb--40">
                  <img
                    src={process.env.PUBLIC_URL + bannerImage}
                    className="img-fluid"
                    alt=""
                  />
              </Anchor>
              <Anchor href={bannerUrl} className="product-side-banner--link">
                {bannerTitle}
              </Anchor>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductsWithBannerOne;
