/**
 * 单例模式一般用于创建命名空间或惰性单例
 */




// 命名空间,多用于框架，类似于jquery
var Ming = {
  g: function () {

  },
  css: function() {

  }
}

// 惰性单例
// 使用匿名函数自执行，主要是保证对象只被创建一次

var LazySingle = (function() {
  var _instance = null;

  function Single() {
    return {
      publicMethod: function() {},
      publicProperty: '1.0'
    }
  }

  return function() {
    if(!_instance) {
      _instance = Sing()
    }
    return _instance
  }
})()

console.log(LazySingle().publicProperty)







