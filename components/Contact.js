import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { FloatingLabel } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "./Contact.css";
import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Contact = () => {
  const [smShow, setSmShow] = useState(false);
  const [email, SetEmail] = useState("");
  const [name, SetName] = useState("");
  const [comment, SetComment] = useState("");

  const myfunc = (e) => {
    e.preventDefault();
    const Vname = /[0-9]/;
    const Vemail = /\b[0-9]/;
    let a = 0;
    if (Vname.test(name)) {
      a = 1;
      window.alert("Names Should Not Contain Numbers");
    } else if (email === "") {
      a = 1;

      alert("please enter your email");
    } else if (name === "") {
      a = 1;
      alert("Please enter your name");
    } else if (name.length < 5) {
      a = 1;
      alert("characters must be greater than 5");
    } else if (comment === "") {
      a = 1;

      alert("Comment Box cannot be empty");
    } else if (!email.includes("@")) {
      a = 1;

      alert("Please check your email address");
    } else if (email.includes("@")) {
      var arr = email.split("@");
      const sec = arr[1];
      const fir = arr[0];
      if (Vemail.test(fir)) {
        a = 1;
        alert("Opps Email Cannot Starts With Number");
      } else if (sec !== "gmail.com") {
        a = 1;
        alert("Opps Please enter a Email ends with gmail.com");
      }
    }
    if (a === 0) {
      setSmShow(true);
      const data = {
        Email: email,
        Name: name,
        Comment: comment
      };
      axios
        .post(
          "https://sheet.best/api/sheets/7860b615-821b-45d9-ab26-f0fb34b43b10",
          data
        )
        .then((response) => {
          SetEmail("");
          SetName("");
          SetComment("");
        });
    }
  };
  const UpdateEmailValue = (e) => {
    SetEmail(e.target.value);
  };
  const updateComment = (e) => {
    SetComment(e.target.value);
  };
  const UpdateNameValue = (e) => {
    SetName(e.target.value);
  };
  return (
    <section id="contact">
      <Modal size="sm" show={smShow} onHide={() => setSmShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            <div class="text-center text-success">
              Message Sent Successfully
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="text-center">
            I will get back to you soon{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-envelope-heart"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l3.235 1.94a2.76 2.76 0 0 0-.233 1.027L1 5.384v5.721l3.453-2.124c.146.277.329.556.55.835l-3.97 2.443A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741l-3.968-2.442c.22-.28.403-.56.55-.836L15 11.105V5.383l-3.002 1.801a2.76 2.76 0 0 0-.233-1.026L15 4.217V4a1 1 0 0 0-1-1H2Zm6 2.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"
                />
              </svg>
            </span>
          </div>
        </Modal.Body>
      </Modal>
      <Container>
        <div>
          <h6
            className="display-6 my-5 text-center"
            style={{ fontWeight: "bold", letterSpacing: "2px" }}
          >
            Let's Connect
          </h6>
        </div>
        <Row>
          <Col md={6}>
            <div className="text-center my-5">
              <h5 className="display-6"> Send us a Message</h5>
            </div>
            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={UpdateEmailValue}
                required
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingName" label="Name">
              <Form.Control
                type="Name"
                placeholder="name"
                value={name}
                onChange={UpdateNameValue}
                required
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Comments"
              className="mt-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                value={comment}
                required
                onChange={updateComment}
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <div className="text-center mt-5">
              <button class="button" onClick={myfunc}>
                Send Email
              </button>
            </div>
          </Col>
          <Col md={6} className="mt-3">
            <div className="img-fluid my-5">
              <div
                class="bg-image p-3 text-center shadow-1-strong rounded text-white"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1556014633-e65544133b86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhbmRpbmclMjBhbG9uZXxlbnwwfHwwfHw%3D&w=1000&q=80')"
                }}
              >
                <div className="my-3">
                  <Fade left>
                    {" "}
                    <h5>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="18"
                        fill="currentColor"
                        class="bi bi-telephone"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />{" "}
                      </svg>
                      <span>Mobile</span>
                    </h5>
                  </Fade>{" "}
                  <p className="my-4">+91 6381993928</p>
                </div>
                <div className="my-5">
                  <Fade left>
                    {" "}
                    <h5>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="18"
                        fill="currentColor"
                        class="bi bi-envelope"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                      </svg>
                      <span>Email Id</span>
                    </h5>{" "}
                  </Fade>
                  <p className="my-4">vvkarthi025@gmail.com</p>
                </div>
                <div className="my-5">
                  <Fade left>
                    {" "}
                    <h5>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="20"
                        fill="currentColor"
                        class="bi bi-geo-alt"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                      <span>Address</span>
                    </h5>
                  </Fade>
                  <p className="my-4">
                    219-c, 2 nd cross, Velayutha nagar, Jayankondam.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Contact;
