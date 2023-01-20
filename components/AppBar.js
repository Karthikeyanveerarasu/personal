import { Parallax } from "react-parallax";
import photo from "../assets/karthi.jpg";
import React from "react";
import lo from "../assets/logo.png";
import "./MainStyle.css";
import Typewriter from "typewriter-effect";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { useState } from "react";
import RubberBand from "react-reveal/RubberBand";
import resume from "../assets/down.pdf";
export default function AppBar() {
  const [Color, SetColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      SetColor(true);
    } else {
      SetColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div>
      <Navbar
        expand="lg"
        fixed="top"
        className={Color ? "header-bg" : "header"}
        style={{
          width: "95%",
          margin: "auto",
          borderRadius: "30px",
          marginTop: "10px"
        }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <div class="img-fluid mx-2">
              <img src={lo} alt="Logo" width={40} />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="nav">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skill">Skills</Nav.Link>
              <Nav.Link href="#project">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section id="home">
        <Parallax bgImage={photo} strength={500}>
          <div className="overlay"></div>
          <div className="overlay"></div>
          <div className="overlay"></div>

          <div style={{ height: "100vh" }}>
            <div className="content">
              <RubberBand count={5}>
                <h2 style={{ letterSpacing: "2px" }}>
                  Hi <span style={{ color: "orange" }}> I'm</span>
                </h2>
              </RubberBand>
              <span
                className="my-3"
                style={{
                  color: "white",
                  fontSize: "1.8rem",
                  marginBottom: "20px",
                  fontWeight: "bold",
                  letterSpacing: "3px"
                }}
              >
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: [
                      "Karthikeyan V V ",
                      "Full Stack Developer ",
                      "Web Developer",
                      "UX/UI Designer",
                      "Free Lancer "
                    ]
                  }}
                />
              </span>

              <div className="container text-center my-3">
                <a
                  href={
                    "https://www.linkedin.com/in/karthikeyan-v-v-26b87b244/"
                  }
                  target="blank"
                >
                  {" "}
                  <button className="btn btn-info mx-4">Hire me</button>
                </a>
                <a
                  style={{ textDecoration: "none" }}
                  href={resume}
                  download="Resume"
                  target="blank"
                >
                  {" "}
                  <button className="btn btn-success"> Download CV</button>
                </a>{" "}
              </div>
            </div>
          </div>
        </Parallax>
      </section>
    </div>
  );
}
