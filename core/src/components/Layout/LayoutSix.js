import { Fragment } from "react";
import { HeaderThree } from "../Header";
import { FooterTwo } from "../Footer";
import ScrollToTop from "../scroll-to-top"

const LayoutThree = ({ children }) => {
  return (
    <Fragment>
      <HeaderThree />
      {children}
      <FooterTwo />
      <ScrollToTop />
    </Fragment>
  );
};

export default LayoutThree;
