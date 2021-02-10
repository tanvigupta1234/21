var bullet,wall,thickness; 
var bulletimg;
var speed, weight; 

function preload(){
}

function setup() {

  createCanvas(1600,400);

  thickness=random(22,83)
  speed=random(223,321);
  weight=random(30,52);
  
  bullet=createSprite(50, 200, 50,5);
  bullet.shapeColor="white";
  
 
  bullet.velocityX=speed;
  
  

  wall=createSprite(1200, 200,thickness, height/2);
  wall.shapeColor="grey";
  //wall.debug=true;
}

function draw() {
  background("black");

  if (collision(bullet,wall)){
    bullet.velocityX=0;
    var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness)

    if(damage>10){
      wall.shapeColor=color(255,0,0)
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0)
    }
  
    }

  

  drawSprites();
}

function collision(lbullet,lwall){

  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge) {
  return true;

}
else {
  return false;
}
}
