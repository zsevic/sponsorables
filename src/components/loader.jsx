import React from "react";
import Spinner from "react-bootstrap/Spinner";

export function Loader() {
  return (
    <div className="d-flex justify-content-center">
      <Spinner animation="border" variant="primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
