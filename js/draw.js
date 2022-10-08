function draw(){
    background(195,165,115)
    switch(stage.scene){
        case 'battle':
            graphics.full.background(200,170,120)
            displayBattle(graphics.full,combatants)
        break
    }
    image(graphics.full,width/2-min(width/graphics.full.width,height/graphics.full.height)*graphics.full.width/2,height/2-min(width/graphics.full.width,height/graphics.full.height)*graphics.full.height/2,
    min(width/graphics.full.width,height/graphics.full.height)*graphics.full.width,min(width/graphics.full.width,height/graphics.full.height)*graphics.full.height)
}