class Chicken extends MovableObject{
    //#region attributes
    x;
    y = 355;
    height = 70;
    width = 70;
    health = 1;
    offset ={
        top: 5,
        right: 5,
        bottom: 5,
        left: 5
    };
    //#endregion

    constructor(){
        super().loadImage(ImgHub.CHICKEN.IMAGES_WALKING[0])
        this.loadImages(ImgHub.CHICKEN.IMAGES_WALKING);
        this.loadImages(ImgHub.CHICKEN.IMAGES_DEAD);
        this.x = 600 + Math.random() * 1800; // zwischen 200px und 700px;
        this.speed = 0.4 + Math.random() * 0.6;
        this.getRealFrame();
        IntervalHub.setStoppableInterval(this.animateMovement, 1000/60);
        IntervalHub.setStoppableInterval(this.animateImages, 1000/10);
    };

    //#region methods
    animateImages = () => {
        if (this.isDead()) {
            this.playAnimation(ImgHub.CHICKEN.IMAGES_DEAD);
        } else{
            this.playAnimation(ImgHub.CHICKEN.IMAGES_WALKING);
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