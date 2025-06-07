class Healthbar extends DrawableObject{
    //#region attributes
    x = 20;
    y = 0;
    width = 180;
    height = 45;
    percentage = 300;
    //#endregion

    constructor(){
        super();
        this.loadImages(ImgHub.IMAGES_HEALTHBAR_PEPE);
        this.setPercentage(300);
    };

    //#region methods
    setPercentage(percentage){
        this.percentage = percentage; // index der IMAGES 0 bis 5 ermitteln, damit das richtige IMAGE (Lebensanzeige) angezeigt wird
        let path = ImgHub.IMAGES_HEALTHBAR_PEPE[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    };

    //Ermittlung des Index der IMAGES
    resolveImageIndex(){
        if (this.percentage == 300) {
            return 5;
        } else if (this.percentage > 240) {
            return 4;
        } else if (this.percentage > 180) {
            return 3;
        } else if (this.percentage > 120) {
            return 2;
        } else if (this.percentage > 60) {
            return 1;
        } else {
            return 0;
        }
    };
    //#endregion
}