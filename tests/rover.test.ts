import { expect, test } from "@jest/globals";
import { Plateau } from "../src/plateau";
import { Direction } from "../src/direction";
import { Instruction } from "../src/instruction";
import { Rover } from "../src/rover";

const cases: [number, number, Direction, Instruction[], string][] = [
  [
    0,
    0,
    Direction.N,
    [Instruction.R, Instruction.M, Instruction.L, Instruction.M, Instruction.M],
    "1 2 N",
  ],
  [
    1,
    2,
    Direction.N,
    [
      Instruction.L,
      Instruction.M,
      Instruction.L,
      Instruction.M,
      Instruction.L,
      Instruction.M,
      Instruction.L,
      Instruction.M,
      Instruction.M,
    ],
    "1 3 N",
  ],
  [
    3,
    3,
    Direction.E,
    [
      Instruction.M,
      Instruction.M,
      Instruction.R,
      Instruction.M,
      Instruction.M,
      Instruction.R,
      Instruction.M,
      Instruction.R,
      Instruction.R,
      Instruction.M,
    ],
    "5 1 E",
  ],
];

const plateau = new Plateau({ x: 5, y: 5 });

test.each(cases)(
  "should return %s when x=%s and y=%s",
  (x, y, direction, instructions, expected) => {
    const point = { x, y };
    const rover = new Rover(point, direction, instructions, plateau);

    rover.execute();

    expect(rover.toString()).toBe(expected);
  },
);
