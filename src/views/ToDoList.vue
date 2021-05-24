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
        <ToDo :text="todo" :done="true" @removeFromOld="removeFromOld" />
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
    removeFromOld(text) {
      console.log(text);
    },
  },
};
</script>

<style>
.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
}
.form__field {
  font-family: inherit;
  width: 400px;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: #fff;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  margin-bottom: 30px;
}
.form__field::placeholder {
  color: transparent;
}
.form__field:placeholder-shown ~ .form__label {
  font-size: 1.3rem;
  cursor: text;
  top: 20px;
}
.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #9b9b9b;
}
.form__field:focus {
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, #11998e, #38ef7d);
  border-image-slice: 1;
}
.form__field:focus ~ .form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #11998e;
  font-weight: 700;
}
.form__field:required,
.form__field:invalid {
  box-shadow: none;
}
.delete-todos-title{

}
.btn {
    font-size: 14px;
    padding: 6px 12px;
    margin-bottom: 10px;
    margin-top: 20px;

    display: inline-block;
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
}

/* default
---------------------------- */
.btn-default {
    color: #333;
    font-size: 16px;
    background-color: rgb(78, 163, 208);
    border-color: rgb(78, 163, 208);
    border-radius: 5px;
}
.btn-default:hover {
    color: #333;
    background-color: rgb(134, 182, 208);
    border-color: rgb(134, 182, 208);
}

</style>