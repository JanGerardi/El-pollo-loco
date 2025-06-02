class ThrowableObject extends MovableObject{
    //#region attributes
    IMAGES_BOTTLE_SPINNIG = [
        "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
        "img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
        "img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
        "img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png"
    ];
    IMAGES_BOTTLE_SPLASH = [
        "img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
        "img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
        "img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
        "img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
        "img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
        "img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
    ];
    height = 50;
    width = 50;
    hit = false;
    removeFromWorld = false;
    //#endregion

    constructor(x, y){
        super().loadImage("img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png");
        this.loadImages(this.IMAGES_BOTTLE_SPINNIG);
        this.loadImages(this.IMAGES_BOTTLE_SPLASH);
        this.x = x;
        this.y = y;
        IntervalHub.setStoppableInterval(this.animateImages, 1000/10);
    }

    //#region methods
    throw(){
        this.speedY = 30;
        IntervalHub.setStoppableInterval(this.applyGravity, 1000/25);
        IntervalHub.setStoppableInterval(this.applyGravityToBottle, 1000/25);
    }

    applyGravityToBottle = () => {
        if (!this.hit) {
            this.x += 10;
        }
    }

    animateImages = () => {
        if (this.hit) {
            this.speedY = 0;
            this.acceleration = 0;
            this.playSplashAnimation();
        } else{
            this.playAnimation(this.IMAGES_BOTTLE_SPINNIG);
        }
    }

    playSplashAnimation() {
        if (this.currentImage < this.IMAGES_BOTTLE_SPLASH.length) {
            const path = this.IMAGES_BOTTLE_SPLASH[this.currentImage];
            this.img = this.imageCache[path];
            this.currentImage++;
        }else {
            this.removeFromWorld = true; // Bottle entfernen
        }
    }
    //#endregion
}