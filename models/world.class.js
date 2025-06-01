class World{
    //#region attributes
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    healthBar = new Healthbar();
    coinBar = new Coinsbar();
    BottleBar = new BottleBar();
    throwableObjects = [];
    //#endregion 

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext("2d"); // Fläche des Spiels
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw(); // Zeichnung wird ausgeführt
        this.setWorld();
        IntervalHub.setStoppableInterval(this.run, 1000/25);
    }

    //#region methods
    // Übergabe der Variablen der World an die Klassen(hier MovableObjects) welche in SetWorld angegeben sind, um auf diese zugreifen zu können
    // z.B. this.world.keyboard innerhalb der Klasse Character unter der Methode animate()
    setWorld(){
        this.character.world = this; // anstatt this.world.character.world.keyboard, muss nun this.world.keyboard innerhalb der Klasse Character 
                                     //verwendet werden, um auf die Variablen zuzugreifen welche in der übergeordneten Klasse World definiert sind
    }

    run = () => {
        this.checkCollisions();
        this.checkThrowObject();
    }

    checkThrowObject(){
        if (this.keyboard.D) {
            const bottle = new ThrowableObject(this.character.x + 100, this.character.y +100);
            this.throwableObjects.push(bottle);
        }
    }
    
    checkCollisions(){
        this.level.enemies.forEach((enemy) => {
            if(this.character.isColliding(enemy)){
                this.character.hit();
                this.healthBar.setPercentage(this.character.health)
            }
        });
        this.throwableObjects.forEach((bottle) => {
            this.level.enemies.forEach((enemy) => {
                if (bottle.isColliding(enemy)){
                    bottle.hit = true;
                    enemy.hit();
                }
            });
        });
    };

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Zeichnung wird gelöscht

        this.ctx.translate(this.camera_x, 0); // Kamera bewegt sich innerhalb des Canvas auf der x-Achse nur mit der Bewegung des Character, da
                                              //  wir in der Class Character in der Funktion animate auf camera_x zugreifen
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.healthBar);
        this.addToMap(this.coinBar); // da camera_x translate für die Statusbar zurückgesetzt wird, bleibt es Sticky im Bild, auch wenn die Kamera sich bewegt
        this.addToMap(this.BottleBar);
        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.collectibles);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0); // hier wird das Canvas wieder auf die Ursprungsposition zurückgeschoben, damit die Zeichnungen nicht verschoben werden

        requestAnimationFrame(() => this.draw()); // draw() wird immer wieder aufgerufen
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