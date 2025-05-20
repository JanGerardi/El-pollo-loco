class Character extends MovableObject{
    //#region attributes
    y = 180;
    height = 250;
    width = 150;
    IMAGES_WALKING = [
            "img/2_character_pepe/2_walk/W-21.png",
            "img/2_character_pepe/2_walk/W-22.png",
            "img/2_character_pepe/2_walk/W-23.png",
            "img/2_character_pepe/2_walk/W-24.png",
            "img/2_character_pepe/2_walk/W-25.png",
            "img/2_character_pepe/2_walk/W-26.png"
        ];
    world;
    //#endregion

    constructor(){
        super().loadImage("img/2_character_pepe/2_walk/W-21.png");
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }
    
    //#region methods
    animate(){

        if (this.world.keyboard.RIGHT) {
            setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length; // 0 % 6 => 0 Rest 0, / 7 % 6 => 2 Rest 1 ... der Rest ist i ,erhöht sich immer um 1, maximal 6
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
            }, 100);
        }
    }

    jump(){

    }
    //#endregion
}