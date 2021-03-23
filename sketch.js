
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var player
var particles = []
var ground
var play=1
var end=0
var gamestate=play
function preload()
{
	
}

function setup() {
	createCanvas(800, 900);
player=createSprite(700,800,40,40)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(1,900,10000,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if (keyDown(LEFT_ARROW))
  {
player.x=player.x-15
  }
  if (keyDown(RIGHT_ARROW))
  {
player.x=player.x+15
  }

  

	if(frameCount%60===0){
		particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
	  }
	
	  if(frameCount%35===0){
		particles.push(new Particle(random(100, width/2+30), 10,10));
	  } 
	  if(frameCount%84===0){
		particles.push(new Particle(random(650, width/2+30), 10,10));
	  }
	  if(frameCount%75===0){
		particles.push(new Particle(random(750, width/2+30), 10,10));
	  }
	  if(frameCount%80===0){
		particles.push(new Particle(random(50, width/2+30), 10,10));
	  }
	  if(frameCount%45===0){
		particles.push(new Particle(random(700, width/2+30), 10,10));
	  }
	  for (var j = 0; j < particles.length; j++) {
		particles[j].display();
	  }
	  
	   ground.display()

    
  drawSprites();
 
}
function isTouching(oo,io){
	if (oo.x - io.x < io.width/2 + oo.width/2
	  && io.x - oo.x < io.width/2 + oo.width/2
	  && oo.y - io.y < io.height/2 + oo.height/2
	  && io.y - oo.y < io.height/2 + oo.height/2) 
	 { return true
	}
	else{
	  return false
	}
	}


