<template>
  <div class="home">
    <form action="" @submit.prevent="addTodo" style="margin-top: 10%">
      <input
        type="text"
        v-model="todoObject.text"
        placeholder="Enter a job to-do"
        required
        alt="Fill here with your future work"
      />
      <br />
      <label for="from">From:</label>
      <input
        type="date"
        id="from"
        v-model="todoObject.from"
        placeholder="From"
        required
        alt="Fill here with Starting date"
      />
      <label for="to">To:</label>
      <input
        type="date"
        id="to"
        v-model="todoObject.to"
        placeholder="to"
        required
        alt="Fill here with Ending date"
      />
      <br />
      <input
        type="submit"
        value="Add"
        alt="click here to add it to your list"
      />
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import localStorageFunc from "@/mixins/localStorage";

const { todoArr, setToLocalStorage } = localStorageFunc();
const todoObject = ref({
  createdAt: "",
  from: "",
  to: "",
  text: "",
  id: "",
  isCompleted: false,
});

const addTodo = () => {
  todoObject.value.createdAt = new Date();
  todoObject.value.id = todoArr.value.length + 1;
  todoArr.value.push(todoObject.value);
  setToLocalStorage();
  alert("Added Successfully :)");
  resetTodoObject();
};
const resetTodoObject = () => {
  todoObject.value = ref({
    createdAt: "",
    from: "",
    to: "",
    text: "",
    id: "",
    isCompleted: false,
  });
};
</script>

<style scoped>
input[type="text"] {
  padding: 15px;
  width: 60%;
  margin: 15px;
  border-radius: 20px;
}
input[type="date"] {
  width: 15%;
  margin: 10px;
}
input[type="submit"] {
  width: 10%;
  margin: 15px;
  background-color: var(--main-color);
  color: white;
  border-radius: 11px;
  padding: 10px;
}
</style>
