// learn from https://github.com/mqyqingfeng/Blog/issues/11


// 最新版语言的代码
Function.prototype.call2 = function (context, ...args) {
  context = context || window
  context.__fn__ = this
  let result = context.__fn__(...args)
  delete context.__fn__
  return result
}

// 兼容代码

Function.prototype.apply = function (context, arr) {
  context = Object(context) || window
  context.fn = this

  var result
  if (!arr) {
    result = context.fn()
  }
  else {
    var args = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      args.push('arr[' + i + ']')
    }
    result = eval('context.fn(' + args + ')')
  }

  delete context.fn
  return result
}