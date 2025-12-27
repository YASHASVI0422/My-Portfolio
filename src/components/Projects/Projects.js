import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import DoZo from "../../Assets/Projects/DoZo.png";
import dwellwell from "../../Assets/Projects/dwellwell.png";
import ghostwriter from "../../Assets/Projects/ghostwriter.jpg";
import Student_Performance_Analysis from "../../Assets/Projects/Student_Performance_Analysis.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dwellwell}
              isBlog={false}
              title="DwellWell"
              description="DwellWell is a full-stack real estate management platform that enables seamless property listing, user management, and secure transactions, with integrated maps, payments, and communication features."
              ghLink="https://github.com/YASHASVI0422/DwellWell-Real-Estate-Management-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Student_Performance_Analysis}
              isBlog={false}
              title="Student Performance Analysis"
              description="A machine learning project that analyzes and predicts student performance using Python and Scikit-learn, applying regression and classification models with data preprocessing and evaluation techniques."
              ghLink="https://github.com/YASHASVI0422/ML-Student-Performance"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DoZo}
              isBlog={false}
              title="DoZo"
              description="An Android application developed with Kotlin and Firebase, featuring user authentication, real-time data storage, API integration, and an interactive, user-friendly mobile interface."
              ghLink="https://github.com/YASHASVI0422/DoZO"           
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ghostwriter}
              isBlog={false}
              title="AI-Ghostwriter"
              description="GhostWriter AI is an AI-powered content generation tool that uses large language models to create, rewrite, and summarize text efficiently, enabling fast and context-aware content creation."
              ghLink="https://github.com/YASHASVI0422/AI-GhostWriter"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
