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
        this.animate();
    }

    //#region methods
    animate(){

        setInterval(() => {
        this.playAnimation(this.IMAGES_WALKING);
        }, 100);

        setInterval(() => {
            this.moveLeft();
        }, 1000/60);
    }

    //#endregion

}