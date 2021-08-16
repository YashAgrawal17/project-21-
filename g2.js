
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




var ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine=Engine.create();
	world=engine.world;
 var ball_options={
	 isStatic:false,
	 restitution:0.3,
	friction:0,
	density:1.2
 }

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball=Bodies.circle(150,150,20,ball_options)
World.add(world,ball)


ground=new Ground(400,650,500,20)
left =new Ground(550,620,20,100)
right =new Ground(670,620,20,100)
	Engine.run(engine);


	
  


}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  ground.display();
  left .display();
right.display();
  drawSprites();
 
}
function keyPressed(){
 if(keyCode=== UP_ARROW){
	 Matter.Body.applyForce(ball.Body,ball.Body.position,{x:15,y:-15})
 }


}


