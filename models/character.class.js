class Character extends MovableObject{
    //#region attributes
    y = 180;
    height = 250;s
    width = 150;
    speed = 8;
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
        setInterval(() =>{
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x + 50; // hier wird die "Kamerabewegung", die auf die Bewegung des Characters reagiert, realisiert und um 100px nach rechts gesetzt
        }, 1000/60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                // Walk animation
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 100);
    }

    jump(){

    }
    //#endregion
}