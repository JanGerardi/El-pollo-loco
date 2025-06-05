class Coin extends DrawableObject{
    //#region attributes
    x;
    y = 170;
    width = 100;
    height = 100;
    rX;
    rY;
    rH;
    rW;
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
    }

    getRealFrame(){
        this.rX = this.x + this.offset.left;
        this.rY = this.y + this.offset.top;
        this.rW = this.width - this.offset.left - this.offset.right;
        this.rH = this.height - this.offset.top - this.offset.bottom;
    }
}