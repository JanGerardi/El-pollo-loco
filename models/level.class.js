class Level{
    //#region attributes
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new SmallChicken(),
        new SmallChicken(),
        new SmallChicken()
    ];
    endboss = [
        new Endboss()
    ];
    clouds = [
        new Cloud("img/5_background/layers/4_clouds/1.png", 700),
        new Cloud("img/5_background/layers/4_clouds/1.png", 1400),
        new Cloud("img/5_background/layers/4_clouds/1.png", 2200)
    ];
    backgroundObjects = [
        new BackgroundObject("img/5_background/layers/air.png", -719),
        new BackgroundObject("img/5_background/layers/3_third_layer/2.png", -719),
        new BackgroundObject("img/5_background/layers/2_second_layer/2.png", -719),
        new BackgroundObject("img/5_background/layers/1_first_layer/2.png", -719),
        new BackgroundObject("img/5_background/layers/air.png", 0),
        new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 0),
        new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 0),
        new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 0),
        new BackgroundObject("img/5_background/layers/air.png", 719),
        new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719),
        new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719),
        new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719),
        new BackgroundObject("img/5_background/layers/air.png", 719*2),
        new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 719*2),
        new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 719*2),
        new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 719*2),
        new BackgroundObject("img/5_background/layers/air.png", 719*3),
        new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719*3),
        new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719*3),
        new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719*3)
    ];
    coins = [
        new Coin("img/8_coin/coin_1.png", 600),
        new Coin("img/8_coin/coin_1.png", 1000),
        new Coin("img/8_coin/coin_1.png", 1400),
        new Coin("img/8_coin/coin_1.png", 1800),
        new Coin("img/8_coin/coin_1.png", 2200)
    ];
    bottles = [
        new Bottle("img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 400),
        new Bottle("img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 800),
        new Bottle("img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 1200),
        new Bottle("img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 1600),
        new Bottle("img/6_salsa_bottle/1_salsa_bottle_on_ground.png", 2000)
    ];
    level_end_x = 2200;
    //#endregion
}