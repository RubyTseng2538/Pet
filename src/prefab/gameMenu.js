class gameMenu extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, list = []){
        super(scene, x, y);
        scene.add.existing(this);
        //graphics
        this.rect1 = scene.add.image(game.config.width/2, game.config.height/2 +150, 'base');
        this.rect2 = scene.add.image(game.config.width/2-350, game.config.height/2 +150, 'clickbox');
        this.rect3 = scene.add.image(game.config.width/2, game.config.height/2 +150, 'clickbox');
        this.rect4 = scene.add.image(game.config.width/2+350, game.config.height/2 +150, 'clickbox');
        this.button1 = scene.add.sprite(game.config.width/2-350, game.config.height/2 +200, 'button').setInteractive();
        this.button2 = scene.add.sprite(game.config.width/2, game.config.height/2 +200, 'button').setInteractive();
        this.button3 = scene.add.sprite(game.config.width/2+350, game.config.height/2 +200, 'button').setInteractive();
        this.rect5 = scene.add.rectangle(game.config.width/2-500, game.config.height/2-25, 100, 50, 0xd7bc9f);
        this.left = scene.add.image(game.config.width/2-540, game.config.height/2 +300, 'leftbutton');
        this.right = scene.add.image(game.config.width/2+540, game.config.height/2 +300, 'rightbutton');

        //shop inventory management
        this.index = 0;
        this.list = list;
        this.check = -1;

        //display texts
        this.menuName = "";
        this.content = "";
        let buttonConfig= {
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
        this.text1 = scene.add.text(game.config.width/2-400, game.config.height/2 +185, this.content, buttonConfig);
        this.text2 = scene.add.text(game.config.width/2-50, game.config.height/2 +185, this.content, buttonConfig);
        this.text3 = scene.add.text(game.config.width/2+300, game.config.height/2 +185, this.content, buttonConfig);
        this.textArray = [this.text1, this.text2, this.text3];

        this.name = scene.make.text({
            x: game.config.width/2-540,
            y: game.config.height/2-40,
            text: this.menuName,
            style: {
                fontSize: '26px',
                fontFamily: 'Georgia',
                color: '#51391f',
                align: 'center',
                wordWrap: { width: 900 }
            },
        });

        //key inputs

        // this.button1.on('pointerdown', function (pointer)
        // {
        //     list = this.list;
        //     index = this.index;
        //     console.log(list, index);
        //     
        // });
        // this.button2.on('pointerdown', function (pointer)
        // {
        //     if(this.list.length >= index){
        //         if(this.name.text != 'Shop'){
        //             if(this.list[index] >= 0){
        //                 this.list[index] -= 1;
        //             }else{
        //                 console.log('not enough items')
        //             }
        //         }else{
        //             this.list[index] += 1;
        //         }
        //     }else{
        //         ;
        //     }
        // });
        // this.button3.on('pointerdown', function (pointer)
        // {
        //     if(this.list.length >= index){
        //         if(this.name.text != 'Shop'){
        //             if(this.list[index] >= 0){
        //                 this.list[index] -= 1;
        //             }else{
        //                 console.log('not enough items')
        //             }
        //         }else{
        //             this.list[index] += 1;
        //         }
        //     }else{
        //         ;
        //     }

        // });
    }
    update(){
        // this.pointer = scene.input.activePointer;
        ;
    }
    loadName(name){
        this.name.visible = true;
        this.menuName = name;
        this.name.text = this.menuName;
    }

    loadText(string){
        this.content = string;
        this.text1.visible = true;
        this.text1.text = this.content;
        this.text2.visible = true;
        this.text2.text = this.content;
        this.text3.visible = true;
        this.text3.text = this.content;
    }
    loadPrice(string, number){
        this.content = string;
        this.textArray[number].text = this.content;
        this.textArray[number].visible = true;
    }
    showMenu(){
        this.rect1.visible = true;
        this.rect2.visible = true;
        this.rect3.visible = true;
        this.rect4.visible = true;
        this.rect5.visible = true;
        this.button1.visible = true;
        this.button2.visible = true;
        this.button3.visible = true;
        this.left.visible = true;
        this.right.visible = true;
    }
    hideMenu(){
        this.rect1.visible = false;
        this.rect2.visible = false;
        this.rect3.visible = false;
        this.rect4.visible = false;
        this.rect5.visible = false;
        this.button1.visible = false;
        this.button2.visible = false;
        this.button3.visible = false;
        this.text1.visible = false;
        this.text2.visible = false;
        this.text3.visible = false;
        this.left.visible = false;
        this.right.visible = false;
        this.name.visible = false;
    }
    addItem(index){
        this.list[index] = this.list[index] + 1;
    }
    checkInventory(index){
        if(this.list.length > index){
            let x = this.list[index];
            if(this.name.text != 'Shop'){
                if(this.list[index] > 0){
                    console.log('you used '+Object.keys(this.list)[index], this.list[index]);
                    this.list[index] -= 1;
                    switch(this.name.text){
                        case 'Feed':
                            this.scene.useFood(index);
                            break;
                        case '':
                            this.scene.useToy(index);
                            break;
                        default:
                            break;
                    }
                }else{
                    console.log('not enough items')
                }
            }else{
                if(index < 3){
                    //Play.foodMenu.addItem(index);
                    this.scene.foodMenu.list[index] += 1;
                }else{
                    this.scene.toyMenu.list[index - 3] = this.scene.toyMenu.list[index - 3] + 1;
                }
                console.log('you bought '+Object.keys(this.list)[index], this.list[index]);
            }
        }else{
            ;
        }
    }
};