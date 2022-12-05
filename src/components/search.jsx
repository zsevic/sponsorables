import React, { useState } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";

export default function SearchBar() {
  const [sponsorables, setSponsorables] = useState([]);
  const [location, setLocation] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [showResponseText, setShowResponseText] = useState(false);
  const locationErrorMessage = "Location is required";
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setErrorMessage("");
      setShowResponseText(false);
      if (location.length === 0) {
        setErrorMessage(locationErrorMessage);
        setShowResponseText(true);
        return;
      }
      const response = await fetch(
        `/api/sponsorables?location=${location}`
      ).then((res) => res.json());
      setSponsorables(response.data);
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to fetch the results");
      setShowResponseText(true);
    }
  };

  const handleLocationChange = (event) => {
    const locationValue = event.target.value;
    if (locationValue.length === 0) {
      setLocation(locationValue);
      setErrorMessage(locationErrorMessage);
      setShowResponseText(true);
      return;
    }
    setShowResponseText(false);
    setErrorMessage("");
    setLocation(locationValue);
  };

  return (
    <>
      <Form className="mb-3 mt-4 p-2 w-75 mx-auto" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            placeholder="Enter the location"
            onChange={handleLocationChange}
            className="rounded-pill"
          />
        </Form.Group>

        <div className="d-flex">
          <Button variant="primary" type="submit" className="mx-auto">
            Search
          </Button>
        </div>
      </Form>

      <ListGroup>
        {sponsorables.length > 0 ? (
          sponsorables.map((sponsorable) => (
            <ListGroup.Item
              key={sponsorable.username}
              className="mx-auto w-75 my-2 border"
            >
              <h5 className="mb-1">
                <a href={sponsorable.url}>{sponsorable.username}</a>
              </h5>
              <p className="mb-1 text-muted">{sponsorable.bio}</p>
            </ListGroup.Item>
          ))
        ) : (
          <p className="mx-auto">
            {showResponseText ? errorMessage || "There are no results" : ""}
          </p>
        )}
      </ListGroup>
    </>
  );
}
