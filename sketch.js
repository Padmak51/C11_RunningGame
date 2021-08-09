var pathImg,path;
var runnerImg,Runner
function preload(){
  //pre-load images
  pathImg=loadImage("path.png");
  runnerImg=loadAnimation("Runner-1.png,Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite (200,200);
  path.addImage(pathImg);
  pathVelocityY=4;
  path.scale=1.2;

  Runner=createSprite(50,50);
  Runner.addImage(runnerImg);
Runner.scale=0.5;

}

function draw() {
  background(0);
if(path.y>400){
  path.y=height/2;
}
drawSprites();
}
