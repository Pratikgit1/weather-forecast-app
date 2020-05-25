import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Accordion from "./Accordion";

test("renders accordion component", () => {
  const { getByText, getByTestId } = render(
    <Accordion title={<div>Title</div>} content={<div>Content</div>} />
  );
  expect(getByTestId("test-accordion")).toBeInTheDocument();
  expect(getByText(/Title/)).toBeInTheDocument();

  fireEvent.click(screen.getByText("Title"));
  expect(getByText(/Content/)).toBeInTheDocument();

  fireEvent.click(screen.getByText("Title"));
  expect(screen.queryByText("Content")).toBeNull();
});
