import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiGithub,
  SiXampp,
  SiGooglecloud,
  SiLinux,
} from "react-icons/si";

function ToolIcon({ icon: Icon, label }) {
  return (
    <Col xs={4} md={2} className="tech-icon-wrapper">
      <div className="tech-icons">
        <Icon />
      </div>
      <span className="tech-icon-label">{label}</span>
    </Col>
  );
}

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <ToolIcon icon={SiVisualstudiocode} label="VS Code" />
      <ToolIcon icon={SiPostman} label="Postman" />
      <ToolIcon icon={SiGit} label="Git" />
      <ToolIcon icon={SiGithub} label="GitHub" />
      <ToolIcon icon={SiXampp} label="XAMPP" />
      <ToolIcon icon={SiGooglecloud} label="GCP" />
      <ToolIcon icon={SiLinux} label="Linux" />

    </Row>
  );
}

export default Toolstack;
