var helicopterIMG, helicopterSprite;
var package1Sprite, package2Sprite, package3Sprite;
var package1IMG, package2IMG, package3IMG;
var packageBody1, packageBody2, packageBody3, ground;
var line1, line2, line3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	package1IMG=loadImage("package1.png");
	package2IMG=loadImage("package2.png");
	package3IMG=loadImage("package3.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	package1Sprite=createSprite(width/2, 80, 10,10);
	package1Sprite.addImage(package1IMG);
	package1Sprite.scale=0.2;

	package2Sprite=createSprite(480, 80, 10,10);
	package2Sprite.addImage(package2IMG);
	package2Sprite.scale=0.2;

	package3Sprite=createSprite(330, 80, 10,10);
	package3Sprite.addImage(package3IMG);
	package3Sprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,20);
	groundSprite.shapeColor=color("green");

	line1=createSprite(width/2,height-50,200,20);
	line1.shapeColor=color("red");

	line2=createSprite(510,610,20,100);
	line2.shapeColor=color("red");

	line3=createSprite(310,610,20,100);
	line3.shapeColor=color("red");


	engine = Engine.create();
	world = engine.world;

	packageBody1 = Bodies.circle(width/2 , 200 , 5 , {restitution: 0.4, isStatic: true, friction: 1});
	World.add(world, packageBody1);
	console.log("y-axis of package1 "+package1Sprite.y);

	packageBody2 = Bodies.circle(width/2 , 200 , 10 , {restitution: 0.4,isStatic:true, friction: 1});
	World.add(world, packageBody2);
	console.log("y-axis of package2 "+package2Sprite.y);
	
	packageBody3 = Bodies.circle(width/2 , 200 , 15 , {restitution: 0.4,isStatic:true, friction: 1});
	World.add(world, packageBody3);
	console.log("y-axis of package3 "+package3Sprite.y);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 30 , {isStatic:true} );
	 World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  package1Sprite.x= packageBody1.position.x 
  package1Sprite.y= packageBody1.position.y 

  package2Sprite.x= packageBody2.position.x 
  package2Sprite.y= packageBody2.position.y 

  package3Sprite.x= packageBody3.position.x 
  package3Sprite.y= packageBody3.position.y 

 
  package1Sprite.collide(line1);
  package1Sprite.collide(line1);
  package1Sprite.collide(line1);

  package1Sprite.collide(line2);
  package2Sprite.collide(line2);
  package3Sprite.collide(line2);

  package1Sprite.collide(line3);
  package2Sprite.collide(line3);
  package3Sprite.collide(line3);

  drawSprites();
 
}

function keyPressed() {

 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody1,false);
	 Matter.Body.setStatic(packageBody2,false);
	 Matter.Body.setStatic(packageBody3,false);
	 
 }

}



