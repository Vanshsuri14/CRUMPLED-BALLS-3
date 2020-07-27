class Paper{
    constructor(x,y){
      var options = {
          isStatic : false,
          restitution: 0,
          friction:1,
          density:1.2
      }
      this.body = Bodies.circle(x,y,10,options);
    this.image = loadImage("paper.png");
      World.add(world,this.body); 
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y); 
        rotate(angle);       
        
        imageMode(CENTER);
        image(this.image,0,0,70,70,10,50);
        pop();
        
    }
}
