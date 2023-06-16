import { ProductGridListWrapper } from "../../components/ProductThumb";
import { Row } from "react-bootstrap";
import { fetchProductsByType } from "../../services/product.services";
import { useEffect, useState } from "react";

const ShopProducts = ({ products, layout, selectedCategory }) => {
  const [sortedProducts, setSortedProducts] = useState(null);

  useEffect(() => {
    if (selectedCategory !== "") {
      getProductsByCategory(selectedCategory);
    } else {
      setSortedProducts(null);
    }
  }, [selectedCategory]);

  async function getProductsByCategory(category) {
    const productsSortedByCategory = await fetchProductsByType(category);
    setSortedProducts(productsSortedByCategory);
  }

  const renderedProducts = sortedProducts || products;
  const shouldShowSortedProducts = renderedProducts.length > 0;
  const finalProducts = shouldShowSortedProducts ? renderedProducts : products;

  return (
    <div className="shop-products">
      <Row className={layout}>
        <ProductGridListWrapper
          productsByCategory={selectedCategory}
          products={finalProducts}
          bottomSpace="space-mb--50"
        />
      </Row>
    </div>
  );
};

export default ShopProducts;
