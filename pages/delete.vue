<template>
  <div id="cursive">
    <h1 style="text-align: center">You can delete your item here</h1>
    <div id="center">
      <div v-if="todo_list.length">
        <ul>
          <li v-for="todo in todo_list" :key="todo.key">
            <!-- {{ todo.value }} -->
            <input type="text" :value="todo.value" :disabled="disable" :class="disable?'':'show-border'">
            <span class="btn">
              <button type="submit" @click="updateToDo(todo)" class="btn-dan">
                Update
              </button>
              <button type="submit" @click="deleteToDo(todo)" class="btn-pri">
                Delete
              </button>
            </span>
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
      disable: true
    };
  },
  methods: {
    deleteToDo(todo_data) {
      var index = this.todo_list.indexOf(todo_data);
      this.$store.dispatch("modules/todo/deleteToDoList", index);
    },
    updateToDo(todo_data) {
      this.disable = !this.disable;
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

a {
  padding-left: 15px;
  padding-bottom: 5px;
}

.btn {
  padding-right: 2%;
  float: right;
}

.btn-dan {
  background-color: rgb(252, 27, 27);
  border: 0px;
  padding-top: 4px;
  padding-bottom: 4px;
  color: whitesmoke;
}

.btn-pri {
  background-color: rgb(92, 162, 255);
  border: 0px;
  padding-top: 4px;
  padding-bottom: 4px;
  color: whitesmoke;
}

.btn-pri:hover,
.btn-dan:hover {
  color:rgb(46, 41, 41);
}

input[type="text"] {
  border:0;
  width: 50%;
}

.show-border {
  border:1px solid black !important;
}
</style>