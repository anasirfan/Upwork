import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { IoIosAdd } from "react-icons/io";
import { getProducts } from "../../lib/product";
import { LayoutTwo } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { SectionTitleThree } from "../../components/SectionTitle";
import { ProductGridWrapper } from "../../components/ProductThumb";
import Anchor from "../../components/anchor";

const TopRatedProducts = () => {
  const { products } = useSelector((state) => state.product);
  const topRatedProducts = getProducts(products, "fashion", "topRated", 8);
  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="Top Rated products"
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-2.jpg"
      >
        <ul className="breadcrumb__list">
          <li>
            <Anchor path="/">
              Home
            </Anchor>
          </li>

          <li>Top Rated products</li>
        </ul>
      </BreadcrumbOne>
      <div className="element-wrapper space-mt--r130 space-mb--r130">
        <SectionTitleThree
          title="Top Rated products"
          subtitle="This is where to find your satisfactory products"
        />
        <Container>
          <Row>
            <ProductGridWrapper
              products={topRatedProducts}
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


export default TopRatedProducts;
