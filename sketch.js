const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var snow, snow1,snow2,snow3,snow4;

var engine, world;
var drops = [];
var rand;

var maxDrops=50;

var snowCreatedFrame=0;
var bgImg;

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(1400,800);

    bgImg = loadImage("happy.jpg");
    

    //creating drops
    if(frameCount % 5000 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new snowflake(random(0,1400), random(0,1400)));
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background(bgImg); 

    //creating thunder
    
    
    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY();
    }

    drawSprites();
    stroke("#FFD700");
            fill("#FFD700");
            textSize(30);
            textFont("ComicSansMS");
            text("   Happy Birthday papa I had to ask my miss to help me in order to make this card. I love you papa!   ",10,50);
    
}