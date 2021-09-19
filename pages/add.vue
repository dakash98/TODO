<template>
  <div id="cursive">
    <h1>Add Item Your TODO List</h1>
    <div id="center" :style="'height:' + { height } + 'px !important;'">
      <input
        type="text"
        name="add-todo"
        v-model="todo"
        placeholder="Add TODO"
      /><br />
      <h4 v-show="show_message" style="color: red">{{ message }}</h4>
      <button type="submit" @click="addToDo()" class="btn">Add</button>
      <div class="div-a">
        <ul>
          <li v-for="todo in todo_list" :key="todo.key">{{ todo.value }}</li>
        </ul>
        <a href="/" style="padding-left: 3%">Go To Main</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todo_list: this.$store.state.modules.todo.todo_list,
      todo: "",
      height: 280,
      message:
        "Please enter your task in the input field before clicking on the add button",
      show_message: false,
    };
  },
  methods: {
    addToDo() {
      if (this.todo.length) {
        var todo_obj = { key: this.todo_list.length + 1, value: this.todo };
        this.$store.dispatch("modules/todo/getToDoList", todo_obj);
        this.todo = "";
        this.height += 3;
      } else {
        this.show_message = true;
        setTimeout(() => (this.show_message = false), 4000);
      }
    },
  },
};
</script>
<style>
#cursive {
  font-family: cursive;
  margin: auto;
  text-align: center;
}

#center {
  border: 0.1px solid black;
  width: 40%;
  border-radius: 18px;
  box-shadow: 10px 10px 8px #797777;
  text-align: center;
  margin: auto;
}

input[type="text"] {
  width: 80%;
  padding: 12px 20px;
  margin: 18px 0;
  box-sizing: border-box;
}

.div-a {
  margin-top: 3%;
  font-size: 19px;
  text-align: left !important;
}

.btn {
  padding: 1% 7% 1% 7%;
  background-color: rgb(136, 226, 222);
  border: 0px;
  font-weight: bold;
  font-family: cursive;
  font-size: 18px;
}

.btn:hover {
  padding: 1% 7% 1% 7%;
  border: 0px;
  background-color: rgb(47, 172, 255);
  color: azure;
  font-weight: bold;
  font-family: cursive;
  font-size: 18px;
}
</style>