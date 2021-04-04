const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1825,825);


	engine = Engine.create();
	world = engine.world;

  ground = new Ground(width/2,770,width,20);

  paper = new Paper(150,130,40);

  dbase = new Dustbin(1400,750,200,20);
	dright = new Dustbin(1500,709,20,90);
  dleft = new Dustbin(1300,709,20,90);
  
  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
    ground.display();
    dright.display();
    dleft.display();
    dbase.display();
    paper.display();
}
function keyPressed(){
  if(keyCode=== UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-100});
  }
}



