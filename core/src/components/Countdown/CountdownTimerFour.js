import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";
import Countdown from "./countdown";
import { IoIosCart } from "react-icons/io";
import Anchor from "../anchor";

const CountdownTimerFour = ({
  title,
  image,
  dateTime,
  url,
  buttonText,
  spaceBottomClass,
  backgroundColorClass
}) => {
  return (
    <div className={clsx("countdown-timer-wrapper", backgroundColorClass, spaceBottomClass)}>
      <Container className="wide">
        <Row>
          <Col lg={12}>
            <div className="countdown-background space-pt--30 space-pb--30">
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

export default CountdownTimerFour;
