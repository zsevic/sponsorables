import React from 'react';
import { Form } from 'react-bootstrap';

export default function SearchBar() {
  return (
    <Form className="mb-3 mt-4 p-2 w-75 mx-auto">
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="email" placeholder="Enter the location" className="rounded-pill" />
    </Form.Group>
    </Form>
  );
}
