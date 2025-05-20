class MovableObject{
    //#region attributes
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    //#endregion

    //#region methods
    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr){
        arr.forEach((path) => { // für jedes Bild im array IMAGES_WALKING, wird diese Funktion einmal ausgeführt und bekommt die Bezeichnung path
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img; // Bild wird in imageCache gespeichert 
        });
    }

    moveRight(){
        console.log("moving right");
        
    }

    moveLeft(){
        
    }
    //#endregion
}