Function.prototype.apply2 = function(context, argsArray) {
    const symbol = Symbol('xxx');
    context[symbol] = this;
    const result = context[symbol](...argsArray);
    delete context[symbol];
    return result;
}
  
function a() {
    console.log(this.name);
}
  
a.apply2({name: 'string'}, ['adsf'])