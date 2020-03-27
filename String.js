class Tanishq {
    constructor(bodyA , bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            lenght : 10
        }
        this.Tanishq=Constraint.create(options);
        World .add(world,this.Tanishq);
    }
    display(){
        var pointA = this.Tanishq.bodyA.position ;
        var pointB =  this.Tanishq.bodyB.position ;

        strokeWeight(8);
         line (pointA.x,pointA.y,pointB.x,pointB.y);
    }
}