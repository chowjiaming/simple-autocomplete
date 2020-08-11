import React, { useState } from "react";
import {
  Spinner,
  Form,
  FormGroup,
  Input,
  Label,
  ListGroupItem,
  ListGroup,
} from "reactstrap";
import { useFetch } from "../utils/useFetch";

export const AutoComplete = () => {
  // Set state
  const [search, setSearch] = useState("");
  const { payload, loading } = useFetch(`/autocomplete/${search}`);

  // Set elements
  let resultsDisplayed;
  let spinner = <Spinner color="primary" />;

  // Render results if loaded
  if (payload) {
    // Return message if search value is not empty but the results are
    if (payload.results.length === 0 && search) {
      resultsDisplayed = <ListGroupItem>Sorry no results found</ListGroupItem>;
    }
    // Highlight if only one result returned
    else if (payload.results.length <= 1 && payload.results.length > 0) {
      resultsDisplayed = (
        <ListGroupItem color="success">{payload.results[0]}</ListGroupItem>
      );
    }
    // Display results
    else {
      resultsDisplayed = (
        <ListGroup>
          {payload.results.map((suggestions, i) => {
            return (
              <ListGroupItem
                key={i}
                color="secondary"
                onClick={(e) => setSearch(e.target.innerHTML)}
              >
                {suggestions}
              </ListGroupItem>
            );
          })}
        </ListGroup>
      );
    }
  }

  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="autocomplete">Test Here:</Label>
          <Input
            type="text"
            name="autocomplete"
            id="autocomplete"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Start typing for Autocomplete..."
          />
        </FormGroup>
      </Form>
      {/* Render placeholder while loading */}
      <div>{loading ? spinner : resultsDisplayed}</div>
    </div>
  );
};
