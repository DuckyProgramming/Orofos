function setup(){
    createCanvas(windowWidth-50,windowHeight-50)
    graphics.main=createGraphics(900,600)
    for(a=0;a<1;a++){
		graphics.backgrounds.push(createGraphics(1800,600));
		graphics.backgrounds[a].noStroke();
	}
    angleMode(DEGREES)
	textAlign(CENTER,CENTER)
	rectMode(CENTER)
	colorMode(RGB,255,255,255,1)
    setupLayer(graphics.main)
    for(a=0,la=graphics.backgrounds.length;a<la;a++){
		setupLayer(graphics.backgrounds[a]);
	}
    setupGraphics()
    current=new battle(graphics.main,combatants)
    current.set(stage.scene)
    current.setupStack()
    run={fore:[entities.particles]}
}
function windowResized(){
    resizeCanvas(windowWidth-50,windowHeight-50)
}