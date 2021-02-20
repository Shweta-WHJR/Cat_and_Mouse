var realBackground,backgroundImage;
var cat,catAnimation,catAnimationwalking;
var mouse,mouseAnimation,mouseAnimationwalking;

function preload(){
  backgroundImage = loadImage("images/garden.png");
  catAnimation = loadAnimation("images/cat1.png");
  catAnimationwalking = loadAnimation("images/cat3.png","images/cat2.png");
  mouseAnimation = loadAnimation("images/mouse1.png");
  mouseAnimationwalking = loadAnimation("images/mouse2.png","images/mouse3.png");
  mouseInp = loadImage("images/mouse4.png");
  catInp = loadImage("images/cat4.png");
}

function setup() {
  createCanvas(600, 400);
  
  realBackground = createSprite(280,200,15,15);
  realBackground.addAnimation("background",backgroundImage)
  realBackground.scale = 0.65;

  cat = createSprite(510,360,15,15);
  cat.addAnimation("still", catAnimationwalking);
  cat.scale = 0.08;

  mouse = createSprite(90,360,15,15);
  mouse.addAnimation("still",mouseAnimationwalking);
  mouse.scale = 0.08;
}

function draw() {
  background(220);
  if (keyDown("LEFT_ARROW")){
    cat.x = cat.x -5;
  }

  if (keyDown("RIGHT_ARROW")){
    cat.x = cat.x +5;
  }
  collide();
  drawSprites();
}

function collide(){
  if(cat.isTouching(mouse)){
    mouse.addAnimation("still",mouseInp);
    cat.addAnimation("still",catInp);
  }
}