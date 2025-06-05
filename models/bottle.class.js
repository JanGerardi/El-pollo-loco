class Bottle extends DrawableObject{
    //#region attributes
    x;
    y = 355;
    width = 70;
    height = 70;
    rX;
    rY;
    rH;
    rW;
    offset ={
        top: 60,
        right: 40,
        bottom: 55,
        left: 55
    };
    //#endregion

    constructor(imagePath, x){
        super().loadImage(imagePath);
        this.x = x
        this.getRealFrame();
    }

    getRealFrame(){
        this.rX = this.x + this.offset.left;
        this.rY = this.y + this.offset.top;
        this.rW = this.width - this.offset.left - this.offset.right;
        this.rH = this.height - this.offset.top - this.offset.bottom;
    }
}