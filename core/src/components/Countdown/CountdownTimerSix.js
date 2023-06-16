import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";
import Countdown from "./countdown";
import { IoIosCart } from "react-icons/io";;
import Anchor from "../anchor";


const CountdownTimerSix = ({
  title,
  image,
  dateTime,
  url,
  buttonText,
  spaceBottomClass
}) => {
  return (
    <div className={clsx("countdown-timer-wrapper", spaceBottomClass)}>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="countdown-background">
              <Row className="align-items-center">
                <Col lg={3} xl={5}>
                  <div className="countdown-image text-center space-mb-mobile-only--50">
                    <img
                      src={process.env.PUBLIC_URL + image}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </Col>
                <Col lg={9} xl={7}>
                  <div className="countdown-wrapper text-center">
                    <h3>{title}</h3>
                    <div className="deal-countdown">
                      <Countdown date={dateTime} />
                    </div>
                    <Anchor href={url} className="lezada-button lezada-button--medium lezada-button--icon--left">
                        <IoIosCart /> {buttonText}
                    </Anchor>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CountdownTimerSix;
