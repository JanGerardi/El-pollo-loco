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
    IMAGES_ALERT = [
        "img/4_enemie_boss_chicken/2_alert/G5.png",
        "img/4_enemie_boss_chicken/2_alert/G6.png",
        "img/4_enemie_boss_chicken/2_alert/G7.png",
        "img/4_enemie_boss_chicken/2_alert/G8.png",
        "img/4_enemie_boss_chicken/2_alert/G9.png",
        "img/4_enemie_boss_chicken/2_alert/G10.png",
        "img/4_enemie_boss_chicken/2_alert/G11.png",
        "img/4_enemie_boss_chicken/2_alert/G12.png",
    ];
    IMAGES_WALKING = [
        "img/4_enemie_boss_chicken/1_walk/G1.png",
        "img/4_enemie_boss_chicken/1_walk/G2.png",
        "img/4_enemie_boss_chicken/1_walk/G3.png",
        "img/4_enemie_boss_chicken/1_walk/G4.png"
    ];
    IMAGES_ATTACK = [
        "img/4_enemie_boss_chicken/3_attack/G13.png",
        "img/4_enemie_boss_chicken/3_attack/G14.png",
        "img/4_enemie_boss_chicken/3_attack/G15.png",
        "img/4_enemie_boss_chicken/3_attack/G16.png",
        "img/4_enemie_boss_chicken/3_attack/G17.png",
        "img/4_enemie_boss_chicken/3_attack/G18.png",
        "img/4_enemie_boss_chicken/3_attack/G19.png",
        "img/4_enemie_boss_chicken/3_attack/G20.png",
    ];
    IMAGES_HURT = [
        "img/4_enemie_boss_chicken/4_hurt/G21.png",
        "img/4_enemie_boss_chicken/4_hurt/G22.png",
        "img/4_enemie_boss_chicken/4_hurt/G23.png",
    ];
    IMAGES_DEAD = [
        "img/4_enemie_boss_chicken/5_dead/G24.png",
        "img/4_enemie_boss_chicken/5_dead/G25.png",
        "img/4_enemie_boss_chicken/5_dead/G26.png",
    ];
    offset ={
        top: 60,
        right: 40,
        bottom: 30,
        left: 20
    };
    //#endregion

    constructor(){
        super().loadImage(this.IMAGES_ALERT[0])
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.getRealFrame();
        IntervalHub.setStoppableInterval(this.animateImages, 1000/5);
        IntervalHub.setStoppableInterval(this.animateMovement, 1000/60);
    }

    //#region methods
    animateMovement = () => {
        if (this.triggered && !this.isDead()){
            this.moveLeft();
            if (SoundHub.endbossWalking.paused) {
                SoundHub.endbossWalking.playbackRate = 2.5;
                SoundHub.playSound(SoundHub.endbossWalking);
            }
            if (SoundHub.endbossAggro.paused) {
            SoundHub.playSound(SoundHub.endbossAggro);
            }
        } else{
            SoundHub.stopSound(SoundHub.endbossWalking);
            SoundHub.stopSound(SoundHub.endbossAggro);
        }
        this.getRealFrame();
    };

    animateImages = () => {
        if (this.isDead() && !gameover) {
            this.playAnimation(this.IMAGES_DEAD);
            winOverlay();
            gameover = true;
        } else if (this.isHurt()){
            this.playAnimation(this.IMAGES_HURT);
        } else if (this.isAttacking){
            this.playAnimation(this.IMAGES_ATTACK);
        } else if (this.triggered){
            this.playAnimation(this.IMAGES_WALKING);
        } else {
            this.playAnimation(this.IMAGES_ALERT);
        }
    };

    moveLeft(){
        return this.x -= this.speed;
    }
    //#endregion
}