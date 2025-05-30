class Endboss extends MovableObject{
    //#region attributes
    height = 350;
    width = 300;
    y = 100;

    IMAGES_WALKING = [
        "img/4_enemie_boss_chicken/2_alert/G5.png",
        "img/4_enemie_boss_chicken/2_alert/G6.png",
        "img/4_enemie_boss_chicken/2_alert/G7.png",
        "img/4_enemie_boss_chicken/2_alert/G8.png",
        "img/4_enemie_boss_chicken/2_alert/G9.png",
        "img/4_enemie_boss_chicken/2_alert/G10.png",
        "img/4_enemie_boss_chicken/2_alert/G11.png",
        "img/4_enemie_boss_chicken/2_alert/G12.png",
    ];
    //#endregion

    constructor(){
        super().loadImage(this.IMAGES_WALKING[0])
        this.loadImages(this.IMAGES_WALKING);
        this.x = 2550;
        IntervalHub.setStoppableInterval(this.animateImages, 1000/5);
    }

    //#region methods
    animateImages= () => {
        this.playAnimation(this.IMAGES_WALKING);
    };
    //#endregion
}