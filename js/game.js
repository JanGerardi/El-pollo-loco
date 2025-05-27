//#region attributes
let canvas;
let world;
let keyboard = new Keyboard();
//#endregion

function init(){
    canvas = document.getElementById("canvas");
    world  = new World(canvas, keyboard);
}

// Keyboard-Event Taste gedrückt
window.addEventListener("keydown", (event) => {  //Keyboard-Event wird ermittelt "keydown" und geben den parameter event

    if (event.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (event.keyCode == 38) {
        keyboard.UP = true;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = true;
    }
});

// Keyboard-Event Taste losgelassen
window.addEventListener("keyup", (event) => {  //Keyboard-Event wird ermittelt "keyup" und geben den parameter event

    if (event.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (event.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (event.keyCode == 38) {
        keyboard.UP = false;
    }
    if (event.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = false;
    }
});