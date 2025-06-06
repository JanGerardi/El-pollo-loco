class ImgHub{

}

class SoundHub{
    static characterWalkingRight = new Audio("audio/character_walking.wav");
    static characterWalkingLeft = new Audio("audio/character_walking.wav");
    static characterJumping = new Audio("audio/character_jumping.wav");
    static throwingBottle = new Audio("audio/bottle_throwing.mp3");
    static bottleSplashed = new Audio("audio/bottle_splashed.mp3");
    static pepeHurt = new Audio("audio/pepe_hurt.mp3");
    static coinCollected = new Audio("audio/coin_collected.mp3");
    static bottleCollected = new Audio("audio/bottle_collected.mp3");
    static pepeSleeping = new Audio("audio/pepe_sleeping.mp3");
    static chickenDead = new Audio("audio/chicken_dead.mp3");
    static endbossWalking = new Audio("audio/endboss_walking.mp3");
    static endbossAggro = new Audio("audio/endboss_aggro.mp3");
    static endbossHurt = new Audio("audio/endboss_hurt.mp3");

    static allSounds = [SoundHub.characterWalkingRight, SoundHub.characterWalkingLeft, SoundHub.characterJumping, SoundHub.throwingBottle, SoundHub.bottleSplashed,
        SoundHub.pepeHurt, SoundHub.coinCollected, SoundHub.bottleCollected, SoundHub.pepeSleeping, SoundHub.chickenDead, SoundHub.endbossWalking,
        SoundHub.endbossAggro, SoundHub.endbossHurt
    ]

    static playSound(sound){
        sound.volume = 0.2; // Setzt die Lautstärke auf 0.2 = 20% / 1 = 100%
        sound.currentTime = 0; // Startet den Sound von Anfang
        sound.play();
    }

    static stopSound(sound){
        sound.pause();  // Pausiert den Sound
    }

    static stopAllSounds() {
        SoundHub.allSounds.forEach(sound => {
            sound.pause();  // Pausiert alle Sounds in allSounds
        });
        // document.getElementById('volume').value = 0.2;
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