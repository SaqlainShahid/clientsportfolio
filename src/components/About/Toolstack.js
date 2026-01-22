import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faLinux } from "@fortawesome/free-brands-svg-icons";
import {
  faNetworkWired,
  faShieldAlt,
  faBug,
  faDatabase,
  faSearch,
  faLock,
  faTerminal,
  faFileCode,
  faUserSecret,
  faSitemap,
  faServer,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";


function Toolstack() {
  // List of tools with FontAwesome icon and label
  const tools = [
    { name: "Burp Suite", icon: faBug },
    { name: "Nikto", icon: faSearch },
    { name: "SqlMap", icon: faDatabase },
    { name: "nmap", icon: faNetworkWired },
    { name: "Metasploit", icon: faUserSecret },
    { name: "Wireshark", icon: faSitemap },
    { name: "Linux", icon: faLinux },
    { name: "wazuh", icon: faShieldAlt },
    { name: "security onion", icon: faShieldAlt },
    { name: "netsparker", icon: faLock },
    { name: "owasp zap", icon: faBug },
    { name: "mobexler", icon: faMobileAlt },
    { name: "mobsf", icon: faMobileAlt },
    { name: "jadx", icon: faFileCode },
    { name: "pfsense", icon: faServer },
    { name: "snort", icon: faShieldAlt },
    { name: "Python", icon: faPython },
    { name: "Bash", icon: faTerminal },
    { name: "PowerShell", icon: faTerminal },
  ];
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, idx) => (
        <Col xs={4} md={2} className="tech-icons" key={tool.name}>
          <FontAwesomeIcon icon={tool.icon} size="3x" />
          <div className="tech-icons-text">{tool.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
