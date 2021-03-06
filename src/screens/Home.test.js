import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

test("renders home component", () => {
  const { getByText, getByTestId } = render(<Home />);
  const heading = getByText(/weather forecast/i);
  expect(heading).toBeInTheDocument();
  expect(getByTestId("test-search")).toBeInTheDocument();
});
