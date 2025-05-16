class MovableObject{
    x;
    y;
    img;
    height;
    width;

    loadImage(path){
        this.img = new Image();
        this.img.scr = path;
    }

    moveRight(){
        console.log("moving right");
        
    }

    moveLeft(){
        
    }
}