import { Fragment } from "react";
import { HeaderSix } from "../Header";
import { FooterOne } from "../Footer";
import ScrollToTop from "../scroll-to-top"

const LayoutSeven = ({ children }) => {
  return (
    <Fragment>
      <HeaderSix />
      {children}
      <FooterOne />
      <ScrollToTop />
    </Fragment>
  );
};

export default LayoutSeven;
