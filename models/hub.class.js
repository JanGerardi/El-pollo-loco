class IntervalHub{

    static intervalIds = [];

    static setStoppableInterval(fn, time){
        const id = setInterval(fn, time);
        intervalIds.push(id);
    }

    static stopIntervals(){
        intervalIds.forEach(clearInterval);
    }
}