function objectFactory() {

  var obj = new Object(),

  Constructor = [].shift.call(arguments)

  obj.__proto__ = Constructor.prototype

  var ret = Constructor.apply(obj, arguments)

  // 处理构造函数返回数据问题。
  return typeof ret === 'object' ? ret : obj

}