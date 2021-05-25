<template>
  <div class="form__group field">
    <input
      type="input"
      class="form__field"
      id="addToDo"
      @keyup.enter="addToDo"
      v-model="todo"
    />
    <label for="addToDo" class="form__label">Add To Do</label>
  </div>
  <div class="list" v-for="todo in todos" :key="todo">
    <ToDo :text="todo" :done="false" @deleteTodo="deleteTodo" />
  </div>
  <div v-if="!todos.length" class="animate__animated animate__fadeIn">
    Add a Todo!
  </div>
  <div v-if="oldTodos.length" ref="oldTodosList">
    <button @click="toggleOldTodos" class="btn-default btn">
      <span v-if="!openOld">Show Deleted</span><span v-else>Hide Deleted</span>
    </button>
    <hr v-show="openOld" />
    <div v-show="openOld">
      <div v-for="todo in oldTodos" :key="todo">
        <ToDo :text="todo" :done="true" @deleteTodo="deleteTodo" />
      </div>
      <button @click="clearOldTodos" class="btn-default btn">
        Clear Deleted
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import ToDo from "../components/ToDo.vue";
export default {
  components: { ToDo },
  setup() {
    let todo = ref(null);
    let todos = ref([]);
    let oldTodos = ref([]);
    let openOld = ref(false);
    let oldTodosList = ref(null);

    const addToDo = (e) => {
      todos.value.push(todo.value);
      todo.value = "";
    };

    const toggleOldTodos = () => {
      openOld.value = !openOld.value;
    };

    const clearOldTodos = () => {
      oldTodosList.value.classList.add("animate__animated");
      oldTodosList.value.classList.add("animate__fadeOut");
      oldTodosList.value.classList.add("animate__faster");
      setTimeout(() => {
        oldTodos.value = [];
        openOld.value = false
        ooldTodosList.value.classList.remove("animate__animated");
        oldTodosList.value.classList.remove("animate__fadeOut");
        oldTodosList.value.classList.remove("animate__faster");
      }, 2000);
    };

    return {
      todo,
      todos,
      addToDo,
      oldTodos,
      toggleOldTodos,
      openOld,
      oldTodosList,
      clearOldTodos,
    };
  },
  methods: {
    deleteTodo(text) {
      if (this.todos.includes(text)) {
        this.todos = this.todos.filter((word) => word != text);
        this.oldTodos.push(text);
      } else {
        this.oldTodos = this.oldTodos.filter((word) => word != text);
        this.todos.push(text);
      }
    },
  },
};
</script>
