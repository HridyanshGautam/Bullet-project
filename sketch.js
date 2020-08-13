var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness=random(22,83);
  bullet = createSprite(50,200,50,50);
  wall = createSprite(1200,200,thickness,height/2);
  bullet.velocityX = speed;
}
function draw() {
  background(255,255,255);  
  
 if(collided(bullet,wall)){
bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/(thickness *thickness* thickness);
    if(deformation>10) {
      wall.shapeColor=color(255,0,0);
    }
    if(deformation<10) {
       wall.shapeColor=color(0,255,0);
    }
    
  }
   
  drawSprites();
}

function collided(lbullet, lwall) {

  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x
  if(bulletRightEdge>=wallLeftEdge) {
     return true
  }
  return false;
}
  