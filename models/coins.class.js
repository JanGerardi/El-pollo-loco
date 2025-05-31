class Coin extends DrawableObject{
    //#region attributes
    IMAGES_COIN = [
        "img/8_coin/coin_1.png"        
    ];
    y = 180;
    width = 100;
    height = 100;
    //#endregion

    constructor(){
        super().loadImage(this.IMAGES_COIN);
        this.x = 300 + Math.random() * 1800; // zwischen 200px und 700px;
    }
}