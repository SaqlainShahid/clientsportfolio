import React, { useState } from "react";
import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import Particle from "../Particle";

function Certifications() {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const handleOpen = (src) => {
    setSelectedImage(src);
    setShow(true);
  };
  const handleClose = () => setShow(false);
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Certifications</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={3} className="project-card">
            <Card className="project-card-view">
              <Card.Img onClick={() => handleOpen("/certifications/web-dev.jpeg")} style={{ cursor: "pointer" }} variant="top" src="/certifications/web-dev.jpeg" alt="HTML, CSS, and JavaScript for Web Developers" />
              <Card.Body>
                <Card.Title>HTML, CSS, and JavaScript for Web Developers</Card.Title>
                <Card.Text>
                  Foundational web development: responsive layouts, modern CSS and DOM scripting.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="project-card">
            <Card className="project-card-view">
              <Card.Img onClick={() => handleOpen("/certifications/google-cyber.jpeg")} style={{ cursor: "pointer" }} variant="top" src="/certifications/google-cyber.jpeg" alt="Google Cybersecurity Professional Certificate" />
              <Card.Body>
                <Card.Title>Google Cybersecurity Professional Certificate</Card.Title>
                <Card.Text>
                  Hands-on security fundamentals: SOC workflows, SIEM, IR, and network/app security.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="project-card">
            <Card className="project-card-view">
              <Card.Img onClick={() => handleOpen("/certifications/CRTA.png")} style={{ cursor: "pointer" }} variant="top" src="/certifications/CRTA.png" alt="CRTA" />
              <Card.Body>
                <Card.Title>CRTA</Card.Title>
                <Card.Text>
                  Red team tactics: adversary emulation, privilege escalation, and lateral movement.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="project-card">
            <Card className="project-card-view">
              <Card.Img onClick={() => handleOpen("/certifications/cert.png")} style={{ cursor: "pointer" }} variant="top" src="/certifications/cert.png" alt="THM PT1" />
              <Card.Body>
                <Card.Title>THM PT1</Card.Title>
                <Card.Text>
                  TryHackMe pentesting track: recon, exploitation, and web application testing basics.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="project-card">
            <Card className="project-card-view">
              <Card.Img onClick={() => handleOpen("/certifications/new.jpeg")} style={{ cursor: "pointer" }} variant="top" src="/certifications/new.jpeg" alt="CRT-ID" />
              <Card.Body>
                <Card.Title>CRT-ID - Certified Red Team Infra Dev</Card.Title>
                <Card.Text>
                  Red team infrastructure development: deployment, automation, and operational security.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Modal show={show} onHide={handleClose} size="lg" centered>
          <Modal.Body>
            {selectedImage && (
              <img src={selectedImage} alt="Certification" className="img-fluid" />
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </Container>
  );
}

export default Certifications;
