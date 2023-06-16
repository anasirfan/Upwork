import { Fragment } from "react";
import { HeaderThree } from "../Header";
import { FooterThree } from "../Footer";
import ScrollToTop from "../scroll-to-top"

const LayoutThree = ({ children }) => {
  return (
    <Fragment>
      <HeaderThree />
      {children}
      <FooterThree />
      <ScrollToTop />
    </Fragment>
  );
};

export default LayoutThree;
