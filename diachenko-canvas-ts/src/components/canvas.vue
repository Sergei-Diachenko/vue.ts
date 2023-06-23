<template>
  <div class="container">
    <div class="canvas" :style="{ width: canvasWidth, height: canvasHeight }">
      <canvas
        ref="canvasRef"
        @mousedown="startDragging"
        @mouseup="stopDragging"
        @mousemove="handleMouseMove"
        :style="{ width: '100%', height: '100%' }"
      ></canvas>
    </div>
    <div class="controls">
      <h2>Управление</h2>
      <div class="control-panel">
        <div class="control-panel__props">
          <label for="radius">Радиус окружности:</label>
          <input
            type="number"
            id="radius"
            v-model.number="radius"
            @input="updateCanvas"
          />
        </div>

        <div class="control-panel__props">
          <label for="side">Размер стороны квадрата:</label>
          <input
            type="number"
            id="side"
            v-model.number="side"
            @input="updateCanvas"
          />
        </div>

        <div class="control-panel__props">
          <label for="squareX">Координата X квадрата:</label>
          <input
            type="number"
            id="squareX"
            v-model.number="squareX"
            @input="updateCanvas"
          />
        </div>

        <div class="control-panel__props">
          <label for="squareY">Координата Y квадрата:</label>
          <input
            type="number"
            id="squareY"
            v-model.number="squareY"
            @input="updateCanvas"
          />
        </div>
        <button class="control-panel__btn" @click="resetValues">Сброс</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, watchEffect, Ref } from "vue";
import { CanvasComponentMethods, CanvasComponentComputed } from "./types";

export default {
  name: "CanvasComponent",

  setup(): CanvasComponentMethods & CanvasComponentComputed {
    const canvasRef: Ref<HTMLCanvasElement | null> = ref(null);
    const context: Ref<CanvasRenderingContext2D | null> = ref(null);
    const dragging: Ref<boolean> = ref(false);
    const canvasWidth: Ref<string> = ref("");
    const canvasHeight: Ref<string> = ref("");
    const radius: Ref<number> = ref(100);
    const side: Ref<number> = ref(50);
    const squareX: Ref<number> = ref(0);
    const squareY: Ref<number> = ref(0);
    const offsetX: Ref<number> = ref(0);
    const offsetY: Ref<number> = ref(0);

    const startDragging: CanvasComponentMethods["startDragging"] = (event) => {
      dragging.value = true;
      offsetX.value = event.offsetX - squareX.value;
      offsetY.value = event.offsetY - squareY.value;
    };

    const stopDragging: CanvasComponentMethods["stopDragging"] = () => {
      dragging.value = false;
    };

    const handleMouseMove: CanvasComponentMethods["handleMouseMove"] = (
      event
    ) => {
      if (dragging.value) {
        const centerX = canvasRef.value!.width / 2;
        const centerY = canvasRef.value!.height / 2;
        const radiusValue = Math.min(centerX, centerY, radius.value);

        const mouseX = event.offsetX;
        const mouseY = event.offsetY;

        const distanceToCenter = Math.sqrt(
          Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2)
        );

        if (distanceToCenter <= radiusValue - side.value / 2) {
          squareX.value = Math.ceil(mouseX - offsetX.value);
          squareY.value = Math.ceil(mouseY - offsetY.value);
        } else {
          const angle = Math.atan2(mouseY - centerY, mouseX - centerX);
          const newX =
            centerX + Math.cos(angle) * (radiusValue - side.value / 2);
          const newY =
            centerY + Math.sin(angle) * (radiusValue - side.value / 2);

          squareX.value = Math.ceil(newX - offsetX.value);
          squareY.value = Math.ceil(newY - offsetY.value);
        }
      }
    };

    const drawCircle: CanvasComponentMethods["drawCircle"] = () => {
      const centerX = canvasRef.value!.width / 2;
      const centerY = canvasRef.value!.height / 2;
      const radiusValue = Math.min(centerX, centerY, radius.value);

      context.value!.beginPath();
      context.value!.arc(centerX, centerY, radiusValue - 1, 0, 2 * Math.PI);
      context.value!.stroke();
    };

    const drawSquare: CanvasComponentMethods["drawSquare"] = () => {
      const halfSide = side.value / 2;

      const centerX = canvasRef.value!.width / 2;
      const centerY = canvasRef.value!.height / 2;

      context.value!.beginPath();
      context.value!.rect(
        Math.ceil(centerX - halfSide + squareX.value),
        Math.ceil(centerY - halfSide + squareY.value),
        side.value,
        side.value
      );
      context.value!.stroke();
    };

    const drawAxes: CanvasComponentMethods["drawAxes"] = () => {
      const centerX = canvasRef.value!.width / 2;
      const centerY = canvasRef.value!.height / 2;

      context.value!.beginPath();
      context.value!.moveTo(0, centerY);
      context.value!.lineTo(canvasRef.value!.width, centerY);
      context.value!.moveTo(centerX, 0);
      context.value!.lineTo(centerX, canvasRef.value!.height);
      context.value!.stroke();
    };

    const clearCanvas: CanvasComponentMethods["clearCanvas"] = () => {
      if (context.value) {
        context.value.clearRect(
          0,
          0,
          canvasRef.value!.width,
          canvasRef.value!.height
        );
      }
    };

    const updateCanvas: CanvasComponentMethods["updateCanvas"] = () => {
      const canvas = canvasRef.value!;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      context.value = canvas.getContext("2d")!;
      clearCanvas();
      drawAxes();
      drawCircle();
      drawSquare();
    };

    const resetValues: CanvasComponentMethods["resetValues"] = () => {
      radius.value = 100;
      side.value = 50;
      squareX.value = 0;
      squareY.value = 0;
      offsetX.value = 0;
      offsetY.value = 0;
      updateCanvas();
    };

    onMounted(() => {
      const canvas = canvasRef.value!;
      updateCanvas();
      watchEffect(() => {
        updateCanvas();
      });
    });

    return {
      canvasRef,
      canvasWidth,
      canvasHeight,
      radius,
      side,
      squareX,
      squareY,
      startDragging,
      stopDragging,
      handleMouseMove,
      drawCircle,
      drawSquare,
      drawAxes,
      clearCanvas,
      updateCanvas,
      resetValues,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  height: 80%;
  padding: 10px 0 0;
}

.canvas {
  position: relative;
  flex: 1;
}

.canvas canvas {
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid #000;
  cursor: move;
}

.controls {
  width: 200px;
  padding: 20px;
}

.control-panel {
  margin: 20px 0;
}

.control-panel__props {
  margin: 10px 0;
}

.control-panel__btn {
  padding: 10px;
  width: 100%;
  margin-top: 20px;
  color: white;
  background-color: rgb(61, 80, 255);
  border-radius: 6px;
  font-size: 20px;
  transition: 0.4s ease;
}

.control-panel__btn:hover {
  background-color: blue;
  box-shadow: 0 0 10px 1px rgba(0, 81, 255, 0.4);
  transition: 0.4s ease;
}

.control-panel__btn:active {
  background-color: aqua;
  box-shadow: 0 0 10px 1px aqua;
  transition: 0.2s ease;
}

input {
  box-sizing: border-box;
  width: 200px;
  padding: 6px 10px;
  border: 2px solid silver;
  border-radius: 6px;
  font-size: 18px;
}
</style>
