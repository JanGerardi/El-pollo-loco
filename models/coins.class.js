class Coins extends DrawableObject{
    //#region attributes
    IMAGES_COIN = [
        "img/8_coin/coin_1.png"        
    ];
    //#endregion

    constructor(){
        super();
        this.loadImage(this.IMAGES_COIN);
        this.x = 20;
        this.y = 80;
        this.width = 180;
        this.height = 45;
        this.setPercentage(100);
    }
}