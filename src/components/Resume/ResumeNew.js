import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  return (
    <Container fluid className="resume-section">
      <Particle />

      {/* Download Button */}
      <Row className="justify-content-center mb-4">
        <Button
          variant="primary"
          href="/Yashasvi_Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>

      {/* PDF Preview */}
      <Row className="justify-content-center">
        <Col md={8}>
          <div
            style={{
              height: "90vh",
              overflowY: "auto",
              borderRadius: "8px",
              boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            }}
          >
            <iframe
              src="/Yashasvi_Resume.pdf"
              title="Resume PDF"
              width="100%"
              height="100%"
              style={{
                border: "none",
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ResumeNew;
