import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
            <p className="home-about-body">
              I’m a tech enthusiast and aspiring <b className="purple">Cloud Engineer</b> who loves turning ideas into practical, scalable, and meaningful digital products.
              Over time, I’ve worked with diverse technologies and discovered a strong interest in designing systems that are efficient, resilient, and ready to scale.
              <br />
              <br />I’m proficient in
              <i>
                <b className="purple"> Python, Java, JavaScript, C/C++, and Kotlin. </b>
              </i>
              <br /> Also
              <i>
                <b className="purple"> Backend devlopment, Full-stack workflows & Cloud-based architectures. </b>
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
              modern frameworks like <b className="purple">React.js</b> backend technologies such as
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
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
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
                  href=""
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
