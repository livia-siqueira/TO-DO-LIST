const handleToDoList = {
  data() {
    return {
      todos: [],
      newTodo: {
        done: false,
      },
    };
  },
  methods: {
    addTodo: function () {
      if (this.newTodo.text) {
        this.todos.push(this.newTodo);
        this.newTodo = {
          done: false,
        };
        localStorage.setItem("TodoList", JSON.stringify(this.todos));
      } else {
        alert("Texto da tarefa é obrigatório");
      }
    },
  },
  created() {
    const dataPrev = localStorage.getItem("TodoList");
    this.todos = dataPrev
      ? JSON.parse(localStorage.getItem("TodoList"))
      : this.todos;
  },
  updated() {
    localStorage.setItem("TodoList", JSON.stringify(this.todos));
  },
};

Vue.createApp(handleToDoList).mount("#app");
