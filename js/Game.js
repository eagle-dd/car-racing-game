class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }
  play(){
    form.hide();
    Player.getPlayerInfo();
    if(allPlayers!=undefined){
var position = 130;
for(var plr in allPlayers){
  if(plr === "player"+player.index){
    fill("cyan")
  }else{
  fill("red")
  
  }
  position=position+20
  text(allPlayers[plr].name+ ":"+allPlayers[plr].distance, 120 )
}
    }
    if(keyIsDown(UP_ARROW)){
      player.distance=player.distance+30
      player.update()
    }
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

}
