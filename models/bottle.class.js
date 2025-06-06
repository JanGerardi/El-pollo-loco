class Bottle extends DrawableObject{
    //#region attributes
    x;
    y = 355;
    width = 70;
    height = 70;
    offset ={
        top: 15,
        right: 15,
        bottom: 10,
        left: 30
    };
    //#endregion

    constructor(imagePath, x){
        super().loadImage(imagePath);
        this.x = x
        this.getRealFrame();
    }
}