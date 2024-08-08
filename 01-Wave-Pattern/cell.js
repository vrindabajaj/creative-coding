class Cell {
    constructor(x0, y0){
        this.radius = 100;
        this.angle = 0;
        this.x0 = x0;
        this.y0 = y0;
    }

    update(){
        this.x = this.radius*cos(this.angle);
        this.y = this.radius*sin(this.angle);
        this.angle += 0.01;
    }
    display(){
        line(this.x0, this.y0, this.x0 + this.x, this.y0 + this.y);
        ellipse(this.x0 + this.x, this.y0 + this.y, 10, 10);
    }
}