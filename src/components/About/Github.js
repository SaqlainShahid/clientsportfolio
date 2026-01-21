import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Container } from "react-bootstrap";

function Github() {
  return (
    <Container fluid style={{ overflowX: "hidden" }}>
      <Row
        style={{
          justifyContent: "center",
          paddingBottom: "10px",
          color: "white",
          overflowX: "auto",
        }}
      >
        <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
          Days I <strong className="purple">Code</strong>
        </h1>
        <div
          style={{
            width: "100%",
            overflowX: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <GitHubCalendar
            username="alimalik13"
            blockSize={30}
            blockMargin={10}
            color="#c084f5"
            fontSize={20}
          />
        </div>
      </Row>
    </Container>
  );
}

export default Github;
