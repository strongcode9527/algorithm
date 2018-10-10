> 享元(flyweight)模式是一种用于性能优化的模式，“fly”在这里是苍蝇的意思，意为蝇量 5 级。享元模式的核心是运用共享技术来有效支持大量细粒度的对象。

如果系统中因为创建了大量类似的对象而导致内存占用过高，享元模式就非常有用了。在 JavaScript 中，浏览器特别是移动端的浏览器分配的内存并不算多，如何节省内存就成了一件非常有意义的事情


### 享元模式关键： 区分内部状态和外部状态

- 内部状态存储于对象内部。
- 内部状态可以被一些对象共享。
- 内部状态独立于具体的场景，通常不会改变。
- 外部状态取决于具体的场景，并根据场景而变化，外部状态不能被共享。


文件上传的例子，需要记录上传文件的类型，以及大小。其中类型是内部状态，而大小则是外部状态。

```
var Upload = function( uploadType){
 this.uploadType = uploadType;
}; 

Upload.prototype.delFile = function( id ){
  uploadManager.setExternalState( id, this ); // (1)
  if ( this.fileSize < 3000 ){
    return this.dom.parentNode.removeChild( this.dom );
  } 
  if ( window.confirm( '确定要删除该文件吗? ' + this.fileName ) ){
    return this.dom.parentNode.removeChild( this.dom );
  }
}; 

var UploadFactory = (function(){
  var createdFlyWeightObjs = {};
  return {
    create: function( uploadType){
      if ( createdFlyWeightObjs [ uploadType] ){
        return createdFlyWeightObjs [ uploadType];
      }
      return createdFlyWeightObjs [ uploadType] = new Upload( uploadType);
    }
 }
})(); 

var uploadManager = (function(){
  var uploadDatabase = {};
  return {
    add: function( id, uploadType, fileName, fileSize ){
      var flyWeightObj = UploadFactory.create( uploadType );
      var dom = document.createElement( 'div' );
      dom.innerHTML =
        '<span>文件名称:'+ fileName +', 文件大小: '+ fileSize +'</span>' +
        '<button class="delFile">删除</button>';
      dom.querySelector( '.delFile' ).onclick = function(){
        flyWeightObj.delFile( id );
      }
      document.body.appendChild( dom );
      uploadDatabase[ id ] = {
        fileName: fileName,
        fileSize: fileSize,
        dom: dom
      };
    return flyWeightObj ;
  },
    setExternalState: function( id, flyWeightObj ){
      var uploadData = uploadDatabase[ id ];
      for ( var i in uploadData ){
        flyWeightObj[ i ] = uploadData[ i ];
      }
    }
  }
})(); 

// 触发上传

var id = 0;
window.startUpload = function( uploadType, files ){
 for ( var i = 0, file; file = files[ i++ ]; ){
    var uploadObj = uploadManager.add( ++id, uploadType, file.fileName, file.fileSize );
 }
}; 

```

享元模式： 内部状态有几个创建一个对象，而外部状态放在一个数据库对象中，这大大缩减了创建对象的数量。




