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
    if (SoundHub.themeMusic.paused) {
        SoundHub.themeMusic.volume = 0.01;
        SoundHub.themeMusic.loop = true;
        SoundHub.playSound(SoundHub.themeMusic, 0.05);
    }
}

function showControlls(){
    document.getElementById("startOverlay").style.display = "none";
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
    if (event.keyCode == 77) {
        keyboard.MUTE = true;
        SoundHub.toggleMute();
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
    if (event.keyCode == 77) {
        keyboard.MUTE = false;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (event.keyCode == 68) {
        dWasReleased = true;
        keyboard.D = false;
    }
});

// Keyboard-Event responsive
window.onload = () => {
    document.getElementById("muteButton").addEventListener("touchstart", (e) => {
        e.preventDefault(); // verhindert Doppelausführung
        SoundHub.toggleMute();
    });

    document.getElementById("controllsButton").addEventListener("touchstart", (e) => {
        e.preventDefault();
        showControlls();
    });

    document.getElementById("startButton").addEventListener("touchstart", (e) => {
        e.preventDefault();
        init();
    });

    document.querySelectorAll("#backToMainScreenButton").forEach(btn => {
        btn.addEventListener("touchstart", (e) => {
            e.preventDefault();
            backToMainScreen();
        });
    });

    document.querySelectorAll("#restartGameButton").forEach(btn => {
        btn.addEventListener("touchstart", (e) => {
            e.preventDefault();
            init();
        });
    });
    
    document.getElementById("touchWalkLeftButton").addEventListener("touchstart", (e) =>{
        e.preventDefault();
        keyboard.LEFT = true;
    });

    document.getElementById("touchWalkRightButton").addEventListener("touchstart", (e) =>{
        e.preventDefault();
        keyboard.RIGHT = true;
    });

    document.getElementById("touchJumpButton").addEventListener("touchstart", (e) =>{
        e.preventDefault();
        keyboard.SPACE = true;
    });

    document.getElementById("touchThrowBottleButton").addEventListener("touchstart", (e) =>{
        e.preventDefault();
        keyboard.D = true;
        dWasReleased = false;
    });

    document.getElementById("touchWalkLeftButton").addEventListener("touchend", (e) =>{
        e.preventDefault();
        keyboard.LEFT = false;
    });

    document.getElementById("touchWalkRightButton").addEventListener("touchend", (e) =>{
        e.preventDefault();
        keyboard.RIGHT = false;
    });

    document.getElementById("touchJumpButton").addEventListener("touchend", (e) =>{
        e.preventDefault();
        keyboard.SPACE = false;
    });

    document.getElementById("touchThrowBottleButton").addEventListener("touchend", (e) =>{
        e.preventDefault();
        keyboard.D = false;
        dWasReleased = true;
    });
};
//#endregion