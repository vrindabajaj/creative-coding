class Star {
    constructor(){
        this.radius = 150;
        this.angle = 0;
    }

    update(){
        this.x = cos(this.angle) * this.radius;
        this.y = sin(this.angle) * this.radius;
    }

    display(){
        ellipse(this.x, this.y, 10, 10);
    }
}