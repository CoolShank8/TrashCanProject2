var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var CanImage, PaperImage

function preload()
{
	CanImage = loadImage("dustbingreen.png")
	PaperImage = loadImage("paper.png")
}

var ground
var TrashCan

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

	paper = new Paper(100,400, 5, "White", PaperImage)

	TrashCan = new Dustbin(600, 490, 120,150, "Green", CanImage)



	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

	Engine.run(engine)
  
}


function draw() {
  rectMode(CENTER);
  background(255);
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

