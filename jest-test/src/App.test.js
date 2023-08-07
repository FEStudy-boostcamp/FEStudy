import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders jest test page", () => {
  render(<App />);
  const linkElement = screen.getByText(/jest test/i);
  expect(linkElement).toBeInTheDocument();
});
