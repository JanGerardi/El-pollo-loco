class Bottle extends DrawableObject{
    //#region attributes
    y = 355;
    width = 70;
    height = 70;
    //#endregion

    constructor(imagePath, x){
        super().loadImage(imagePath);
        this.x = x
    }
}