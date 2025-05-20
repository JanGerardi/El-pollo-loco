class World{
    //#region attributes
    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];
    clouds = [
        new Cloud()
    ];
    backroundObjects = [
        new BackgroundObject("img/5_background/layers/air.png", 0),
        new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 0),
        new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 0),
        new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 0),
    ]
    canvas;
    ctx;
    //#endregion 

    constructor(canvas){
        this.ctx = canvas.getContext("2d"); // Fläche des Spiels
        this.canvas = canvas;
        this.draw(); // Zeichnung wird ausgeführt
    }

    //#region methods
    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Zeichnung wird gelöscht

        this.addObjectsToMap(this.backroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.clouds);
        
        // draw() wird immer wieder aufgerufen
        requestAnimationFrame(() => this.draw());
    }

    addObjectsToMap(objectName){
        objectName.forEach(object => {
            this.addToMap(object);
        });
    }

    addToMap(object){
        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
    }
    //#endregion
}