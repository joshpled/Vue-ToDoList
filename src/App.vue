<template>
  <h1>To Do List</h1>
  <ToDoList />
</template>

<script>
import ToDoList from './views/ToDoList.vue'
export default {
  components: {ToDoList}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #517090;
}

 body {
	 font-family: 'Poppins', sans-serif;
	 display: flex;
	 flex-direction: column;
	 align-items: center;
	 min-height: 100vh;
	 font-size: 1.5rem;
	 background-color: #222;
}

</style>

vue