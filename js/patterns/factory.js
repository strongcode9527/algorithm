/**
 * 简单工厂模式
 * 又称静态工厂模式，有一个工厂队形决定创建某一种产品对象类的实例。主要用来创建同一类对象。
 * 注：说白了就是返回一个对象，高度抽象
 */

 function createBook(name, time, type) {
   const o = new Object()

   o.name = name
   o.time = time
   o.type = type
   o.getName = function() {
     return o.name
   }

   return o
 }





















