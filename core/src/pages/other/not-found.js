import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HeaderTwo } from "../../components/Header";
import Anchor from "../../components/anchor";
import { useMediaQuery } from 'react-responsive'
import{ MMnavigate} from "../../components/Header"

const NotFound = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 1224px)'
  })
  return (
    <Fragment>
      <HeaderTwo />
      <div
        className="nothing-found-area bg-404"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/images/backgrounds/404-bg.jpg"
          })`
        }}
      >
        {isMobile &&  <MMnavigate/>}
        <Container>
          <Row>
            <Col lg={6}>
              <div className="nothing-found-content">
                <h1>Oops!</h1>
                <h1 className="space-mb--50">Page not found!</h1>
                <p className="direction-page">
                  PLEASE GO BACK TO{" "}
                  <Anchor path="/">
                    homepage
                  </Anchor>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default NotFound;
