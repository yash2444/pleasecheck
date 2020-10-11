const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world;
var ground1,mango1, tree1, stone1, maonj;

function preload(){
	boy2 = loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(1300, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bod ies Here.

	tree1 = new Tree(1050,580);
	ground1 = new Ground(width/2,600,width,20);
	stone = new Stone(235,420,30);
	mango1 = new Fruit(950,100,30);
	mango2 = new Fruit(1000,150,30);
	mango3 = new Fruit(1030,200,30);
	mango4 = new Fruit(1080,130,30);
	mango5 = new Fruit(1100,165,30);
	mango6 = new Fruit(1150,100,30);
	mango7 = new Fruit(1200,250,30);
	mango8 = new Fruit(1230,130,30);
	mango9 = new Fruit(1180,200,30);
	mango10 = new Fruit(980,310,30);
	mango11 = new Fruit(950,280,30);
	mango12 = new Fruit(1000,300,30);

	boy1 = new Player(stone.body,{x:235, y:420});
	
	console.log(stone)

	 Engine.run(engine)
}
function draw() {
	background(255);
  rectMode(CENTER);
  tree1.display();

 ground1.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();
mango11.display();
mango12.display();




stone.display();
boy1.display();
 image(boy2,200,340,200,300)
 detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);
detectCollision(stone,mango6);
detectCollision(stone,mango7);
detectCollision(stone,mango8);
detectCollision(stone,mango9);
detectCollision(stone,mango10);
detectCollision(stone,mango11);
detectCollision(stone,mango12);
}   
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    boy1.fly();
}

function keyPressed(){
if (keyCode===32){
	Matter.Body.setPosition(stone.body, {x: 235 , y: 420});
	boy1.attach(stone.body)
}
}

function detectCollision(stone,mango){
	var distance = dist(stone.body.position.x,stone.body.position.y,mango.body.position.x,mango.body.position.x)
	console.log(distance)
	console.log(stone.radius + mango.r)
	if(distance<=stone.radius+mango.r){
		Matter.Body.setStatic(mango.body,false)
		Matter.Body.setStatic(stone.body,false)
	}
	
}