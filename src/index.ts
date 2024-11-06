import { Direction } from "./direction";
import { Instruction } from "./instruction";
import { Plateau } from "./plateau";
import { Rover } from "./rover";

const input: string = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`;

let lines = input.split("\n");

const upperCoordinates = lines[0].split(" ");
const upperXCoordinate = parseInt(upperCoordinates[0], 10);
const upperYCoordinate = parseInt(upperCoordinates[1], 10);

const plateau = new Plateau({ x: upperXCoordinate, y: upperYCoordinate });

for (let i = 1; i < lines.length; i += 2) {
  const initialValues = lines[i].split(" ");
  const initialXCoordinate = parseInt(initialValues[0], 10);
  const initialYCoordinate = parseInt(initialValues[1], 10);
  const initialDirection = initialValues[2][0] as Direction;

  const instructions = [...lines[i + 1]].map((x) => x as Instruction);
  const initialPoint = { x: initialXCoordinate, y: initialYCoordinate };

  const rover = new Rover(
    initialPoint,
    initialDirection,
    instructions,
    plateau,
  );
  rover.execute();
  console.log(rover.toString());
}
