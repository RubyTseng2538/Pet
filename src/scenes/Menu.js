class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }
    preload(){
        this.load.image('bg', './assets/background.jpg');
        this.load.image('base', './assets/menubase.png');
        this.load.image('clickbox', './assets/clickbox.png');
        this.load.image('circlebutton', './assets/button.png');
        this.load.image('button', './assets/button2.png');
        this.load.image('coinbox', './assets/coinbox.png');
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