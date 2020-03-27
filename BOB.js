class BOB {
    constructor(x,y){
        var options = {
            'restitution' : 1 ,
            'density' : 1
        }

        this.body = Bodies.circle(x,y, 20 , options);
        this.x= x ;
        this.y =y;
        World.add(world , this.body);
    }
    display(){
      /*  var pos = this.body.position ;
        pos.x = mouseX ;
        pos.y = mouseY ;*/

   var pos =this.body.position;
      pos.x=this.x;
      pos.y=this.y;
      //var angle = this.body.angle;
    //  push();
    // translate(pos.x, pos.y);
      //rotate(angle);
      ellipseMode(CENTER);
      strokeWeight(3);
      stroke("white");
      fill("yellow");
      ellipse(this.x,this.y, 100);
      //pop();   
     }


}