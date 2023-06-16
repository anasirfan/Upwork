import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { getProducts } from "../../lib/product";
import { LayoutTwo } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { SectionTitleThree } from "../../components/SectionTitle";
import { ProductWidgetWrapper } from "../../components/ProductThumb";
import Anchor from "../../components/anchor";

const ProductWidgets = () => {
  const { products } = useSelector((state) => state.product);
  const newProducts = getProducts(products, "decor", "new", 4);
  const popularProducts = getProducts(products, "decor", "popular", 4);
  const saleProducts = getProducts(products, "decor", "sale", 4);

  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="Product Widgets"
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-2.jpg"
      >
        <ul className="breadcrumb__list">
          <li>
            <Anchor path="/">
              Home
            </Anchor>
          </li>

          <li>Product Widgets</li>
        </ul>
      </BreadcrumbOne>
      <div className="element-wrapper space-mt--r130 space-mb--r130">
        <SectionTitleThree
          title="Product Widget"
          subtitle="Available widget to control your site’s products."
        />
        <Container>
          <Row>
            <Col lg={4} md={6} className="space-mb-mobile-only--50">
              <div className="single-product-widget-slider-container">
                <h3 className="widget-slider-title">New Products</h3>
                <div className="product-widget-container">
                  <ProductWidgetWrapper products={newProducts} />
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="space-mb-mobile-only--50">
              <div className="single-product-widget-slider-container">
                <h3 className="widget-slider-title">Popular Products</h3>
                <div className="product-widget-container">
                  <ProductWidgetWrapper products={popularProducts} />
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="single-product-widget-slider-container">
                <h3 className="widget-slider-title">Sale Products</h3>
                <div className="product-widget-container">
                  <ProductWidgetWrapper products={saleProducts} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutTwo>
  );
};

export default ProductWidgets;
