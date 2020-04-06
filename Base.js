class Base {
    construstor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        world.add(world, this.body);
    }
    display(){
        rectMode(CENTER);
        fill("black");
        rect(100,250,70,5);
        console.log(this.body);
    }
};