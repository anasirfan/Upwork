import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { IoIosAdd } from "react-icons/io";
import { getProducts } from "../../lib/product";
import { LayoutTwo } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { SectionTitleThree } from "../../components/SectionTitle";
import { ProductGridWrapper } from "../../components/ProductThumb";
import Anchor from "../../components/anchor";

const BestSellingProducts = () => {
  const { products } = useSelector((state) => state.product);
  const popularProducts = getProducts(products, "fashion", "popular", 8);
  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="Best Selling products"
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-2.jpg"
      >
        <ul className="breadcrumb__list">
          <li>
            <Anchor path="/">
              Home
            </Anchor>
          </li>

          <li>Best Selling products</li>
        </ul>
      </BreadcrumbOne>
      <div className="element-wrapper space-mt--r130 space-mb--r130">
        <Container>
          <SectionTitleThree
            title="Best Selling products"
            subtitle="This is where to find your satisfactory products"
          />
          <Row>
            <ProductGridWrapper
              products={popularProducts}
              column={4}
              bottomSpace="space-mb--r50"
            />
            <Col lg={12} className="text-center">
              <Anchor
                path="/shop/left-sidebar"
                className="lezada-loadmore-button"
              >
                  <IoIosAdd /> SEE MORE ...
              </Anchor>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutTwo>
  );
};

export default BestSellingProducts;
