import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  const projectsData = [
    {
      imgPath: "/Projects/imgs/phishing-detect.jpeg",
      isBlog: false,
      title: "PhishDetect – ML-Based URL Classifier",
      description:
        "Machine-learning classifier for phishing URL detection with feature engineering and model evaluation.",
      demoLink: "/Projects/phishdetect-1.jpeg",
    },
    {
      imgPath: "/Projects/imgs/security-onion.jpeg",
      isBlog: false,
      title: "Security Onion Deployment",
      description:
        "SOC tooling setup with Security Onion, sensor onboarding and rule tuning for alert triage and investigation.",
      demoLink: "/Projects/security-onion.jpeg",
    },
    {
      imgPath: "/Projects/imgs/wazuh.jpeg",
      isBlog: false,
      title: "Wazuh Server & Agent Deployment",
      description:
        "SIEM setup with Wazuh for endpoint visibility, rule tuning and dashboarding to elevate detection capability.",
      demoLink: "/Projects/Wazuh.pdf",
      reportLink: "/Projects/Wazuh.pdf",
    },
    {
      imgPath: "/Projects/imgs/fyp.jpeg",
      isBlog: false,
      title: "Intelligent Log Analysis (FYP)",
      description:
        "Final-year project: log analysis tooling for SOC workflows, enrichment and anomaly detection.",
      demoLink: "/Projects/ILA-report.pdf",
      reportLink: "/Projects/ILA-report.pdf",
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Selected cybersecurity projects and demos.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/Projects/imgs/phishing-detect.jpeg"
              isBlog={false}
              title="PhishDetect – ML-Based URL Classifier"
              description="Machine-learning classifier for phishing URL detection with feature engineering and model evaluation."
              demoLink="/Projects/phishdetect-1.jpeg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Vulnerable Login App (SQLi & XSS Demo)"
              description="Deliberately vulnerable Flask app for demonstrating SQL Injection and XSS attacks in a controlled lab."
              demoLink="/Projects/vulnapp-demo.mp4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="pfSense Firewall – DoS Defense"
              description="Firewall rule design and DoS mitigation demonstration using pfSense with IDS/IPS tuning and validation."
              demoLink="/Projects/pfsense-dos-demo.mp4"
              reportLink="/Projects/pfsense-dos-report.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/Projects/imgs/security-onion.jpeg"
              isBlog={false}
              title="Security Onion Deployment"
              description="SOC tooling setup with Security Onion, sensor onboarding and rule tuning for alert triage and investigation."
              demoLink="/Projects/security-onion.jpeg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/Projects/imgs/wazuh.jpeg"
              isBlog={false}
              title="Wazuh Server & Agent Deployment"
              description="SIEM setup with Wazuh for endpoint visibility, rule tuning and dashboarding to elevate detection capability."
              demoLink="/Projects/Wazuh.pdf"
              reportLink="/Projects/Wazuh.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/Projects/imgs/fyp.jpeg"
              isBlog={false}
              title="Intelligent Log Analysis (FYP)"
              description="Final-year project: log analysis tooling for SOC workflows, enrichment and anomaly detection."
              demoLink="/Projects/ILA-report.pdf"
              reportLink="/Projects/ILA-report.pdf"
            />
          </Col>
        </Row>

        <h2 className="project-heading" style={{ marginTop: 30 }}>
          <strong className="purple">Projects for Clients</strong>
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Phishing Domain Investigation</Card.Title>
                <Card.Text>
                  Conducted detailed investigation of suspicious phishing domains
                  targeting client infrastructure. Performed DNS and WHOIS lookups,
                  URL sandboxing, and threat intelligence correlation. Delivered
                  actionable insights with takedown recommendations to mitigate
                  risks.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>100 Endpoint VAPT and Remediation</Card.Title>
                <Card.Text>
                  Led vulnerability assessment and penetration testing (VAPT) across
                  100 enterprise endpoints. Identified critical security gaps
                  including misconfigurations, weak credentials, and outdated
                  software. Provided prioritized remediation steps, enabling the
                  client to strengthen their endpoint security posture.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>IP Address Investigation</Card.Title>
                <Card.Text>
                  Investigated potentially malicious IP addresses flagged in
                  security alerts. Used threat intelligence feeds, geolocation, and
                  reputation analysis to confirm risk levels. Delivered
                  comprehensive reports that supported the client's incident
                  response team in containing threats.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>OSINT (Open Source Intelligence)</Card.Title>
                <Card.Text>
                  Executed OSINT-based assessments to gather publicly available data
                  on client assets, employees, and potential attack vectors.
                  Identified sensitive exposures such as credential leaks and
                  infrastructure details. Helped client reduce digital footprint
                  and improve security awareness.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Web Penetration Testing</Card.Title>
                <Card.Text>
                  Performed in-depth penetration testing of client's web
                  applications to uncover vulnerabilities including SQLi, XSS, and
                  authentication flaws. Used industry-standard tools (Burp Suite,
                  OWASP ZAP) and manual testing techniques. Provided remediation
                  guidance aligned with OWASP Top 10 best practices.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
