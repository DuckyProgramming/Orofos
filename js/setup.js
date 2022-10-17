function setup(){
    createCanvas(windowWidth-50,windowHeight-50)
    setupGraphics()
    current=new battle(graphics.main,combatants)
    current.set(stage.scene)
    current.setupStack()
    run={fore:[entities.particles]}
}
function windowResized(){
    resizeCanvas(windowWidth-50,windowHeight-50)
}