class Player {
constructor(bodyA,pointB){
    var options = {
        pointB:pointB,
            bodyA: bodyA,
            stiffness: 0.01,
length  : 1
        }
       // this.image = loadImage("sprites/boy.png");
       this.bodyA = bodyA;
        this.pointB = pointB;
        this.launcher = Constraint.create(options)
        World .add(world,this.launcher)
    }

    fly(){
        this.launcher.bodyA = null;
    }
    attach (body){
    this.launcher.bodyA = body;
    }
display (){
if (this.launcher.bodyA){
var pointA = this.bodyA.position;
var pointB = this.pointB;
line (pointA.x,pointA.y,pointB.x,pointB.y)
}
}
    
}