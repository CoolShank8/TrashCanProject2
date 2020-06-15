class Dustbin {
    constructor(x,y,width, height, color, Image)
    {
        
        this.height = height
        this.width = width
        this.color = color
        this.Image = Image

        this.x = x
        this.y = y
        
        var Options = {
            isStatic: true
         }

        this.ImageX = x
        this.ImageY = y

        this.LeftSide = new Sprite(this.x,this.y + this.height/2, 10,this.height, "Green")
        this.LeftSide.Sprite.visible = false

        this.RightSide = new Sprite(this.x + this.width, this.y + this.height/2, 10, this.height, "Green")
        this.RightSide.Sprite.visible = false

        this.BottemSide = new Sprite(this.ImageX + this.width/2, this.y + this.height, this.width, 10, "Green")
        this.BottemSide.Sprite.visible = false

        //this.TrashCanLeftSide1 = createSprite()


        Sprites.push(this)
    }

    Update()
    {
        image(this.Image,this.ImageX,this.ImageY,this.width,this.height)

       // this.sprite.shapeColor = this.color

    }
}