
class Ground{

    constructor(){
        var objectProperty = {
            isStatic:true,
            //friction : 0.3, 
          //  density: 1
          }
        this.object = Bodies.rectangle(width/2,height-80,width,20,objectProperty);
        World.add(world,this.object);
        this.width = width;
        this.height = 20;
    
    
       
    }
    
    display(){
    
        
        var pos = this.object.position;
        push();
    
        translate(pos.x,pos.y);
        
        fill("white");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        
    }
    }