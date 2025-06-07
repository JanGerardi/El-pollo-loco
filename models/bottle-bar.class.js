class BottleBar extends DrawableObject{
    //#region attributes
    x = 20;
    y = 80;
    width = 180;
    height = 45;
    percentage = 0;
    //#endregion

    constructor(){
        super();
        this.loadImages(ImgHub.IMAGES_BOTTLEBAR);
        this.setPercentage(0);
    };

    //#region methods
    setPercentage(percentage){
        this.percentage = percentage; // index der IMAGES 0 bis 5 ermitteln, damit das richtige IMAGE (Bottleanzeige) angezeigt wird
        let path = ImgHub.IMAGES_BOTTLEBAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    };

    //Ermittlung des Index der IMAGES
    resolveImageIndex(){
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage == 80) {
            return 4;
        } else if (this.percentage == 60) {
            return 3;
        } else if (this.percentage == 40) {
            return 2;
        } else if (this.percentage == 20) {
            return 1;
        } else {
            return 0;
        }
    };

    collect(){
        this.percentage += 20;
    };

    bottleUsed(){
        this.percentage -= 20;
    };
    //#endregion
}