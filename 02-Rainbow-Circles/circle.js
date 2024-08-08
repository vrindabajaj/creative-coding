class Circle {
    constructor(){
        this.radius = 100;
        this.angle = 0;
    }

    update(){
        this.x = this.radius*cos(this.angle);
        this.y = this.radius*sin(this.angle);
    }
    display(){

    }
}