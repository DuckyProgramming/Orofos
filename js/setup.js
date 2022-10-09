function setup(){
    createCanvas(windowWidth-50,windowHeight-50)
    graphics.main=createGraphics(900,600)
    angleMode(DEGREES)
	textAlign(CENTER,CENTER)
	rectMode(CENTER)
	colorMode(RGB,255,255,255,1)
    setupLayer(graphics.main)
    current=new battle(graphics.main,combatants)
    current.create()
    run={fore:[entities.particles]}
}
function windowResized(){
    resizeCanvas(windowWidth-50,windowHeight-50)
}