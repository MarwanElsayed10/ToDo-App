<template>
  <my-nav></my-nav>
  <router-view />
</template>

<script setup>
import MyNav from "./components/MyNav.vue";
</script>

<style lang="scss">
* {
  margin: 0;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  --main-color: rgb(45, 111, 233);
  --secondary-color: #c1c8dd;
}
</style>
