// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[
			{name:'无可奈何花落去'},
			{name:'庄生晓梦迷蝴蝶'},
			{name:'天涯何处无芳草'},
			{name:'此情可待成追忆'},
			{name:'人面不知何处'},
			{name:'心悦君兮君不知'}
		],
		currentX:0,
		currentIndex:-1,
  },

  setShowDel(index,moveX){
		this.dataList[index].swipeX=moveX;
	},
  
  //滑动开始的触发事件
  swipeStart(index){
    this.currentIndex=index;
    this.dataList.forEach((item,i)=>{
      if(index!=i){
        item.swipeX=0;
      }
    })
  },

  //滑动结束的触发事件
  swipeEnd(index){
    let swipeX=this.dataList[index].swipeX;
    if(this.currentX<-10 && (swipeX===0 || !swipeX)){
      this.setShowDel(index,-120);
      return;
    }

    if(this.currentX>-55 && swipeX===-120){
      this.setShowDel(index,0);
      return;
    }
  },


  //监听滑动过程触发的事件
  swipeChange(...e){
    if(this.currentIndex===e[0]){
      this.currentX=e[1].detail.x;
    }
  }
})
