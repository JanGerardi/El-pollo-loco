class ImgHub{
    static IMAGES_BOTTLEBAR = [
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png"
    ];
    static PEPE ={
        IMAGES_WALKING : [
            "img/2_character_pepe/2_walk/W-21.png",
            "img/2_character_pepe/2_walk/W-22.png",
            "img/2_character_pepe/2_walk/W-23.png",
            "img/2_character_pepe/2_walk/W-24.png",
            "img/2_character_pepe/2_walk/W-25.png",
            "img/2_character_pepe/2_walk/W-26.png"
        ],
        IMAGES_JUMPING : [
            "img/2_character_pepe/3_jump/J-31.png",
            "img/2_character_pepe/3_jump/J-32.png",
            "img/2_character_pepe/3_jump/J-33.png",
            "img/2_character_pepe/3_jump/J-34.png",
            "img/2_character_pepe/3_jump/J-35.png",
            "img/2_character_pepe/3_jump/J-36.png",
            "img/2_character_pepe/3_jump/J-37.png",
            "img/2_character_pepe/3_jump/J-38.png",
            "img/2_character_pepe/3_jump/J-39.png"
        ],
        IMAGES_DEAD : [
            "img/2_character_pepe/5_dead/D-51.png",
            "img/2_character_pepe/5_dead/D-52.png",
            "img/2_character_pepe/5_dead/D-53.png",
            "img/2_character_pepe/5_dead/D-54.png",
            "img/2_character_pepe/5_dead/D-55.png",
            "img/2_character_pepe/5_dead/D-56.png",
            "img/2_character_pepe/5_dead/D-57.png"
        ],
        IMAGES_HURT : [
            "img/2_character_pepe/4_hurt/H-41.png",
            "img/2_character_pepe/4_hurt/H-42.png",
            "img/2_character_pepe/4_hurt/H-43.png"
        ],
        IMAGES_IDLE : [
            "img/2_character_pepe/1_idle/idle/I-1.png",
            "img/2_character_pepe/1_idle/idle/I-2.png",
            "img/2_character_pepe/1_idle/idle/I-3.png",
            "img/2_character_pepe/1_idle/idle/I-4.png",
            "img/2_character_pepe/1_idle/idle/I-5.png",
            "img/2_character_pepe/1_idle/idle/I-6.png",
            "img/2_character_pepe/1_idle/idle/I-7.png",
            "img/2_character_pepe/1_idle/idle/I-8.png",
            "img/2_character_pepe/1_idle/idle/I-9.png",
            "img/2_character_pepe/1_idle/idle/I-10.png",
        ],
        IMAGES_LONG_IDLE : [
            "img/2_character_pepe/1_idle/long_idle/I-11.png",
            "img/2_character_pepe/1_idle/long_idle/I-12.png",
            "img/2_character_pepe/1_idle/long_idle/I-13.png",
            "img/2_character_pepe/1_idle/long_idle/I-14.png",
            "img/2_character_pepe/1_idle/long_idle/I-15.png",
            "img/2_character_pepe/1_idle/long_idle/I-16.png",
            "img/2_character_pepe/1_idle/long_idle/I-17.png",
            "img/2_character_pepe/1_idle/long_idle/I-18.png",
            "img/2_character_pepe/1_idle/long_idle/I-19.png",
            "img/2_character_pepe/1_idle/long_idle/I-20.png"
        ]
    };
    static CHICKEN_SMALL = {
        IMAGES_WALKING : [
            "img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
            "img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
            "img/3_enemies_chicken/chicken_small/1_walk/3_w.png"
            ],
        IMAGES_DEAD : [
            "img/3_enemies_chicken/chicken_small/2_dead/dead.png"
        ]
    };
    static CHICKEN = {
        IMAGES_WALKING : [
            "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
            "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
            "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png"
        ],
        IMAGES_DEAD : [
            "img/3_enemies_chicken/chicken_normal/2_dead/dead.png"
        ]
    }
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