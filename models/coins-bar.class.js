class Coinsbar extends DrawableObject{
    //#region attributes
    IMAGES_COINSBAR = [
        "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png"
    ];
    percentage = 100;
    //#endregion

    constructor(){
        super();
        this.loadImages(this.IMAGES_COINSBAR);
        this.x = 20;
        this.y = 40;
        this.width = 180;
        this.height = 45;
        this.setPercentage(100);
    }

    //#region methods
    setPercentage(percentage){
        this.percentage = percentage; // index der IMAGES 0 bis 5 ermitteln, damit das richtige IMAGE (Coinanzeige) angezeigt wird
        let path = this.IMAGES_COINSBAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    //Ermittlung des Index der IMAGES
    resolveImageIndex(){
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
    //#endregion
}