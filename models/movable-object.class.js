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

    playAnimation(images){
        let i = this.currentImage % this.IMAGES_WALKING.length; // 0 % 6 => 0 Rest 0, / 7 % 6 => 2 Rest 1 ... der Rest ist i ,erhöht sich immer um 1
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
        this.otherDirection = false;
    }

    moveLeft(){
        setInterval(() => {
            this.x -= this.speed;
        }, 1000/60);
    }

    jump(){
        this.speedY = 25;
    }
    //#endregion
}