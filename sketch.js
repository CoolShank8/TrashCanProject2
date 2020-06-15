var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

var ground
var TrashCanLeftSide, TrashCanBottemSide, TrashCanRightSide

var paper

var Sprites = []

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	
	ground = new Ground(width/2, 650, width, 10, "Yellow")

	TrashCanLeftSide = new Dustbin(550, 595, 10, 100, "Green")

	TrashCanRightSide = new Dustbin(700, 595, 10,100, "Green")

	TrashCanBottemSide = new Dustbin((TrashCanRightSide.x + TrashCanLeftSide.x)/2, 640, TrashCanRightSide.x - TrashCanLeftSide.x,10, "Green")

	paper = new Paper(100,400, 5)

	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

	Engine.run(engine)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)

  UpdateAllSprites();

  drawSprites();
}

function keyPressed()	
{
	if (keycode = UP_ARROW)
	{
		Matter.Body.applyForce(paper.body, paper.position, {x: 100, y:-230})
	}
}

function UpdateAllSprites()
{
for (var i = 0; i < Sprites.length; i++)
  {
	  Sprites[i].Update()
  }
}

