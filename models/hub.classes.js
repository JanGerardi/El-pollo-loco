class ImgHub{

}

class SoundHub{
    
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