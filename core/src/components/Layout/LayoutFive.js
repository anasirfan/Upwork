import { Fragment } from "react";
import { HeaderFive } from "../Header";
import { FooterTwo } from "../Footer";
import ScrollToTop from "../scroll-to-top"

const LayoutFive = ({ children }) => {
  return (
    <Fragment>
      <HeaderFive />
      {children}
      <FooterTwo />
      <ScrollToTop />
    </Fragment>
  );
};

export default LayoutFive;
