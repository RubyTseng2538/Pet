class HealthBar {

    constructor (scene, x, y, text, value)
    {
        this.scene = scene;
        this.bar = new Phaser.GameObjects.Graphics(scene);
        this.content = text;
        this.x = x+110;
        this.y = y;
        let buttonConfig= {
            fontFamily: 'Georgia',
            fontSize: '20px',
            color: '#000000',
            align: 'left',
            padding: { 
                bottom: 5,
            },
            fixedWidth: 100
        }
        this.text = scene.add.text(x, y, this.content, buttonConfig);
        this.startvalue = value;
        this.value = value;
        this.p = value / value;

        //this.draw();
        //this.hp  = scene.add.text(x+225, y, this.value.toString(), buttonConfig);

        scene.add.existing(this.bar);
    }

    decrease (amount)
    {
        this.value -= amount;

        if (this.value < 0)
        {
            this.value = 0;
        }

        this.draw();
        this.hp.text = this.value.toString();

        return (this.value === 0);
    }
    increase(amount){
        this.value += amount;
        if(this.value >= this.startvalue){
            this.value = this.startvalue;
        }
        this.draw();
        this.hp.text = this.value.toString();
        return (this.value === this.startvalue);
    }

    draw ()
    {
        this.bar.clear();

        switch(this.content){
            case "Health:":
                this.value = this.scene.petHealthNum;
                break;
            case "Happiness:":
                this.value = this.scene.petHappinessNum;
                break;
            case "Belly:":
                this.value = this.scene.petHungerNum;
                break;
            default:
                break;
            
        }

        //  BG
        this.bar.fillStyle(0x000000);
        this.bar.fillRect(this.x, this.y, 105, 20);

        //  Health

        this.bar.fillStyle(0xffffff);
        this.bar.fillRect(this.x + 2, this.y + 2, 100, 16);


        this.bar.fillStyle(0x00ff00);

        var d = Math.floor(this.p * this.value);

        this.bar.fillRect(this.x + 2, this.y + 2, d, 16);
    }

}