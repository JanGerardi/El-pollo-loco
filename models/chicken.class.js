class Chicken extends MovableObject{
    //#region attributes
    y = 355;
    height = 70;
    width = 70;
    IMAGES_WALKING = [
        "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
        "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
        "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png"
    ];
    //#endregion

    constructor(){
        super().loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png")
        this.loadImages(this.IMAGES_WALKING);

        this.x = 200 + Math.random() * 500; // zwischen 200px und 700px;
        this.speed = 0.3 + Math.random() * 0.5;
        IntervalHub.setStoppableInterval(this.animateMovement, 1000/60);
        IntervalHub.setStoppableInterval(this.animateImages, 1000/10);
    }

    //#region methods
    animateImages = () => {
        this.playAnimation(this.IMAGES_WALKING);
    };

    animateMovement = () => {
        this.moveLeft();
    };
    //#endregion
}