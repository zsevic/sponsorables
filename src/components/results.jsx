import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";

export function Results({ sponsorables }) {
  if (sponsorables.length === 0) return null;

  return (
    <Container className="mb-3 w-75">
      <Row>
        {sponsorables.map((sponsorable) => (
          <Col
            lg={3}
            md={4}
            sm={6}
            xs={12}
            key={sponsorable.username}
            className="p-2 m-1 border"
          >
            <h5>{sponsorable.username}</h5>
            <p className="mb-1 text-muted text-break">{sponsorable.bio}</p>
            <h6 className="mb-1">
              <a
                href={`https://github.com/sponsors/${sponsorable.username}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                sponsors page
              </a>
            </h6>
            <h6 className="mb-1">
              <a
                href={`https://github.com/${sponsorable.username}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                profile page
              </a>
            </h6>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

Results.propTypes = {
  sponsorables: PropTypes.arrayOf(
    PropTypes.shape({
      bio: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    })
  ),
};

Results.defaultProps = {
  sponsorables: [],
};
