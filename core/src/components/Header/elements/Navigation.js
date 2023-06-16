import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Anchor from "../../anchor";
import { fetchAllCategories } from '../../../services/product.services';
import { useState,useEffect } from "react";
import  slugify  from "slugify";

const Navigation = () => {

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await fetchAllCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
  
    fetchCategories();
  }, []);
  

  return (
    <nav className="header-content__navigation space-pr--15 space-pl--15 d-none d-lg-block">
      <ul>
        <li>
          <Anchor path="/">
            Home
          </Anchor>
          {/* <IoIosArrowDown /> */}
          {/* <ul className="sub-menu sub-menu--mega sub-menu--mega--column-5">
            <li className="sub-menu--mega__title">
              <Anchor path="/">
                Home Group
              </Anchor>
              <ul className="sub-menu--mega__list">
                <li>
                  <Anchor path="/home/decor">
                    Decor
                  </Anchor>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/decor.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
                <li>
                  <Anchor path="/home/creative">
                    Creative
                  </Anchor>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/creative.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
                <li>
                  <Anchor path="/home/perfumes">
                    Perfumes
                  </Anchor>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/perfumes.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
                <li>
                  <Anchor path="/home/trending">
                    Trending
                  </Anchor>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/trending.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__title">
              <Anchor path="/">
                Home Group
              </Anchor>
              <ul className="sub-menu--mega__list">
                <li>
                  <Anchor path="/home/essentials">
                    Essentials
                  </Anchor>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/essentials.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
                <li>
                  <Anchor path="/home/accessories">
                    Accessories
                  </Anchor>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/accessories.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
                <li>
                  <Anchor path="/home/lookbook">
                    Lookbook
                  </Anchor>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/lookbook.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
                <li>
                  <Anchor path="/home/furniture">
                    Furniture
                  </Anchor>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/furniture.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__title">
              <Anchor path="/">
                Home Group
              </Anchor>
              <ul className="sub-menu--mega__list">
                <li>
                  <Anchor path="/home/smart-design">
                    Smart Design
                  </Anchor>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/smart-design.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
                <li>
                  <Anchor path="/home/collection">
                    Collection
                  </Anchor>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/collection.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
                <li>
                  <Anchor path="/home/jewelry">
                    Jewelry
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/home/cosmetics">
                    Cosmetics
                  </Anchor>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__title">
              <Anchor path="/">
                Home Group
              </Anchor>
              <ul className="sub-menu--mega__list">
                <li>
                  <Anchor path="/home/swimsuit">
                    Swimsuit
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/home/special">
                    Special
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/home/concept">
                    Concept
                  </Anchor>
                </li>
              </ul>
            </li>
            <li>
              <div className="sub-menu--mega__image">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/menu-image/menu-element.png"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
            </li>
          </ul> */}
        </li>
        <li>
          <Anchor
            path="/shop/right-sidebar">
            Shop
          </Anchor>
          <IoIosArrowDown />

          <ul className="sub-menu sub-menu--mega sub-menu--mega--column-4">
            {/* <li className="sub-menu--mega__title">
              <Anchor
                path="/shop/left-sidebar">
                Group One
              </Anchor>
              <ul className="sub-menu--mega__list">
                <li>
                  <Anchor
                    path="/shop/left-sidebar">
                    Left Sidebar
                  </Anchor>
                </li>
                <li>
                  <Anchor
                    path="/shop/right-sidebar">
                    Right Sidebar
                  </Anchor>
                </li>
                <li>
                  <Anchor
                    path="/shop/no-sidebar">
                    No Sidebar
                  </Anchor>
                </li>
                <li>
                  <Anchor
                    path="/shop/fullwidth-no-space">
                    Full Width No Space
                  </Anchor>
                </li>
                <li>
                  <Anchor
                    path="/shop/fullwidth-no-sidebar">
                    Full Width No Sidebar
                  </Anchor>
                </li>
                <li>
                  <Anchor
                    path="/shop/fullwidth-left-sidebar">
                    Full Width Left Sidebar
                  </Anchor>
                </li>
                <li>
                  <Anchor
                    path="/shop/fullwidth-right-sidebar">
                    Full Width Right Sidebar
                  </Anchor>
                </li>
              </ul>
            </li> */}
            <li className="sub-menu--mega__title">
              <Anchor path="/shop/left-sidebar">
                Categories
              </Anchor>
              <ul className="sub-menu--mega__list">
    <li>
      <Anchor path="/shop/product-basic/lorem-ipsum-decor-one">
        All Categories
      </Anchor>
    </li>
    <ul style={{ marginLeft: "20px" }}>
      {categories.map((category) => (
        
        
        <li key={category}>
        
          <Anchor path={`/shop/category-basic/${category}`}>
            {category}
          </Anchor>
        </li>
      ))}
    </ul>
  </ul>
            </li>
            <li className="sub-menu--mega__title">
              <Anchor path="/">
                Shop Pages
              </Anchor>
              <ul className="sub-menu--mega__list">
                <li>
                  <Anchor path="/shop/right-sidebar">
                    Shop now
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/other/checkout">
                    Checkout
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/other/order-tracking">
                    Order Tracking
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/other/my-account">
                    My Account
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/other/login-register">
                    Login/Register
                  </Anchor>
                </li>
              </ul>
            </li>
            <li>
              <div className="sub-menu--mega__image">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/menu-image/megamenu-shop.png"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </li>
        {/* <li>
          <Anchor path="/">
            Elements
          </Anchor>
          <IoIosArrowDown />
          <ul className="sub-menu sub-menu--mega sub-menu--mega--column-5">
            <li className="sub-menu--mega__title">
              <Anchor path="/">
                Group One
              </Anchor>
              <ul className="sub-menu--mega__list">
                <li>
                  <Anchor path="/element/product-categories">
                    Product Categories
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/element/product-sliders">
                    Product Sliders
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/element/product-tabs">
                    Product Tabs
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/element/product-widgets">
                    Product Widget
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/element/recent-products">
                    Recent Products
                  </Anchor>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__title">
              <Anchor path="/">
                Group Two
              </Anchor>
              <ul className="sub-menu--mega__list">
                <li>
                  <Anchor path="/element/sale-products">
                    Sale Products
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/element/featured-products">
                    Featured products
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/element/top-rated-products">
                    Top Rated products
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/element/best-selling-products">
                    Best Selling
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/element/product-attributes">
                    Product Attributes
                  </Anchor>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__title">
              <Anchor path="/">
                Group Three
              </Anchor>
              <ul className="sub-menu--mega__list">
                <li>
                  <Anchor path="/element/blog-posts">
                    Blog Posts
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/element/mailchimp-forms">
                    Mailchimp Form
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/element/icon-boxes">
                    Icon Box
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/element/team-members">
                    Team Member
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/element/faqs">
                    FAQs / Toggles
                  </Anchor>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__title">
              <Anchor path="/">
                Group Four
              </Anchor>
              <ul className="sub-menu--mega__list">
                <li>
                  <Anchor path="/element/countdown-timers">
                    Countdown Timer
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/element/buttons">
                    Buttons
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/element/testimonials">
                    Testimonials
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/element/google-maps">
                    Google Maps
                  </Anchor>
                </li>
              </ul>
            </li>
            <li>
              <div className="sub-menu--mega__image">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/menu-image/menu-element.png"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </li> */}
        <li className="position-relative">
          <Anchor path="/other/about">
            About Us
          </Anchor>
          {/* <IoIosArrowDown />
          <ul className="sub-menu sub-menu--one-column">
            <li>
              <Anchor path="/other/about">
                About Us
              </Anchor>
            </li>
            <li>
              <Anchor path="/other/about-two">
                About Us Two
              </Anchor>
            </li>
            <li>
              <Anchor path="/other/contact">
                Contact Us
              </Anchor>
            </li>
            <li>
              <Anchor path="/other/faq">
                F.A.Q
              </Anchor>
            </li>
            <li>
              <Anchor path="/other/coming-soon">
                Coming Soon
              </Anchor>
            </li>
            <li>
              <Anchor path="/other/not-found">
                Not Found
              </Anchor>
            </li>
          </ul> */}
        </li>
        <li className="position-relative">
          <Anchor path="/blog/grid-right-sidebar">
            Blog
          </Anchor>
          {/* <IoIosArrowDown />
          <ul className="sub-menu sub-menu--one-column">
            <li>
              <Anchor path="/blog/standard-left-sidebar">
                Standard Layout
              </Anchor>
              <IoIosArrowForward />
              <ul className="sub-menu--one-column sub-menu--one-column--child-menu">
                <li>
                  <Anchor path="/blog/standard-left-sidebar">
                    Left Sidebar
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/blog/standard-right-sidebar">
                    Right Sidebar
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/blog/standard-fullwidth">
                    Full Width
                  </Anchor>
                </li>
              </ul>
            </li>
            <li>
              <Anchor path="/blog/grid-left-sidebar">
                Grid Layout
              </Anchor>
              <IoIosArrowForward />
              <ul className="sub-menu--one-column sub-menu--one-column--child-menu">
                <li>
                  <Anchor path="/blog/grid-left-sidebar">
                    Left Sidebar
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/blog/grid-right-sidebar">
                    Right Sidebar
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/blog/grid-fullwidth">
                    Full Width
                  </Anchor>
                </li>
              </ul>
            </li>
            <li>
              <Anchor path="/blog/list-left-sidebar">
                List Layout
              </Anchor>
              <IoIosArrowForward />
              <ul className="sub-menu--one-column sub-menu--one-column--child-menu">
                <li>
                  <Anchor path="/blog/list-left-sidebar">
                    Left Sidebar
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/blog/list-right-sidebar">
                    Right Sidebar
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/blog/list-fullwidth">
                    Full Width
                  </Anchor>
                </li>
              </ul>
            </li>
            <li>
              <Anchor path="/blog/post-left-sidebar">
                Single Post Layout
              </Anchor>
              <IoIosArrowForward />
              <ul className="sub-menu--one-column sub-menu--one-column--child-menu">
                <li>
                  <Anchor path="/blog/post-left-sidebar">
                    Left Sidebar
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/blog/post-right-sidebar">
                    Right Sidebar
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/blog/post-fullwidth">
                    Full Width
                  </Anchor>
                </li>
              </ul>
            </li>
          </ul> */}
        </li>
        <li>
            <div className="selectbox" style={{marginLeft: "100px"}}>
              <select style={{boxShadow: "box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px",border:"none", fontSize: "16px", borderRadius:"5px", color:"#7e7e7e"}}>
                <option>India</option>
                <option>United Kingdom</option>
                <option>U.S.A</option>
                <option>Canada</option>
              </select>
            </div>
          </li>
      </ul>
    </nav>
  );
};

export default Navigation;
