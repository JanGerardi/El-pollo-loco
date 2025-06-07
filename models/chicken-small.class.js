class SmallChicken extends MovableObject{
    //#region attributes
    x;
    y = 375;
    height = 50;
    width = 50;
    health = 1;
    offset ={
        top: 5,
        right: 5,
        bottom: 5,
        left: 5
    };
    //#endregion

    constructor(){
        super().loadImage("img/3_enemies_chicken/chicken_small/1_walk/1_w.png")
        this.loadImages(ImgHub.CHICKEN_SMALL.IMAGES_WALKING);
        this.loadImages(ImgHub.CHICKEN_SMALL.IMAGES_DEAD);
        this.x = 600 + Math.random() * 1800; // zwischen 200px und 700px;
        this.speed = 1 + Math.random() * 1.2;
        this.getRealFrame();
        IntervalHub.setStoppableInterval(this.animateMovement, 1000/60);
        IntervalHub.setStoppableInterval(this.animateImages, 1000/10);
    }

    //#region methods
    animateImages = () => {
        if (this.isDead()) {
            this.playAnimation(ImgHub.CHICKEN_SMALL.IMAGES_DEAD);
        } else{
            this.playAnimation(ImgHub.CHICKEN_SMALL.IMAGES_WALKING);
        }
    };

    animateMovement = () => {
        if (this.health == 1) {
            this.moveLeft();
        }
        this.getRealFrame();
    };
    //#endregion
}