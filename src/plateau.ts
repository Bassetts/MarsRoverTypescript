import { Point } from "./point";

export class Plateau {
  private upperCoordinates: Point;

  constructor(upperCoordinates: Point) {
    this.upperCoordinates = upperCoordinates;
  }

  public checkBounds = (point: Point): boolean =>
    point.x >= 0 &&
    point.x <= this.upperCoordinates.x &&
    point.y >= 0 &&
    point.y <= this.upperCoordinates.y;
}
