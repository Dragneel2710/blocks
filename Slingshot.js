class Slingshot {
    constructor(a,b){
        var options ={
            bodyA: a,
            pointB: b,
            lenght: 32,
            stiffness:0.03
        }
        this.c = Matter.Constraint.create(options)
        this.d = World.add(world, this.c)
    }
    display(){
        if (this.c.bodyA){
            push();
            stroke(0,0,0);
            strokeWeight(5);
            line(this.c.bodyA.position.x,this.c.bodyA.position.y,this.d.x-10,this.d.y);
            line(this.c.bodyA.position.x,this.c.bodyA.position.y,this.d.x+20,this.d.y);
            pop()
        }
    }
    release(){
      this.c.bodyA = null;
    }
};