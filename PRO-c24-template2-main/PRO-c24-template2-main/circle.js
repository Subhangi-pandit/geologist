class Circle {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':0.5
      }
      this.body = Bodies.rectangle(x, y, 50,50, options);
      this.width = 50;
      this.height = 50;

      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle= this.body.angle;
      push();
      translate (pos.x,pos.y);
      rotate (angle);
      strokeWeight(4);
      stroke("red");
      fill(255);
      ellipse(0,0,this.r,this.r);
      pop();
    }
  };
  