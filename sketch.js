var steffei,simg;
var hut,himg;


function preload(){
  simg=loadImage("assets/s.gif");
  himg=loadImage("assets/hut.png")

}
function setup(){
  createCanvas(1000,800)
  steffei=createSprite(50,730,10,10);
  steffei.addImage(simg)

  hut=createSprite(150,120,10,10);
  hut.addImage(himg);
  hut.scale=0.5


}
function draw(){
  background(rgb(125,251,1))
  drawSprites();
}