import { Fragment } from "react";
import { HeaderOne } from "../Header";
import { FooterTwo } from "../Footer";
import ScrollToTop from "../scroll-to-top"
import { useMediaQuery } from 'react-responsive'
import{ MMnavigate} from "../../components/Header"

const LayoutTwo = ({ children, aboutOverlay, footerBgClass }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 1224px)'
  })

  return (
    <Fragment>
      <HeaderOne aboutOverlay={aboutOverlay} />
      {children}
      {isMobile &&  <MMnavigate/>}
      <FooterTwo footerBgClass={footerBgClass} />
      <ScrollToTop/>
    </Fragment>
  );
};

export default LayoutTwo;
