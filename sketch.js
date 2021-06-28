var D1,D2,D3,D4,D5,D6;
var dice;
var player,pI
var rand1;

function preload(){
 D1 = loadImage("dice1.png")
 D2 = loadImage("dice2.png")
 D3 = loadImage("dice3.png")
 D4 = loadImage("dice4.png")
 D5 = loadImage("dice5.png")
 D6 = loadImage("dice6.png")
 pI = loadImage("player.png")
}

function setup(){
  rand1 = new Array(2);
  
  createCanvas(displayWidth,displayHeight);
  dice = createSprite(70,70);
  dice.addImage(D1)
  dice.scale = 0.5;
  player = createSprite(250,685);
  player.addImage(pI);
  player.scale = 0.3
}

function draw(){
  background(rgb(0,255,255));
  if(mousePressedOver(dice)){
    rolldice()
  }
  fill("black");
  text(mouseX+","+ mouseY,mouseX,mouseY)
  strokeWeight(5)
  line(200,100,200,640);
  line(200,100,1000,100);
  line(1000,100,1000,640);
  line(200,640,1000,640);
  
  line(350,100,350,635);
  line(850,100,850,635);
  line(200,250,1000,250);
  line(200,485,1000,485);
  line(200,375,350,375);
  line(850,250,1000,250);
  line(850,485,1000,485);
  line(850,375,1000,375);
  line(500,100,500,250);
  line(670,100,670,250);
  line(500,485,500,640);
  line(670,485,670,640);
  
  textSize(30);
  fill("black");
  text("5",260,560);
  text("15",260,435);
  text("25",260,315);
  text("50",260,170);
  text("10",415,170);
  text("20",575,170);
  text("40",915,170);
  text("55",745,170);
  text("65",910,325);
  text("45",910,435);
  text("30",910,560);
  text("60",745,560);
  text("35",415,560);
  text("55",575,560);
  text("Take from bank",520,320);
  text("Give to bank",520,400);
  console.log(rand1);
   drawSprites()
}

function rolldice(){
  var rand = Math.round(random(1,6));
  var s1 = createSprite(480,320,10,10);
  s1.shapeColor = "white"
  s1.visible = false
  var s2 = createSprite(480,400,10,10);
  s2.shapeColor = "white"
  s2.visible = false
  switch(rand){
    case 1: dice.addImage(D1);
            s1.visible = true
            s1.shapeColor = "red";
           break;
    case 2: dice.addImage(D2);
    s2.visible = true
    s2.shapeColor = "yellow";
           break;
    case 3: dice.addImage(D3);
    s1.visible = true
    s1.shapeColor = "blue";
           break;  
    case 4: dice.addImage(D4);
    s2.visible = true
    s2.shapeColor = "black";
           break;     
    case 5: dice.addImage(D5);
    s1.visible = true
    s1.shapeColor = "pink";
           break;
    case 6: dice.addImage(D6);
    s2.visible = true
    s2.shapeColor = "green";
           break;
    default:break
  }
}
/*function wheel1(){
  var s1 = createSprite(480,320,10,10);
  s1.shapeColor = "white"
  var s2 = createSprite(480,400,10,10);
  s2.shapeColor = "white"
  rand1[0]=1;
  rand1[1]=2;
  var number = Math.floor(Math.random());
  document.getElementById(rand1[number])
}
function wheel2(){
 
}
*/