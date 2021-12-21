var box;
var package;
function setup() {
  createCanvas(400,400);
box=createSprite(200,200,40,40);
package=createSprite(100,100,20,20);
}

function draw() 
{
  background(30);
drawSprites();
if(keyDown(RIGHT_ARROW)){
  box.x=box.x+4;
}
if(keyDown(LEFT_ARROW)){
  box.x=box.x-4;
}
if(keyDown(DOWN_ARROW)){
  box.y=box.y+4;
}
if(keyDown(UP_ARROW)){
  box.y=box.y-4;
}
}




