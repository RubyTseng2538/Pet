class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }
    preload(){
        //UI
        this.load.image('bg', './assets/background.png');
        this.load.image('base', './assets/menubase.png');
        this.load.image('clickbox', './assets/clickbox.png');
        this.load.image('circlebutton', './assets/button.png');
        this.load.image('button', './assets/button2.png');
        this.load.image('coinbox', './assets/coinbox.png');
        this.load.image('leftbutton', './assets/rightbutton.png');
        this.load.image('rightbutton', './assets/leftbutton.png');
        //Pet
        this.load.image('happypet', './assets/HappyPet.png');
        this.load.image('hurtpet', './assets/HurtPet.png');
        this.load.image('defaultpet', './assets/PetDefault.png');
        this.load.image('sadpet', './assets/SadPet.png');
        this.load.image('sickpet', './assets/Sickpet.png');
        //Items
        this.load.image('dryfood', './assets/BasicDryFood.png');
        this.load.image('wetfood', './assets/WetFood.png');
        this.load.image('hometoy', './assets/HomemadeToy.png');
        this.load.image('tubetoy', './assets/LowBudgetTubeToy.png');
        this.load.image('bridgetoy', './assets/SimpleBridgeToy.png');
        this.load.image('cage', './assets/PrimeCage.png');
        this.load.image('med', './assets/HomeMed.png');
        this.load.image('vet', './assets/Vet.png');
    }

    create(){
        let menuConfig = {
            fontFamily: 'Georgia',
            fontSize: '28px',
            color: '#51391f',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.bg = this.add.tileSprite(0, 0, 1280, 720, 'bg').setOrigin(0, 0);
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize+borderPadding+100, 'Press P to start', menuConfig).setOrigin(0.5);
        keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyP)){
            this.scene.start("playScene");
        }
    }
}