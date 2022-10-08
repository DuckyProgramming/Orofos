function draw(){
    background(195,165,115)
    switch(stage.scene){
        case 'battle':
            graphics.main.background(200,170,120)
            current.display()
            current.update()
        break
    }
    image(graphics.main,width/2-min(width/graphics.main.width,height/graphics.main.height)*graphics.main.width/2,height/2-min(width/graphics.main.width,height/graphics.main.height)*graphics.main.height/2,
    min(width/graphics.main.width,height/graphics.main.height)*graphics.main.width,min(width/graphics.main.width,height/graphics.main.height)*graphics.main.height)
    displayTransition(graphics.main,transition)
}