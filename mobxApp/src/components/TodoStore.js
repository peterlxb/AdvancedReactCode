import { observable, autorun, action, decorate } from "mobx";

class TodoStore {
  id = Math.random();
  title = "";
  finished = false;
}
decorate(TodoStore, {
  title: observable,
  finished: observable
});

export default TodoStore;
