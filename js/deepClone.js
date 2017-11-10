//递归处理，但不能处理循环应用问题。
function deepClone1(target, obj) {
  for(let i in obj) {
    if(obj.hasOwnProperty(i)) {
      if(typeof obj[i] === 'object')
      {
        target[i] = obj[i] instanceof Array ? [] : {}
        deepClone1(target[i], obj[i])
      }else {
        target[i] = obj[i]
      }
    } 
  }
  return target
}

//通过json来处理，足够简单但有缺陷
//不能赋值函数
//原型链没了，对象就是object，所属的类没了。
function deepClone2(target, obj) {
  return target = JSON.parse( JSON.stringify(obj) )
}

var obj = {
  a: {
    b: {
      c: {
        name: 'strong'
      },
      d: {
        name: ['s', 't', 'r', 'o', 'n', 'g']
      },
      e: function(){
        alert('deep clone')
      }
    }
  }
}

var result = {}

console.log(deepClone1(result, obj))
console.log(obj.a === result.a, obj.a.b.d.name === result.a.b.d.name)
console.log(deepClone2(result, obj))



