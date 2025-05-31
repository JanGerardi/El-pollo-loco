class Bottle extends DrawableObject{
    //#region attributes
    IMAGES_BOTTLE = [
        "img/6_salsa_bottle/1_salsa_bottle_on_ground.png"        
    ];
    y = 360;
    width = 70;
    height = 70;
    //#endregion

    constructor(){
        super().loadImage(this.IMAGES_BOTTLE);
        this.x = 300 + Math.random() * 1800; // zwischen 200px und 700px;
    }
}