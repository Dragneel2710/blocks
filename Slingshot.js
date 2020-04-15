class Slingshot {
    constructor(a,b){
        var options ={
            bodyA: a,
            pointB: b,
            length: 32,
            stiffness:0.03
        }
        this.c = Matter.Constraint.create(options)
        this.e = b;
        this.d = World.add(world, this.c)
    }
    display(){
        if (this.c.bodyA){
            push();
            stroke(0,0,0);
            strokeWeight(5);
            line(this.c.bodyA.position.x,this.c.bodyA.position.y,this.e.x-10,this.e.y);
            line(this.c.bodyA.position.x,this.c.bodyA.position.y,this.e.x+20,this.e.y);
            console.log(this.e);
            pop()
        }
    }
    release(){
      this.c.bodyA = null;
    }
};