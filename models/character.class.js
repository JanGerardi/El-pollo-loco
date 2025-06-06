class Character extends MovableObject{
    //#region attributes
    x = 0;
    y = 180;
    height = 250;
    width = 150;
    speed = 8;
    health = 300;
    sleeping = false;
    idleImageCycle = 0;
    IMAGES_WALKING = [
        "img/2_character_pepe/2_walk/W-21.png",
        "img/2_character_pepe/2_walk/W-22.png",
        "img/2_character_pepe/2_walk/W-23.png",
        "img/2_character_pepe/2_walk/W-24.png",
        "img/2_character_pepe/2_walk/W-25.png",
        "img/2_character_pepe/2_walk/W-26.png"
    ];
    IMAGES_JUMPING = [
        "img/2_character_pepe/3_jump/J-31.png",
        "img/2_character_pepe/3_jump/J-32.png",
        "img/2_character_pepe/3_jump/J-33.png",
        "img/2_character_pepe/3_jump/J-34.png",
        "img/2_character_pepe/3_jump/J-35.png",
        "img/2_character_pepe/3_jump/J-36.png",
        "img/2_character_pepe/3_jump/J-37.png",
        "img/2_character_pepe/3_jump/J-38.png",
        "img/2_character_pepe/3_jump/J-39.png"
    ];
    IMAGES_DEAD = [
        "img/2_character_pepe/5_dead/D-51.png",
        "img/2_character_pepe/5_dead/D-52.png",
        "img/2_character_pepe/5_dead/D-53.png",
        "img/2_character_pepe/5_dead/D-54.png",
        "img/2_character_pepe/5_dead/D-55.png",
        "img/2_character_pepe/5_dead/D-56.png",
        "img/2_character_pepe/5_dead/D-57.png"
    ];
    IMAGES_HURT = [
        "img/2_character_pepe/4_hurt/H-41.png",
        "img/2_character_pepe/4_hurt/H-42.png",
        "img/2_character_pepe/4_hurt/H-43.png"
    ];
    IMAGES_IDLE = [
        "img/2_character_pepe/1_idle/idle/I-1.png",
        "img/2_character_pepe/1_idle/idle/I-2.png",
        "img/2_character_pepe/1_idle/idle/I-3.png",
        "img/2_character_pepe/1_idle/idle/I-4.png",
        "img/2_character_pepe/1_idle/idle/I-5.png",
        "img/2_character_pepe/1_idle/idle/I-6.png",
        "img/2_character_pepe/1_idle/idle/I-7.png",
        "img/2_character_pepe/1_idle/idle/I-8.png",
        "img/2_character_pepe/1_idle/idle/I-9.png",
        "img/2_character_pepe/1_idle/idle/I-10.png",
    ];
    IMAGES_LONG_IDLE = [
        "img/2_character_pepe/1_idle/long_idle/I-11.png",
        "img/2_character_pepe/1_idle/long_idle/I-12.png",
        "img/2_character_pepe/1_idle/long_idle/I-13.png",
        "img/2_character_pepe/1_idle/long_idle/I-14.png",
        "img/2_character_pepe/1_idle/long_idle/I-15.png",
        "img/2_character_pepe/1_idle/long_idle/I-16.png",
        "img/2_character_pepe/1_idle/long_idle/I-17.png",
        "img/2_character_pepe/1_idle/long_idle/I-18.png",
        "img/2_character_pepe/1_idle/long_idle/I-19.png",
        "img/2_character_pepe/1_idle/long_idle/I-20.png"
    ];
    world; // zuordnung der wolrd, damit Character bezug auf world hat und unter anderem die Camera nun dem Character folgt
    offset ={
        top: 110,
        right: 45,
        bottom: 10,
        left: 30
    };
    //#endregion

    constructor(){
        super().loadImage("img/2_character_pepe/1_idle/idle/I-1.png");
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.getRealFrame();
        IntervalHub.setStoppableInterval(this.applyGravity, 1000/25);
        IntervalHub.setStoppableInterval(this.animateMovement, 1000/60);
        IntervalHub.setStoppableInterval(this.animateImages, 1000/10);
    }
    
    //#region methods
    animateMovement = () => {
        if (this.isDead()) {
            return;
        }
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.otherDirection = false;
            this.moveRight();
            SoundHub.characterWalkingRight.playbackRate = 2.0;  // doppelte Sound-Geschwindigkeit
            if (!this.isAboveGround()) {
                if (SoundHub.characterWalkingRight.paused) {
                    SoundHub.playSound(SoundHub.characterWalkingRight);
                }
            } else {
                SoundHub.stopSound(SoundHub.characterWalkingRight);
            }
        } else {
            SoundHub.stopSound(SoundHub.characterWalkingRight);
        }
        if (this.world.keyboard.LEFT && this.x > 0) {
            this.otherDirection = true;
            this.moveLeft();
            SoundHub.characterWalkingLeft.playbackRate = 2.0;
            if (!this.isAboveGround()) {
                if (SoundHub.characterWalkingLeft.paused) {
                    SoundHub.playSound(SoundHub.characterWalkingLeft);
                }
            } else {
                SoundHub.stopSound(SoundHub.characterWalkingLeft);
            }
        } else {
            SoundHub.stopSound(SoundHub.characterWalkingLeft);
        }          
        if (this.world.keyboard.SPACE && !this.isAboveGround()) {
            this.jump();
            SoundHub.playSound(SoundHub.characterJumping);
            }
        this.getRealFrame();
        this.world.camera_x = -this.x + 50; // hier wird die "Kamerabewegung", die auf die Bewegung des Characters reagiert, realisiert und um 50px nach rechts gesetzt
    };

    pepeIsSleeping(images){
        if (this.sleeping && images === this.IMAGES_LONG_IDLE) {
            if (SoundHub.pepeSleeping.paused) {
                SoundHub.playSound(SoundHub.pepeSleeping);
            }
        } else{
            SoundHub.stopSound(SoundHub.pepeSleeping);
        }
    }

    animateImages = () => {
        if (this.isDead() && !gameover) {
            this.playAnimation(this.IMAGES_DEAD);
            lostOverlay();
            gameover = true;
        } else if (this.isHurt()){
            this.playAnimation(this.IMAGES_HURT);
        } else if (this.isAboveGround()) {
            this.playAnimation(this.IMAGES_JUMPING);
        } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT){
            this.playAnimation(this.IMAGES_WALKING);
        } else if (this.sleeping){
            this.playAnimation(this.IMAGES_LONG_IDLE);
        }else{
            this.playAnimation(this.IMAGES_IDLE);
        }
    };
    //#endregion
}