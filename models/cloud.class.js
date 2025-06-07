class Cloud extends MovableObject{
    //#region attributes
    x;
    y = 20;
    width = 500;
    height = 250;
    //#endregion
    
    constructor(imagePath, x){
        super().loadImage(imagePath)
        this.x = x;
    };
}