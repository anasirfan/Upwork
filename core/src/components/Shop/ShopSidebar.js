import { Fragment, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { setActiveSort } from "../../lib/product";
import Anchor from "../anchor";
import { fetchProductsByType } from "../../services/product.services";

const ShopSidebar = ({
  products,
  popularProducts,
  fetchedCategories,
  setSelectedCategory,
  selectedCategory,
}) => {
  const categories = fetchedCategories;

  const getSortParams = (type, value) => {
    if (type === "category") {
      setSelectedCategory(value);
      console.log(selectedCategory)
    }
  };

  return (
    <div className="shop-sidebar">
      <div className="single-sidebar-widget space-mb--40">
        {/* search widget */}
        <div className="search-widget">
          <form>
            <input type="search" placeholder="Search products ..." />
            <button type="button">
              <IoIosSearch />
            </button>
          </form>
        </div>
      </div>

      {/* category list */}
      <div className="single-sidebar-widget space-mb--40">
        <h2 className="single-sidebar-widget__title space-mb--30">
          Categories
        </h2>
        {categories.length > 0 ? (
          <ul className="single-sidebar-widget__list single-sidebar-widget__list--category">
            <li>
              <button
                onClick={(e) => {
                  getSortParams("category", "");
                  setActiveSort(e);
                  setSelectedCategory("");
                }}
                className={selectedCategory === "" ? "active" : ""}
              >
                All categories
              </button>
            </li>
            {categories.map((category, i) => {
              return (
                <li key={i}>
                  <button
                    onClick={(e) => {
                      getSortParams("category", category);
                      setActiveSort(e);
                      setSelectedCategory(category);
                    }}
                    className={selectedCategory === category ? "active" : ""}
                  >
                    {category}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          "No categories found"
        )}
      </div>

      {/* popular products */}
      <div className="single-sidebar-widget space-mb--40">
        <h2 className="single-sidebar-widget__title space-mb--30">
          Popular products
        </h2>
        {popularProducts.length > 0 ? (
          <div className="widget-product-wrapper">
            {popularProducts.map((product, i) => {
              const productPrice =
                product.node.priceRange.minVariantPrice.amount;
              return (
                <div className="single-widget-product-wrapper" key={i}>
                  <div className="single-widget-product">
                    <div className="single-widget-product__image">
                      <Anchor
                        path={`/shop/product-basic/${product.node.handle}`}
                        className="image-wrap"
                      >
                        <img
                          src={product.node.images.edges[0].node.originalSrc}
                          className="img-fluid"
                          alt={product.name}
                        />
                      </Anchor>
                    </div>
                    <div className="single-widget-product__content">
                      <div className="single-widget-product__content__top">
                        <h3 className="product-title space-mb--10">
                          <Anchor
                            path={`/shop/product-basic/${product.node.handle}`}
                          >
                            {product.node.title}
                          </Anchor>
                        </h3>
                        <div className="price space-mb--10">
                          <span className="main-price">${productPrice}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          "No products found"
        )}
      </div>
    </div>
  );
};

export default ShopSidebar;
