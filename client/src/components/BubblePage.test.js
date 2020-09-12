import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Fetches data and renders the bubbles", () => {
  // Finish this test
  // If any errors in components bofore h1 bubbles test will fail
  const { getByText } = render(<BubblePage />);
  getByText("Bubbles");
});
