import { Container, Row, Col } from "react-bootstrap";
import { LayoutTwo } from "../../components/Layout";
import Swal from 'sweetalert2'

const LoginRegister = () => {
    const Recoverbutton = (e)=> {
        e.preventDefault(),
        Swal.fire("Done!", "E-mail has been sent to your registered E-mail ID for password recovery.", "success");
        // alert("E-mail has been sent to your registered E-mail ID for password recovery.")
    }

  return (
    
    <LayoutTwo>
      
       <div className="Reset"> 
        <Container>
          <Row>
            <Col lg={6}>
              <div className="lezada-form login-form--register">
                <form>
                  <Row>
                    <Col lg={12}>
                      <div className="section-title--login text-center space-mb--50">
                        <h2 className="space-mb--20">Forgot Password</h2>
                        <p>Recover your Password now!</p>
                      </div>
                    </Col>
                    <Col lg={12} className="space-mb--30">
                      <label htmlFor="regEmail">
                        Email Address <span className="required">*</span>{" "}
                      </label>
                      <input type="text" placeholder="Enter your resistered e-mail" id="regEmail" required />
                    </Col>
                    
                    <Col lg={12} className="text-center">
                      <button className="lezada-button lezada-button--medium" id= "recover"value="email" onClick={Recoverbutton}>
                        RECOVER
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutTwo>
  );
};

export default LoginRegister;
