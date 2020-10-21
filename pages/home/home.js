import createId from "../../utils/createId.js";
import { formatTime } from "../../utils/util.js";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    todoLists: [],
    visibleConfirm: false,
    current: 0,
  },
  confirmCreate(e) {
    let content = e.detail;
    console.log(content);
    if (content) {
      let todo = {
        id: createId(),
        createdAt: formatTime(new Date()),
        text: content,
        finished: false,
      };
      // this.data.todoLists = todo.concat(this.data.todoLists)
      this.data.todoLists.push(todo);
      console.log(this.data.todoLists);
      this.setData({ todoLists: this.data.todoLists });
    }
    this.hideConfirm();
  },
  cancel(e) {
    console.log(e);
    console.log("取消");
  },
  hideConfirm() {
    console.log(1);
    this.setData({ visibleConfirm: false });
  },
  showConfirm() {
    console.log(this.data.visibleConfirm);
    this.setData({ visibleConfirm: 1 });
  },
  destroyTodo(e) {
    console.log(e);
    let index = e.currentTarget.dataset.index;
    let selectedItem = this.data.todoLists.filter(
      (item) => item.id === index
    )[0];
    selectedItem.finished = true;
    this.setData({ todoLists: this.data.todoLists });
    // this.setData({ current: index - 1 });
  },
});
