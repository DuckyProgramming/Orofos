function setupLayer(layer){
    layer.angleMode(DEGREES)
	layer.textAlign(CENTER,CENTER)
	layer.rectMode(CENTER)
	layer.colorMode(RGB,255,255,255,1)
}
function displayTransition(layer,transition){
	layer.noStroke()
	layer.fill(0)
	layer.rect(transition.anim*layer.width/4,layer.height/2,transition.anim*layer.width/2,layer.height)
	layer.rect(layer.width-transition.anim*layer.width/4,layer.height/2,transition.anim*layer.width/2,layer.height)
	layer.rect(layer.width/2,transition.anim*layer.height/4,layer.width,transition.anim*layer.height/2)
	layer.rect(layer.width/2,layer.height-transition.anim*layer.height/4,layer.width,transition.anim*layer.height/2)
	if(transition.trigger){
		transition.anim=round(transition.anim*10+1)/10
		if(transition.anim>1.1){
			transition.trigger = false
			stage.scene=transition.scene
			current.cut.convertBattle(stage.scene)
			current.set(stage.scene)
			current.stack=[]
			current.setupStack()
		}
	}
	else if(transition.anim>0){
		transition.anim=round(transition.anim*10-1)/10
	}
}
function regTriangle(layer,x,y,radius,direction){
	layer.triangle(x+sin(direction)*radius,y+cos(direction)*radius,x+sin(direction+120)*radius,y+cos(direction+120)*radius,x+sin(direction+240)*radius,y+cos(direction+240)*radius);
}
function regPoly(layer,x,y,sides,radius,direction){
	layer.beginShape()
	for(k=0;k<sides;k++){
		layer.vertex(x+sin(direction+k*360/sides)*radius,y+cos(direction+k*360/sides)*radius)
	}
	layer.endShape(CLOSE)
}
function pointInsideBox(point,box){
	if(point.position.x>box.position.x-box.width/2&&point.position.x<box.position.x+box.width/2&&point.position.y>box.position.y-box.height/2&&point.position.y<box.position.y+box.height/2){
		return true
	}
	else{
		return false
	}
}
function updateMouse(layer){
	inputs.mouse.x=mouseX
	inputs.mouse.y=mouseY
	inputs.rel.x=(inputs.mouse.x-width/2)/stage.scale+layer.width/2
	inputs.rel.y=(inputs.mouse.y-height/2)/stage.scale+layer.height/2
}
function resetState(type){
	switch(type){
		case 0:
			combatants=[
				{id:1,weapon:3,team:0},
				{id:2,weapon:1,team:0},
				{id:3,weapon:12,team:0},
				{id:6,weapon:38,team:0},
				{id:0,weapon:0,team:1},
				{id:0,weapon:0,team:1},
				{id:0,weapon:0,team:1},
				{id:0,weapon:0,team:1},
			]
		break
		case 1:
			current.story=0
			current.totalMoved=0
			current.cut.setup(1)
		break
	}
}
function displayEnd(layer){
	layer.image(graphics.end,0,0)
}
function displayMenu(layer){
	layer.background(200,170,120)
	layer.image(graphics.backgrounds[0],0,0)
	layer.stroke(0)
	layer.strokeWeight(5)
	layer.noFill()
	layer.rect(layer.width/2+90,300,60,60,5)
	layer.rect(layer.width/2,300,80,60,5)
	layer.rect(layer.width/2-90,300,60,60,5)
	layer.rect(layer.width/2-190,300,60,60,5)
	layer.rect(layer.width/2-280,300,80,60,5)
	layer.rect(layer.width/2-370,300,60,60,5)
	layer.rect(layer.width/2+190,300,60,60,5)
	layer.rect(layer.width/2+280,300,80,60,5)
	layer.rect(layer.width/2+370,300,60,60,5)
	layer.rect(layer.width/2-160,400,60,60,5)
	layer.rect(layer.width/2+160,400,60,60,5)
	layer.rect(layer.width/2,400,240,60,5)
	layer.rect(layer.width/2,500,120,60,5)
	regTriangle(layer,layer.width/2-156,400,16,30)
	regTriangle(layer,layer.width/2+156,400,16,-30)
	regTriangle(layer,layer.width/2-366,300,16,30)
	regTriangle(layer,layer.width/2+366,300,16,-30)
	regTriangle(layer,layer.width/2+194,300,16,30)
	regTriangle(layer,layer.width/2-194,300,16,-30)
	regTriangle(layer,layer.width/2-86,300,16,30)
	regTriangle(layer,layer.width/2+86,300,16,-30)
	layer.noStroke()
	layer.fill(150,125,90)
	layer.rect(450,575,910,50)
	layer.fill(0)
	layer.noStroke()
	layer.textSize(80)
	layer.text('Orofos',layer.width/2,100)
	layer.textSize(16)
	layer.text('Ducky Programming',layer.width/2,150)
	layer.textSize(24)
	layer.text('Difficulty',layer.width/2,350)
	layer.text('Walk Speed',layer.width/2-280,250)
	layer.text('Battle Speed',layer.width/2,250)
	layer.text('Cutscene Speed',layer.width/2+280,250)
	layer.textSize(32)
	layer.text('x'+stage.speed[0],layer.width/2-280,300)
	layer.text('x'+stage.speed[1],layer.width/2,300)
	layer.text('x'+stage.speed[2],layer.width/2+280,300)
	layer.text('Start',layer.width/2,500)
	if(stage.difficulty==-1){
		layer.text('Easy',layer.width/2+25,400)
	}else if(stage.difficulty==0){
		layer.text('Medium',layer.width/2+25,400)
	}else if(stage.difficulty==1){
		layer.text('Hard',layer.width/2+25,400)
	}
	layer.image(graphics.minor[3-stage.difficulty],layer.width/2-115,375,50,50)
}