import React from "react";
import { render } from "@testing-library/react";
import MainApp from "./MainApp";

test("showing main title", () => {
  const { getByText } = render(<MainApp />);

  getByText(/women's world cup/i);
});
