import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";
import Countdown from "./countdown";
import { IoIosCart } from "react-icons/io";
import Anchor from "../anchor";

const CountdownTimerOne = ({
  title,
  backgroundImage,
  dateTime,
  url,
  buttonText,
  spaceBottomClass,
}) => {
  return (
    <div className={clsx("countdown-timer-wrapper", spaceBottomClass)}>
      <Container className="wide">
        <Row>
          <Col lg={12}>
            <div
              className="countdown-background bg-img space-pt--r100 space-pb--r100"
              style={{
                backgroundImage: `url(${backgroundImage})`,
              }}
            >
              <Row>
                <Col lg={9} xl={7} className="ms-auto">
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

export default CountdownTimerOne;
