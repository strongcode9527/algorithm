> 中介者模式的作用就是解除对象与对象之间的紧耦合关系。增加一个中介者对象后，所有的相关对象都通过中介者对象来通信，而不是互相引用，所以当一个对象发生改变时，只需要通知中介者对象即可。中介者使各对象之间耦合松散，而且可以独立地改变它们之间的交互。



```
function Player( name, teamColor ){
  this.name = name; // 角色名字
  this.teamColor = teamColor; // 队伍颜色
  this.state = 'alive'; // 玩家生存状态
};
Player.prototype.win = function(){
  console.log( this.name + ' won ' );
};
Player.prototype.lose = function(){
  console.log( this.name +' lost' );
}; 

Player.prototype.die = function(){
  this.state = 'dead';
  playerDirector.reciveMessage( 'playerDead', this ); // 给中介者发送消息，玩家死亡
}; 

Player.prototype.remove = function(){
  playerDirector.reciveMessage( 'removePlayer', this ); // 给中介者发送消息，移除一个玩家
}; 

Player.prototype.changeTeam = function( color ){
  playerDirector.reciveMessage( 'changeTeam', this, color ); // 给中介者发送消息，玩家换队
}; 


var playerFactory = function( name, teamColor ){
  var newPlayer = new Player( name, teamColor ); // 创造一个新的玩家对象
  playerDirector.reciveMessage( 'addPlayer', newPlayer ); // 给中介者发送消息，新增玩家
  return newPlayer;
}; 

var playerDirector= ( function(){
  var players = {}, // 保存所有玩家
  operations = {}; // 中介者可以执行的操作

  /****************新增一个玩家***************************/
  operations.addPlayer = function( player ){
    var teamColor = player.teamColor; // 玩家的队伍颜色
    players[ teamColor ] = players[ teamColor ] || []; // 如果该颜色的玩家还没有成立队伍，则新成立一个队伍
    players[ teamColor ].push( player ); // 添加玩家进队伍
  };

 /****************移除一个玩家***************************/
 operations.removePlayer = function( player ){
    var teamColor = player.teamColor, // 玩家的队伍颜色
    teamPlayers = players[ teamColor ] || []; // 该队伍所有成员
    for ( var i = teamPlayers.length - 1; i >= 0; i-- ){ // 遍历删除
      if ( teamPlayers[ i ] === player ){
        teamPlayers.splice( i, 1 );
      }  
    }
 }; 


/****************玩家换队***************************/
 operations.changeTeam = function( player, newTeamColor ){ // 玩家换队
    operations.removePlayer( player ); // 从原队伍中删除
    player.teamColor = newTeamColor; // 改变队伍颜色
    operations.addPlayer( player ); // 增加到新队伍中
 };
 operations.playerDead = function( player ){ // 玩家死亡
    var teamColor = player.teamColor,
    teamPlayers = players[ teamColor ]; // 玩家所在队伍
    var all_dead = true;
    for ( var i = 0, player; player = teamPlayers[ i++ ]; ){
      if ( player.state !== 'dead' ){
        all_dead = false;
        break;
      }
    }
    if ( all_dead === true ){ // 全部死亡
      for ( var i = 0, player; player = teamPlayers[ i++ ]; ){
      player.lose(); // 本队所有玩家 lose
    }
    for ( var color in players ){
      if ( color !== teamColor ){
        var teamPlayers = players[ color ]; // 其他队伍的玩家
        for ( var i = 0, player; player = teamPlayers[ i++ ]; ){ 
        player.win(); // 其他队伍所有玩家 win
      }
    }
  }
 }
 }; 

  var reciveMessage = function(){
    var message = Array.prototype.shift.call( arguments ); // arguments 的第一个参数为消息名称
    operations[ message ].apply( this, arguments );
  };
 return {
    reciveMessage: reciveMessage
 }
})(); 



```


### 总结： 

  因此，中介者模式使各个对象之间得以解耦，以中介者和对象之间的一对多关系取代了对象
之间的网状多对多关系。各个对象只需关注自身功能的实现，对象之间的交互关系交给了中介者
对象来实现和维护。

  不过，中介者模式也存在一些缺点。其中，最大的缺点是系统中会新增一个中介者对象，因
为对象之间交互的复杂性，转移成了中介者对象的复杂性，使得中介者对象经常是巨大的。中介
者对象自身往往就是一个难以维护的对象。