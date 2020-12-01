
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball , ground , boxLeft , boxRight , boxBottom
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ballBody = Bodies.circle(700,590,50);
	ballBody.shapeColor = color(255,0,255);
	groundBody = Bodies.rectangle(width/2 ,600,800,10);
	groundBody.shapeColor = color(255,255,0)
	ball = ellipse(700,590,50);
	world.add
	ground = rect(width/2 , 600,800,10);
	
	 
	boxPosition = width/2 - 100
    boxY = 610
    boxleftsprite = createSprite(boxPosition,boxY,20,100);
    boxleftsprite.shapeColor = color(255,0,0);

    boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
    World.add(world, boxLeftBody);

  	boxbasesprite = createSprite(boxPosition+100, boxY+40, 200,20);
  	boxbasesprite.shapeColor = color(255,0,0);

  	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxrightsprite = createSprite(boxPosition+200 , boxY, 20,100)
 	boxrightsprite.shapeColor = color(255,0,0);

	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);
    
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  if (keyCode === UP_ARROW) {
   ball.velocityY = -10;
  } 
  ball.velocityY = ball.velocityY + 0.8;
    
  if(keyCode === space){
	  ball.velocityX = 4 ; 
  }
  drawSprites();
 
}

