class Star {
    constructor(angle, inner){
        this.inner = inner;
        if (this.inner){
            this.radius = 75;
        } else {
            this.radius = 150;
        }
        
        this.angle = angle;
    }

    update(){
        this.x = cos(this.angle) * this.radius;
        this.y = sin(this.angle) * this.radius;
    }

    display(){
        // ellipse(this.x, this.y, 10, 10);
    }
}