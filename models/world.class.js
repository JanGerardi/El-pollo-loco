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
    keyboard;
    //#endregion 

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext("2d"); // Fläche des Spiels
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw(); // Zeichnung wird ausgeführt
        this.setWorld();
    }

    //#region methods
    // Übergabe der Variablen der World an die Klassen(hier MovableObjects) welche in SetWorld angegeben sind, um auf diese zugreifen zu können
    // z.B. this.world.keyboard innerhalb der Klasse Character unter der Methode animate()
    setWorld(){
        this.character.world = this; // anstatt this.world.character.world.keyboard, muss nun this.world.keyboard innerhalb der Klasse Character 
                                     //verwendet werden, um auf die Variablen zuzugreifen welche in der übergeordneten Klasse World definiert sind
    }
    
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