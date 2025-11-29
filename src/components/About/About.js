import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <>
      {" "}
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />

          <h1 className="project-heading">
            Security <strong className="purple">Services</strong>
          </h1>
          <ul className="about-activity" style={{ color: "white" }}>
            <li>Web Application Penetration Testing</li>
            <li>Network & Infrastructure Assessment (VAPT)</li>
            <li>Mobile Application Security Testing</li>
            <li>API & Backend Security Testing</li>
            <li>Cloud & Configuration Reviews</li>
            <li>Endpoint Security Assessment & Remediation</li>
            <li>Threat Hunting & Incident Response</li>
            <li>SIEM Deployment & Log Monitoring (SOC Support)</li>
            <li>Phishing Domain & Threat Intelligence Investigations</li>
            <li>OSINT & Digital Footprint Reduction</li>
            <li>IP & Network Address Investigations</li>
            <li>Web Application Code Review & Secure Coding Advice</li>
            <li>Firewall & Perimeter Hardening (pfSense / IDS/IPS)</li>
            <li>Security Awareness & Technical Training</li>
          </ul>

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
