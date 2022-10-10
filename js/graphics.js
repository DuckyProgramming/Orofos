function setupGraphics(){
	graphics.backgrounds[0].fill(120,100,80)
	graphics.backgrounds[0].beginShape()
	for(e=0;e<21;e++){
		graphics.backgrounds[0].vertex(e*80,200+pow(3,(e%20)+4)%300)
	}
    graphics.backgrounds[0].vertex(graphics.backgrounds[0].width*2,graphics.backgrounds[0].height)
	graphics.backgrounds[0].vertex(0,graphics.backgrounds[0].height)
	graphics.backgrounds[0].endShape()
}