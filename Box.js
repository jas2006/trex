class Box
{
    constructor(x,y,width,height){
        var options = {
            isStaticP: false 
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
          World.add(world,this.body)

           }
    display() {
      var pos = this.body.position 
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      }
}