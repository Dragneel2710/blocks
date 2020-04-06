const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine;
var bullet,box;
var slingshot;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world =engine.world;

  bullet = new Box(100,300,40,40);

  box1 = new Base(300,100,400,5);

  box2 = new Box(60,240,10,10);
  box3 = new Box(70,240,10,10);
  box4 = new Box(80,240,10,10);
  box5 = new Box(70,230,10,10);

  slingshot = new Slingshot(bullet.body,{x:100 ,y:300});

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
   bullet.display();

   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();

   slingshot.display();

}
function mouseDragged(){
  Matter.Body.setPosition(bullet.body,{x:mouseX ,y:mouseY})
}
function mouseReleased(){
  slingshot.release();
}