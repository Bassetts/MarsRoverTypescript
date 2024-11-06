import { expect, test } from "@jest/globals";
import { Plateau } from "../src/plateau";

const cases: [boolean, number, number][] = [
  [true, 0, 0],
  [true, 0, 1],
  [true, 1, 0],
  [true, 5, 5],
  [true, 0, 5],
  [true, 5, 0],
  [false, -1, -1],
  [false, 0, -1],
  [false, -1, 0],
  [false, 6, 6],
  [false, 0, 6],
  [false, 6, 0],
];

test.each(cases)("should return %s when x=%s and y=%s", (expected, x, y) => {
  const plateau = new Plateau({ x: 5, y: 5 });
  const result = plateau.checkBounds({ x, y });
  expect(result).toBe(expected);
});
