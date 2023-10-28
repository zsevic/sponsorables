import React from "react";
import PropTypes from "prop-types";
import { Card, Col, Container, Row } from "react-bootstrap";

export function Results({ sponsorables }) {
  if (sponsorables.length === 0) return null;

  return (
    <Container className="mb-6 w-75">
      <Row>
        {sponsorables.map((sponsorable) => (
          <Col
            lg={3}
            md={4}
            sm={6}
            xs={12}
            key={sponsorable.username}
            className="mb-3 d-flex"
          >
            <Card className="p-2 w-100">
              <Card.Header as="h5">{sponsorable.username}</Card.Header>
              <Card.Body>
                <Card.Text className="text-muted text-break">
                  {sponsorable.bio}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Col xs={12} className="text-center text-wrap mb-2">
                    <Card.Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://github.com/sponsors/${sponsorable.username}`}
                    >
                      sponsors page
                    </Card.Link>
                  </Col>
                  <Col xs={12} className="text-center">
                    <Card.Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://github.com/${sponsorable.username}`}
                    >
                      profile
                    </Card.Link>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
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
    }),
  ),
};

Results.defaultProps = {
  sponsorables: [],
};
