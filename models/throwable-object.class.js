class ThrowableObject extends MovableObject{
    //#region attributes
    x;
    y;
    height = 60;
    width = 60;
    hit = false;
    removeFromWorld = false;
    offset ={
        top: 5,
        right: 5,
        bottom: 5,
        left: 5
    };
    //#endregion

    constructor(x, y){
        super().loadImage(ImgHub.THROWN_BOTTLE.IMAGES_BOTTLE_SPINNIG[0]);
        this.loadImages(ImgHub.THROWN_BOTTLE.IMAGES_BOTTLE_SPINNIG);
        this.loadImages(ImgHub.THROWN_BOTTLE.IMAGES_BOTTLE_SPLASH);
        this.x = x;
        this.y = y;
        IntervalHub.setStoppableInterval(this.animateImages, 1000/10);
    };

    //#region methods
    throw(){
        this.speedY = 30;
        IntervalHub.setStoppableInterval(this.applyGravityToBottle, 1000/25);
    };

    applyGravityToBottle = () => {
        if (!this.hit) {
            this.x += 10;
        }
        if (this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
        }
        this.getRealFrame();
    };

    animateImages = () => {
        if (this.hit) {
            this.speedY = 0;
            this.acceleration = 0;
            this.playSplashAnimation();
        } else{
            this.playAnimation(ImgHub.THROWN_BOTTLE.IMAGES_BOTTLE_SPINNIG);
        }
    };

    playSplashAnimation() {
        if (this.currentImage < ImgHub.THROWN_BOTTLE.IMAGES_BOTTLE_SPLASH.length) {
            const path = ImgHub.THROWN_BOTTLE.IMAGES_BOTTLE_SPLASH[this.currentImage];
            this.img = this.imageCache[path];
            this.currentImage++;
        }else {
            this.removeFromWorld = true; // Bottle entfernen
        }
    };
    //#endregion
}