
class rBall{

constructor(x,y,width,height){
    var objectProperty = {
        isStatic:false,
        friction : 0.3, 
        density: 1
      }
    this.object = Bodies.rectangle(x,y,width,height,objectProperty);
    World.add(world,this.object);
    this.width = width;
    this.height = height;


   
}

display(){

    
    var pos = this.object.position;
    push();

    translate(pos.x,pos.y);
    
    fill("red")
    ellipse(CENTER);
    ellipse(0,0,this.width,this.height)
    pop();
    
}
}