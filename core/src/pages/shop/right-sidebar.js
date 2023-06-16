import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Paginator from "react-hooks-paginator";
import { SlideDown } from "react-slidedown";
import { LayoutTwo } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import {
  ShopHeader,
  ShopFilter,
  ShopSidebar,
  ShopProducts
} from "../../components/Shop";
import Anchor from "../../components/anchor";
import {recursiveCatalog,fetchAllCategories } from "../../services/product.services";


const RightSidebar = () => {
  
  const [layout, setLayout] = useState("grid four-column");
  // const [sortType, setSortType] = useState("");
  // const [sortValue, setSortValue] = useState("");
  // const [filterSortType, setFilterSortType] = useState("");
  // const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  // const [sortedProducts, setSortedProducts] = useState([]);
  // const [shopTopFilterStatus, setShopTopFilterStatus] = useState(false);
  const { products } = useSelector((state) => state.product);

  const pageLimit = 20;

  const getLayout = (layout) => {
    setLayout(layout);
  };

  // const getSortParams = (sortType, sortValue) => {
  //   setSortType(sortType);
  //   setSortValue(sortValue);
  // };

  // const getFilterSortParams = (sortType, sortValue) => {
  //   setFilterSortType(sortType);
  //   setFilterSortValue(sortValue);
  // };
  const [popularProducts, setPopularProducts] = useState([]);
  const [fetchedProducts, setfetchedProducts] = useState([]);
  const [fetchedCategories, setfetchedCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    const fetchedProducts = await recursiveCatalog();
    // const fetchedCollections = await fetchAllCollections();
    const fetchedCategories = await fetchAllCategories();
    const popularProducts = fetchedProducts.slice(12, 26);

    setPopularProducts(popularProducts);
    console.log(popularProducts)
    setfetchedProducts(fetchedProducts);
    setfetchedCategories(fetchedCategories);
    // console.log(fetchedCategories)
  }


  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="Shop Right Sidebar"
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-1.png"
      >
        <ul className="breadcrumb__list">
          <li>
            <Anchor path="/">
              Home
            </Anchor>
          </li>

          <li>Shop Right Sidebar</li>
        </ul>
      </BreadcrumbOne>
      <div className="shop-page-content">
        {/* shop page header */}
        <ShopHeader
          getLayout={getLayout}
          // getFilterSortParams={getFilterSortParams}
          productCount={fetchedProducts.length}
          sortedProductCount={currentData.length}
          // shopTopFilterStatus={shopTopFilterStatus}
          // setShopTopFilterStatus={setShopTopFilterStatus}
        />

        {/* shop header filter */}
        {/* <SlideDown closed={shopTopFilterStatus ? false : true}>
          <ShopFilter products={products} getSortParams={getSortParams} />
        </SlideDown> */}

        {/* shop page body */}
        <div className="shop-page-content__body space-mt--r130 space-mb--r130">
          <Container>
            <Row>
              <Col lg={3} className="order-2 space-mt-mobile-only--50">
                {/* shop sidebar
                {products &&
        popularProducts.map((product) => {
          // const price = product.price || 0;
          // const discount = product.discount || 0;

          // const discountedPrice = getDiscountPrice(price, discount).toFixed(2);
          const productPrice = product.node.priceRange.minVariantPrice.amount;
          // const cartItem = cartItems.find(
          //   (cartItem) => cartItem.id === product.id
          // );
          // const wishlistItem = wishlistItems.find(
          //   (wishlistItem) => wishlistItem.id === product.id
          // );
          // const compareItem = compareItems.find(
          //   (compareItem) => compareItem.id === product.id
          // );

          return ( */}
            <ShopSidebar
              // key={product.node.id}
              products={products}
              // discountedPrice={discountedPrice}
              // productPrice={productPrice}
              popularProducts={popularProducts}
              fetchedCategories={fetchedCategories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              // cartItem={cartItem}
              // wishlistItem={wishlistItem}
              // compareItem={compareItem}
              // bottomSpace={bottomSpace}
              // column={column}
            />
          {/* );
        })} */}
            
              </Col>

              <Col lg={9} className="order-1">
                {/* shop products */}
                <ShopProducts layout={layout} products={fetchedProducts} selectedCategory={selectedCategory}/>

                {/* shop product pagination */}
                <div className="pro-pagination-style">
                  <Paginator
                    totalRecords={fetchedProducts.length}
                    pageLimit={pageLimit}
                    pageNeighbours={2}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageContainerClass="mb-0 mt-0"
                    pagePrevText="«"
                    pageNextText="»"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </LayoutTwo>
  );
};

export default RightSidebar;
