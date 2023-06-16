import { useEffect } from "react";
import Anchor from "../../anchor"

const MobileMenuNav = ({ getActiveStatus }) => {
  useEffect(() => {
    const offCanvasNav = document.querySelector(
      "#offcanvas-mobile-menu__navigation"
    );
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(
      ".mobile-sub-menu"
    );
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", (e) => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        getActiveStatus(false);
      });
    }
  });

  const sideMenuExpand = (e) => {
    e.currentTarget.parentElement.classList.toggle("active");
  };
  return (
    <nav
      className="offcanvas-mobile-menu__navigation"
      id="offcanvas-mobile-menu__navigation"
    >
      <ul>
        <li className="menu-item-has-children"> 
          <Anchor path="/">
            Home
          </Anchor>
          {/* <ul className="mobile-sub-menu">
            <li className="menu-item-has-children"> 
              <Anchor path="/">
                Home Group One
              </Anchor>
              <ul className="mobile-sub-menu">
                <li>
                  <Anchor path="/home/decor">
                    Decor
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/home/creative">
                    Creative
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/home/perfumes">
                    Perfumes
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/home/trending">
                    Trending
                  </Anchor>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children"> 
              <Anchor path={process.env.PUBLIC_URL + "/"}>
                Home Group Two
              </Anchor>
              <ul className="mobile-sub-menu">
                <li>
                  <Anchor path="/home/essentials">
                    Essentials
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/home/accessories">
                    Accessories
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/home/lookbook">
                    Lookbook
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/home/furniture">
                    Furniture
                  </Anchor>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children"> 
              <Anchor path="/">
                Home Group Three
              </Anchor>
              <ul className="mobile-sub-menu">
                <li>
                  <Anchor path="/home/smart-design">
                    Smart Design
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/home/collection">
                    Collection
                  </Anchor>
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
            <li className="menu-item-has-children"> 
              <Anchor path="/">
                Home Group Four
              </Anchor>
              <ul className="mobile-sub-menu">
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
          </ul> */}
        </li>

        <li className="menu-item-has-children">
          <Anchor path="/shop/right-sidebar">
            Shop
          </Anchor>
          <ul className="mobile-sub-menu">
            <li className="menu-item-has-children">
              <Anchor path="/shop/left-sidebar">
                Categories
              </Anchor>
              <ul className="mobile-sub-menu">
                <li>
                  <Anchor path="/shop/left-sidebar">
                    All Categories
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/shop/left-sidebar" style={{marginLeft:"10%"}}>
                    Fashion
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/shop/right-sidebar" style={{marginLeft:"10%"}}>
                    Furniture
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/shop/no-sidebar" style={{marginLeft:"10%"}}>
                    Accessories
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/shop/fullwidth-no-space" style={{marginLeft:"10%"}}>
                    Wearables
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/shop/fullwidth-no-sidebar" style={{marginLeft:"10%"}}>
                    Decor
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/shop/fullwidth-left-sidebar" style={{marginLeft:"10%"}}>
                    Electronics
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/shop/fullwidth-right-sidebar" style={{marginLeft:"10%"}}>
                    Footwear
                  </Anchor>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Anchor path="/shop/right-sidebar">
                Shop Pages
              </Anchor>
              <ul className="mobile-sub-menu">
                <li>
                  <Anchor path="/shop/right-sidebar">
                    Shop Now
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/other/order-tracking">
                    Order Tracking
                  </Anchor>
                </li>

                <li>
                  <Anchor path="/other/checkout">
                    Checkout
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
            {/* <li className="menu-item-has-children">
              <Anchor path="/shop/left-sidebar">
                Group Three
              </Anchor>
              <ul className="mobile-sub-menu">
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
                    Login Register
                  </Anchor>
                </li>
              </ul>
            </li> */}
          </ul>
        </li>

        

        <li className="menu-item-has-children"> 
          <Anchor path="/other/about">
            About Us
          </Anchor>
          {/* <ul className="mobile-sub-menu">
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

        <li className="menu-item-has-children">
          <Anchor path="/blog/grid-right-sidebar">
            Blog
          </Anchor>
          {/* <ul className="mobile-sub-menu">
            <li className="menu-item-has-children">
              <Anchor path="/blog/standard-left-sidebar">
                Standard Layout
              </Anchor>
              <ul className="mobile-sub-menu">
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
            <li className="menu-item-has-children">
              <Anchor path="/blog/grid-left-sidebar">
                Grid Layout
              </Anchor>
              <ul className="mobile-sub-menu">
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
            <li className="menu-item-has-children">
              <Anchor path="/blog/list-left-sidebar">
                List Layout
              </Anchor>
              <ul className="mobile-sub-menu">
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
            <li className="menu-item-has-children">
              <Anchor path="/blog/post-left-sidebar">
                Single Post Layout
              </Anchor>
              <ul className="mobile-sub-menu">
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
      </ul>
    </nav>
  );
};

export default MobileMenuNav;
