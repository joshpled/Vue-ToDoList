<template>
  <div class="item hvr-grow" ref="todo" @click="toggleTodo">
    {{ text }}
  </div>
  <div @click.once="$emit('deleteTodo', text)" v-if="isCrossed" class="close-button">
    <span class="far fa-times-circle" />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  props: ["text", "done"],
  emits: ["deleteTodo"],

  setup(props) {
    let text = ref(props.text);
    let todo = ref(null);
    let isCrossed = ref(false);

    const toggleTodo = () => {
      if (isCrossed.value === true) {
        isCrossed.value = false;
        todo.value.classList.remove("crossed");
      } else {
        isCrossed.value = true;
        todo.value.classList.add("crossed");
      }
    };

    onMounted(() => {
      if (props.done === true) {
        isCrossed.value = true;
        todo.value.classList.add("crossed");
      }
    });

    return { text, todo, toggleTodo, isCrossed };
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