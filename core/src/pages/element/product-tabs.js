import { useSelector } from "react-redux";
import { getProducts } from "../../lib/product";
import { LayoutTwo } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { ProductTab } from "../../components/ProductTab";
import { SectionTitleThree } from "../../components/SectionTitle";
import Anchor from "../../components/anchor";

const ProductTabs = () => {
  const { products } = useSelector((state) => state.product);
  const newProducts = getProducts(products, "decor", "new", 9);
  const popularProducts = getProducts(products, "decor", "popular", 9);
  const saleProducts = getProducts(products, "decor", "sale", 9);

  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="Product Tabs"
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-2.jpg"
      >
        <ul className="breadcrumb__list">
          <li>
            <Anchor path="/">
              Home
            </Anchor>
          </li>

          <li>Product Tabs</li>
        </ul>
      </BreadcrumbOne>
      <div className="element-wrapper space-mt--r130 space-mb--r130">
        <SectionTitleThree
          title="Product Tabs"
          subtitle="This is where to find your satisfactory products"
        />
        {/* product tab */}
        <ProductTab
          newProducts={newProducts}
          popularProducts={popularProducts}
          saleProducts={saleProducts}
        />
      </div>
    </LayoutTwo>
  );
};

export default ProductTabs;
