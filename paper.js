class Paper {
    constructor(x,y,raduis, color, Image)
    {
        
        this.height = height
        this.width = width
        this.color = color
        this.x = this.y = y

    
        
        var Options = {
            isStatic: false,
            restitution: 0.3,
            friciton: 0.5,
            density: 1.2
         }

        this.body = Bodies.circle(x, y ,raduis * 2 + 20, Options)
        World.add(world, this.body)

        this.Image = Image

        this.position = this.body.position
        
        this.Sprite = createSprite(this.body.position.x, this.body.position.y,this.raduis, this.raduis)

        this.Sprite.addImage("paperImage", this.Image)


        this.Sprite.scale = 0.5


        Sprites.push(this)
    }

    Update()
    {
        this.x = this.body.position.x
        this.y = this.body.position.y

        this.Sprite.changeAnimation("paperImage")

        this.position = this.body.position

        this.Sprite.x = this.position.x
        this.Sprite.y = this.position.y

    }
}