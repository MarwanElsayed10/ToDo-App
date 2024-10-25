import { ref, onMounted } from "vue";

const todoFunc = () => {
  const todoArr = ref([]);

  const setToLocalStorage = () => {
    localStorage.setItem("to-do-list", JSON.stringify(todoArr.value));
  };

  const updateTodo = () => {
    if (localStorage.getItem("to-do-list")) {
      todoArr.value = JSON.parse(localStorage.getItem("to-do-list"));
    }
  };

  onMounted(() => {
    updateTodo();
  });
  return { todoArr, setToLocalStorage };
};

export default todoFunc;
