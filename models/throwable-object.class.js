class ThrowableObject extends MovableObject{

    constructor(x, y){
        super().loadImage("img/6_salsa_bottle/salsa_bottle.png");
        this.x = x;
        this.y = y;
        this.height = 50;
        this.width = 50;
        this.throw();
    }

    //#region methods
    throw(){
        this.speedY = 30;
        IntervalHub.setStoppableInterval(this.applyGravity, 1000/25);
        IntervalHub.setStoppableInterval(this.applyGravityToBottle, 1000/25);
    }

    applyGravityToBottle = () => {
        this.x += 10;
    }
    //#endregion
}