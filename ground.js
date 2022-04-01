class Ground{
    constructor(x,y,width,height){
        this.x=x
        this.y=y
        this.height=height
        this.width=width
      var options={
          isStatic:true
      }  
      this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
      World.add(world,this.body)
    }

    display(){
        push()
        fill('red')
        rect(this.x,this.y,this.width,this.height)
        pop()
    }
}