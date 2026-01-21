import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBug,
  faShieldAlt,
  faMobileAlt,
  faNetworkWired,
  faUserSecret,
  faSitemap,
  faTerminal,
  faCloud,
  faSearch,
  faServer,
  faCodeBranch,
  faFileCode,
  faBookOpen,
  faChalkboardTeacher,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";

const services = [
  {
    title: "Web Application Penetration Testing",
    description:
      "Comprehensive security assessment of web apps to identify vulnerabilities like SQLi, XSS, CSRF, and logic flaws using manual testing and automated scanners.",
    tools: [faBug, faShieldAlt, faCloud],
    tags: ["Burp Suite", "OWASP ZAP", "SQLi", "XSS"],
  },
  {
    title: "Mobile Application Security (iOS/Android)",
    description:
      "In-depth testing of mobile apps for insecure data storage, weak encryption, code tampering risks, and insecure API communications.",
    tools: [faMobileAlt, faShieldAlt],
    tags: ["MobSF", "Frida", "Drozer", "APKTool"],
  },
  {
    title: "Network Penetration Testing",
    description:
      "Internal/external network assessments to discover open ports, vulnerable services, misconfigurations, and lateral movement paths.",
    tools: [faNetworkWired, faTerminal],
    tags: ["Linux", "Bash", "PowerShell"],
  },
  {
    title: "Endpoint Security Assessment & Remediation",
    description:
      "Audit endpoints for misconfigurations, missing patches and weak controls; provide remediation playbook and configuration hardening.",
    tools: [faShieldAlt, faSitemap],
    tags: ["Threat Intel", "nmap", "Wireshark"],
  },
  {
    title: "Active Directory & Windows Security",
    description:
      "Assess AD misconfigurations, privilege escalation paths, Kerberoasting, Golden Ticket attacks and provide hardening guidance.",
    tools: [faWindows, faUserSecret],
    tags: ["BloodHound", "Impacket", "Mimikatz"],
  },
  {
    title: "Cloud Security (AWS/Azure/GCP) & Container Security",
    description:
      "Review IAM policies, storage permissions, network security groups, container images, and orchestration configs for cloud environments.",
    tools: [faCloud, faShieldAlt],
    tags: ["AWS", "Azure", "Kubernetes", "Docker"],
  },
  {
    title: "100-Endpoint / Enterprise VAPT Projects",
    description:
      "Scalable assessment engagements across large fleets with prioritized findings and roll-out remediation support.",
    tools: [faTasks, faShieldAlt],
    tags: ["nmap", "Wazuh"],
  },
  {
    title: "Threat Hunting & Incident Response",
    description:
      "Triage and investigation of alerts, IOC enrichment, containment guidance and post-incident remediation.",
    tools: [faSearch, faShieldAlt, faSitemap],
    tags: ["Wazuh", "Security Onion", "Wireshark", "Snort"],
  },
  {
    title: "SIEM Deployment & Log Monitoring (SOC Support)",
    description:
      "SIEM onboarding, rules tuning, dashboard creation and alert playbooks to elevate detection capability.",
    tools: [faCodeBranch, faShieldAlt],
    tags: ["Wazuh", "ELK", "Splunk", "Security Onion"],
  },
  {
    title: "Phishing Domain & Threat Intelligence Investigations",
    description:
      "Domain/URL triage, WHOIS/DNS analysis, reputation checks and takedown recommendations to protect clients.",
    tools: [faSearch, faBookOpen],
    tags: ["OSINT", "Custom Scripts", "TI Feeds"],
  },
  {
    title: "OSINT & Digital Footprint Reduction",
    description:
      "Public-data discovery on assets, leaked credentials and exposure mapping with mitigation guidance.",
    tools: [faBookOpen, faSearch],
    tags: ["OSINT", "Automated Checks"],
  },
  {
    title: "IP & Network Address Investigations",
    description:
      "Reputation, geolocation, and historical activity analysis of suspicious IPs to support IR and blocking decisions.",
    tools: [faNetworkWired, faSearch],
    tags: ["Threat Intel", "nmap", "Wireshark"],
  },
  {
    title: "Web Application Code Review & Secure Coding Advice",
    description:
      "Manual review of critical code paths and guidance to remediate logic flaws, auth bugs, and insecure patterns.",
    tools: [faFileCode, faPython, faTerminal],
    tags: ["Python", "PowerShell", "Bash"],
  },
  {
    title: "Firewall & Perimeter Hardening (pfSense / IDS/IPS)",
    description:
      "Design and harden firewall rulesets, IDS/IPS tuning and segmentation recommendations for enterprise networks.",
    tools: [faShieldAlt, faServer],
    tags: ["pfSense", "Snort", "Security Onion"],
  },
  {
    title: "Security Awareness & Technical Training",
    description:
      "Practical workshops for devs/ops on secure coding, log triage, basic pentesting and SOC fundamentals.",
    tools: [faChalkboardTeacher, faBookOpen],
    tags: ["Custom Labs", "Demos", "Slides"],
  },
];

// Raw text content for display (if needed)
const rawServicesContent = `Professional Security Services Offered:

1. Web Application Penetration Testing
2. Mobile Application Security (iOS/Android)
3. Network Penetration Testing
4. Endpoint Security Assessment & Remediation
5. Active Directory & Windows Security
6. Cloud Security (AWS/Azure/GCP) & Container Security
7. 100-Endpoint / Enterprise VAPT Projects
8. Threat Hunting & Incident Response
9. SIEM Deployment & Log Monitoring (SOC Support)
10. Phishing Domain & Threat Intelligence Investigations
11. OSINT & Digital Footprint Reduction
12. IP & Network Address Investigations
13. Web Application Code Review & Secure Coding Advice
14. Firewall & Perimeter Hardening (pfSense / IDS/IPS)
15. Security Awareness & Technical Training`;

const Services = () => (
  <Container
    fluid
    className="services-section"
    style={{ background: "#181818", padding: "60px 0" }}
  >
    <h2
      className="text-center mb-5"
      style={{
        color: "#fff",
        fontWeight: 700,
        fontSize: "2.5rem",
      }}
    >
      Professional Security Services
    </h2>

    {/* Optional: Display raw content section */}
    <Row className="justify-content-center mb-5">
      <Col md={10} className="mb-4">
        <Card
          className="service-raw-content shadow-sm w-100"
          style={{
            borderRadius: "1.2rem",
            background: "#23272f",
            color: "#fff",
            padding: "2rem",
            fontSize: "1.08rem",
            whiteSpace: "pre-line",
          }}
        >
          {rawServicesContent}
        </Card>
      </Col>
    </Row>

    {/* Services cards */}
    <Row className="justify-content-center">
      {services.map((service, idx) => (
        <Col md={6} lg={4} className="mb-4 d-flex" key={idx}>
          <Card
            className="service-card shadow-lg w-100"
            style={{
              borderRadius: "1.5rem",
              background: "#23272f",
              color: "#fff",
              minHeight: "340px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Card.Body className="d-flex flex-column">
              <div className="d-flex align-items-center mb-3">
                {service.tools.map((icon, i) => (
                  <FontAwesomeIcon
                    icon={icon}
                    size="lg"
                    className="me-2"
                    key={i}
                    style={{ color: "#00bcd4" }}
                  />
                ))}
                <Card.Title
                  className="mb-0 ms-2"
                  style={{ fontWeight: 600, fontSize: "1.2rem" }}
                >
                  {service.title}
                </Card.Title>
              </div>
              <Card.Text
                style={{
                  fontSize: "1rem",
                  marginBottom: "1rem",
                  flex: 1,
                }}
              >
                {service.description}
              </Card.Text>
              <div className="service-tags mt-auto">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="badge bg-info text-dark me-2 mb-1"
                    style={{ fontSize: "0.85rem", fontWeight: 500 }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Services;