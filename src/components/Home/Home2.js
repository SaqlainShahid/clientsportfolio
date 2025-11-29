import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Cybersecurity practitioner focused on practical defense and
              offense. I design and execute VAPT engagements, investigate
              phishing domains and suspicious IPs, and deploy SIEM/log
              monitoring for SOCs.
              <br />
              <br />
              I work with tools like
              <i>
                <b className="purple"> Burp Suite, nmap, Metasploit, Wireshark,</b>
              </i>
              {" "}and platforms like
              <i>
                <b className="purple"> Wazuh, Security Onion, pfSense, Snort.</b>
              </i>
              <br />
              <br />
              Projects include an ML-based phishing URL classifier, a
              vulnerable web app for SQLi/XSS demos, and enterprise-scale VAPT
              engagements.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
