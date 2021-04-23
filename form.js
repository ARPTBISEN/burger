class Form{
    constructor(){

    }
    
    display(){
        var title=createElement("h2")
        title.html("Car Racing Game");
        title.position(150,10);

        var input=createInput("name")
         input.position(160,150);

         var button=createButton("play");
         button.position(200,180);

         var greeting=createElement("h3");
         
         button.mousePressed(function(){
             input.hide();
             button.hide();
             var name=input.value();
             playercount+=1;
             player.update(name);
             player.updatecount(playercount);
             greeting.html("Hello"+name);
             greeting.position(200,200);
         })
    }
}