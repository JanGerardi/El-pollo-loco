class Coin extends DrawableObject{
    //#region attributes
    x;
    y = 170;
    width = 100;
    height = 100;
    //#endregion

    constructor(imagePath, x){
        super().loadImage(imagePath);
        this.x = x;
    }
}