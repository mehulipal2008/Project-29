class Stand {
    constructor() {
       var stand_options = {
           isStatic : true
       }
       this.stand = Bodies.rectangle(450,390,900,20,stand_options)
       World.add(world,this.stand);
   }
   display(){
       noStroke();
       fill(188,67,67);
       rectMode(CENTER);
       rect(this.stand.position.x,this.stand.position.y,900,20);
   }
}