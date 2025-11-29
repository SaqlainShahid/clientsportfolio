import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Ali Nawaz</span>.
            <br />
            I work across <span className="purple">Cybersecurity</span> with a focus on
            <span className="purple"> Penetration Testing</span>, <span className="purple">OSINT</span>, and
            <span className="purple"> SOC tooling</span>.
            <br />
            I’ve delivered client engagements like phishing domain investigations,
            endpoint VAPT at scale, and incident-driven IP analysis.
            <br />
            <br />
            Outside of assessments, I build labs and demos to explain
            vulnerabilities and defense, and I enjoy researching threat patterns.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Penetration Testing & Lab Building
            </li>
            <li className="about-activity">
              <ImPointRight /> OSINT and Threat Intelligence Research
            </li>
            <li className="about-activity">
              <ImPointRight /> SOC, SIEM and Log Analysis
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ali</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
