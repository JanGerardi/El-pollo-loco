class Level{
    //#region attributes
    enemies;
    clouds;
    backgroundObjects;
    collectibles;
    level_end_x = 2200;
    //#endregion

    constructor(enemies, clouds, backgroundObjects, collectibles){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.collectibles = collectibles;
    }
}