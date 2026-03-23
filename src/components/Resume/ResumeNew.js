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
      style={{ position: "relative", zIndex: 1 }} // ✅ unchanged
    >
      <Particle />

      {/* Download Button */}
      <Row
        className="justify-content-center mb-4"
        style={{ position: "relative", zIndex: 2 }} // ✅ unchanged
      >
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
      <Row
        className="justify-content-center"
        style={{ position: "relative", zIndex: 2 }} // ✅ unchanged
      >
        <Col md={8}>
          <div
            style={{
              height: "90vh",
              overflowY: "auto",
              borderRadius: "8px",
              boxShadow: "0 0 10px rgba(0,0,0,0.3)",
              position: "relative",
              zIndex: 2, // ✅ unchanged
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >

            {isMobile ? (
              // 🔥 Mobile Fix (replaces iframe only on phone)
              <Button
                variant="primary"
                href="/Yashasvi_Resume.pdf"
                target="_blank"
              >
                Open Resume
              </Button>
            ) : (
              // 💻 Desktop (same as before)
              <iframe
                src="/Yashasvi_Resume.pdf"
                title="Resume PDF"
                width="100%"
                height="100%"
                style={{
                  border: "none",
                }}
              />
            )}

          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ResumeNew;