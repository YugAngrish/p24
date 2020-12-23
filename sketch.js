
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var d1 , d2, d3 , ball , ground;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	d1  = new Dustbin(600,height-100,200,20);
	d2  = new Dustbin(500,height-145,15,110);
	d3  = new Dustbin(700,height-145,15,110);

   ground = new Ground();

   //ball = new Ball(100,height-140,20,20);
  
   ball = new rBall(100,height-100,20,20)
	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  
  rectMode(CENTER);
  
  drawSprites();

  if(keyWentDown("UP_ARROW")){
	//Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	
	//ball = new rBall(100,height-140,20,20,{isStatic:false})
	ball.velocityX = -100
	ball.velocityY=  - 100
	
}

  if(keyWentUp("UP_ARROW")){
	//Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	//ball = new rBall(100,height-140,20,20,{isStatic:false})
	ball.velocityY =  30
	//ball.velocityX = 30
}
 ground.display();

 d1.display();
 d2.display();
 d3.display();

 keyPressed();
 ball.display();
  
}

function keyPressed(){
  if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
}
}
//ball.body

