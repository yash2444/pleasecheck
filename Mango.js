class Fruit{
	constructor(x,y,r)
	{
		var options={
			restitution:1,
			friction:0,
            density:0.8,
            isStatic:true
			
			}
		this.x=x;
		this.y=y;
		this.r=r;
		
        this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
        this.image = loadImage("sprites/mango.png");
		World.add(world, this.body);
			 
	}
	display()
	{
			
		    var pos=this.body.position;
			push();
			translate(pos.x, pos.y);
			rotate (this.body.angle)
			ellipseMode(CENTER)
			imageMode(CENTER)
			fill(255,0,255)
			image (this.image,0,0,30,30);
			pop()
			
			
	}

}
