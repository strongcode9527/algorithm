Function.prototype.bind2 = function(context, ...args) {
    const func = this;
    return function(...subArgs) {
      func.apply(context, [...args, ...subArgs]);
    }
  }
  
  function a() {
    console.log(this, arguments)
  }
  
  const b = a.bind2({name: 'strong'}, '1', '2')
  
  b('3');