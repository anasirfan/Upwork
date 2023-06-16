import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { IoIosShuffle, IoIosTrash } from "react-icons/io";
import { LayoutTwo } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { ProductRating } from "../../components/Product";
import Anchor from "../../components/anchor";
import { getDiscountPrice } from "../../lib/product";
import { addToCart } from "../../store/slices/cart-slice";
import { deleteFromCompare } from "../../store/slices/compare-slice";

const Compare = () => {
  const dispatch = useDispatch();
  const { compareItems } = useSelector((state) => state.compare);
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="Compare"
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-1.png"
      >
        <ul className="breadcrumb__list">
          <li>
            <Anchor path="/">
              Home
            </Anchor>
          </li>

          <li>Compare</li>
        </ul>
      </BreadcrumbOne>
      <div className="compare-area space-mt--r130 space-mb--r130">
        <Container>
          <Row>
            <Col>
              {compareItems && compareItems.length >= 1 ? (
                <div className="row">
                  <div className="col-lg-12">
                    <div className="compare-page-content">
                      <div className="compare-table table-responsive">
                        <table className="table table-bordered mb-0">
                          <tbody>
                            <tr>
                              <th className="title-column">Product Info</th>
                              {compareItems.map((product, i) => {
                                const cartItem = cartItems.filter(
                                  (item) => item.id === product.id
                                )[0];
                                return (
                                  <td className="product-image-title" key={i}>
                                    <div className="compare-remove">
                                      <button
                                        onClick={() =>
                                          dispatch(deleteFromCompare(product.id))
                                        }
                                      >
                                        <IoIosTrash />
                                      </button>
                                    </div>
                                    <Anchor
                                      path={`/shop/product-basic/${product.slug}`}
                                      className="image"
                                    >
                                        <img
                                          className="img-fluid"
                                          src={
                                            process.env.PUBLIC_URL +
                                            product.thumbImage[0]
                                          }
                                          alt=""
                                        />
                                    </Anchor>
                                    <div className="product-title">
                                      <Anchor path={`/shop/product-basic/${product.slug}`}>
                                        {product.name}
                                      </Anchor>
                                    </div>
                                    <div className="compare-btn">
                                      {product.affiliateLink ? (
                                        <a
                                          href={product.affiliateLink}
                                          target="_blank"
                                          className="lezada-button lezada-button--primary"
                                        >
                                          {" "}
                                          Buy now{" "}
                                        </a>
                                      ) : product.variation &&
                                        product.variation.length >= 1 ? (
                                        <Anchor
                                          path={`/shop/product-basic/${product.slug}`}
                                          className="lezada-button lezada-button--primary"
                                        >
                                          Select Option
                                        </Anchor>
                                      ) : product.stock && product.stock > 0 ? (
                                        <button
                                          onClick={() =>
                                            dispatch(addToCart(product))
                                          }
                                          className={`lezada-button lezada-button--primary
                                            ${
                                              cartItem !== undefined &&
                                              cartItem.quantity > 0
                                                ? "active"
                                                : ""
                                            }
                                          `}
                                          disabled={
                                            cartItem !== undefined &&
                                            cartItem.quantity > 0
                                          }
                                        >
                                          {cartItem !== undefined &&
                                          cartItem.quantity > 0
                                            ? "Added"
                                            : "Add to cart"}
                                        </button>
                                      ) : (
                                        <button
                                          disabled
                                          className="active lezada-button lezada-button--primary"
                                        >
                                          Out of Stock
                                        </button>
                                      )}
                                    </div>
                                  </td>
                                );
                              })}
                            </tr>
                            <tr>
                              <th className="title-column">Price</th>
                              {compareItems.map((product, key) => {
                                const discountedPrice = getDiscountPrice(
                                  product.price,
                                  product.discount
                                ).toFixed(2);

                                const productPrice = product.price.toFixed(2);
                                return (
                                  <td className="product-price" key={key}>
                                    {product.discount > 0 ? (
                                      <Fragment>
                                        <span className="main-price discounted">
                                          ${productPrice}
                                        </span>
                                        <span className="main-price">
                                          ${discountedPrice}
                                        </span>
                                      </Fragment>
                                    ) : (
                                      <span className="main-price">
                                        ${productPrice}
                                      </span>
                                    )}
                                  </td>
                                );
                              })}
                            </tr>

                            <tr>
                              <th className="title-column">Description</th>
                              {compareItems.map((product, i) => {
                                return (
                                  <td className="product-desc" key={i}>
                                    <p>
                                      {product.shortDescription
                                        ? product.shortDescription
                                        : "N/A"}
                                    </p>
                                  </td>
                                );
                              })}
                            </tr>

                            <tr>
                              <th className="title-column">Rating</th>
                              {compareItems.map((product, key) => {
                                return (
                                  <td className="product-rating" key={key}>
                                    <ProductRating
                                      ratingValue={product.rating}
                                    />
                                  </td>
                                );
                              })}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Row>
                  <Col>
                    <div className="item-empty-area text-center">
                      <div className="item-empty-area__icon space-mb--30">
                        <IoIosShuffle />
                      </div>
                      <div className="item-empty-area__text">
                        <p className="space-mb--30">No items to compare</p>
                        <Anchor
                          path="/shop/left-sidebar"
                          className="lezada-button lezada-button--medium"
                        >
                            Add Items
                        </Anchor>
                      </div>
                    </div>
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutTwo>
  );
};

export default Compare;
