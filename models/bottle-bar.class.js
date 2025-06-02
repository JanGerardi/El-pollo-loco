class BottleBar extends DrawableObject{
    //#region attributes
    IMAGES_BOTTLEBAR = [
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png",        
    ];
    percentage = 0;
    //#endregion

    constructor(){
        super();
        this.loadImages(this.IMAGES_BOTTLEBAR);
        this.x = 20;
        this.y = 80;
        this.width = 180;
        this.height = 45;
        this.setPercentage(0);
    }

    //#region methods
    setPercentage(percentage){
        this.percentage = percentage; // index der IMAGES 0 bis 5 ermitteln, damit das richtige IMAGE (Bottleanzeige) angezeigt wird
        let path = this.IMAGES_BOTTLEBAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

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
    }

    collect(){
        this.percentage += 20;
    }

    //#endregion
}