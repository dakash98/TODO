<template>
  <div id="cursive">
    <h1 style="text-align:center;">You can delete your item here</h1>
    <div id="center">
      <div v-if="todo_list.length">
        <ul>
          <li
            v-for="todo in todo_list"
            :key="todo.key"
            @click="deleteToDo(todo)"
          >
            {{ todo.value }}
          </li>
        </ul>
      </div>
      <div v-else>
          <h4>You Have Completed Your All TODO's</h4>
      </div>
      <a href="/">Go To Main</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todo_list: this.$store.state.modules.todo.todo_list,
    };
  },
  methods: {
    deleteToDo(todo_data) {
      var index = this.todo_list.indexOf(todo_data)
      this.$store.dispatch("modules/todo/deleteToDoList", index);
    },
  },
};
</script>
<style>
#cursive {
  font-family: cursive;
  margin: auto;
  /* text-align: center; */
}

#center {
  border: 0.1px solid black;
  width: 40%;
  border-radius: 18px;
  box-shadow: 10px 10px 8px #797777;
  /* text-align: center;*/
  margin: auto;
}

a{
  padding-left: 15px;
  padding-bottom:5px;
}
</style>