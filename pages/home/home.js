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
    if (content) {
      let todo = {
        id: createId(),
        createdAt: formatTime(new Date()),
        text: content,
        finished: false,
      };
      // this.data.todoLists = todo.concat(this.data.todoLists)
      this.data.todoLists.push(todo);
      this.setData({ todoLists: this.data.todoLists });
    }
    this.hideConfirm();
  },
  cancel(e) {
    console.log("取消");
  },
  hideConfirm() {
    this.setData({ visibleConfirm: false });
  },
  showConfirm() {
    this.setData({ visibleConfirm: 1 });
  },
  destroyTodo(e) {
    let index = e.currentTarget.dataset.index;
    let selectedItem = this.data.todoLists.filter(
      (item) => item.id === index
    )[0];
    selectedItem.finished = true;
    let unSelectItems = this.data.todoLists.filter((item) => item.id !== index);
    this.setData({ current: selectedItem.id });
    this.setData({ todoLists: unSelectItems });
    console.log(this.data.todoLists);
  },
});
