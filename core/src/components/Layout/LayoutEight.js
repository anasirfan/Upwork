import { Fragment } from "react";
import { HeaderSix } from "../Header";
import { FooterTwo } from "../Footer";
import ScrollToTop from "../scroll-to-top"

const LayoutEight = ({ children }) => {
  return (
    <Fragment>
      <HeaderSix />
      {children}
      <FooterTwo />
      <ScrollToTop />
    </Fragment>
  );
};

export default LayoutEight;
