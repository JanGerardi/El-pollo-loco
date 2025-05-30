class SmallChicken extends MovableObject{
    //#region attributes
    y = 375;
    height = 50;
    width = 50;
    IMAGES_WALKING = [
        "img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
        "img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
        "img/3_enemies_chicken/chicken_small/1_walk/3_w.png"
    ];
    //#endregion

    constructor(){
        super().loadImage("img/3_enemies_chicken/chicken_small/1_walk/1_w.png")
        this.loadImages(this.IMAGES_WALKING);

        this.x = 300 + Math.random() * 1800; // zwischen 200px und 700px;
        this.speed = 1 + Math.random() * 1.2;
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