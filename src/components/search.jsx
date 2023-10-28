import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Loader } from "./loader";
import { Results } from "./results";
import { trackEvent } from "utils/analytics";

export function SearchBar() {
  const [sponsorables, setSponsorables] = useState([]);
  const [location, setLocation] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [showResponseText, setShowResponseText] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true);
      setSponsorables([]);
      const response = await fetch(
        `/api/sponsorables?location=${location}`,
      ).then((res) => res.json());
      setErrorMessage("");
      const { data: responseData } = response;
      setSponsorables(responseData);
      if (responseData.length === 0) {
        setShowResponseText(true);
      }
      setIsLoading(false);
      trackEvent("search-location", location);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
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
        <Form.Group className="mb-3">
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

      {isLoading && <Loader />}
      {!isLoading && (
        <p className="text-center">
          {showResponseText ? errorMessage || "There are no results" : ""}
        </p>
      )}
      {!isLoading && <Results sponsorables={sponsorables} />}
    </>
  );
}
