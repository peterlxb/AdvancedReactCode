import { autorun, observable, computed } from "mobx";

var todoStore = observable({
  /* some observable state */
  todos: [],

  /* a derived value */
  get completeTodosCount() {
    return this.todos.filter(todo => todo.completed === true).length;
  }
});

autorun(function() {
  console.log(
    "Completed %d of %d items",
    todoStore.completedCount,
    todoStore.todos.length
  );
});

/* ..and some actions that modify the state */
todoStore.todos[0] = {
  title: "Take a walk",
  completed: false
};

export default todoStore;
