const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var BOB1 ;
var stand ;

//var string1 ;


function setup(){
    var canvas = createCanvas(450,500);
    engine = Engine.create();
    world = engine.world;
    
    stand = new Stand(220, 100,150,30);

    BOB1 = new BOB(220,250);

    string = new Tanishq(BOB1.body,stand.body);
 

}
function draw(){
    background("black");
    Engine.update(engine);
    
  //  stand.display();
    ////BOB1.display();
    //string.display();
    fill("white" );
   text("Press space to settle the BOB of the pendulum", 25,25);
   fill("white");
   text("Press enter to move the BOB of the pendulum with mouse", 25,40);
   
    stand.display();
    BOB1.display();
    string.display();
    if(keyCode == 13){

        BOB1.x = mouseX ;
        BOB1.y=mouseY ;

    }
     if(keyCode == 32){

        BOB1.x =220 ;
        BOB1.y =250 ;
 

    }


}
