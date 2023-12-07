class Play extends Phaser.Scene{
    constructor(){
        super("playScene");
    }
    preload(){
        // this.load.image('bg', './assets/seabackground.png');
        // this.load.image('shrimp', './assets/shrimp.png');
        // this.load.image('fg', './assets/seaweed.png');
        // this.load.image('fish', './assets/fish2.png');
        // this.load.image('eel', './assets/eel.png');
        // this.load.image('bag', './assets/plasticbag2.png');
        // this.load.image('hook', './assets/hook2.png');
        // // load animations
        // this.load.spritesheet('shrimpswim', './assets/shrip.png',
        //             {frameWidth: 100, frameHeight: 75, startFrame: 0, endFrame: 2});
        // this.load.spritesheet('eelwiggle', './assets/eelanimated.png', 
        //             {frameWidth: 128, frameHeight: 376, startFrame: 0, endFrame: 1});
        // this.load.spritesheet('trashfloat', './assets/plasticbag.png', 
        //             {frameWidth: 80, frameHeight: 89, startFrame: 0, endFrame: 1});
        // this.load.spritesheet('hookup', './assets/hook.png', 
        //             {frameWidth: 35, frameHeight: 250, startFrame: 0, endFrame: 1});
        // this.load.spritesheet('fishswim', './assets/fish.png', 
        //             {frameWidth: 180, frameHeight: 82, startFrame: 0, endFrame: 1});
        // this.load.spritesheet('shrimpdie', './assets/shripdie.png', 
        //             {frameWidth: 100, frameHeight: 75, startFrame: 0, endFrame: 7});
    }

    create(){
        this.input.mouse.disableContextMenu();
        this.bg = this.add.tileSprite(0, 0, 1280, 720, 'bg').setOrigin(0, 0);
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
        this.shopMenu = new gameMenu(this, 0, 0, [food1, food2, food3, toy2, toy3, toy4, med1, med2]);
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

        // this.fg = this.add.tileSprite(0, 0, 640, 480, 'fg').setOrigin(0, 0); // seaweed
        // set up animations
        // this.createAnimation();

        // this.pShrimp = new Shrimp(this, game.config.width-borderPadding-borderUISize, game.config.height/2, 'shrimp').setOrigin(1, 0);
        // this.rockObs = new Obstacle(this, 0, 100, 'fish').setOrigin(0, 0);
        // this.eel = new Eel(this, -100, game.config.height, 'eel').setOrigin(0, 0);
        // this.rod = new Rod(this, -200, -250, 'hook').setOrigin(0, 0);
        // this.bag = new Bag(this, -300, 0, 'bag').setOrigin(0, 0);
        
        // this.gameOver = false;
        // this.speed = 0.5;
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
        }
        if(this.foodMenu.visible == false && Phaser.Input.Keyboard.JustDown(keyF)){
            this.foodMenu.showMenu();
            this.foodMenu.visible = true;
            this.foodMenu.loadName("Feed");
            this.foodMenu.loadText("Feed");
        }
        if(this.toyMenu.visible == true && Phaser.Input.Keyboard.JustDown(keyP)){
            this.hideAllMenus();
        }
        if(this.toyMenu.visible == false && Phaser.Input.Keyboard.JustDown(keyP)){
            this.toyMenu.showMenu();
            this.toyMenu.visible = true;
            this.toyMenu.loadName("Play");
            this.toyMenu.loadText("Play");
        }
        if(this.shopMenu.visible == true && Phaser.Input.Keyboard.JustDown(keyS)){
            this.hideAllMenus();
        }
        if(this.shopMenu.visible == false && Phaser.Input.Keyboard.JustDown(keyS)){
            this.shopMenu.showMenu();
            this.shopMenu.visible = true;
            this.shopMenu.loadName("Shop");
            this.shopMenu.loadText("Buy");
        }
        if(this.healthMenu.visible == true && Phaser.Input.Keyboard.JustDown(keyH)){
            this.hideAllMenus();
        }
        if(this.healthMenu.visible == false && Phaser.Input.Keyboard.JustDown(keyH)){
            this.healthMenu.showMenu();
            this.healthMenu.visible = true;
            this.healthMenu.loadName("Health");
            this.healthMenu.loadText("Cure");
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
                    console.log(this.toyMenu.index);
                }
            }
            if(Phaser.Input.Keyboard.JustDown(keyRight)){
                if(this.toyMenu.list.length >= this.toyMenu.index +3){
                    this.toyMenu.index +=3;
                    console.log(this.toyMenu.index);
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
            if(Phaser.Input.Keyboard.JustDown(key1)){
                this.healthMenu.checkInventory(this.healthMenu.index);
            }if(Phaser.Input.Keyboard.JustDown(key2)){
                this.healthMenu.checkInventory(this.healthMenu.index+1);
            }
        }

        if(this.shopMenu.visible == true){
            if(Phaser.Input.Keyboard.JustDown(keyLeft)){
                if(this.shopMenu.index-3 >= 0){
                    this.shopMenu.index -=3;
                    console.log(this.shopMenu.index);
                }
            }
            if(Phaser.Input.Keyboard.JustDown(keyRight)){
                if(this.shopMenu.list.length >= this.shopMenu.index +3){
                    this.shopMenu.index +=3;
                    console.log(this.shopMenu.index);
                }
            }if(Phaser.Input.Keyboard.JustDown(key1)){
                this.shopMenu.checkInventory(this.shopMenu.index);
            }if(Phaser.Input.Keyboard.JustDown(key2)){
                this.shopMenu.checkInventory(this.shopMenu.index+1);
            }if(Phaser.Input.Keyboard.JustDown(key3)){
                this.shopMenu.checkInventory(this.shopMenu.index+2);
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

    checkCollision(shrimp, obs){
        if(shrimp.x<obs.x+obs.width &&
           shrimp.x + shrimp.width > obs.x &&
           shrimp.y < obs.y + obs.height &&
           shrimp.height + shrimp.y > obs.y){
               return true;
        }else{
            return false;
        }
    }
    checkAdj(shrimp, obs){
        if(shrimp.x<obs.x+obs.width +50&&
           shrimp.x + shrimp.width +50 > obs.x &&
           shrimp.y < obs.y + obs.height +50&&
           shrimp.height + shrimp.y +50> obs.y){
               return true;
        }else{
            return false;
        }
    }
    // just plays death animation at shrimp's location
    shrimpDeath(shrimp) {
        // temporarily hide shrimp
        shrimp.alpha = 0;
        // play death animation on location
        let die = this.add.sprite(shrimp.x, shrimp.y, 'shrimpdie').setOrigin(0, 0); // create a sprite on location
        die.anims.play('shrimpdeath'); // have sprite play the animation
        die.on('animationcomplete', () => {
            shrimp.reset();
            shrimp.alpha = 1;
            die.destroy();
            this.gameOver = true;
        });
        
    }
    createAnimation(){
        this.anims.create({
            key: 'shrimpmove',
            frames: this.anims.generateFrameNumbers('shrimpswim', {start: 0, end: 2, first: 0}),
            frameRate: 4,
            repeat: -1
        });
        this.anims.create({
            key: 'eelmove',
            frames: this.anims.generateFrameNumbers('eelwiggle', {start: 0, end: 1, first: 0}),
            frameRate: 4,
            repeat: -1
        });
        this.anims.create({
            key: 'trashmove',
            frames: this.anims.generateFrameNumbers('trashfloat', {start: 0, end: 1, first: 0}),
            frameRate: 4,
            repeat: -1
        });
        this.anims.create({
            key: 'hookmove',
            frames: this.anims.generateFrameNumbers('hookup', {start: 0, end: 1, first: 0}),
            frameRate: 4,
            repeat: -1
        });
        this.anims.create({
            key: 'fishmove',
            frames: this.anims.generateFrameNumbers('fishswim', {start: 0, end: 1, first: 0}),
            frameRate: 4,
            repeat: -1
        });
        this.anims.create({
            key: 'shrimpdeath',
            frames: this.anims.generateFrameNumbers('shrimpdie', {start: 0, end: 7, first: 0}),
            frameRate: 9
        });
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
}