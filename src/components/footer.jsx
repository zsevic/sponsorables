import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const footerStyle = {
  position: "absolute",
  bottom: 0,
  width: "100%",
  backgroundColor: "#6C6C6C",
  color: "white",
  paddingBottom: "8px",
};

export function Footer() {
  return (
    <Container fluid style={footerStyle}>
      <Row className="justify-content-center">
        <Col xs={12} className="text-center">
          Made by{" "}
          <a
            href="https://github.com/zsevic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            zsevic 👨‍💻
          </a>
        </Col>
        <Col xs={12} className="text-center">
          View Codebase on {" "}<a
            href="https://github.com/zsevic/sponsorables"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            GitHub 📦
          </a>
        </Col>
      </Row>
    </Container>
  );
}
