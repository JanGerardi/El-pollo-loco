class MovableObject{
    //#region attributes
    x = 0;
    y = 280;
    img;
    height = 150;
    width = 100;
    speed = 0.1;
    otherDirection = false;
    speedY = 0; // Geschwindigkeit von hoch und runter
    acceleration = 2.5; // Beschleunigung von speedY
    health = 100;
    lastHit = 0;
    imageCache = {};
    currentImage = 0;
    //#endregion

    //#region methods
    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    //animation von Objekten
    loadImages(arr){
        arr.forEach((path) => { // für jedes Bild im array z.B. IMAGES_WALKING, wird diese Funktion einmal ausgeführt und bekommt die Bezeichnung path
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img; // Bild wird in imageCache gespeichert 
        });
    }

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx){
        if (this instanceof Character || this instanceof Chicken) { // nur der Klasse Character oder Chicken wird die Border hinzugefügt
            ctx.beginPath(); // Beginn eines neuen Pfades (Zeichnung)
            ctx.lineWidth = "2";
            ctx.strokeStyle = "blue";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke(); // Ausführung der Zeichnung, muss am Ende des Pfades stehen
        }
    }

    isColliding(mObject){
        return this.x < mObject.x + mObject.width && // Prüft, ob die linke Seite des ersten Objekts links von der rechten Seite des anderen Objekts ist
            this.x + this.width > mObject.x && // Prüft, ob die rechte Seite des ersten Objekts rechts von der linken Seite des anderen Objekts ist
            this.y < mObject.y + mObject.height && // Prüft, ob die obere Seite des ersten Objekts oberhalb der unteren Seite des anderen Objekts ist
            this.y + this.height > mObject.y; // Prüft, ob die untere Seite des ersten Objekts unterhalb der oberen Seite des anderen Objekts ist
    }

    hit(){
        this.health -= 1;
        if (this.health < 0) {
            this.health = 0;
        } else {
            this.lastHit = new Date().getTime(); // es wird der Zeitpunkt in ms gespeichert, an dem der letzte hit entstanden ist (Zeitrechnung ab 1.1.1970)
        }
    }

    isHurt(){
        let timepassed = new Date().getTime() - this.lastHit; // Differenz zwischen dem letzten hit und der aktuellen Zeit
        timepassed = timepassed / 1000; // Differenz wird nun in sekunden umgewandelt
        return timepassed < 0.5; // der letzte hit hat in den letzten 5 Sekunden stattgefunden und ergibt true
    }

    isDead(){
        return this.health == 0;
    }

    playAnimation(images){
        let i = this.currentImage % images.length; // 0 % 6 => 0 Rest 0, / 7 % 6 => 2 Rest 1 ... der Rest ist i ,erhöht sich immer um 1
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    // Fall implementieren
    applyGravity(){
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration; // Objekt wird entsprechend der acceleration und Wiederholungsrate der Methode, auf die y-Achse, welche in
                                                  // der Funktion isAboveGround festgelegt wurde, wieder zurück gesetzt (Fall)
            }
        }, 1000/25);
    }

    isAboveGround(){
        return this.y < 180; // y-Achse des Bodens 
    }

    moveRight(){
        this.x += this.speed;
    }

    moveLeft(){
        this.x -= this.speed;
    }

    jump(){
        this.speedY = 25;
    }
    //#endregion
}