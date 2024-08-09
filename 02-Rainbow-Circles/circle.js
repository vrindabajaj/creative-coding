class Circle {
    constructor(angle){
        this.radius = 100;
        this.angle = angle;
        this.size = 100;
        this.direction = -1;
    }

    update(){
        this.x = this.radius*cos(this.angle);
        this.y = this.radius*sin(this.angle);

        if(this.radius < 0 || this.radius > 100){
            this.direction = this.direction * -1;
        }
        this.radius = this.radius + this.direction;
    }
    display(){
        ellipse(this.x, this.y, this.size, this.size);
        //line(0, 0, this.x, this.y)
    }
}