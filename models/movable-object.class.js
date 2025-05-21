class MovableObject{
    //#region attributes
    x = 0;
    y = 280;
    img;
    height = 150;
    width = 100;
    speed = 0.1;
    otherDirection = false;
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

    moveRight(){
        console.log("moving right");
        
    }

    moveLeft(){
        setInterval(() => {
            this.x -= this.speed;
        }, 1000/60);
    }
    //#endregion
}