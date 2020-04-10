import React from "react";
import { render } from "@testing-library/react";
import MainApp from "./MainApp";

test("showing main title", () => {
  const { getByText } = render(<MainApp />);

  getByText(/women's world cup/i);
});

setTimeout(() => {
  test("testing player cards", async () => {
    const { findByTestId } = render(<MainApp />);

    const displayingCards = await findByTestId(/test name/i);
    expect(displayingCards).toBeInTheDocument();
  });
}, 1000);
