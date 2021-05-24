<template>
  <div class="item hvr-grow" ref="todo" @click="completeTodo">
    {{ text }}<i class="far fa-times-circle deleteTodo" v-if="isCrossed"></i>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["text"],
  setup(props) {
    let text = ref(props.text);
    let todo = ref(null);
    let isCrossed = ref(false);

    const completeTodo = () => {
      isCrossed.value = true;
      todo.value.classList.add("crossed");
    };
   
    return { text, todo, completeTodo, isCrossed };
  },
};
</script>

<style>
.item {
  background: #55efc4;
  border-radius: 10px;
  width: fit-content;
  display: inline-block;
  margin: 5px auto;
  padding: 10px;
  cursor: pointer;
}
.crossed {
  text-decoration: line-through;
  background: grey;
}
.deleteTodo {
  color: rgb(223, 107, 107);
  margin-left: 20px;
}
</style>