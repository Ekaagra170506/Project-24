class Paper {
    constructor(x,y,radius) {
      var options = {
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(x,y,radius/2,options);
      this.radius = radius;
      this.x = x;
      this.y = y;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      ellipseMode(CENTER);
      fill("pink");
      ellipse(0,0, this.radius,this.radius);
      pop();
    }
  };
