class Circle {
    constructor(angle){
        this.radius = 100;
        this.angle = angle;
        this.size = 100;
    }

    update(){
        this.x = this.radius*cos(this.angle);
        this.y = this.radius*sin(this.angle);
    }
    display(){
        ellipse(this.x, this.y, this.size, this.size);
        line(0, 0, this.x, this.y)
    }
}