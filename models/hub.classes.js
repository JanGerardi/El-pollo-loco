class ImgHub{

}

class SoundHub{
    static characterWalking = new Audio("audio/character_walking.wav");

    static allSounds = [SoundHub.characterWalking,]

    static playSound(sound){
        sound.volume = 0.2; // Setzt die Lautstärke auf 0.2 = 20% / 1 = 100%
        sound.currentTime = 0; // Startet den Sound von Anfang
        sound.play();
    }

    static stopSound(sound){
        sound.pause();  // Pausiert den Sound
    }
}

class IntervalHub{

    static intervalIds = [];

    static setStoppableInterval(func, time){
        const id = setInterval(func, time);
        IntervalHub.intervalIds.push(id);
    }

    static stopAllIntervals(){
        IntervalHub.intervalIds.forEach(clearInterval);
    }
}