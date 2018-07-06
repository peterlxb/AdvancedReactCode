import { observable, autorun } from "mobx";

const counterState = observable({
  value: 0,
  inc: function() {
    counterState.value++;
  },
  dec: function() {
    counterState.value--;
  }
});

export default counterState;
