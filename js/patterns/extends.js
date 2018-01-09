// 中级继承者---寄生组合式继承
// 理解继承，以及原型链有极大帮助，
// 代码为书中代码。

function inheritObject(o) {
  function F() {

  }
  F.prototype = o
  return new F()
}

function inheritPrototype(subClass, superClass) {
  var p = inheritObject(superClass.prototype)
  p.constructor = subClass
  subClass.prototype = p
}

function SuperClass(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green']
}

SuperClass.prototype.getName = function() {
  console.log(this.name)
}

function SubClass(name, time) {
  SuperClass.call(this, name)
  this.time = time
}

inheritPrototype(SubClass, SuperClass) 

SubClass.prototype.getTime = function() {
  console.log(this.time)
}

var instance1 = new SubClass('js book', 2014)
var instance2 = new SubClass('css book', 2013)

instance1.colors.push('black')

console.log(instance1.colors)
console.log(instance2.colors)

instance2.getName()
instance2.getTime()
