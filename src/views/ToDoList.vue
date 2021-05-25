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
  <div v-if="!todos.length">
    Add a Todo!
  </div>
  <div v-if="oldTodos.length">
    <button @click="toggleOldTodos" class="btn-default btn">
      <span v-if="!openOld">Show Deleted</span><span v-else>Hide Deleted</span>
    </button>
    <hr v-show="openOld">
    <div v-show="openOld">
      <div v-for="todo in oldTodos" :key="todo">
        <ToDo :text="todo" :done="true"/>
      </div>
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

    const addToDo = (e) => {
      todos.value.push(todo.value);
      todo.value = "";
    };

    const toggleOldTodos = () => {
      openOld.value = !openOld.value;
    };

    return { todo, todos, addToDo, oldTodos, toggleOldTodos, openOld };
  },
  methods: {
    deleteTodo(text) {
      this.todos = this.todos.filter((word) => word != text);
      this.oldTodos.push(text);
    },
  },
};
</script>
