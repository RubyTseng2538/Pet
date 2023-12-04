class gameMenu extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y){
        super(scene, x, y);
        scene.add.existing(this);
        this.rect1 = scene.add.image(game.config.width/2, game.config.height/2 +150, 'base');
        this.rect2 = scene.add.image(game.config.width/2-350, game.config.height/2 +150, 'clickbox');
        this.rect3 = scene.add.image(game.config.width/2, game.config.height/2 +150, 'clickbox');
        this.rect4 = scene.add.image(game.config.width/2+350, game.config.height/2 +150, 'clickbox');
        this.rect5 = scene.add.rectangle(game.config.width/2-500, game.config.height/2-25, 100, 50, 0xd7bc9f);
        this.Xtext = 300;
        this.Ytext = 100;
        this.menuName = "";
        this.content = "";
        this.cur = [];
        this.msg = scene.make.text({
            x: this.x -450,
            y: this.y -30,
            text: this.content,
            style: {
                fontSize: '20px',
                fontFamily: 'Georgia',
                fontStyle: '',
                color: '#ffffff',
                align: 'left',
                wordWrap: { width: 900 }
            },
        });
        this.msg2 = scene.make.text({
            x: this.x -450,
            y: this.y -30,
            text: this.content,
            style: {
                fontSize: '20px',
                fontFamily: 'Georgia',
                fontStyle: 'bold',
                color: '#ADD8E6',
                align: 'left',
                wordWrap: { width: 900 }
            },
        });
        this.name = scene.make.text({
            x: game.config.width/2-530,
            y: game.config.height/2-40,
            text: this.menuName,
            style: {
                fontSize: '26px',
                fontFamily: 'Georgia',
                color: '#51391f',
                align: 'left',
                wordWrap: { width: 900 }
            },
        });
    }
    update(){
        ;
    }
    loadName(name){
        this.name.visible = true;
        this.menuName = name;
        this.name.text = this.menuName;
    }

    loadText(string){
        this.msg.visible = true;
        this.msg.x = this.x - 450;
        this.content = string;
        this.msg.text = this.content;
        //this.beep.play();
    }

    boldText(string, name){
        this.name.visible = true;
        this.name.x = this.x - 450;
        this.menuName = name;
        this.name.text = this.menuName;
        this.msg2.visible = true;
        this.msg2.x = this.x - 450;
        this.content = string;
        this.msg2.text = this.content;
        //this.beep.play();
    }
    showMenu(){
        this.rect1.visible = true;
        this.rect2.visible = true;
        this.rect3.visible = true;
        this.rect4.visible = true;
        this.rect5.visible = true;
        this.name.visible = false;
    }
    hideMenu(){
        this.rect1.visible = false;
        this.rect2.visible = false;
        this.rect3.visible = false;
        this.rect4.visible = false;
        this.rect5.visible = false;
        this.msg.visible = false;
        this.name.visible = false;
        this.msg2.visible = false;
    }
};