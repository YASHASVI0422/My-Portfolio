import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Yashasvi Pandey</strong>
              </h1>

              <div style={{ padding: "15px 0 20px 45px", textAlign: "left" }}>
                <Type />
              </div>

              <p style={{
                paddingLeft: "45px",
                fontSize: "1.1em",
                color: "var(--text-secondary)",
                maxWidth: "600px",
                lineHeight: "1.7",
                marginBottom: "35px",
                textAlign: "justify"
              }}>
                Aspiring Cloud Engineer & Full Stack Developer. Building scalable web systems, cloud architectures, and intelligent solutions that turn complex ideas into digital realities.
              </p>

              <div style={{ paddingLeft: "45px", display: "flex", gap: "15px", flexWrap: "wrap" }}>
                <Button
                  as={Link}
                  to="/project"
                  className="hero-btn-primary"
                  style={{ textDecoration: "none" }}
                >
                  View My Work
                </Button>
                <Button
                  onClick={() => {
                    const el = document.getElementById("about");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hero-btn-outline"
                >
                  About Me
                </Button>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, display: "flex", justifyContent: "center" }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>

        {/* Scroll-down indicator */}
        <div
          className="scroll-indicator"
          onClick={() => {
            const el = document.getElementById("about");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span></span>
        </div>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
