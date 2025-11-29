import React, { useState, useEffect } from "react";
import { Container, Row, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const pdf = "/resume/Ali-Nawaz-RESUME.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
          <h3 style={{ color: "white", textAlign: "center" }}>Resume Overview</h3>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 0.9 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            onClick={() => setShow(true)}
            style={{ maxWidth: "250px" }}
          >
            View Resume
          </Button>
        </Row>

        <Modal show={show} onHide={() => setShow(false)} size="lg" centered>
          <Modal.Body>
            <Document file={pdf} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.3 : 0.9} />
            </Document>
          </Modal.Body>
        </Modal>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "24px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
