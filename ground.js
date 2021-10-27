class Ground{
 
    //Properties
    constructor(x,y,w,h){   
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.width=w;
        this.height=h;
        World.add(world,this.body)
    }

    //function
    show() {
      var pos=this.body.position;

      Matter.Body.rotate(this.body,angle);
      angle+=0.1;

      rectMode(CENTER);
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      fill("red");
      rect(0,0,this.width,this.height);
      pop()
    }

}