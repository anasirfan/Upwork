import { Fragment } from "react";
import { HeaderSeven } from "../Header";
import { FooterFour } from "../Footer";
import ScrollToTop from "../scroll-to-top"

const LayoutTwo = ({ children, aboutOverlay }) => {
  return (
    <Fragment>
      <HeaderSeven aboutOverlay={aboutOverlay} />
      {children}
      <FooterFour />
      <ScrollToTop />
    </Fragment>
  );
};

export default LayoutTwo;
