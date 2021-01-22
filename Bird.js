class Bird{
    constructor(x,y){
        var options = {restitution:0.7,
        friction:0.9,
    density:1.5}
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        pos.x = mouseX;
        pos.y = mouseY;
        push(); 
        translate(pos.x,pos.y)
        strokeWeight(4);
        stroke("red")
        rotate(angle);
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop();
        
    }
}