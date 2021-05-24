<template>
  <div class="item hvr-grow" ref="todo" @click="toggleTodo">
    {{ text }}
  </div>
  <div
    @click="removeTodo(e, text)"
    class="far fa-times-circle close-button"
    v-if="isCrossed"
  ></div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["text"],
  setup(props) {
    console.log9;
    let text = ref(props.text);
    let todo = ref(null);
    let isCrossed = ref(false);

    const toggleTodo = () => {
      isCrossed.value = !isCrossed.value;
      if (isCrossed.value) {
        todo.value.classList.add("crossed");
      } else {
        todo.value.classList.remove("crossed");
      }
    };

    return { text, todo, toggleTodo, isCrossed };
  },
  methods: {
    removeTodo(e, text) {
      console.log(text);
      this.$emit("removeTodo");
    },
  },
};
</script>

<style>
.item {
  background: #55efc4;
  border-radius: 10px;
  width: fit-content;
  margin: 5px auto;
  padding: 10px;
  cursor: pointer;
  display: inline-block;
}
.crossed {
  text-decoration: line-through;
  background: grey;
}
.close-button {
  display: inline-block;
  color: rgb(223, 107, 107);
  margin-left: 10px;
  cursor: pointer;
}
</style>