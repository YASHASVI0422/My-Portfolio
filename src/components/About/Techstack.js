import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiJava,
  DiHtml5,
  DiCss3,
  DiMysql,
  DiPhp,
} from "react-icons/di";
import {
  SiPostgresql,
  SiFirebase,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiFastapi,
  SiLinux,
  SiKotlin,
} from "react-icons/si";

function TechIcon({ icon: Icon, label }) {
  return (
    <Col xs={4} md={2} className="tech-icon-wrapper">
      <div className="tech-icons">
        <Icon />
      </div>
      <span className="tech-icon-label">{label}</span>
    </Col>
  );
}

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      {/* Programming Languages */}
      <TechIcon icon={DiPython} label="Python" />
      <TechIcon icon={DiJava} label="Java" />
      <TechIcon icon={CgCPlusPlus} label="C++" />
      <TechIcon icon={SiKotlin} label="Kotlin" />
      <TechIcon icon={DiPhp} label="PHP" />

      {/* Web Technologies */}
      <TechIcon icon={DiHtml5} label="HTML5" />
      <TechIcon icon={DiCss3} label="CSS3" />
      <TechIcon icon={DiJavascript1} label="JavaScript" />
      <TechIcon icon={DiReact} label="React" />

      {/* Databases */}
      <TechIcon icon={DiMysql} label="MySQL" />
      <TechIcon icon={SiPostgresql} label="PostgreSQL" />
      <TechIcon icon={SiFirebase} label="Firebase" />

      {/* ML / AI */}
      <TechIcon icon={SiScikitlearn} label="Scikit-learn" />
      <TechIcon icon={SiTensorflow} label="TensorFlow" />
      <TechIcon icon={SiPytorch} label="PyTorch" />
      <TechIcon icon={SiFastapi} label="FastAPI" />

      {/* OS */}
      <TechIcon icon={SiLinux} label="Linux" />
    </Row>
  );
}

export default Techstack;
