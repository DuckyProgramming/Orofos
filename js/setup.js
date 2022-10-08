function setup(){
    createCanvas(windowWidth-50,windowHeight-50)
    graphics.full=createGraphics(800,600)
    setupLayer(graphics.full)
    setupBattle(combatants)
}
function windowResized(){
    resizeCanvas(windowWidth-50,windowHeight-50)
}