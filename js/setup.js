function setup(){
    createCanvas(windowWidth-50,windowHeight-50)
    graphics.main=createGraphics(900,600)
    setupLayer(graphics.main)
    current=new battle(graphics.main,combatants)
    current.create()
}
function windowResized(){
    resizeCanvas(windowWidth-50,windowHeight-50)
}