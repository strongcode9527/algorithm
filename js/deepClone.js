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

// 不使用递归进行处理，且进行了循环引用的处理
function deepClone(source) {
  const target = Array.isArray(source) ? [] : {}

  const hashDatabase = new Map()
  
  const stack = [{
    source,
    target,
    key: undefined,
    parent: undefined,
  }]
  
  // hashDatabase.set(source, target)

  while( stack.length > 0 ) {

    const { source, target, key, parent } = stack.pop()

    for(let i in source) {
      const value = source[i]
      
      if(typeof value === 'object' && value !== null) {
        if(!hashDatabase.has(value)) {
          const object = Array.isArray(value) ? [] : {}
          stack.push({
            key: i,
            source: value,
            parent: target,
            target: object,
          })
          hashDatabase.set(value, object)
        }else {
          target[key] = value
        }
      }else {
        target[i] = value
      }
    }

    if( key && parent) {
      parent[key] = target
    }
  }

  
  return target
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






var a = deepClone(obj)

console.log(obj.a === a.a, obj.a.b.d.name === a.a.b.d.name)




