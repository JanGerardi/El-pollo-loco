class DrawableObject{
    //#region attributes
    img;
    imageCache = {};
    currentImage = 0;
    //#endregion

    //#region methods
    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx){
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss || this instanceof SmallChicken
             || this instanceof Coin || this instanceof Bottle || this instanceof ThrowableObject) { // nur diesen Klassen wird die Border hinzugefügt
            ctx.beginPath(); // Beginn eines neuen Pfades (Zeichnung)
            ctx.lineWidth = "2";
            ctx.strokeStyle = "blue";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke(); // Ausführung der Zeichnung, muss am Ende des Pfades stehen
        }
    }

    //animation von Objekten
    loadImages(arr){
        arr.forEach((path) => { // für jedes Bild im array z.B. IMAGES_WALKING, wird diese Funktion einmal ausgeführt und bekommt die Bezeichnung path
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img; // Bild wird in imageCache gespeichert 
        });
    }
    //#endregion
}