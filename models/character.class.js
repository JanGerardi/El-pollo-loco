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
    world; // zuordnung der wolrd, damit Character bezug auf world hat und unter anderem die Camera nun dem Character folgt
    offset ={
        top: 110,
        right: 45,
        bottom: 10,
        left: 30
    };
    //#endregion

    constructor(){
        super().loadImage(ImgHub.PEPE.IMAGES_IDLE[0]);
        this.loadImages(ImgHub.PEPE.IMAGES_WALKING);
        this.loadImages(ImgHub.PEPE.IMAGES_JUMPING);
        this.loadImages(ImgHub.PEPE.IMAGES_DEAD);
        this.loadImages(ImgHub.PEPE.IMAGES_HURT);
        this.loadImages(ImgHub.PEPE.IMAGES_IDLE);
        this.loadImages(ImgHub.PEPE.IMAGES_LONG_IDLE);
        this.getRealFrame();
        IntervalHub.setStoppableInterval(this.applyGravity, 1000/25);
        IntervalHub.setStoppableInterval(this.animateMovement, 1000/60);
        IntervalHub.setStoppableInterval(this.animateImages, 1000/10);
    };
    
    //#region methods
    animateMovement = () => {
        if (this.isDead()) {
            return;
        }
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.animateMovementRight();
        } else {
            SoundHub.stopSound(SoundHub.characterWalkingRight);
        }
        if (this.world.keyboard.LEFT && this.x > 0) {
            this.animateMovementLeft();
        } else {
            SoundHub.stopSound(SoundHub.characterWalkingLeft);
        }          
        if (this.world.keyboard.SPACE && !this.isAboveGround()) {
            this.animateMovementJump();
        }
        this.getRealFrame();
        this.world.camera_x = -this.x + 50; // hier wird die "Kamerabewegung", die auf die Bewegung des Characters reagiert, realisiert und um 50px nach rechts gesetzt
    };

    pepeIsSleeping(images){
        if (this.sleeping && images === ImgHub.PEPE.IMAGES_LONG_IDLE) {
            if (SoundHub.pepeSleeping.paused) {
                SoundHub.playSound(SoundHub.pepeSleeping, 0.1);
            }
        } else{
            SoundHub.stopSound(SoundHub.pepeSleeping);
        }
    };

    animateMovementRight(){
        this.otherDirection = false;
        this.moveRight();
        SoundHub.characterWalkingRight.playbackRate = 2.0;  // doppelte Sound-Geschwindigkeit
        if (!this.isAboveGround()) {
            if (SoundHub.characterWalkingRight.paused) {
                SoundHub.playSound(SoundHub.characterWalkingRight, 0.3);
            }
        } else {
            SoundHub.stopSound(SoundHub.characterWalkingRight);
        }
    };

    animateMovementLeft(){
        this.otherDirection = true;
        this.moveLeft();
        SoundHub.characterWalkingLeft.playbackRate = 2.0;
        if (!this.isAboveGround()) {
            if (SoundHub.characterWalkingLeft.paused) {
                SoundHub.playSound(SoundHub.characterWalkingLeft, 0.3);
            }
        } else {
            SoundHub.stopSound(SoundHub.characterWalkingLeft);
        }
    };

    animateMovementJump(){
        this.jump();
        SoundHub.playSound(SoundHub.characterJumping);
    };

    animateImages = () => {
        if (this.isDead() && !gameover) {
            this.addLoseSequenz();
        } else if (this.isHurt()){
            this.playAnimation(ImgHub.PEPE.IMAGES_HURT);
        } else if (this.isAboveGround()) {
            this.playAnimation(ImgHub.PEPE.IMAGES_JUMPING);
        } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT){
            this.playAnimation(ImgHub.PEPE.IMAGES_WALKING);
        } else if (this.sleeping){
            this.playAnimation(ImgHub.PEPE.IMAGES_LONG_IDLE);
        }else{
            this.playAnimation(ImgHub.PEPE.IMAGES_IDLE);
        }
    };

    addLoseSequenz(){
        this.playAnimation(ImgHub.PEPE.IMAGES_DEAD);
        setTimeout(() => {
            lostOverlay();
            gameover = true;
        }, 350);
    };
    //#endregion
}