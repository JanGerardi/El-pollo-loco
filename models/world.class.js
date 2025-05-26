class World{
    //#region attributes
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    //#endregion 

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext("2d"); // Fläche des Spiels
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw(); // Zeichnung wird ausgeführt
        this.setWorld();
        this.checkCollisions();
    }

    //#region methods
    // Übergabe der Variablen der World an die Klassen(hier MovableObjects) welche in SetWorld angegeben sind, um auf diese zugreifen zu können
    // z.B. this.world.keyboard innerhalb der Klasse Character unter der Methode animate()
    setWorld(){
        this.character.world = this; // anstatt this.world.character.world.keyboard, muss nun this.world.keyboard innerhalb der Klasse Character 
                                     //verwendet werden, um auf die Variablen zuzugreifen welche in der übergeordneten Klasse World definiert sind
    }
    
    checkCollisions(){
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if(this.character.isColliding(enemy) ){
                    this.character.hit();
                    console.log("Collision with Character, health", this.character.health);
                }
            })
        }, 1000/25);
    }

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Zeichnung wird gelöscht

        this.ctx.translate(this.camera_x, 0); // Kamera bewegt sich innerhalb des Canvas auf der x-Achse nur mit der Bewegung des Character, da
                                              //  wir in der Class Character in der Funktion animate auf camera_x zugreifen
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);

        this.ctx.translate(-this.camera_x, 0); // hier wird das Canvas wieder auf die Ursprungsposition zurückgeschoben, damit die Zeichnungen nicht verschoben werden
        
        // draw() wird immer wieder aufgerufen
        requestAnimationFrame(() => this.draw());
    }

    addObjectsToMap(objectName){
        objectName.forEach(object => {
            this.addToMap(object);
        });
    }

    addToMap(mObject){
        if (mObject.otherDirection) {
            this.flipImage(mObject);
        }
        mObject.draw(this.ctx); // dem Canvas werden Bilder hinzugefügt
        mObject.drawFrame(this.ctx);

        if (mObject.otherDirection) {
            this.flipImageBack(mObject);
        }
    }

    flipImage(mObject){
        this.ctx.save();  // alle Eigenschaften des Context's werden gespeichert
        this.ctx.translate(mObject.width, 0); // mObject wird um die Breite des jeweiligen mObjects verschoben, da durch spiegeln verschoben 
        this.ctx.scale(-1, 1); // das mObject wird um 180° gespiegelt
        mObject.x = mObject.x * -1; // mObject wird auf der x-Achse gespiegelt
    }

    flipImageBack(mObject){
        mObject.x = mObject.x * -1; // mObject wird wieder auf der x-Achse gespiegelt
        this.ctx.restore(); // alle Eigenschaften des Context's werden wieder hergestellt da => otherDirection = flase
    }
//#endregion
}