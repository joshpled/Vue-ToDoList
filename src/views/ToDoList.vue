<template>
  <div>
      <input type="text" @keyup.enter="addToDo" v-model="todo">
  </div>
  <div class="list" v-for="todo in todos" :key="todo">
     {{todo}} 
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
setup(){
    let todo = ref(null)
    let todos = ref(['one todo', 'two todo'])

    const addToDo = (e) => {
        return todos.value.push(todo.value)
    }

    return{ todo, todos, addToDo}
}
}
</script>

<style>

</style>