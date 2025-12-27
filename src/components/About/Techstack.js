import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
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

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons"><DiPython /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJava /></Col>
      <Col xs={4} md={2} className="tech-icons"><CgCPlusPlus /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiKotlin /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiPhp /></Col>

      {/* Web Technologies */}
      <Col xs={4} md={2} className="tech-icons"><DiHtml5 /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiCss3 /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiReact /></Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons"><DiMysql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostgresql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiFirebase /></Col>

      {/* ML / AI */}
      <Col xs={4} md={2} className="tech-icons"><SiScikitlearn /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTensorflow /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPytorch /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiFastapi /></Col>

      {/* OS */}
      <Col xs={4} md={2} className="tech-icons"><SiLinux /></Col>
    </Row>
  );
}

export default Techstack;
