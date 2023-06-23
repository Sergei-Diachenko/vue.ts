<template>
  <CanvasComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CanvasComponent from "./components/canvas.vue";

export default defineComponent({
  name: "App",
  components: {
    CanvasComponent,
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body,
html {
  height: 100%;
  font-size: 20px;
}
#app {
  height: 100%;
}
</style>
