var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1 , box2  , box3
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5);
	World.add(world, packageBody);
	//

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 fill("red");
	box1 = new Box(375,640,50,10);
	box2 = new Box(375,590,10,50);
    box3 = new Box(425,590,10,50);

	Engine.run(engine);
  
}


function draw() {
	background(0);
  rectMode(CENTER);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  if (keyCode === "down") {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   
	//Matter.Bodies.setStatic(packageBody, isStatic = false);
	packageBody.restitution = 1.0
  }
  keyPressed();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();

 
}

function keyPressed() {
	
}



