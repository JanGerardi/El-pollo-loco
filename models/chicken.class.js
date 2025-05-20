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
        this.moveLeft();

        setInterval(() => {
        let i = this.currentImage % this.IMAGES_WALKING.length; // 0 % 6 => 0 Rest 0, / 7 % 6 => 1 Rest 1 ... der Rest ist i ,erhöht sich immer um 1, maximal 6
        let path = this.IMAGES_WALKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        }, 100);
    }

    //#endregion

}