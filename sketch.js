
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
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2
	} 
	ball=Bodies.circle(260,100,20,ball_options)
	World.add(world,ball)
	Engine.run(engine);
	ground = new Ground(800,670,1600,20)
	wall = new Ground(1150,600,20,150)
	wall2 = new Ground(950,600,20,150)
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  ground.display()
  wall.display()
  wall2.display()
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}



