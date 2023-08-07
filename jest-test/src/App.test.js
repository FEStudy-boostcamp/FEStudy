import { render, screen } from "@testing-library/react";
import App from "./App";

import "./index.css";

test("renders jest test page", () => {
  render(<App />);
  const linkElement = screen.getByText(/jest test/i);
  expect(linkElement).toBeInTheDocument();
});

test("snapshot App", () => {
  const view = render(<App />);
  expect(view).toMatchSnapshot();
});

test("Red Background must be Red", () => {
  const view = render(<App />);

  const element = screen.getByText("Red");
  const styles = getComputedStyle(element);

  expect(styles.backgroundColor).toBe("red");
  expect(view).toMatchSnapshot();
});
