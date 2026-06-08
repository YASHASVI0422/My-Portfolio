import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <Container
      fluid
      className="resume-section"
      style={{ position: "relative", zIndex: 1 }}
    >
      <Particle />

      {/* Download Button */}
      <Row
        className="justify-content-center mb-4"
        style={{ position: "relative", zIndex: 2 }}
      >
        <Button
          className="resume-download-btn"
          href="/Yashasvi_Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineDownload style={{ fontSize: "1.2em" }} />
          &nbsp;&nbsp;Download CV
        </Button>
      </Row>

      {/* PDF Preview */}
      <Row
        className="justify-content-center"
        style={{ position: "relative", zIndex: 2 }}
      >
        <Col md={8}>
          <div className="resume-glass-wrapper">
            <div
              style={{
                height: "85vh",
                overflowY: "auto",
                borderRadius: "12px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >

              {isMobile ? (
                <div className="mobile-resume-card">
                  <h3>📄 My Resume</h3>
                  <p>Tap below to view or download my resume</p>
                  <Button
                    className="resume-download-btn"
                    href="/Yashasvi_Resume.pdf"
                    target="_blank"
                  >
                    <AiOutlineDownload style={{ fontSize: "1.2em" }} />
                    &nbsp;&nbsp;Open Resume
                  </Button>
                </div>
              ) : (
                <iframe
                  src="/Yashasvi_Resume.pdf"
                  title="Resume PDF"
                  width="100%"
                  height="100%"
                  style={{
                    border: "none",
                    borderRadius: "12px",
                  }}
                />
              )}

            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ResumeNew;