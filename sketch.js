
var paperIMG,ground,dustbinIMG
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var paper;





function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,600,800,10);
	block = new Dustbin(550,570,10,50);
	block1 = new Dustbin(670,570,10,50);
	block2 = new Dustbin(610,590,110,10);
	paper = new Paper(100,590,10);
	chain = new Launcher(paper.body,{x:200,y:400});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  paper.display();
  ground.display();
  block.display();
  block1.display();
  block2.display();
  chain.display();
  
  
   
 
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
    //}
}

function mouseReleased(){
    chain.fly();
    
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:14,y:-14});

	}
}



