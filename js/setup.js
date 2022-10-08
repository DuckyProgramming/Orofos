function setup(){
    createCanvas(windowWidth-50,windowHeight-50)
    graphics.main=createGraphics(800,600)
    setupLayer(graphics.main)
    current=new battle(graphics.main,combatants)
}
function windowResized(){
    resizeCanvas(windowWidth-50,windowHeight-50)
}