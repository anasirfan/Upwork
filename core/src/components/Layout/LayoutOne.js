import { Fragment } from "react";
import { HeaderOne } from "../Header";
import { FooterOne } from "../Footer";
import ScrollToTop from "../scroll-to-top"
import { useMediaQuery } from 'react-responsive'
import{ MMnavigate} from "../../components/Header"

const LayoutOne = ({ children, aboutOverlay }) => {
   const isMobile = useMediaQuery({
        query: '(max-width: 1224px)'
      })
  return (
    <Fragment>
      <HeaderOne aboutOverlay={aboutOverlay} />
      {children}
      {isMobile &&  <MMnavigate/>}
      <FooterOne />
      <ScrollToTop />
    </Fragment>
  );
};

export default LayoutOne;
