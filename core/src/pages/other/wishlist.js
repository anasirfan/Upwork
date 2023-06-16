import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getDiscountPrice } from "../../lib/product";
import { LayoutTwo } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { IoIosClose, IoIosHeartEmpty } from "react-icons/io";
import Anchor from "../../components/anchor";
import { addToCart } from "../../store/slices/cart-slice";
import { deleteFromWishlist, deleteAllFromWishlist } from "../../store/slices/wishlist-slice"

const Wishlist = () => {
  const dispatch = useDispatch();
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    document.querySelector("body").classList.remove("overflow-hidden");
  });

  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="Wishlist"
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-2.jpg"
      >
        <ul className="breadcrumb__list">
          <li>
            <Anchor path="/">
              Home
            </Anchor>
          </li>

          <li>Wishlist</li>
        </ul>
      </BreadcrumbOne>

      {/* wishlist content */}
      <div className="wishlist-content space-mt--r130 space-mb--r130">
        <Container>
          {wishlistItems && wishlistItems.length >= 1 ? (
            <Row>
              <Col lg={12}>
                {/* cart table */}
                <table className="cart-table">
                  <thead>
                    <tr>
                      <th className="product-name" colSpan="2">
                        Product
                      </th>
                      <th className="product-price">Price</th>
                      <th className="product-subtotal">&nbsp;</th>
                      <th className="product-remove">&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishlistItems.map((product, i) => {
                      const discountedPrice = getDiscountPrice(
                        product.price,
                        product.discount
                      ).toFixed(2);

                      const cartItem = cartItems.filter(
                        (item) => item.id === product.id
                      )[0];

                      return (
                        <tr key={i}>
                          <td className="product-thumbnail">
                            <Anchor path={`/shop/product-basic/${product.slug}`}>
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    product.thumbImage[0]
                                  }
                                  className="img-fluid"
                                  alt=""
                                />
                            </Anchor>
                          </td>
                          <td className="product-name">
                            <Anchor path={`/shop/product-basic/${product.slug}`}>
                              {product.name}
                            </Anchor>
                            {product.selectedProductColor &&
                            product.selectedProductSize ? (
                              <div className="product-variation">
                                <span>
                                  Color: {product.selectedProductColor}
                                </span>
                                <span>Size: {product.selectedProductSize}</span>
                              </div>
                            ) : (
                              ""
                            )}
                          </td>

                          <td className="product-price">
                            <span className="price">${discountedPrice}</span>
                          </td>

                          <td>
                            {product.affiliateLink ? (
                              <a
                                href={product.affiliateLink}
                                target="_blank"
                                className="lezada-button lezada-button--medium"
                              >
                                Buy now
                              </a>
                            ) : product.variation &&
                              product.variation.length >= 1 ? (
                              <Anchor
                                path={`/shop/product-basic/${product.slug}`}
                                className="lezada-button lezada-button--medium"
                              >
                                Select option
                              </Anchor>
                            ) : product.stock && product.stock > 0 ? (
                              <button
                                onClick={() => dispatch(addToCart(product))}
                                className={` lezada-button lezada-button--medium ${
                                  cartItem !== undefined &&
                                  cartItem.quantity > 0
                                    ? "active"
                                    : ""
                                } `}
                                disabled={
                                  cartItem !== undefined &&
                                  cartItem.quantity > 0
                                }
                                title={
                                  product !== undefined
                                    ? "Added to cart"
                                    : "Add to cart"
                                }
                              >
                                {cartItem !== undefined && cartItem.quantity > 0
                                  ? "Added"
                                  : "Add to cart"}
                              </button>
                            ) : (
                              <button
                                disabled
                                className="active lezada-button lezada-button--medium"
                              >
                                Out of stock
                              </button>
                            )}
                          </td>

                          <td className="product-remove">
                            <button
                              onClick={() =>
                                dispatch(deleteFromWishlist(product.id))
                              }
                            >
                              <IoIosClose />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Col>
              <Col lg={12} className="space-mb--r100">
                <div className="cart-coupon-area space-pt--30 space-pb--30">
                  <Row className="align-items-center">
                    <Col lg={5} className="text-start text-lg-end ms-auto">
                      <button
                        className="lezada-button lezada-button--medium"
                        onClick={() => dispatch(deleteAllFromWishlist())}
                      >
                        clear wishlist
                      </button>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon space-mb--30">
                    <IoIosHeartEmpty />
                  </div>
                  <div className="item-empty-area__text">
                    <p className="space-mb--30">No items found in wishlist</p>
                    <Anchor path="/shop/left-sidebar" className="lezada-button lezada-button--medium">
                        Shop Now
                    </Anchor>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </LayoutTwo>
  );
};

export default Wishlist;
