const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var particles=[]
var ground,snow1;

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world;
  //ground=new Ground(width/2,height,width,20)
  
}

function draw() {
  Engine.update(engine)
  background(255,255,255);
 
  
  if(frameCount%10===0){
    
    for (var j = 50; j <=width-10; j=j+50) 
      {
      
         particles.push(new Snow(j,70,20));
      }
}
  for (var i = 0; i < particles.length; i++) {
     
    particles[i].display();
  }
  
//}//
 
}