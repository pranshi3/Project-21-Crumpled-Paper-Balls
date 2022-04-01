
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var ground


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
var ballOptions={
restitution: 1,
friction:0,
density:1.2
}





	

	//Create the Bodies Here.
    ball= Bodies.circle(200,200,20,ballOptions)
	World.add(world,ball)

	ground= new Ground(400,690,800,20)
	leftSide=new Ground(580,640,15,80)
	
	rightSide=new Ground(700,640,15,80)
	//Bodies.rect(0,690,600,10)


  
}

function keyPressed(){
	if (keyCode===32 ){
		Matter.Body.applyForce(ball,ball.position,{x:30,y:30})
	}

}

function draw() {
	background(0);
	Engine.update(engine)
  rectMode(CENTER);
 
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)
  ground.display()
  leftSide.display()
  rightSide.display()
  
 
}
 


