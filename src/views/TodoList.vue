<template>
  <div class="todos">
    <h1 class="welcome">To-Do List</h1>
    <table style="width: 100%" v-if="todoArr.length">
      <thead>
        <tr>
          <th>Content</th>
          <th>From</th>
          <th>To</th>
          <th>Created At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(todo, index) in todoArr"
          :key="todo.id"
          :style="`
            ${
              todo.isCompleted
                ? 'background-color: var(--secondary-color)'
                : 'background-color: transparent'
            }`"
        >
          <td>{{ todo.text }}</td>
          <td>{{ todo.from }}</td>
          <td>{{ todo.to }}</td>
          <td>{{ new Date(todo.createdAt).toLocaleDateString() }}</td>
          <td>
            <div>
              <button class="completed" @click="completeTodo(todo)">
                {{ todo.isCompleted ? "Completed!✅" : "InCompleted🚫" }}
              </button>
              <button class="delete" @click="deleteTodo(index)">
                Delete❌
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <h1 v-else style="line-height: 25rem">ToDo list is Empty !!</h1>
  </div>
</template>

<script setup>
import localStorageFunc from "@/mixins/localStorage";

const { todoArr, setToLocalStorage } = localStorageFunc();

const completeTodo = (todo) => {
  todo.isCompleted = !todo.isCompleted;
  setToLocalStorage();
};

const deleteTodo = (index) => {
  todoArr.value.splice(index, 1);
  setToLocalStorage();
};
</script>

<style scoped>
tr,
td,
th {
  border: 1px solid;
  padding: 10px;
  transition: 0.5s ease-in-out;
}

button {
  padding: 3%;
  background-color: var(--main-color);
  color: white;
  border-radius: 25%;
  margin-left: 10px;
}
.welcome {
  position: relative;
  margin: 4%;
  padding: 10px;
  border: 3px solid var(--main-color);
  overflow: hidden;
  transition: 1.3s ease-in-out;
}
.welcome::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transform: translateX(-100%);
  transition: 1s ease-in-out;
  z-index: -1;
}
.welcome:hover {
  color: white;
  z-index: 1;
}
.welcome:hover::before {
  background-color: var(--secondary-color);
  transform: translateX(0);
}
</style>
