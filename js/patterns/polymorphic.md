多态背后的思想是将**做什么**和**谁去做以及怎样去做**分离开来，也就是将不变的事物与可能改变的事物分离开来。


### 要实现 这一点，归根结底先要消除类型之间的耦合关系


```

var googleMap = { 
  show: function(){
    console.log( '开始渲染谷歌地图' ); 
  }
};

var baiduMap = { 
  show: function(){
    console.log( '开始渲染百度地图' ); 
  }
};

var renderMap = function( map ){
  if ( map.show instanceof Function ){
    map.show(); 
  }
};

```