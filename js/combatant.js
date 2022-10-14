class combatant{
	constructor(layer,x,y,type,weapon,team){
		this.layer=layer
		this.position={x:x,y:y}
		this.type=type
		this.team=team
		this.weapon=weapon
		this.size=1
		this.flip=1-this.team*2
		this.direction=0
		if(this.type==0){
			this.fade=0
			this.dead=true
		}else{
			this.fade=1
			this.dead=false
		}
		this.name=types.combatant[this.type].name
		this.life=types.combatant[this.type].life
		this.speed=types.combatant[this.type].speed
		this.damage=types.combatant[this.type].damage
		this.height=types.combatant[this.type].height
		this.reward=types.combatant[this.type].reward
		this.attacks=[]
		this.attackClass=[]
		for(g=0,lg=types.weapon[this.weapon].attacks.length;g<lg;g++){
			this.attacks.push(types.weapon[this.weapon].attacks[g])
			this.attackClass.push(0)
		}
		for(g=0,lg=types.combatant[this.type].attacks.length;g<lg;g++){
			this.attacks.push(types.combatant[this.type].attacks[g])
			this.attackClass.push(1)
		}
		this.base={position:{x:this.position.x,y:this.position.y},life:this.life,uses:[]}
		this.uses=[]
		this.attackInfoFade=[]
		for(g=0,lg=this.attacks.length;g<lg;g++){
			this.uses.push(types.attack[this.attacks[g]].uses)
			this.base.uses.push(types.attack[this.attacks[g]].uses)
			this.attackInfoFade.push(0)
		}
		this.collect={life:this.life}
		this.boost=[0,0,0]
		this.boostFade=[0,0,0]
		this.boostDisplay=[]
		this.boostColor=[[200,0,0],[0,150,255],[255,255,50]]
		this.boostInfoFade=[0,0,0]
		this.boostName=['Attack','Defense','Speed']
		this.status=[0,0,0,0,0,0,0,0,0,0]
		this.statusFade=[0,0,0,0,0,0,0,0,0,0]
		this.statusDisplay=[]
		this.statusColor=[[200,100,0],[255,255,150],[150,255,150],[0,50,100],[230,240,250],[150,0,0],[200,210,220],[255,225,0],[100,200,200],[150,50,0]]
		this.statusInfoFade=[0,0,0,0,0,0,0,0,0,0]
		this.statusName=['Burned','Stun','Confused','Buffer','Inaccurate','Anger','Sleep','Inflated','Fallen','Drunk']
		this.infoFade=0
		this.rate=[0,0]
		this.stacking=this.speed
		this.anim=[0,0,0,0]
		this.calcAccuracy=0
		this.calcDamage=0
		this.hit=false
		this.valued=true
	}
	displayLife(){
		this.layer.translate(this.base.position.x,this.base.position.y)
		this.layer.noStroke()
		this.layer.fill(0,this.fade)
		this.layer.rect(0,20,62,10,4)
		this.layer.fill(150,this.fade)
		this.layer.rect(0,20,60,8,3)
		this.layer.fill(240,0,0,this.fade)
		this.layer.rect((max(0,this.collect.life)/this.base.life)*30-30,20,(max(0,this.collect.life)/this.base.life)*60,2+min((max(0,this.collect.life)/this.base.life)*90,6),3)
		this.layer.fill(min(255,510-max(0,this.life)/this.base.life*510)-max(0,5-max(0,this.life)/this.base.life*30)*25,max(0,this.life)/this.base.life*510,0,this.fade)
		this.layer.rect((max(0,this.life)/this.base.life)*30-30,20,(max(0,this.life)/this.base.life)*60,2+min((max(0,this.life)/this.base.life)*90,6),3)
		for(g=0,lg=this.boostDisplay.length;g<lg;g++){
			this.layer.fill(this.boostColor[this.boostDisplay[g]][0],this.boostColor[this.boostDisplay[g]][1],this.boostColor[this.boostDisplay[g]][2],this.boostFade[this.boostDisplay[g]]*this.fade)
			this.layer.ellipse(-21+g*14,50,12,12)
			this.layer.fill(150,this.fade*this.boostFade[this.boostDisplay[g]]*this.boostInfoFade[g])
			this.layer.rect(0,80,45,15,3)
		}
		for(g=0,lg=this.statusDisplay.length;g<lg;g++){
			this.layer.fill(this.statusColor[this.statusDisplay[g]][0],this.statusColor[this.statusDisplay[g]][1],this.statusColor[this.statusDisplay[g]][2],this.statusFade[this.statusDisplay[g]]*this.fade)
			this.layer.ellipse(-21+g*14,64,12,12)
			this.layer.fill(150,this.fade*this.statusFade[this.statusDisplay[g]]*this.statusInfoFade[g])
			this.layer.rect(0,80,45,15,3)
		}
		this.layer.fill(0,this.fade)
		this.layer.textSize(8)
		this.layer.text(max(0,ceil(this.life*10)/10)+"/"+max(0,ceil(this.base.life)),0,21)
		this.layer.textSize(10)
		this.layer.text(this.name,0,32)
		this.layer.text(types.weapon[this.weapon].name,0,40)
		for(g=0,lg=this.boostDisplay.length;g<lg;g++){
			this.layer.fill(0,this.boostFade[this.boostDisplay[g]]*this.fade)
			if(this.boost[this.boostDisplay[g]]>0){
				this.layer.text('+'+this.boost[this.boostDisplay[g]],-21+g*14,50)
			}else{
				this.layer.text(this.boost[this.boostDisplay[g]],-21+g*14,50)
			}
			this.layer.fill(0,this.fade*this.boostFade[this.boostDisplay[g]]*this.boostInfoFade[g])
			this.layer.text(this.boostName[this.boostDisplay[g]],0,80)
		}
		for(g=0,lg=this.statusDisplay.length;g<lg;g++){
			this.layer.fill(0,this.statusFade[this.statusDisplay[g]]*this.fade)
			this.layer.text(this.status[this.statusDisplay[g]],-21+g*14,64)
			this.layer.fill(0,this.fade*this.statusFade[this.statusDisplay[g]]*this.statusInfoFade[g])
			this.layer.text(this.statusName[this.statusDisplay[g]],0,80)
		}
		this.layer.translate(-this.base.position.x,-this.base.position.y)
	}
	display(){
		this.layer.translate(this.position.x,this.position.y)
		this.layer.rotate(this.direction)
		this.layer.scale(this.size*this.flip,this.size)
		switch(this.type){
			case 1:
				this.layer.stroke(100,110,120,this.fade)
				this.layer.strokeWeight(4)
				this.layer.line(-4,-30,-8-sin(this.rate[0]*2)*3,0)
				this.layer.line(4,-30,8+sin(this.rate[0]*2)*3,0)
				this.layer.stroke(200,160,80,this.fade)
				this.layer.line(-6*cos(this.rate[1]),-48,-15*cos(this.rate[1])+this.anim[0]*30+this.anim[1]*36,-24-this.anim[0]*12-this.anim[1]*30)
				this.layer.line(6*cos(this.rate[1]),-48,15*cos(this.rate[1])+this.anim[0]*15+this.anim[1]*12,-24-this.anim[0]*12-this.anim[1]*30)
				this.layer.noStroke()
				this.layer.fill(50,125,200,this.fade)
				this.layer.ellipse(0,-45,18,36)
				this.layer.fill(100,110,120,this.fade)
				this.layer.arc(0,-45,18,36,0,180)
				this.layer.fill(200,160,80,this.fade)
				this.layer.arc(4,-45,12,36,-90,90)
				this.layer.arc(-4,-45,12,36,90,270)
				this.layer.fill(240,220,180,this.fade)
				this.layer.ellipse(0,-75,30,30)
				this.layer.fill(0,this.fade)
				this.layer.ellipse(4,-72,4,4)
				this.layer.ellipse(12,-72,4,4)
				this.layer.stroke(150,120,60,this.fade)
				this.layer.strokeWeight(3)
				this.layer.fill(150,120,60,this.fade)
				this.layer.line(-18,-84,18,-84)
				this.layer.quad(-12,-84,12,-84,8,-92,-8,-92)
			break
			case 2:
				this.layer.stroke(50,this.fade)
				this.layer.strokeWeight(4)
				this.layer.line(-4,-30,-8-sin(this.rate[0]*2)*3,0)
				this.layer.line(4,-30,8+sin(this.rate[0]*2)*3,0)
				this.layer.line(-6*cos(this.rate[1]),-48,-15*cos(this.rate[1])+this.anim[0]*30+this.anim[1]*36,-24-this.anim[0]*12-this.anim[1]*30)
				this.layer.line(6*cos(this.rate[1]),-48,15*cos(this.rate[1])+this.anim[0]*15+this.anim[1]*12,-24-this.anim[0]*12-this.anim[1]*30)
				this.layer.noStroke()
				this.layer.fill(40,this.fade)
				this.layer.ellipse(0,-45,24,36)
				this.layer.fill(60,this.fade)
				this.layer.rect(0,-45,24,3)
				this.layer.fill(240,220,180,this.fade)
				this.layer.ellipse(0,-75,30,30)
				this.layer.fill(0,this.fade)
				this.layer.ellipse(4,-72,4,4)
				this.layer.ellipse(12,-72,4,4)
				this.layer.stroke(120,this.fade)
				this.layer.strokeWeight(2)
				this.layer.fill(200,this.fade/3)
				this.layer.rect(8,-72,16,8,2)
			break
			case 3:
				this.layer.stroke(200,160,80,this.fade)
				this.layer.strokeWeight(4)
				this.layer.line(-4,-30,-8-sin(this.rate[0]*2)*3,0)
				this.layer.line(4,-30,8+sin(this.rate[0]*2)*3,0)
				this.layer.stroke(200,210,220,this.fade)
				this.layer.line(-6*cos(this.rate[1]),-48,-15*cos(this.rate[1])+this.anim[0]*30+this.anim[1]*36,-24-this.anim[0]*12-this.anim[1]*30)
				this.layer.line(6*cos(this.rate[1]),-48,15*cos(this.rate[1])+this.anim[0]*15+this.anim[1]*12,-24-this.anim[0]*12-this.anim[1]*30)
				this.layer.noStroke()
				this.layer.fill(200,210,220,this.fade)
				this.layer.ellipse(0,-45,18,36)
				this.layer.fill(200,160,80,this.fade)
				this.layer.arc(0,-45,18,36,0,180)
				this.layer.fill(240,220,180,this.fade)
				this.layer.ellipse(0,-75,30,30)
				this.layer.fill(0,this.fade)
				this.layer.ellipse(4,-72,4,4)
				this.layer.ellipse(12,-72,4,4)
				this.layer.stroke(80,160,200,this.fade)
				this.layer.strokeWeight(3)
				this.layer.fill(80,160,200,this.fade)
				this.layer.line(-16,-80,24,-80)
				this.layer.arc(0,-81,32,24,-180,0)
			break
			case 4:
				this.layer.stroke(20,this.fade)
				this.layer.strokeWeight(4)
				this.layer.line(-4,-30,-8-sin(this.rate[0]*2)*3,0)
				this.layer.line(4,-30,8+sin(this.rate[0]*2)*3,0)
				this.layer.line(-6*cos(this.rate[1]),-48,-15*cos(this.rate[1])+this.anim[0]*30+this.anim[1]*36,-24-this.anim[0]*12-this.anim[1]*30)
				this.layer.line(6*cos(this.rate[1]),-48,15*cos(this.rate[1])+this.anim[0]*15+this.anim[1]*12,-24-this.anim[0]*12-this.anim[1]*30)
				this.layer.noStroke()
				this.layer.fill(20,this.fade)
				this.layer.ellipse(0,-43,21,36)
				this.layer.fill(200,this.fade)
				this.layer.triangle(-2,-60,6,-60,4,-48)
				this.layer.fill(200,50,50,this.fade)
				this.layer.quad(4,-48,2,-52,2,-64,5,-54)
				this.layer.fill(240,220,180,this.fade)
				this.layer.ellipse(0,-72,30,30)
				this.layer.fill(0,this.fade)
				this.layer.ellipse(4,-69,4,4)
				this.layer.ellipse(12,-69,4,4)
			break
			case 5:
				this.layer.stroke(120,120,130,this.fade)
				this.layer.strokeWeight(4)
				this.layer.line(-4,-30,-8-sin(this.rate[0]*2)*3,0)
				this.layer.line(4,-30,8+sin(this.rate[0]*2)*3,0)
				this.layer.stroke(50,200,50,this.fade)
				this.layer.line(-6*cos(this.rate[1]),-48,-15*cos(this.rate[1])+this.anim[0]*30+this.anim[1]*36,-24-this.anim[0]*12-this.anim[1]*30)
				this.layer.line(6*cos(this.rate[1]),-48,15*cos(this.rate[1])+this.anim[0]*15+this.anim[1]*12,-24-this.anim[0]*12-this.anim[1]*30)
				this.layer.noStroke()
				this.layer.fill(50,200,50,this.fade)
				this.layer.ellipse(0,-45,24,42)
				this.layer.fill(120,120,130,this.fade)
				this.layer.arc(0,-45,24,42,0,180)
				this.layer.fill(240,220,180,this.fade)
				this.layer.ellipse(0,-78,30,30)
				this.layer.fill(0,this.fade)
				this.layer.ellipse(4,-75,4,4)
				this.layer.ellipse(12,-75,4,4)
				this.layer.stroke(255,this.fade)
				this.layer.strokeWeight(2)
				this.layer.line(4,-50,4,-58)
				this.layer.noFill()
				this.layer.arc(4,-54,6,8,-90,90)
			break
			case 6:
				this.layer.stroke(120,60,20,this.fade)
				this.layer.strokeWeight(4)
				this.layer.line(-4,-30,-8-sin(this.rate[0]*2)*3,0)
				this.layer.line(4,-30,8+sin(this.rate[0]*2)*3,0)
				this.layer.line(-6*cos(this.rate[1]),-48,-15*cos(this.rate[1])+this.anim[0]*30+this.anim[1]*36,-24-this.anim[0]*12-this.anim[1]*30)
				this.layer.line(6*cos(this.rate[1]),-48,15*cos(this.rate[1])+this.anim[0]*15+this.anim[1]*12,-24-this.anim[0]*12-this.anim[1]*30)
				this.layer.noStroke()
				this.layer.fill(120,60,20,this.fade)
				this.layer.ellipse(0,-45,18,36)
				this.layer.fill(90,45,15,this.fade)
				this.layer.rect(0,-45,18,2)
				this.layer.fill(60,30,15,this.fade)
				this.layer.rect(0,-45,3,6)
				this.layer.rect(-6,-45,3,6)
				this.layer.rect(6,-45,3,6)
				this.layer.rect(0,-49,2,2)
				this.layer.rect(-6,-49,2,2)
				this.layer.rect(6,-49,2,2)
				this.layer.fill(200,200,50,this.fade)
				this.layer.arc(0,-54,18,24,-180,0)
				this.layer.fill(120,this.fade)
				this.layer.ellipse(4,-60,8,6)
				this.layer.fill(240,220,180,this.fade)
				this.layer.ellipse(0,-75,30,30)
				this.layer.fill(0,this.fade)
				this.layer.ellipse(4,-72,4,4)
				this.layer.ellipse(12,-72,4,4)
			break
			case 8:
				this.layer.noStroke()
				this.layer.fill(230,230,5,this.fade)
				this.layer.ellipse(-10-sin(this.rate[0]*2)*2,-8,20,20)
				this.layer.ellipse(10+sin(this.rate[0]*2)*2,-8,20,20)
				this.layer.ellipse(cos(this.anim[2])*-(16+this.anim[3])+this.anim[1]*24+this.anim[0]*18,-30+sin(this.anim[2])*-(16+this.anim[3])-this.anim[1]*6-this.anim[0]*4,20,20);
				this.layer.fill(235,235,55,this.fade)
				this.layer.ellipse(0,-28,24,40)
				this.layer.fill(240,240,60,this.fade)
				this.layer.ellipse(cos(this.anim[2])*(16+this.anim[3])+this.anim[1]*24+this.anim[0]*18,-30+sin(this.anim[2])*(16+this.anim[3])-this.anim[1]*6-this.anim[0]*4,20,20);
				this.layer.fill(245,245,65,this.fade)
				this.layer.ellipse(0,-60,40,40)
				this.layer.fill(240,160,20,this.fade);
				this.layer.ellipse(13.5,-52,24,16);
				this.layer.stroke(0,this.fade);
				this.layer.strokeWeight(1);
				this.layer.arc(13.5,-52,22,2,-180,0);
				this.layer.line(18-3,-56,18-3,-58);
				this.layer.line(18+3,-56,18+3,-58);
				this.layer.strokeWeight(3);
				this.layer.point(9-6,-64);
				this.layer.point(9+6,-64);
				this.layer.noStroke()
				this.layer.fill(255,155,55,this.fade)
				this.layer.rect(0,-76,40,4)
				this.layer.triangle(-14,-76,14,-76,0,-100)
				this.layer.fill(220,this.fade)
				this.layer.quad(-10.5,-82,10.5,-82,7,-88,-7,-88)
			break
			case 9:
				this.layer.stroke(80,this.fade)
				this.layer.strokeWeight(4)
				this.layer.line(-4,-30,-8-sin(this.rate[0]*2)*3,0)
				this.layer.line(4,-30,8+sin(this.rate[0]*2)*3,0)
				this.layer.line(-6*cos(this.rate[1]),-48,-15*cos(this.rate[1])+this.anim[0]*30+this.anim[1]*36,-24-this.anim[0]*12-this.anim[1]*30)
				this.layer.line(6*cos(this.rate[1]),-48,15*cos(this.rate[1])+this.anim[0]*15+this.anim[1]*12,-24-this.anim[0]*12-this.anim[1]*30)
				this.layer.noStroke()
				this.layer.fill(80,this.fade)
				this.layer.ellipse(0,-45,18,36)
				this.layer.fill(240,220,180,this.fade)
				this.layer.ellipse(0,-75,30,30)
				this.layer.fill(0,this.fade)
				this.layer.ellipse(4,-72,4,4)
				this.layer.ellipse(12,-72,4,4)
			break
			case 10:
				this.layer.stroke(80,this.fade)
				this.layer.strokeWeight(4)
				this.layer.line(-4,-30,-8-sin(this.rate[0]*2)*3,0)
				this.layer.line(4,-30,8+sin(this.rate[0]*2)*3,0)
				this.layer.line(-12*cos(this.rate[1]),-48,-24*cos(this.rate[1])+this.anim[0]*30+this.anim[1]*36,-24-this.anim[0]*12-this.anim[1]*30)
				this.layer.line(12*cos(this.rate[1]),-48,24*cos(this.rate[1])+this.anim[0]*15+this.anim[1]*12,-24-this.anim[0]*12-this.anim[1]*30)
				this.layer.noStroke()
				this.layer.fill(80,this.fade)
				this.layer.ellipse(0,-39,36,30)
				this.layer.fill(240,220,180,this.fade)
				this.layer.ellipse(0,-66,30,30)
				this.layer.fill(0,this.fade)
				this.layer.ellipse(4,-63,4,4)
				this.layer.ellipse(12,-63,4,4)
			break
			case 11:
				this.layer.stroke(80,this.fade)
				this.layer.strokeWeight(4)
				this.layer.line(-4,-36,-8-sin(this.rate[0]*2)*3,0)
				this.layer.line(4,-36,8+sin(this.rate[0]*2)*3,0)
				this.layer.line(-5*cos(this.rate[1]),-54,-12*cos(this.rate[1])+this.anim[0]*30+this.anim[1]*36,-24-this.anim[0]*12-this.anim[1]*30)
				this.layer.line(5*cos(this.rate[1]),-54,12*cos(this.rate[1])+this.anim[0]*15+this.anim[1]*12,-24-this.anim[0]*12-this.anim[1]*30)
				this.layer.noStroke()
				this.layer.fill(80,this.fade)
				this.layer.ellipse(0,-48,15,45)
				this.layer.fill(240,220,180,this.fade)
				this.layer.ellipse(0,-84,30,30)
				this.layer.fill(0,this.fade)
				this.layer.ellipse(4,-84,4,4)
				this.layer.ellipse(12,-84,4,4)
			break
			case 12:
				this.layer.stroke(80,this.fade)
				this.layer.strokeWeight(4)
				this.layer.line(-6,-30,-12-sin(this.rate[0]*2)*4,0)
				this.layer.line(6,-30,12+sin(this.rate[0]*2)*4,0)
				this.layer.line(-12*cos(this.rate[1]),-60,-25*cos(this.rate[1])+this.anim[0]*36+this.anim[1]*45,-30-this.anim[0]*12-this.anim[1]*30)
				this.layer.line(12*cos(this.rate[1]),-60,25*cos(this.rate[1])+this.anim[0]*18+this.anim[1]*15,-30-this.anim[0]*12-this.anim[1]*30)
				this.layer.noStroke()
				this.layer.fill(80,this.fade)
				this.layer.ellipse(0,-51,30,54)
				this.layer.fill(240,220,180,this.fade)
				this.layer.ellipse(0,-90,30,30)
				this.layer.fill(0,this.fade)
				this.layer.ellipse(4,-87,4,4)
				this.layer.ellipse(12,-87,4,4)
			break
			case 13:
				this.layer.stroke(65,85,85,this.fade)
				this.layer.strokeWeight(4)
				this.layer.line(-4,-30,-8-sin(this.rate[0]*2)*3,0)
				this.layer.line(4,-30,8+sin(this.rate[0]*2)*3,0)
				this.layer.stroke(85,135,195,this.fade)
				this.layer.line(-6*cos(this.rate[1]),-48,-15*cos(this.rate[1])+this.anim[0]*30+this.anim[1]*36,-24-this.anim[0]*12-this.anim[1]*30)
				this.layer.line(6*cos(this.rate[1]),-48,15*cos(this.rate[1])+this.anim[0]*15+this.anim[1]*12,-24-this.anim[0]*12-this.anim[1]*30)
				this.layer.noStroke()
				this.layer.fill(95,105,110,this.fade)
				this.layer.ellipse(0,-47,18,39)
				this.layer.fill(30,25,0,this.fade);
				this.layer.rect(-7,-45,5,2);
				this.layer.rect(0,-45,5,2);
				this.layer.rect(7,-45,5,2);
				this.layer.fill(240,220,180,this.fade)
				this.layer.ellipse(0,-78,30,30)
				this.layer.fill(0,this.fade)
				this.layer.ellipse(4,-75,4,4)
				this.layer.ellipse(12,-75,4,4)
				this.layer.fill(80,85,90,this.fade)
				this.layer.arc(0,-78,36,36,-180,0)
				this.layer.fill(65,130,140,this.fade/2)
				this.layer.rect(8,-75,20,6)
			break
			case 14:
				this.layer.stroke(100,this.fade)
				this.layer.strokeWeight(4)
				this.layer.line(-4,-30,-8-sin(this.rate[0]*2)*3,0)
				this.layer.line(4,-30,8+sin(this.rate[0]*2)*3,0)
				this.layer.line(-6*cos(this.rate[1]),-48,-15*cos(this.rate[1])+this.anim[0]*30+this.anim[1]*36,-24-this.anim[0]*12-this.anim[1]*30)
				this.layer.line(6*cos(this.rate[1]),-48,15*cos(this.rate[1])+this.anim[0]*15+this.anim[1]*12,-24-this.anim[0]*12-this.anim[1]*30)
				this.layer.noStroke()
				this.layer.fill(100,this.fade)
				this.layer.ellipse(0,-47,18,39)
				this.layer.fill(60,this.fade);
				this.layer.rect(0,-45,20,3);
				this.layer.fill(240,220,180,this.fade)
				this.layer.ellipse(0,-78,30,30)
				this.layer.fill(0,this.fade)
				this.layer.ellipse(4,-75,4,4)
				this.layer.ellipse(12,-75,4,4)
				this.layer.fill(50,50,200,this.fade)
				this.layer.ellipse(-3,-57,5,5)
				this.layer.stroke(40,this.fade)
				this.layer.strokeWeight(1)
				this.layer.fill(255,this.fade/5)
				this.layer.ellipse(4,-74,6,5)
				this.layer.ellipse(12,-74,6,5)
				this.layer.line(7,0,9,0)
			break
			case 15:
				this.layer.noStroke()
				this.layer.fill(230,230,5,this.fade)
				this.layer.ellipse(-10-sin(this.rate[0]*2)*2,-8,20,20)
				this.layer.ellipse(10+sin(this.rate[0]*2)*2,-8,20,20)
				this.layer.ellipse(cos(this.anim[2])*-(16+this.anim[3])+this.anim[1]*24+this.anim[0]*18,-30+sin(this.anim[2])*-(16+this.anim[3])-this.anim[1]*6-this.anim[0]*4,20,20);
				this.layer.fill(235,235,55,this.fade)
				this.layer.ellipse(0,-28,24,40)
				this.layer.fill(240,240,60,this.fade)
				this.layer.ellipse(cos(this.anim[2])*(16+this.anim[3])+this.anim[1]*24+this.anim[0]*18,-30+sin(this.anim[2])*(16+this.anim[3])-this.anim[1]*6-this.anim[0]*4,20,20);
				this.layer.fill(245,245,65,this.fade)
				this.layer.ellipse(0,-60,40,40)
				this.layer.fill(240,160,20,this.fade);
				this.layer.ellipse(13.5,-52,24,16);
				this.layer.stroke(0,this.fade);
				this.layer.strokeWeight(1);
				this.layer.arc(13.5,-52,22,2,-180,0);
				this.layer.line(18-3,-56,18-3,-58);
				this.layer.line(18+3,-56,18+3,-58);
				this.layer.strokeWeight(3);
				this.layer.point(9-6,-64);
				this.layer.point(9+6,-64);
			break
		}
		this.layer.scale(1/this.size/this.flip,1/this.size)
		this.layer.rotate(-this.direction)
		this.layer.translate(-this.position.x,-this.position.y)
	}
	take(damage,spec,accuracy,user){
		this.calcAccuracy=accuracy
		this.calcDamage=damage
		this.hit=false
		if(current.combatants[user].status[4]>0){
			this.calcAccuracy*=0.5
		}
		if(current.combatants[user].status[9]>0){
			this.calcAccuracy*=0.8
			this.calcDamage*=2
		}
		if(this.status[9]>0){
			this.calcDamage*=1.5
		}
		if(random(0,1)<=this.calcAccuracy){
			if(current.combatants[user].status[5]>0&&floor(random(0,2))==0||current.combatants[user].status[9]>0&&floor(random(0,4))==0){
				this.calcDamage*=2
				entities.particles.push(new particle(this.layer,this.position.x,this.position.y,6,0,2,1,[255,125,0]))
				entities.particles[entities.particles.length-1].value='Crit'
			}
			this.hit=true
			this.status[6]=0
			if(this.status[3]>0){
				this.status[3]--
			}else if(this.status[8]<=0){
				switch(spec){
					case 0:
						this.life-=this.calcDamage/(2+max(0,this.boost[1]))*(2-min(0,this.boost[1]))
					break
					case 1:
						this.life-=this.calcDamage/2*(2-min(0,this.boost[1]))
					break
				}
			}
		}else{
			entities.particles.push(new particle(this.layer,this.position.x,this.position.y,6,0,2,1,[255,0,0]))
			entities.particles[entities.particles.length-1].value='Miss'
		}
	}
	update(){
		this.boostDisplay=[]
		this.statusDisplay=[]
		for(g=0,lg=this.boost.length;g<lg;g++){
			if(this.boostFade[g]!=0){
				this.boostDisplay.push(g)
			}
			if(this.boostFade[g]<1&&this.boost[g]!=0){
				this.boostFade[g]=round(this.boostFade[g]*10+1)/10
			}
			if(this.boostFade[g]>0&&this.boost[g]==0){
				this.boostFade[g]=round(this.boostFade[g]*10-1)/10
			}
			this.boost[g]=constrain(round(this.boost[g]),-4,4)
		}
		for(g=0,lg=this.status.length;g<lg;g++){
			if(this.statusFade[g]!=0){
				this.statusDisplay.push(g)
			}
			if(this.statusFade[g]<1&&this.status[g]!=0){
				this.statusFade[g]=round(this.statusFade[g]*10+1)/10
			}
			if(this.statusFade[g]>0&&this.status[g]==0){
				this.statusFade[g]=round(this.statusFade[g]*10-1)/10
			}
			this.status[g]=constrain(round(this.status[g]),-100,100)
		}
		for(g=0,lg=this.boostDisplay.length;g<lg;g++){
			if(dist(inputs.rel.x,inputs.rel.y,this.position.x-21+g*14,this.position.y+50)<=6&&this.boostInfoFade[g]<1){
				this.boostInfoFade[g]+=1/10
			}else if(dist(inputs.rel.x,inputs.rel.y,this.position.x-21+g*14,this.position.y+50)>6&&this.boostInfoFade[g]>0){
				this.boostInfoFade[g]-=1/10
			}
		}
		for(g=0,lg=this.statusDisplay.length;g<lg;g++){
			if(dist(inputs.rel.x,inputs.rel.y,this.position.x-21+g*14,this.position.y+64)<=6&&this.statusInfoFade[g]<1){
				this.statusInfoFade[g]+=1/10
			}else if(dist(inputs.rel.x,inputs.rel.y,this.position.x-21+g*14,this.position.y+64)>6&&this.statusInfoFade[g]>0){
				this.statusInfoFade[g]-=1/10
			}
		}
		if(this.life<=0&&this.fade>0){
			this.fade-=1/30
		}
		if(this.life<=0&&!this.dead){
			this.dead=true
			if(this.valued&&this.team==1){
				if(this.status[7]>0){
					this.reward*=2
				}
				current.currency.money+=this.reward
				entities.particles.push(new particle(this.layer,this.position.x,this.position.y,6,0,2,1,[255,225,0]))
				entities.particles[entities.particles.length-1].value='$'+this.reward
			}
		}
		this.collect.life=this.collect.life*0.9+this.life*0.1
	}
}