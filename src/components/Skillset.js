import React from "react";
import "../style.css";

const tools = [
  { name: "Burp Suite", icon: "🛡️" },
  { name: "Nikto", icon: "🔍" },
  { name: "SqlMap", icon: "🗄️" },
  { name: "nmap", icon: "🌐" },
  { name: "Metasploit", icon: "💣" },
  { name: "Wireshark", icon: "🦈" },
  { name: "Linux", icon: "🐧" },
  { name: "wazuh", icon: "🛡️" },
  { name: "security onion", icon: "🧅" },
  { name: "netsparker", icon: "🌐" },
  { name: "owasp zap", icon: "⚡" },
  { name: "mobexler", icon: "📱" },
  { name: "mobsf", icon: "📱" },
  { name: "jadx", icon: "🔬" },
  { name: "pfsense", icon: "🛡️" },
  { name: "snort", icon: "🐗" },
  { name: "Python", icon: "🐍" },
  { name: "Bash", icon: "💻" },
  { name: "PowerShell", icon: "⚡" },
];

const services = [
  {
    title: "Web Application Penetration Testing",
    desc: "Comprehensive security testing for web apps to find OWASP Top 10 issues and deliver prioritized remediation.",
    tools: "Burp Suite, OWASP ZAP, Netsparker, sqlmap"
  },
  {
    title: "Network & Infrastructure Assessment (VAPT)",
    desc: "Full vulnerability assessment and penetration testing of network hosts, services, and firewalls with risk ratings and remediation guidance.",
    tools: "nmap, Metasploit, Nikto, pfSense, Snort"
  },
  {
    title: "Mobile Application Security Testing",
    desc: "Static and dynamic analysis of Android/iOS apps to identify insecure storage, code flaws and dangerous permissions.",
    tools: "Mobexler, MobSF, JADX"
  },
  {
    title: "API & Backend Security Testing",
    desc: "Targeted testing of REST/GraphQL APIs for authentication, authorization, and injection vulnerabilities.",
    tools: "Burp Suite, Postman, custom Python scripts"
  },
  {
    title: "Cloud & Configuration Reviews",
    desc: "Evaluation of cloud configurations and host hardening recommendations to reduce attack surface and misconfigurations.",
    tools: "Linux, Bash, PowerShell, policy checks"
  },
  {
    title: "Endpoint Security Assessment & Remediation",
    desc: "Audit endpoints for misconfigurations, missing patches and weak controls; provide remediation playbook and configuration hardening.",
    tools: "Wazuh, security onion, EDR guidance"
  },
  {
    title: "100-Endpoint / Enterprise VAPT Projects",
    desc: "Scalable assessment engagements across large fleets with prioritized findings and roll-out remediation support.",
    tools: "nmap, automated scanners, Wazuh for detection validation"
  },
  {
    title: "Threat Hunting & Incident Response",
    desc: "Triage and investigation of alerts, IOC enrichment, containment guidance and post-incident remediation.",
    tools: "Wazuh, Security Onion, Wireshark, Snort"
  },
  {
    title: "SIEM Deployment & Log Monitoring (SOC Support)",
    desc: "SIEM onboarding, rules tuning, dashboard creation and alert playbooks to elevate detection capability.",
    tools: "Wazuh, ELK/Splunk concepts, Security Onion"
  },
  {
    title: "Phishing Domain & Threat Intelligence Investigations",
    desc: "Domain/URL triage, WHOIS/DNS analysis, reputation checks and takedown recommendations to protect clients.",
    tools: "OSINT tooling, custom scripts, TI feeds"
  },
  {
    title: "OSINT & Digital Footprint Reduction",
    desc: "Public-data discovery on assets, leaked credentials and exposure mapping with mitigation guidance.",
    tools: "OSINT methodologies, automated checks"
  },
  {
    title: "IP & Network Address Investigations",
    desc: "Reputation, geolocation, and historical activity analysis of suspicious IPs to support IR and blocking decisions.",
    tools: "Threat intel feeds, nmap, Wireshark"
  },
  {
    title: "Web Application Code Review & Secure Coding Advice",
    desc: "Manual review of critical code paths and guidance to remediate logic flaws, auth bugs, and insecure patterns.",
    tools: "Python/PowerShell/Bash knowledge, manual review"
  },
  {
    title: "Firewall & Perimeter Hardening (pfSense / IDS/IPS)",
    desc: "Design and harden firewall rulesets, IDS/IPS tuning and segmentation recommendations for enterprise networks.",
    tools: "pfSense, Snort, Security Onion"
  },
  {
    title: "Security Awareness & Technical Training",
    desc: "Practical workshops for devs/ops on secure coding, log triage, basic pentesting and SOC fundamentals.",
    tools: "Custom labs, demos, slides"
  },
];

function Skillset() {
  return (
    <div className="skillset-container">
      <h2 className="skillset-title">Professional Cyber Security Skillset</h2>
      <section className="tools-section">
        <h3>Tools & Technologies</h3>
        <div className="tools-list">
          {tools.map((tool) => (
            <div className="tool-card" key={tool.name}>
              <span className="tool-icon">{tool.icon}</span>
              <span className="tool-name">{tool.name}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="services-section">
        <h3>Services Offered</h3>
        <div className="services-list">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
              <span className="service-tools">Tools: {service.tools}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skillset;
