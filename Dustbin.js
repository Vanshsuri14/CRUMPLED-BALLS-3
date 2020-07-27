class Dustbin{
    constructor(){
        var option = {
            isStatic:true
        }

        this.body = Bodies.rectangle(550,570,10,150,option);
        this.body1 = Bodies.rectangle(670,570,10,150,option);
        this.body2 = Bodies.rectangle(610,590,130,10,option);
        this.image = loadImage('dustbingreen.png');
        
        World.add(world,this.body);
        World.add(world,this.body1);
        World.add(world,this.body2);
    }

    display(){
        var pos =this.body.position;
        imageMode(CENTER);
       image(this.image,620,520,130,150);

        
    }
}