class Endboss extends MovableObject{
    //#region attributes
    height = 350;
    width = 300;
    y = 100;
    x = 2550;
    health = 300;
    triggered = false;
    isAttacking = false;
    speed = 5;
    offset ={
        top: 60,
        right: 40,
        bottom: 30,
        left: 20
    };
    //#endregion

    constructor(){
        super().loadImage(ImgHub.ENDBOSS.IMAGES_ALERT[0])
        this.loadImages(ImgHub.ENDBOSS.IMAGES_ALERT);
        this.loadImages(ImgHub.ENDBOSS.IMAGES_WALKING);
        this.loadImages(ImgHub.ENDBOSS.IMAGES_ATTACK);
        this.loadImages(ImgHub.ENDBOSS.IMAGES_HURT);
        this.loadImages(ImgHub.ENDBOSS.IMAGES_DEAD);
        this.getRealFrame();
        IntervalHub.setStoppableInterval(this.animateImages, 1000/5);
        IntervalHub.setStoppableInterval(this.animateMovement, 1000/60);
    };

    //#region methods
    animateMovement = () => {
        if (this.triggered && !this.isDead()){
            this.animateMovementLeft();
        } else{
            SoundHub.stopSound(SoundHub.endbossWalking);
            SoundHub.stopSound(SoundHub.endbossAggro);
        }
        this.getRealFrame();
    };

    animateMovementLeft(){
        this.moveLeft();
        if (SoundHub.endbossWalking.paused) {
            SoundHub.endbossWalking.playbackRate = 2.5;
            SoundHub.playSound(SoundHub.endbossWalking, 0.3);
        }
        if (SoundHub.endbossAggro.paused) {
        SoundHub.playSound(SoundHub.endbossAggro, 0.3);
        }
    };

    animateImages = () => {
        if (this.isDead() && !gameover) {
            this.addWinSequenz();
        } else if (this.isHurt()){
            this.playAnimation(ImgHub.ENDBOSS.IMAGES_HURT);
        } else if (this.isAttacking){
            this.playAnimation(ImgHub.ENDBOSS.IMAGES_ATTACK);
        } else if (this.triggered){
            this.playAnimation(ImgHub.ENDBOSS.IMAGES_WALKING);
        } else {
            this.playAnimation(ImgHub.ENDBOSS.IMAGES_ALERT);
        }
    };

    moveLeft(){
        return this.x -= this.speed;
    };

    addWinSequenz(){
        this.playAnimation(ImgHub.ENDBOSS.IMAGES_DEAD);
        if (SoundHub.chickenDead.paused) {
        SoundHub.playSound(SoundHub.chickenDead, 0.1);
        }
        setTimeout(() => {
            winOverlay();
            gameover = true;
        }, 500);
    };
    //#endregion
}