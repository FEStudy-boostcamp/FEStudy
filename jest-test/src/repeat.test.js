// repeat.test.js

import repeat from "./repeat";

test("repeats words three times", () => {
  expect(repeat("Test", 3)).toMatchSnapshot();
});
