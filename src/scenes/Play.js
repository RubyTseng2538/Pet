class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }
    preload(){
        ;
    }

    create(){
        this.input.mouse.disableContextMenu();
        this.bg = this.add.tileSprite(0, 0, 1280, 720, 'bg').setOrigin(0, 0);

        //add pet
        this.pet = this.add.image(game.config.width/2+100, game.config.height/2+50, "defaultpet").setScale(2.5);

        //add UI
        this.feed = this.add.image(1000, 650, 'circlebutton');
        this.play = this.add.image(1070, 650, 'circlebutton');
        this.shop = this.add.image(1140, 650, 'circlebutton');
        this.work = this.add.image(1210, 650, 'circlebutton');
        this.box1 = this.add.rectangle(1000, 682, 20, 25, 0xd7bc9f);
        this.box1 = this.add.rectangle(1070, 682, 20, 25, 0xd7bc9f);
        this.box1 = this.add.rectangle(1140, 682, 20, 25, 0xd7bc9f);
        this.box1 = this.add.rectangle(1210, 682, 20, 25, 0xd7bc9f);
        this.coinbox = this.add.image(1200, 30, 'coinbox');
        this.foodMenu = new gameMenu(this, 0, 0, [food1, food2, food3]);
        this.toyMenu = new gameMenu(this, 0, 0, [toy1, toy2, toy3, toy4]);
        this.shopMenu = new gameMenu(this, 0, 0, [food1, food2, food3, toy2, toy3, toy4, med1]);
        this.healthMenu = new gameMenu(this, 0, 0, [med1, med2]);
        this.hideAllMenus();
        
        //add keys
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyH = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
        keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRight= this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        key1 =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
        key2 =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
        key3 =  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE);

        //add item
        this.dryfood = this.add.image(game.config.width/2-350, game.config.height/2 +120, 'dryfood').setScale(0.5);
        this.dryfood2 = this.add.image(game.config.width/2, game.config.height/2 +120, 'dryfood').setScale(0.5);
        this.wetfood = this.add.image(game.config.width/2+350, game.config.height/2 +120, 'wetfood').setScale(0.5);
        this.hometoy = this.add.image(game.config.width/2-350, game.config.height/2 +120, 'hometoy').setScale(0.5);
        this.tubetoy = this.add.image(game.config.width/2, game.config.height/2 +120, 'tubetoy').setScale(0.5);
        this.bridgetoy = this.add.image(game.config.width/2+350, game.config.height/2 +120, 'bridgetoy').setScale(0.5);
        this.cage = this.add.image(game.config.width/2-350, game.config.height/2 +120, 'cage').setScale(0.5);
        this.med = this.add.image(game.config.width/2-350, game.config.height/2 +120, 'med').setScale(0.5);
        this.vet = this.add.image(game.config.width/2, game.config.height/2 +120, 'vet').setScale(0.5);
        this.dummy = this.add.image(game.config.width/2-350, game.config.height/2 +120, 'circlebutton').setScale(0.5);
        this.dummy.visible = false;

        this.foodArray = [this.dryfood, this.dryfood2, this.wetfood];
        this.toyArray = [this.hometoy, this.tubetoy, this.bridgetoy, this.cage];
        this.medArray = [this.med, this.vet];
        this.shopArray = [this.dryfood, this.dryfood2, this.wetfood,  this.tubetoy, this.bridgetoy, this.cage, this.med, this.dummy, this.dummy];
        this.shopPriceArray = [50, 50, 100, 70, 120, 500, 200, 0, 0];
        

        this.hideAllFood();



        //gvars

        this.petHungerNum = 100;
        this.petHealthNum = 100;
        this.petHappinessNum = 50;
        this.petSicknessStatus = 0; // healthy, injured, sick
        this.food1safety = 0;
        this.food2safety = 0;
        this.petfed = [0, 0, 0];

        this.healthBar = new HealthBar(this, 0, 0, "Health:", this.petHealthNum);

        this.happyBar = new HealthBar(this, 0, 20, "Happiness:", this.petHappinessNum);

        this.hungerBar = new HealthBar(this, 0, 40, "Hunger:", this.petHungerNum);

        this.money = 1000;
        // this.time = 0;
        // this.pause = 0;

        let scoreConfig = {
            fontFamily: 'Georgia',
            fontSize: '28px',
            color: '#51391f',
            align: 'center',
            padding: {
                top: 5, 
                bottom: 5,
            },
            fixedWidth: 100
        }
        let letterConfig= {
            fontFamily: 'Georgia',
            fontSize: '20px',
            color: '#51391f',
            align: 'center',
            padding: {
                top: 5, 
                bottom: 5,
            },
            fixedWidth: 100
        }

        this.coins = this.add.text(1140, 10, this.money, scoreConfig);
        this.key1 = this.add.text(950, 667, "F", letterConfig);
        this.key1 = this.add.text(1020, 667, "P", letterConfig);
        this.key1 = this.add.text(1090, 667, "S", letterConfig);
        this.key1 = this.add.text(1160, 667, "H", letterConfig);
    }
    update(){
        if(this.foodMenu.visible == true && Phaser.Input.Keyboard.JustDown(keyF)){
            this.hideAllMenus();
            this.hideAllFood();
        }
        if(this.foodMenu.visible == false && Phaser.Input.Keyboard.JustDown(keyF)){
            this.hideAllMenus();
            this.hideAllFood();
            this.foodMenu.showMenu();
            this.foodMenu.visible = true;
            this.foodMenu.loadName("Feed");
            this.foodMenu.loadText("Feed");
            this.showFood(this.foodArray);
        }
        if(this.toyMenu.visible == true && Phaser.Input.Keyboard.JustDown(keyP)){
            this.hideAllMenus();
            this.hideAllFood();
        }
        if(this.toyMenu.visible == false && Phaser.Input.Keyboard.JustDown(keyP)){
            this.hideAllMenus();
            this.hideAllFood();
            this.toyMenu.showMenu();
            this.toyMenu.visible = true;
            this.toyMenu.loadName("Play");
            this.toyMenu.loadText("Play");
            this.swapX(true);
            this.showToy(this.toyArray, this.toyMenu.index);
        }
        if(this.shopMenu.visible == true && Phaser.Input.Keyboard.JustDown(keyS)){
            this.hideAllMenus();
            this.hideAllFood();
        }
        if(this.shopMenu.visible == false && Phaser.Input.Keyboard.JustDown(keyS)){
            this.hideAllMenus();
            this.hideAllFood();
            this.shopMenu.showMenu();
            this.shopMenu.visible = true;
            this.shopMenu.loadName("Shop");
            this.shopMenu.loadText("Buy");
            this.swapX(false);
            this.shopMenu.loadPrice(this.shopPriceArray[this.shopMenu.index].toString(), 0);
            this.shopMenu.loadPrice(this.shopPriceArray[this.shopMenu.index+1].toString(), 1);
            this.shopMenu.loadPrice(this.shopPriceArray[this.shopMenu.index+2].toString(), 2);
            this.showToy(this.shopArray, this.shopMenu.index);
        }
        if(this.healthMenu.visible == true && Phaser.Input.Keyboard.JustDown(keyH)){
            this.hideAllMenus();
            this.hideAllFood();
        }
        if(this.healthMenu.visible == false && Phaser.Input.Keyboard.JustDown(keyH)){
            this.hideAllMenus();
            this.hideAllFood();
            this.healthMenu.showMenu();
            this.healthMenu.visible = true;
            this.healthMenu.loadName("Health");
            this.healthMenu.loadText("Cure");
            this.showFood(this.medArray);
        }
        if(this.foodMenu.visible == true){
            if(Phaser.Input.Keyboard.JustDown(key1)){
                this.foodMenu.checkInventory(this.foodMenu.index);
            }if(Phaser.Input.Keyboard.JustDown(key2)){
                this.foodMenu.checkInventory(this.foodMenu.index+1);
            }if(Phaser.Input.Keyboard.JustDown(key3)){
                this.foodMenu.checkInventory(this.foodMenu.index+2);
            }
        }
        if(this.toyMenu.visible == true){
            if(Phaser.Input.Keyboard.JustDown(keyLeft)){
                if(this.toyMenu.index-3 >= 0){
                    this.toyMenu.index -=3;
                    this.hideAllFood();
                    this.showToy(this.toyArray, this.toyMenu.index);
                }
            }
            if(Phaser.Input.Keyboard.JustDown(keyRight)){
                if(this.toyMenu.list.length >= this.toyMenu.index +3){
                    this.toyMenu.index +=3;
                    this.hideAllFood();
                    this.showToy(this.toyArray, this.toyMenu.index);
                }
            }if(Phaser.Input.Keyboard.JustDown(key1)){
                this.toyMenu.checkInventory(this.toyMenu.index);
            }if(Phaser.Input.Keyboard.JustDown(key2)){
                this.toyMenu.checkInventory(this.toyMenu.index+1);
            }if(Phaser.Input.Keyboard.JustDown(key3)){
                this.toyMenu.checkInventory(this.toyMenu.index+2);
            }
        }
        if(this.healthMenu.visible == true){
            let num = 1000;
            if(Phaser.Input.Keyboard.JustDown(key1)){
                this.healthMenu.checkInventory(this.healthMenu.index);
            }if(Phaser.Input.Keyboard.JustDown(key2)){
                this.healthMenu.checkInventory(this.healthMenu.index+1);
                this.healthMenu.loadPrice(num.toString(), 1);
                this.checkPrice(1000);
            }
        }

        if(this.shopMenu.visible == true){
            if(Phaser.Input.Keyboard.JustDown(keyLeft)){
                for(let k = 0; k < 1; k++){
                    if(this.shopMenu.index > 0){
                        this.shopMenu.index -=3;
                        this.hideAllFood();
                        this.shopMenu.loadPrice(this.shopPriceArray[this.shopMenu.index].toString(), 0);
                        this.shopMenu.loadPrice(this.shopPriceArray[this.shopMenu.index+1].toString(), 1);
                        this.shopMenu.loadPrice(this.shopPriceArray[this.shopMenu.index+2].toString(), 2);
                        for(var j = 0; j < 3; j++){
                            this.showToy(this.shopArray, this.shopMenu.index);
                        }
                    }
                }
            }
            if(Phaser.Input.Keyboard.JustDown(keyRight)){
                for(let k = 0; k < 1; k++){
                    if(this.shopMenu.list.length >= this.shopMenu.index + 6){
                        this.shopMenu.index += 3;
                        this.hideAllFood();
                        this.shopMenu.loadPrice(this.shopPriceArray[this.shopMenu.index].toString(), 0);
                        this.shopMenu.loadPrice(this.shopPriceArray[this.shopMenu.index+1].toString(), 1);
                        this.shopMenu.loadPrice(this.shopPriceArray[this.shopMenu.index+2].toString(), 2);
                        for(let j = 0; j < 3; j++){
                            this.showToy(this.shopArray, this.shopMenu.index);

                        }
                    }

                }
            }if(Phaser.Input.Keyboard.JustDown(key1)){
                this.shopMenu.checkInventory(this.shopMenu.index);
                this.checkPrice(this.shopPriceArray[this.shopMenu.index]);
            }if(Phaser.Input.Keyboard.JustDown(key2)){
                this.shopMenu.checkInventory(this.shopMenu.index+1);
                this.checkPrice(this.shopPriceArray[this.shopMenu.index+1]);
            }if(Phaser.Input.Keyboard.JustDown(key3)){
                this.shopMenu.checkInventory(this.shopMenu.index+2);
                this.checkPrice(this.shopPriceArray[this.shopMenu.index+2]);
            }
        }
        // if(!this.gameOver){
        //     this.bg.tilePositionX -= this.speed;
        //     this.fg.tilePositionX -= this.speed * 2;
        //     this.pShrimp.update();
        //     this.rockObs.update();
        //     this.bag.update();
        //     this.eel.update();
        //     this.rod.update();
        //     this.time += 50;
        //     if(this.time % 10000 == 0){
        //         this.point +=10;
        //         this.scoreLeft.text = this.point;
        //     }
        //     if(this.time %200000 == 0 && this.time<1000000){
        //         this.speed += 1;
        //         this.pShrimp.moveSpeed += 0.5;
        //         this.rockObs.moveSpeed += 0.5;
        //         this.eel.moveSpeed += 0.5;
        //         this.bag.moveSpeed += 0.5;
        //     }
        // }
        // if(this.checkCollision(this.pShrimp, this.rockObs)){
        //     // this.shrimpDeath(this.pShrimp);
        //     this.gameOver = true;
        // }if(this.checkCollision(this.pShrimp, this.eel)){
        //     // this.shrimpDeath(this.pShrimp);
        //     this.gameOver = true;
        // }if(this.checkCollision(this.pShrimp, this.bag)){
        //     // this.shrimpDeath(this.pShrimp);
        //     this.gameOver = true;
        // }if(this.checkCollision(this.pShrimp, this.rod)){
        //     // this.shrimpDeath(this.pShrimp);
        //     this.gameOver = true;
        // }
        
        // if(this.gameOver == true){
            
        //     game.config.point = this.point;
        //     this.scene.start("creditScene");
        // }
    }

    hideAllMenus(){
        this.foodMenu.hideMenu();
        this.foodMenu.visible = false;
        this.toyMenu.hideMenu();
        this.toyMenu.visible = false;
        this.shopMenu.hideMenu();
        this.shopMenu.visible = false;
        this.healthMenu.hideMenu();
        this.healthMenu.visible = false;
    }

    hideAllFood(){
        for(let i = 0; i<this.foodArray.length;i++){
            this.foodArray[i].visible = false;
        }
        // this.dryfood.visible = false; 
        // this.dryfood2.visible = false; 
        // this.wetfood.visible = false; 
        this.hometoy.visible = false; 
        this.tubetoy.visible = false; 
        this.bridgetoy.visible = false; 
        this.cage.visible = false; 
        this.med.visible = false; 
        this.vet.visible = false; 
    }
    showFood(array){
        for(let i = 0; i<array.length; i++){
            array[i].visible = true;
        }
    }

    showToy(array, index){
        if(index < array.length && index+3 < array.length){
            for(let i = index; i<index+3;i++){
                array[i].visible = true;
            }
        }else if(index < array.length && index+3 >= array.length){
            for(let i=index; i< array.length; i++){
                array[i].visible = true;
            }
        }else{
            this.hideAllFood();
        }
    }

    swapX(bool){
        if(bool == true){
            this.hometoy.x = game.config.width/2-350;
            this.tubetoy.x = game.config.width/2;
            this.bridgetoy.x = game.config.width/2+350;
            this.cage.x = game.config.width/2-350;
        }else{
            this.tubetoy.x = game.config.width/2 -350;
            this.bridgetoy.x = game.config.width/2;
            this.cage.x = game.config.width/2+350;
        }
    }

    checkPrice(price){
        if(this.money >= price){
            this.money -= price;
            this.coins.text = this.money;
        }
    }
    // loadPrice2()


    useFood(foodType){
        console.log("food usage successful");
        this.petfed[foodType] += 1;
    }

    useToy(type){

    }
    useMedicine(type){

    }
}