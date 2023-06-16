import { Fragment } from "react";
import { HeaderEight } from "../Header";
import { FooterFive } from "../Footer";
import ScrollToTop from "../scroll-to-top"

const LayoutTen = ({ children }) => {
  return (
    <Fragment>
      <HeaderEight />
      {children}
      <FooterFive />
      <ScrollToTop />
    </Fragment>
  );
};

export default LayoutTen;
