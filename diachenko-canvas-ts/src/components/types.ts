/* eslint-disable prettier/prettier */
import { Ref } from "vue";

export interface SquareSize {
  width: number;
  height: number;
}

export interface CanvasComponentMethods {
  startDragging: (event: MouseEvent) => void;
  stopDragging: () => void;
  handleMouseMove: (event: MouseEvent) => void;
  drawCircle: () => void;
  drawSquare: () => void;
  drawAxes: () => void;
  clearCanvas: () => void;
  updateCanvas: () => void;
  resetValues: () => void;
}

export interface CanvasComponentComputed {
  canvasRef: Ref<HTMLCanvasElement | null>;
  canvasWidth: Ref<string>;
  canvasHeight: Ref<string>;
  radius: Ref<number>;
  side: Ref<number>;
  squareX: Ref<number>;
  squareY: Ref<number>;
}

export interface CanvasComponentSetup {
  (): CanvasComponentMethods & CanvasComponentComputed;
}
