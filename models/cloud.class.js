class Cloud extends MovableObject{
    //#region attributes
    x;
    y = 20;
    width = 500;
    height = 250;
    //#endregion
    
    constructor(){
        super().loadImage("img/5_background/layers/4_clouds/1.png")
        this.x = Math.random() * 700; // zwischen 0px und 700px;
        this.animate();
    }

    //#region methods
    animate(){
        this.moveLeft();
    }
    //#endregion
}