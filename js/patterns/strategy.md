设计模式读书笔记

### 描述：

在程序设计中，我们也常常遇到类似的情况，要实现某一个功能有多种方案可以选择。

比如 一个压缩文件的程序，既可以选择 zip 算法，也可以选择 gzip 算法。

这些算法灵活多样，而且可以随意互相替换。这种解决方案就是本章将要介绍的策略模式。 策略模式的定义是:定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。


### 按照绩效计算工资

```
var strategies = {
  "S": function( salary ){
    return salary * 4; 
  },
  "A": function( salary ){ 
    return salary * 3;
  },
  "B": function( salary ){
    return salary * 2;
  }
}

console.log( calculateBonus( 'S', 20000 ) ); 
console.log( calculateBonus( 'A', 10000 ) );

// 输出:80000 
// 输出:30000

```

### 验证表单的策略对象

```
var strategies = {
  isNonEmpty: function( value, errorMsg ){
    if ( value === '' ){ 
      return errorMsg;
    } 
  },
  minLength: function( value, length, errorMsg ){ 
    if ( value.length < length ){
      return errorMsg; 
    }
  },
  isMobile: function( value, errorMsg ){
    if ( !/(^1[3|5|8][0-9]{9}$)/.test( value ) ){ 
      return errorMsg;
    } 
  }
};

```