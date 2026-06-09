import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import DoZo from "../../Assets/Projects/DoZo.png";
import dwellwell from "../../Assets/Projects/dwellwell.png";
import ghostwriter from "../../Assets/Projects/ghostwriter.jpg";
import Student_Performance_Analysis from "../../Assets/Projects/Student_Performance_Analysis.png";
import Affiliate_CRM from "../../Assets/Projects/Affiliate_CRM.png";
import Aurex from "../../Assets/Projects/Aurex.png";
import CarbonX from "../../Assets/Projects/CarbonX.png";

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
          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={Affiliate_CRM}
              isBlog={false}
              title="Affiliate CRM"
              description="AffiliateCRM is an enterprise-grade MERN stack (MongoDB, Express, React, Node.js) platform integrated with Google Gemini AI and real-time WebSockets (Socket.io). It is designed to manage affiliates, track leads, and facilitate live support ticketing with advanced features."
              ghLink="https://github.com/YASHASVI0422/AffiliateCRM"
              demoLink="https://affiliatecrm.netlify.app"
              tags={["MongoDB", "Express", "React", "Node.js", "Gemini AI", "Socket.io"]}
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={Aurex}
              isBlog={false}
              title="Aurex — Smart Expense Tracker"
              description="Aurex is a full-stack personal finance management web application that helps users track expenses, manage budgets, and gain insights into their spending patterns. Built using PHP, MySQL, HTML, CSS, JavaScript, and Chart.js, Aurex demonstrates advanced database concepts like Triggers, Views, UPSERT operations, and Referential Integrity."
              ghLink="https://github.com/YASHASVI0422/AUREX-SMART-EXPENSE-TRACKER-SYSTEM"
              tags={["PHP", "MySQL", "JavaScript", "Chart.js", "HTML5/CSS3"]}
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={CarbonX}
              isBlog={false}
              title="CarbonX – Smart Carbon Footprint Intelligence System"
              description="An Advanced Java Project aligned with SDG 13: Climate Action. Utilizes Java Swing for the GUI and Firebase for secure, real-time data storage. The system empowers users to calculate their carbon footprint and explore eco-friendly alternatives."
              ghLink="https://github.com/YASHASVI0422/CarbonX"
              tags={["Java Swing", "Firebase", "Real-time DB", "GUI"]}
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={dwellwell}
              isBlog={false}
              title="DwellWell"
              description="DwellWell is a full-stack real estate management platform that enables seamless property listing, user management, and secure transactions, with integrated maps, payments, and communication features."
              ghLink="https://github.com/YASHASVI0422/DwellWell-Real-Estate-Management-System"
              tags={["React", "Node.js", "Express", "MongoDB", "Maps API"]}
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={Student_Performance_Analysis}
              isBlog={false}
              title="Student Performance Analysis"
              description="A machine learning project that analyzes and predicts student performance using Python and Scikit-learn, applying regression and classification models with data preprocessing and evaluation techniques."
              ghLink="https://github.com/YASHASVI0422/ML-Student-Performance"
              tags={["Python", "Scikit-Learn", "Machine Learning", "Pandas"]}
            />
          </Col>
          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={DoZo}
              isBlog={false}
              title="DoZo"
              description="An Android application developed with Kotlin and Firebase, featuring user authentication, real-time data storage, API integration, and an interactive, user-friendly mobile interface."
              ghLink="https://github.com/YASHASVI0422/DoZO"
              tags={["Kotlin", "Android SDK", "Firebase Auth", "Real-time DB"]}
            />
          </Col>
          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={ghostwriter}
              isBlog={false}
              title="AI-Ghostwriter"
              description="GhostWriter AI is an AI-powered content generation tool that uses large language models to create, rewrite, and summarize text efficiently, enabling fast and context-aware content creation."
              ghLink="https://github.com/YASHASVI0422/AI-GhostWriter"
              tags={["React", "Node.js", "Google Gemini AI", "LLM"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
