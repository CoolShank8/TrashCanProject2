class Sprite {
    constructor(x,y,width, height, color)
    {
        
        this.height = height
        this.width = width
        this.color = color

        
        var Options = {
            isStatic: true
         }

        this.body = Bodies.rectangle(x, y ,this.width,this.height, Options)
        World.add(world, this.body)

        this.Sprite = createSprite(this.body.position.x, this.body.position.y, this.width, this.height)

        Sprites.push(this)
        
    }

    Update()
    {
        this.Sprite.x = this.body.position.x

        this.Sprite.shapeColor = this.color

    }
}