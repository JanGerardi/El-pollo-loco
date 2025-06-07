//#region attributes
let canvas;
let world;
let keyboard = new Keyboard();
let dWasReleased = true;
let gameover = false;
//#endregion

//#region Functions
function init(){
    gameover = false;
    document.getElementById("controllsOverlay").style.display = "none";
    document.getElementById("winOverlay").style.display = "none";
    document.getElementById("loseOverlay").style.display = "none";
    canvas = document.getElementById("canvas");
    world  = new World(canvas, keyboard);
}

function showControlls(){
    document.getElementById("startOverlay").style.display = "none";
    if (SoundHub.themeMusic.paused) {
        SoundHub.themeMusic.volume = 0.01;
        SoundHub.playSound(SoundHub.themeMusic, 0.05);
    }
}

function backToMainScreen(){
    document.getElementById("winOverlay").style.display = "none";
    document.getElementById("loseOverlay").style.display = "none";
    document.getElementById("startOverlay").style.display = "flex";
    document.getElementById("controllsOverlay").style.display = "flex";
}

function lostOverlay(){
    document.getElementById("loseOverlay").style.display = "flex";
    SoundHub.stopAllSounds();
    IntervalHub.stopAllIntervals();
}

function winOverlay(){
    document.getElementById("winOverlay").style.display = "flex";
    SoundHub.stopAllSounds();
    IntervalHub.stopAllIntervals();
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
    if (event.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (event.keyCode == 68) {
        keyboard.D = true;
        dWasReleased = false;
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
    if (event.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (event.keyCode == 68) {
        dWasReleased = true;
        keyboard.D = false;
    }
});
//#endregion