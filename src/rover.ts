import { Direction } from "./direction";
import { Instruction } from "./instruction";
import { Plateau } from "./plateau";
import { Point } from "./point";

export class Rover {
  position: Point;
  direction: Direction;
  instructions: Instruction[];
  plateau: Plateau;

  constructor(
    position: Point,
    direction: Direction,
    instructions: Instruction[],
    plateau: Plateau,
  ) {
    this.position = position;
    this.direction = direction;
    this.instructions = instructions;
    this.plateau = plateau;
  }

  public execute(): void {
    for (let instruction of this.instructions) {
      switch (instruction) {
        case Instruction.L:
          this.turnLeft();
          break;
        case Instruction.R:
          this.turnRight();
          break;
        case Instruction.M:
          this.moveForward();
          break;
      }
    }
  }

  public toString = (): string =>
    `${this.position.x} ${this.position.y} ${this.direction}`;

  private turnLeft(): void {
    if (this.direction == Direction.N) {
      this.direction = Direction.W;
    } else if (this.direction == Direction.E) {
      this.direction = Direction.N;
    } else if (this.direction == Direction.S) {
      this.direction = Direction.E;
    } else if (this.direction == Direction.W) {
      this.direction = Direction.S;
    }
  }

  private turnRight(): void {
    if (this.direction == Direction.N) {
      this.direction = Direction.E;
    } else if (this.direction == Direction.E) {
      this.direction = Direction.S;
    } else if (this.direction == Direction.S) {
      this.direction = Direction.W;
    } else if (this.direction == Direction.W) {
      this.direction = Direction.N;
    }
  }

  private moveForward(): void {
    let newPosition = this.position;
    switch (this.direction) {
      case Direction.N:
        newPosition = { ...this.position, y: this.position.y + 1 };
        break;
      case Direction.E:
        newPosition = { ...this.position, x: this.position.x + 1 };
        break;
      case Direction.S:
        newPosition = { ...this.position, y: this.position.y - 1 };
        break;
      case Direction.W:
        newPosition = { ...this.position, x: this.position.x - 1 };
        break;
    }

    if (this.plateau.checkBounds(newPosition)) this.position = newPosition;
  }
}
