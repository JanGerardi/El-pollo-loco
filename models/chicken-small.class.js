class SmallChicken extends MovableObject{
    //#region attributes
    x;
    y = 375;
    height = 50;
    width = 50;
    health = 1;
    rX;
    rY;
    rH;
    rW;
    IMAGES_WALKING = [
        "img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
        "img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
        "img/3_enemies_chicken/chicken_small/1_walk/3_w.png"
    ];
    IMAGES_DEAD = [
        "img/3_enemies_chicken/chicken_small/2_dead/dead.png"
    ];
    offset ={
        top: 45,
        right: 45,
        bottom: 45,
        left: 45
    };
    //#endregion

    constructor(){
        super().loadImage("img/3_enemies_chicken/chicken_small/1_walk/1_w.png")
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 600 + Math.random() * 1800; // zwischen 200px und 700px;
        this.speed = 1 + Math.random() * 1.2;
        this.getRealFrame();
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

    getRealFrame(){
        this.rX = this.x + this.offset.left;
        this.rY = this.y + this.offset.top;
        this.rW = this.width - this.offset.left - this.offset.right;
        this.rH = this.height - this.offset.top - this.offset.bottom;
    }
    //#endregion
}