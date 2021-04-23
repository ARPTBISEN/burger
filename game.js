class Game{
    constructor(){

    }
    getState(){
        var gameStateRef=database.ref("gamestate");
        gameStateRef.on("value",function(data){gamestate=data.val()})
    
    }
    updateState(state){
        database.ref("/").update({gamestate:state})
    }
    start(){
        if(gamestate===0){
            player=new Player();
            player.getcount();
            
            form=new Form();
            form.display();
        }
    }

}