import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import myImg from "../../Assets/PP_YASH.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <Card className="terminal-card">
              <div className="terminal-header">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
                <span style={{ marginLeft: "10px", fontFamily: "JetBrains Mono, monospace", fontSize: "0.8em", color: "var(--text-muted)" }}>whoami.sh</span>
              </div>
              <Card.Body style={{ padding: "1.5rem" }}>
                <p className="home-about-body" style={{ margin: 0, paddingTop: 0 }}>
                I'm a tech enthusiast and aspiring <b className="purple">Cloud Engineer</b> who loves turning ideas into practical, scalable, and meaningful digital products.
                Over time, I've worked with diverse technologies and discovered a strong interest in designing systems that are efficient, resilient, and ready to scale.
                <br />
                <br />I'm proficient in
                <i>
                  <b className="purple"> Python, Java, JavaScript, C/C++, and Kotlin. </b>
                </i>
                <br /> Also
                <i>
                  <b className="purple"> Backend development, Full-stack workflows & Cloud-based architectures. </b>
                </i>
                <br />
                My field of Interest's are building in&nbsp;
                <i>
                  <b className="purple">
                    Cloud & AI / ML .
                  </b>
                </i>
                <br />
                <br />
                Whenever possible, I love building projects using
                modern frameworks like <b className="purple">React.js</b>, backend technologies such as
                <i>
                  <b className="purple">
                    {" "}
                    FastAPI and Node.js
                  </b>
                </i>
                &nbsp; and exploring
                <i>
                  <b className="purple"> Cloud platforms, DevOps practices, and scalable infrastructure design.</b>
                </i>
              </p>
              <div style={{ marginTop: "25px", display: "flex", justifyContent: "flex-start" }}>
                <Button
                  as={Link}
                  to="/about"
                  className="hero-btn-primary"
                  style={{ textDecoration: "none" }}
                >
                  Know More About Me
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid profile-glow" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/YASHASVI0422"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/WINTERFELL0422"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yashasvi-pandey/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/yashasvipandey_17/#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
