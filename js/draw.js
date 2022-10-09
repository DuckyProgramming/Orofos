function draw(){
    background(195,165,115)
    switch(stage.scene){
        case 'battle':
            graphics.main.background(200,170,120)
            current.display()
            current.update()
        break
    }
    stage.scale=min(width/graphics.main.width,height/graphics.main.height)
    image(graphics.main,width/2-stage.scale*graphics.main.width/2,height/2-stage.scale*graphics.main.height/2,stage.scale*graphics.main.width,stage.scale*graphics.main.height)
    displayTransition(graphics.main,transition)
}