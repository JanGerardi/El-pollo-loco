class SmallChicken extends MovableObject{
    //#region attributes
    y = 375;
    height = 50;
    width = 50;
    health = 1;
    IMAGES_WALKING = [
        "img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
        "img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
        "img/3_enemies_chicken/chicken_small/1_walk/3_w.png"
    ];
    IMAGES_DEAD = [
        "img/3_enemies_chicken/chicken_small/2_dead/dead.png"
    ];
    //#endregion

    constructor(){
        super().loadImage("img/3_enemies_chicken/chicken_small/1_walk/1_w.png")
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 300 + Math.random() * 1800; // zwischen 200px und 700px;
        this.speed = 1 + Math.random() * 1.2;
        IntervalHub.setStoppableInterval(this.animateMovement, 1000/60);
        IntervalHub.setStoppableInterval(this.animateImages, 1000/10);
    }

    //#region methods
    animateImages = () => {
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
        } else{
            this.playAnimation(this.IMAGES_WALKING);
        }
    };

    animateMovement = () => {
        if (this.health == 1) {
            this.moveLeft();
        }
    };
    //#endregion
}