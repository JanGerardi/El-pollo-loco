class BackgroundObject extends MovableObject{
    //#region attributes
    width = 720;
    height = 480;
    //#endregion

    constructor(imagePath, x){
        super().loadImage(imagePath);
        this.x =  x;
        this.y = 480 - this.height;
    }

    //#region methods
    //#endregion
}