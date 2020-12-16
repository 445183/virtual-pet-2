class feed{
    constructor(){}   

    display(){
      fill("red")
     
      var button=createButton("feed the dog");
      button.position(475,125);

      if(button.mousePressed(function(){
         foodS=foodS-1;         
      }));

      var addFood=createButton("addFood");
      addFood.position(600,125);

      if(addFood.mousePressed(function(){
        foodS=foodS+1;
      }));
    }
}