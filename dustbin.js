
class Dustbin{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.w=200;
        this.h=100;
        this.thickness=20;
        this.angle=0;
        this.bottomBody=Bodies.rectangle(this.x,this.y,this.w,this.h,this.thickness,{isStatic:true});

        this.leftBody=Bodies.rectangle(this.x-this.w/2,this.y-this.h/2,this.thickness,this.h,{isStatic:true});
        Matter.Body.setAngle(this.leftBody,this.angle)

        this.rightBody=Bodies.rectangle(this.x+this.w/2,this.y-this.h/2,this.thickness,this.h,{isStatic:true});
        Matter.Body.setAngle(this.rightBody,-1*this.angle)

        World.add(world,this.leftBody);
        World.add(world,this.rightBody);
        World.add(world,this.bottomBody);


    }
    display(){
        var leftPos = this.leftBody.position;
        push()
        translate(leftPos.x, leftPos.y); 
        rectMode(CENTER) 
        angleMode(RADIANS)
        stroke(255); 
        fill(255) 
        rotate(this.angle)
        rect(0,0,this.thickness,this.h);
        pop()

        var rightPos = this.rightBody.position;
        push()
        translate(rightPos.x, rightPos.y); 
        rectMode(CENTER) 
        angleMode(RADIANS)
        stroke(255); 
        fill(255) 
        rotate(-1*this.angle)
        rect(0,0,this.thickness,this.h);
        pop()

        var bottomPos = this.bottomBody.position;
        push()
        translate(bottomPos.x, bottomPos.y); 
        rectMode(CENTER) 
        angleMode(RADIANS)
        stroke(255); 
        fill(255) 
        rect(0,0,this.w,this.thickness);
        pop()

        
    }
}