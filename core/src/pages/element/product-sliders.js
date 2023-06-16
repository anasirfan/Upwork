import { useSelector } from "react-redux";
import { getProducts } from "../../lib/product";
import { LayoutTwo } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { ProductSliderTwo } from "../../components/ProductSlider";
import Anchor from "../../components/anchor";

const ProductSliders = () => {
  const { products } = useSelector((state) => state.product);
  const popularProducts = getProducts(products, "decor", "popular", 9);
  
  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="Product Sliders"
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-2.jpg"
      >
        <ul className="breadcrumb__list">
          <li>
            <Anchor path="/">
              Home
            </Anchor>
          </li>

          <li>Product Sliders</li>
        </ul>
      </BreadcrumbOne>
      <div className="element-wrapper space-mt--r130 space-mb--r130">
        {/* product slider */}
        <ProductSliderTwo products={popularProducts} />
      </div>
    </LayoutTwo>
  );
};

export default ProductSliders;
