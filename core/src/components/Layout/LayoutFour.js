import { Fragment } from "react";
import { HeaderFour } from "../Header";
import { FooterTwo } from "../Footer";
import ScrollToTop from "../scroll-to-top"

const LayoutFour = ({ children }) => {
  return (
    <Fragment>
      <HeaderFour />
      {children}
      <FooterTwo />
      <ScrollToTop />
    </Fragment>
  );
};

export default LayoutFour;
