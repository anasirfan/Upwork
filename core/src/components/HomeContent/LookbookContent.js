import { Container, Row, Col } from "react-bootstrap";
import { Parallax } from "react-parallax";
import clsx from "clsx";
import Anchor from "../anchor";

const LookbookContent = ({ spaceBottomClass }) => {
  return (
    <div className={clsx("lookbook-wrapper", spaceBottomClass)}>
      <Parallax
        bgImage={
          process.env.PUBLIC_URL +
          "/assets/images/backgrounds/bg-parallax-1.jpg"
        }
        bgImageAlt="image"
        strength={500}
      >
        <div className="single-lookbook-section">
          <Container>
            <Row>
              <Col xl={6} lg={7}>
                <div className="lookbook-content-wrapper d-flex flex-column justify-content-center">
                  <div className="lookbook-content text-center">
                    <p className="tag">#NEW #COLLECTION #MEN</p>
                    <h2 className="lookbook-title">Spring Favorites</h2>
                    <Anchor
                      href="/shop/left-sidebar"
                      className="lezada-button lezada-button--medium lookbook-btn"
                    >
                      
                        shop now
                    </Anchor>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Parallax>

      <Parallax
        bgImage={
          process.env.PUBLIC_URL +
          "/assets/images/backgrounds/bg-parallax-2.jpg"
        }
        bgImageAlt="image"
        strength={500}
      >
        <div className="single-lookbook-section">
          <Container>
            <Row>
              <Col md={8} lg={7} className="ms-auto">
                <div className="lookbook-content-wrapper d-flex flex-column justify-content-center">
                  <div className="lookbook-content lookbook-content--dark text-center">
                    <p className="tag">#BEACHWEAR #SUMMER</p>
                    <h2 className="lookbook-title">Beachwear</h2>
                    <Anchor
                      href="/shop/left-sidebar"
                      className="lezada-button lezada-button--medium lookbook-btn"
                    >
                      
                        shop now
                    </Anchor>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Parallax>

      <Parallax
        bgImage={
          process.env.PUBLIC_URL +
          "/assets/images/backgrounds/bg-parallax-3.jpg"
        }
        bgImageAlt="image"
        strength={500}
      >
        <div className="single-lookbook-section">
          <Container>
            <Row>
              <Col lg={10} className="mx-auto">
                <div className="lookbook-content-wrapper d-flex flex-column justify-content-center">
                  <div className="lookbook-content text-center">
                    <p className="tag">#NEW #COLLECTION #WOMEN</p>
                    <h2 className="lookbook-title">Women's new arrivals</h2>
                    <Anchor
                      href="/shop/left-sidebar"
                      className="lezada-button lezada-button--medium lookbook-btn"
                    >
                      
                        shop now
                    </Anchor>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Parallax>

      <Parallax
        bgImage={
          process.env.PUBLIC_URL +
          "/assets/images/backgrounds/bg-parallax-4.jpg"
        }
        bgImageAlt="image"
        strength={500}
      >
        <div className="single-lookbook-section">
          <Container>
            <Row>
              <Col md={6} lg={7} xl={8}>
                <div className="lookbook-content-wrapper d-flex flex-column justify-content-center">
                  <div className="lookbook-content lookbook-content--dark text-center">
                    <p className="tag">#ACCESSORIES</p>
                    <h2 className="lookbook-title">Find your style</h2>
                    <Anchor
                      href="/shop/left-sidebar"
                      className="lezada-button lezada-button--medium lookbook-btn"
                    >
                      
                        shop now
                    </Anchor>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Parallax>
    </div>
  );
};

export default LookbookContent;
