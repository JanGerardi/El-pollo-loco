class Coin extends DrawableObject{
    //#region attributes
    x;
    y = 170;
    width = 100;
    height = 100;
    offset ={
        top: 35,
        right: 35,
        bottom: 35,
        left: 35
    };
    //#endregion

    constructor(imagePath, x){
        super().loadImage(imagePath);
        this.x = x;
        this.getRealFrame();
    };
}