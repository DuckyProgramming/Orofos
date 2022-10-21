function setupGraphics(){
	graphics.main=createGraphics(900,600)
    for(a=0;a<1;a++){
		graphics.backgrounds.push(createGraphics(1800,600));
		graphics.backgrounds[a].noStroke();
	}
	graphics.minor.push(createGraphics(200,200))
	graphics.minor.push(createGraphics(40,40))
	graphics.minor.push(createGraphics(200,200))
	graphics.minor.push(createGraphics(200,200))
	graphics.minor.push(createGraphics(200,200))
	graphics.minor.push(createGraphics(40,40))
    angleMode(DEGREES)
	textAlign(CENTER,CENTER)
	rectMode(CENTER)
	colorMode(RGB,255,255,255,1)
    setupLayer(graphics.main)
    for(a=0,la=graphics.backgrounds.length;a<la;a++){
		setupLayer(graphics.backgrounds[a]);
	}
	for(a=0,la=graphics.minor.length;a<la;a++){
		setupLayer(graphics.minor[a]);
	}
	graphics.backgrounds[0].fill(120,100,80)
	graphics.backgrounds[0].beginShape()
	for(e=0;e<21;e++){
		graphics.backgrounds[0].vertex(e*80,200+pow(3,(e%20)+4)%300)
	}
    graphics.backgrounds[0].vertex(graphics.backgrounds[0].width*2,graphics.backgrounds[0].height)
	graphics.backgrounds[0].vertex(0,graphics.backgrounds[0].height)
	graphics.backgrounds[0].endShape()
	graphics.minor[0].noStroke()
	graphics.minor[0].translate(100,100)
	graphics.minor[0].rotate(-15)
	graphics.minor[0].fill(138,141,207)
	graphics.minor[0].arc(0,0,160,160,0,60)
	graphics.minor[0].arc(0,0,160,160,180,240)
	graphics.minor[0].erase()
	graphics.minor[0].ellipse(-15,-25,100,100)
	graphics.minor[0].ellipse(15,25,100,100)
	graphics.minor[0].noErase()
	graphics.minor[0].fill(189,187,237)
	graphics.minor[0].rect(0,0,160,6,3)
	graphics.minor[0].rotate(15)
	graphics.minor[0].translate(-100,-100)
	graphics.minor[1].noStroke()
	graphics.minor[1].fill(224,181,156)
	graphics.minor[1].ellipse(20,20,30,30)
	graphics.minor[1].fill(204,139,122)
	graphics.minor[1].rect(20,20,30,1.5)
	graphics.minor[1].rect(20,14.5,28,1.5)
	graphics.minor[1].rect(20,25.5,28,1.5)
	graphics.minor[1].rect(20,9,20,1.5)
	graphics.minor[1].rect(20,31,20,1.5)
	graphics.minor[5].stroke(201,61,96)
	graphics.minor[5].strokeWeight(6)
	graphics.minor[5].line(8,12.5,20,34.25)
	graphics.minor[5].line(32,12.5,20,34.25)
	graphics.minor[5].stroke(233,216,194)
	graphics.minor[5].strokeWeight(2)
	graphics.minor[5].point(20,33)
	graphics.minor[5].point(16,26)
	graphics.minor[5].point(24,26)
	graphics.minor[5].point(12,19)
	graphics.minor[5].point(28,19)
	graphics.minor[5].point(8,12)
	graphics.minor[5].point(32,12)
	graphics.minor[2].noStroke()
	graphics.minor[2].fill(0)
	graphics.minor[2].ellipse(100,100,180,180)
	graphics.minor[2].fill(227,63,80)
	graphics.minor[2].arc(100,100,150,150,-38,270/7-52)
	graphics.minor[2].fill(232,158,77)
	graphics.minor[2].arc(100,100,150,150,270/7-38,540/7-52)
	graphics.minor[2].fill(237,236,127)
	graphics.minor[2].arc(100,100,150,150,540/7-38,810/7-52)
	graphics.minor[2].fill(114,154,92)
	graphics.minor[2].arc(100,100,150,150,810/7-38,1080/7-52)
	graphics.minor[2].fill(101,181,156)
	graphics.minor[2].arc(100,100,150,150,1080/7-38,1350/7-52)
	graphics.minor[2].fill(71,151,194)
	graphics.minor[2].arc(100,100,150,150,1350/7-38,1620/7-52)
	graphics.minor[2].fill(100,89,147)
	graphics.minor[2].arc(100,100,150,150,1620/7-38,218)
	graphics.minor[2].fill(255,238,231)
	graphics.minor[2].ellipse(100+cos(232)*67.5,100+sin(232)*67.5,10,10)
	graphics.minor[2].ellipse(100-cos(232)*67.5,100+sin(232)*67.5,10,10)
	graphics.minor[2].fill(0)
	graphics.minor[2].ellipse(100,100,120,120)
	graphics.minor[2].image(graphics.minor[0],0,0,200,200)
	graphics.minor[2].fill(255)
	graphics.minor[2].ellipse(100,100,90,90)
	graphics.minor[2].fill(0)
	graphics.minor[2].ellipse(100,100,75,75)
	graphics.minor[2].stroke(0)
	graphics.minor[2].strokeWeight(3)
	graphics.minor[2].fill(255)
	graphics.minor[2].beginShape()
	graphics.minor[2].vertex(60,22)
	graphics.minor[2].bezierVertex(140,80,80,120,140,178)
	graphics.minor[2].bezierVertex(60,120,120,90,60,22)
	graphics.minor[2].endShape()
	graphics.minor[2].fill(255)
	graphics.minor[2].beginShape()
	graphics.minor[2].vertex(140,22)
	graphics.minor[2].bezierVertex(60,80,120,120,60,178)
	graphics.minor[2].bezierVertex(140,120,80,90,140,22)
	graphics.minor[2].endShape()
	graphics.minor[2].ellipse(100,100,60,60)
	graphics.minor[2].translate(100,110)
	graphics.minor[2].scale(0.8)
	graphics.minor[2].noStroke()
	graphics.minor[2].fill(236,130,138)
	for(a=0;a<5;a++){
		graphics.minor[2].rotate(72)
		graphics.minor[2].beginShape()
		graphics.minor[2].vertex(0,0)
		graphics.minor[2].bezierVertex(-7,-7,-7,-14,0,-21)
		graphics.minor[2].bezierVertex(7,-14,7,-7,0,0)
		graphics.minor[2].endShape()
	}
	graphics.minor[2].fill(213,88,102)
	for(a=0;a<5;a++){
		graphics.minor[2].rotate(72)
		graphics.minor[2].beginShape()
		graphics.minor[2].vertex(0,0)
		graphics.minor[2].bezierVertex(-3.5,-5,-3.5,-10,0,-15)
		graphics.minor[2].bezierVertex(3.5,-10,3.5,-5,0,0)
		graphics.minor[2].endShape()
	}
	graphics.minor[2].fill(255,161,161)
	graphics.minor[2].ellipse(0,0,4,4)
	graphics.minor[2].scale(1.25)
	graphics.minor[2].translate(0,-15)
	graphics.minor[2].noStroke()
	graphics.minor[2].fill(226,120,128)
	for(a=0;a<5;a++){
		graphics.minor[2].rotate(72)
		graphics.minor[2].beginShape()
		graphics.minor[2].vertex(0,0)
		graphics.minor[2].bezierVertex(-7,-7,-7,-14,0,-21)
		graphics.minor[2].bezierVertex(7,-14,7,-7,0,0)
		graphics.minor[2].endShape()
	}
	graphics.minor[2].fill(203,78,92)
	for(a=0;a<5;a++){
		graphics.minor[2].rotate(72)
		graphics.minor[2].beginShape()
		graphics.minor[2].vertex(0,0)
		graphics.minor[2].bezierVertex(-3.5,-5,-3.5,-10,0,-15)
		graphics.minor[2].bezierVertex(3.5,-10,3.5,-5,0,0)
		graphics.minor[2].endShape()
	}
	graphics.minor[2].fill(255,151,151)
	graphics.minor[2].ellipse(0,0,4,4)
	graphics.minor[2].translate(-100,-95)
	graphics.minor[2].image(graphics.minor[1],80,12.5,40,40)
	graphics.minor[2].image(graphics.minor[5],80,12.5,40,40)
	for(a=0;a<2;a++){
		graphics.minor[3+a].noStroke()
		graphics.minor[3+a].fill(0)
		graphics.minor[3+a].ellipse(100,100,180,180)
		graphics.minor[3+a].fill(255)
		graphics.minor[3+a].arc(100,100,150,150,-38,270/7-52)
		graphics.minor[3+a].arc(100,100,150,150,270/7-38,540/7-52)
		graphics.minor[3+a].arc(100,100,150,150,540/7-38,810/7-52)
		graphics.minor[3+a].arc(100,100,150,150,810/7-38,1080/7-52)
		graphics.minor[3+a].arc(100,100,150,150,1080/7-38,1350/7-52)
		graphics.minor[3+a].arc(100,100,150,150,1350/7-38,1620/7-52)
		graphics.minor[3+a].arc(100,100,150,150,1620/7-38,218)
		graphics.minor[3+a].ellipse(100+cos(232)*67.5,100+sin(232)*67.5,10,10)
		graphics.minor[3+a].ellipse(100-cos(232)*67.5,100+sin(232)*67.5,10,10)
		graphics.minor[3+a].fill(0)
		graphics.minor[3+a].ellipse(100,100,120,120)
		graphics.minor[3+a].fill(255)
		if(a==0){
			graphics.minor[3+a].triangle(100,32.5,88,24.5,92,20.5)
			graphics.minor[3+a].triangle(100,32.5,88,40.5,92,44.5)
			graphics.minor[3+a].triangle(100,32.5,112,24.5,108,20.5)
			graphics.minor[3+a].triangle(100,32.5,112,40.5,108,44.5)
		}
		graphics.minor[3+a].ellipse(100,100,90,90)
		graphics.minor[3+a].fill(0)
		graphics.minor[3+a].ellipse(100,100,75,75)
		graphics.minor[3+a].stroke(0)
		graphics.minor[3+a].strokeWeight(3)
		graphics.minor[3+a].fill(255)
		graphics.minor[3+a].beginShape()
		graphics.minor[3+a].vertex(60,22)
		graphics.minor[3+a].bezierVertex(140,80,80,120,140,178)
		graphics.minor[3+a].bezierVertex(60,120,120,90,60,22)
		graphics.minor[3+a].endShape()
		graphics.minor[3+a].fill(255)
		graphics.minor[3+a].beginShape()
		graphics.minor[3+a].vertex(140,22)
		graphics.minor[3+a].bezierVertex(60,80,120,120,60,178)
		graphics.minor[3+a].bezierVertex(140,120,80,90,140,22)
		graphics.minor[3+a].endShape()
		graphics.minor[3+a].ellipse(100,100,60,60)
		if(a==0){
			graphics.minor[3+a].fill(0)
			graphics.minor[3+a].noStroke()
			graphics.minor[3+a].arc(100,100,40,40,-135,45)
			graphics.minor[3+a].arc(100,100,40,40,45,225)
			graphics.minor[3+a].stroke(255)
			graphics.minor[3+a].strokeWeight(6)
			graphics.minor[3+a].line(85,85,115,115)
		}
	}
}