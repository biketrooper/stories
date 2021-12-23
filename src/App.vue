<template>
  <Stories />
</template>

<script>
import Stories from "./components/Stories.vue";
export default {
  components: {
    Stories,
  },
};
</script>

<style>
body {
  min-height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
  place-items: center;
  margin: 0;
  background: hsl(200, 15%, 93%);
}
</style>
