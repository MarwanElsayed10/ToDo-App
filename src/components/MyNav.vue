<template>
  <div class="my-nav">
    <div class="logo">
      <a href="/#">
        <label class="title">ToDo App</label>
        <img src="@/assets/icon.png" alt="ICON" class="icon" />
      </a>
    </div>
    <div class="links">
      <ul>
        <li v-for="route in routes" :key="route.name">
          <router-link :to="{ name: route.name }">
            {{ route.meta.title }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const routes = router.options.routes;
</script>

<style scoped>
.my-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(45, 111, 233);
  position: sticky;
  top: 0;
  overflow: hidden;
  z-index: 100;
}
ul {
  display: flex;
  justify-content: center;
  gap: 30px;
  list-style: none;
  font-size: 20px;
  padding: 20px;

  a {
    border: 1px solid white;
    border-radius: 15px;
    padding: 7px;
    color: white;
    text-decoration: none;
    &.router-link-active {
      font-weight: bolder;
      font-size: larger;
      color: #152eb1;
      text-decoration: underline;
    }
  }
  a:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px white;
  }
}
.title {
  color: white;
  display: inline-block;
  font-size: larger;
  margin-right: 10px;
  max-width: min-content;
  cursor: pointer;
}
.logo {
  width: 15%;
}
img {
  width: 25%;
}
</style>
