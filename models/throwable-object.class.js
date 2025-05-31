class ThrowableObject extends MovableObject{
    //#region attributes
    IMAGES_BOTTLE_SPINNNIG = [
        "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
        "img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
        "img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
        "img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png"
    ];
    height = 50;
    width = 50;
    //#endregion

    constructor(x, y){
        super().loadImage("img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png");
        this.loadImages(this.IMAGES_BOTTLE_SPINNNIG);
        this.x = x;
        this.y = y;
        this.throw();
        IntervalHub.setStoppableInterval(this.animateImages, 1000/10);
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

    animateImages = () => {
        this.playAnimation(this.IMAGES_BOTTLE_SPINNNIG);
    };
    //#endregion
}