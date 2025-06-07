class World{
    //#region attributes
    character = new Character();
    level = new Level();
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    healthBar = new Healthbar();
    coinBar = new Coinsbar();
    bottleBar = new BottleBar();
    healthBarEndboss = new HealthbarEndboss();
    throwableObjects = [];
    thrownObjects = [];
    //#endregion 

    constructor(canvas, keyboard){  
        this.ctx = canvas.getContext("2d"); // Fläche des Spiels
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw(); // Zeichnung wird ausgeführt
        this.setWorld();
        IntervalHub.setStoppableInterval(this.run, 1000/120);
    };

    //#region methods
    // Übergabe der Variablen der World an die Klassen(hier MovableObjects) welche in SetWorld angegeben sind, um auf diese zugreifen zu können
    // z.B. this.world.keyboard innerhalb der Klasse Character unter der Methode animate()
    setWorld(){
        this.character.world = this; // anstatt this.world.character.world.keyboard, muss nun this.world.keyboard innerhalb der Klasse Character 
                                     //verwendet werden, um auf die Variablen zuzugreifen welche in der übergeordneten Klasse World definiert sind
    };

    run = () => {
        this.checkCollisions();
        this.checkThrowObject();
        this.removeUsedBottles();
        this.endbossTriggered();
        this.endbossReachedCharacter();
    };

    endbossReachedCharacter(){
        if (this.character.x == this.level.endboss.x) {
            this.level.endboss[0].isAttacking = true;
        }
    };

    endbossTriggered(){
        if (this.character.x >= 2000) {
        this.level.endboss[0].triggered = true;
        this.healthBarEndboss.showHealthbar();
        }
    };

    removeUsedBottles(){
        this.thrownObjects = this.thrownObjects.filter(bottle => !bottle.removeFromWorld); // bottle, welche gesplasht ist, wird entfernt
    };

    checkThrowObject(){
        if (this.character.isDead()) {
            return;
        }
        if (this.keyboard.D && this.throwableObjects.length > 0) {
            const bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            bottle.throw();
            SoundHub.playSound(SoundHub.throwingBottle);
            this.thrownObjects.push(bottle);
            this.throwableObjects.shift();
            this.bottleBar.bottleUsed();
            this.bottleBar.setPercentage(this.bottleBar.percentage);
            this.keyboard.D = false;
        }
    };
    
    checkCollisions(){
        this.collisionCharacterWithEnemy();
        this.collisionBottleWithEnemy();
        this.collisionCharacterWithCoin();
        this.collisionCharacterWithBottle();
        this.collisionCharacterWithEndboss();
        this.collisionBottleWithEndboss();
    };

    collisionCharacterWithEnemy(){
        this.level.enemies.forEach((enemy) => {
            if(this.character.isColliding(enemy) && !enemy.isDead()){
                const characterIsFalling = this.character.speedY < 0;
                const characterAboveEnemy = this.character.y + this.character.height <= enemy.y + enemy.height;
                if (characterAboveEnemy && characterIsFalling) {
                    this.characterJumpsOnEnemy(enemy);
                } else{
                    this.enemyDealsDamageToCharacter();
                }
            }
        });
    };

    characterJumpsOnEnemy(enemy){
        enemy.hit();
        this.character.jump();
        SoundHub.playSound(SoundHub.characterJumping);
        SoundHub.playSound(SoundHub.chickenDead, 0.1);
    };

    enemyDealsDamageToCharacter(){
        this.character.hit();
        this.healthBar.setPercentage(this.character.health);
        if (SoundHub.pepeHurt.paused && !this.character.isDead()) {
            SoundHub.playSound(SoundHub.pepeHurt);
        }
    };

    collisionBottleWithEnemy(){
        this.thrownObjects.forEach((bottle) => {
            this.level.enemies.forEach((enemy) => {
                if (bottle.isColliding(enemy) && !enemy.isDead()){
                    if (!bottle.hit) {
                        bottle.hit = true;
                        bottle.currentImage = 0; // splashImageIndex auf 0 setzen, damit die animation immer von Anfang abgespeilt wird
                        SoundHub.playSound(SoundHub.bottleSplashed, 0.1);
                        SoundHub.playSound(SoundHub.chickenDead, 0.1);
                    }
                    enemy.hit();
                }
            });
        });
    };

    collisionCharacterWithCoin(){
        this.level.coins = this.level.coins.filter((coin) => {
            if(this.character.isColliding(coin)){
                this.coinBar.collect();
                SoundHub.playSound(SoundHub.coinCollected);
                this.coinBar.setPercentage(this.coinBar.percentage);
                return false;
            }
            return true;
        });
    };

    collisionCharacterWithBottle(){
        this.level.bottles = this.level.bottles.filter((bottle) => {
            if(this.character.isColliding(bottle)){
                this.bottleBar.collect();
                SoundHub.playSound(SoundHub.bottleCollected);
                this.bottleBar.setPercentage(this.bottleBar.percentage);
                this.throwableObjects.push(bottle);
                return false;
            }
            return true;
        });
    };

    collisionCharacterWithEndboss(){
        this.level.endboss.forEach((boss) => {
            if(this.character.isColliding(boss) && !boss.isDead()){
                    this.character.hitByEndboss();
                    this.healthBar.setPercentage(this.character.health);
                    boss.isAttacking = true;
                    if (SoundHub.pepeHurt.paused && !this.character.isDead()) {
                        SoundHub.playSound(SoundHub.pepeHurt);
                    }
            }
        });
    };

    collisionBottleWithEndboss(){
        this.thrownObjects.forEach((bottle) => {
            this.level.endboss.forEach((boss) => {
                if (bottle.isColliding(boss) && !boss.isDead()) {
                    if (!bottle.hit) {
                    this.bottleSplash(bottle);
                    }
                    boss.hit();
                    this.healthBarEndboss.setPercentage(boss.health);
                }
            });
        });
    };

    bottleSplash(bottle){
        bottle.hit = true;
        bottle.currentImage = 0; // splashImageIndex auf 0 setzen, damit die animation immer von Anfang abgespeilt wird
        SoundHub.playSound(SoundHub.bottleSplashed, 0.1);
        SoundHub.playSound(SoundHub.endbossHurt);
    };

    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Zeichnung wird gelöscht
        this.ctx.translate(this.camera_x, 0); // Kamera bewegt sich innerhalb des Canvas auf der x-Achse nur mit der Bewegung des Character, da
                                              //  wir in der Class Character in der Funktion animate auf camera_x zugreifen
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.ctx.translate(-this.camera_x, 0); // da camera_x translate für die Statusbar zurückgesetzt wird, bleibt es Sticky im Bild, auch wenn die Kamera sich bewegt
        this.addStatusBars();
        this.ctx.translate(this.camera_x, 0);
        this.addCollectibles();
        this.addToMap(this.character);
        this.addAllEnemies();
        this.ctx.translate(-this.camera_x, 0); // hier wird das Canvas wieder auf die Ursprungsposition zurückgeschoben, damit die Zeichnungen nicht verschoben werden
        requestAnimationFrame(() => this.draw()); // draw() wird immer wieder aufgerufen
    };

    addStatusBars(){
        this.addToMap(this.healthBar);
        this.addToMap(this.coinBar); 
        this.addToMap(this.bottleBar);
        this.addToMap(this.healthBarEndboss);
    };

    addCollectibles(){
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
    };

    addAllEnemies(){
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.endboss)
        this.addObjectsToMap(this.thrownObjects);
    };

    addObjectsToMap(objectName){
        objectName.forEach(object => {
            this.addToMap(object);
        });
    };

    addToMap(mObject){
        if (mObject.otherDirection) {
            this.flipImage(mObject);
        }
        mObject.draw(this.ctx); // dem Canvas werden Bilder hinzugefügt
        mObject.drawFrame(this.ctx);

        if (mObject.otherDirection) {
            this.flipImageBack(mObject);
        }
    };

    flipImage(mObject){
        this.ctx.save();  // alle Eigenschaften des Context's werden gespeichert
        this.ctx.translate(mObject.width, 0); // mObject wird um die Breite des jeweiligen mObjects verschoben, da durch spiegeln verschoben 
        this.ctx.scale(-1, 1); // das mObject wird um 180° gespiegelt
        mObject.x = mObject.x * -1; // mObject wird auf der x-Achse gespiegelt
    };

    flipImageBack(mObject){
        mObject.x = mObject.x * -1; // mObject wird wieder auf der x-Achse gespiegelt
        this.ctx.restore(); // alle Eigenschaften des Context's werden wieder hergestellt da => otherDirection = flase
    };
//#endregion
}