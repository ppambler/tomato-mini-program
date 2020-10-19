// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    todoLists: [
     
    ],
    visible: true
  },
  confirm(e) {
    console.log(e)
    console.log('确定')
  },
  cancel(e) {
    console.log(e)
    console.log('取消')
  }
  
});
