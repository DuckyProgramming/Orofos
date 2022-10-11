class battle{
	constructor(layer,combatants){
		this.layer=layer
        this.stack=[]
        this.attack=new attack(this.layer,this)
		this.combatants=[]
		for(e=0,le=combatants.length;e<le;e++){
			this.combatants.push(new combatant(this.layer,0,0,combatants[e].id,combatants[e].weapon,combatants[e].team))
		}
        this.stacking={use:false}
        this.max=0
        this.partyAlive=[]
        this.possibleAttack=[]
        this.combatantListing=[3,2,1,0,4,5,6,7]
        this.stackers=[]
        this.reseting=false
        this.totalMoved=0
	}
    setupStack(){
        while(this.stack.length<20){
            for(e=0,le=this.combatantListing.length;e<le;e++){
                if(this.combatants[this.combatantListing[e]].speed>0){
                    if(this.combatants[this.combatantListing[e]].stacking<=0){
                        this.stack.push(new stack(this.layer,this.stack.length*48+24,18,this.combatantListing[e]))
                        this.combatants[this.combatantListing[e]].stacking=this.combatants[this.combatantListing[e]].speed*(2+max(0,-this.combatants[this.combatantListing[e]].boost[2]))/(2-min(0,-this.combatants[this.combatantListing[e]].boost[2]))
                    }else{
                        this.combatants[this.combatantListing[e]].stacking--
                    }
                }
            }
        }
    }
    reset(){
        for(g=0,lg=this.stack.length;g<lg;g++){
            this.stack[g].cancel=true
        }
        this.stackers=[]
        for(g=0,lg=this.stack[0].stackers.length;g<lg;g++){
            this.stackers.push(this.stack[0].stackers[g])
        }
        this.reseting=true
    }
    set(scene){
        switch(scene){
            case 'battle':
                for(e=0,le=this.combatants.length;e<le;e++){
                    this.combatants[e].position.x=e*100+50+this.combatants[e].team*100
                    this.combatants[e].position.y=450
                    this.combatants[e].base.position.x=e*100+50+this.combatants[e].team*100
                    this.combatants[e].base.position.y=450
                    this.combatants[e].rate[0]=random(0,360)
                }
            break
            case 'walk':
                this.max=0
                for(e=0,le=this.combatants.length;e<le;e++){
                    if(this.combatants[e].team==0){
                        this.max++
                    }
                }
                for(e=0,le=this.combatants.length;e<le;e++){
                    this.combatants[e].position.x=e*100+400-this.max*50
                    this.combatants[e].position.y=450
                    this.combatants[e].base.position.x=e*100+400-this.max*50
                    this.combatants[e].base.position.y=450
                    this.combatants[e].rate[0]=random(0,360)
                }
            break
        }
    }
	display(){
        switch(stage.scene){
            case 'battle':
                for(e=0,le=this.combatants.length;e<le;e++){
                    this.combatants[e].display()
                }
                this.layer.noStroke()
                this.layer.fill(120)
                this.layer.rect(450,24,910,48)
                this.layer.fill(150,125,90)
                this.layer.rect(450,525,910,150)
                for(e=0,le=this.combatants.length;e<le;e++){
                    this.combatants[e].displayLife()
                }
                for(e=0,le=this.stack.length;e<le;e++){
                    this.stack[e].display()
                }
                for(e=0;e<4;e++){
                    this.layer.stroke(220,225,230,this.combatants[e].infoFade);
                    this.layer.strokeWeight(5);
                    this.layer.line(86+e*100,338,68+e*100,338);
                    this.layer.line(14+e*100,338,32+e*100,338);
                    this.layer.line(86+e*100,482,68+e*100,482);
                    this.layer.line(14+e*100,482,32+e*100,482);
                    this.layer.line(86+e*100,338,86+e*100,374);
                    this.layer.line(14+e*100,338,14+e*100,374);
                    this.layer.line(86+e*100,482,86+e*100,446);
                    this.layer.line(14+e*100,482,14+e*100,446);
                    this.layer.stroke(220,225,230,this.combatants[e+4].infoFade);
                    this.layer.strokeWeight(5);
                    this.layer.line(586+e*100,338,568+e*100,338);
                    this.layer.line(514+e*100,338,532+e*100,338);
                    this.layer.line(586+e*100,482,568+e*100,482);
                    this.layer.line(514+e*100,482,532+e*100,482);
                    this.layer.line(586+e*100,338,586+e*100,374);
                    this.layer.line(514+e*100,338,514+e*100,374);
                    this.layer.line(586+e*100,482,586+e*100,446);
                    this.layer.line(514+e*100,482,514+e*100,446);
                }
                if(this.attack.timer<=0){
                    if(this.attack.trigger){
                        this.layer.stroke(100,85,60)
                        this.layer.strokeWeight(4)
                        this.layer.fill(125,105,75)
                        this.layer.rect(170,90,300,40)
                        this.layer.fill(0)
                        this.layer.noStroke()
                        this.layer.textSize(20)
                        this.layer.text("Select",170,90)
                        e=0
                        while(this.combatants[4+this.attack.target[0]].life<=0&&e<4){
                            e++
                            this.attack.target[0]=(this.attack.target[0]+1)%4
                        }
                    }
                    else if(this.stack[0].type<4&&!this.stacking.use){
                        for(e=0,le=this.combatants[this.stack[0].type].attacks.length;e<le;e++){
                            if(types.attack[this.combatants[this.stack[0].type].attacks[e]].uses!=0&&this.combatants[this.stack[0].type].uses[e]<=0){
                                this.layer.stroke(60)
                                this.layer.fill(75)
                            }else{
                                this.layer.stroke(100,85,60)
                                this.layer.fill(125,105,75)
                            }
                            this.layer.strokeWeight(4)
                            this.layer.rect(170,90+e*50,300,40)
                            this.layer.fill(0)
                            this.layer.noStroke()
                            this.layer.textSize(20)
                            if(types.attack[this.combatants[this.stack[0].type].attacks[e]].uses!=0){
                                this.layer.text(types.attack[this.combatants[this.stack[0].type].attacks[e]].name,145,90+e*50)
                                this.layer.textSize(10)
                                this.layer.text(round(this.combatants[this.stack[0].type].uses[e])+'/'+types.attack[this.combatants[this.stack[0].type].attacks[e]].uses,295,90+e*50)
                            }else{
                                this.layer.text(types.attack[this.combatants[this.stack[0].type].attacks[e]].name,170,90+e*50)
                            }
                        }
                    }
                }
            break
            case 'walk':
                for(e=0,le=this.combatants.length;e<le;e++){
                    if(this.combatants[e].team==0){
                        this.combatants[e].display()
                    }
                }
                this.layer.noStroke()
                this.layer.fill(150,125,90)
                this.layer.rect(450,525,910,150)
                for(e=0,le=this.combatants.length;e<le;e++){
                    if(this.combatants[e].team==0){
                        this.combatants[e].displayLife()
                    }
                }
                this.layer.fill(0)
                this.layer.textSize(20)
                this.layer.text(ceil(this.totalMoved/150)+'m',450,580)
            break
        }
    }
    turn(){
        for(e=0,le=this.combatants.length;e<le;e++){
            if(this.combatants[e].status[0]>0){
                this.combatants[e].life-=this.combatants[e].status[0]
            }
        }
    }
	update(){
        switch(stage.scene){
            case 'battle':
                if(this.combatants[this.stack[0].type].status[1]>0&&!this.stack[0].click){
                    this.combatants[this.stack[0].type].status[1]--
                    this.stack[0].cancel=true
                }
                if(this.combatants[this.stack[0].type].status[2]>0&&!this.stack[0].click){
                    this.combatants[this.stack[0].type].status[2]--
                    if(floor(random(0,4))==0){
                        this.stack[0].cancel=true
                        this.combatants[this.stack[0].type].life-=this.combatants[this.stack[0].type].damage
                    }
                }
                this.stack[0].click=true
                if(this.stack[0].type<4&&!this.stacking.use&&this.attack.timer<=0){
                    this.attack.user=this.stack[0].type
                }else if(!this.stacking.use&&this.stack[0].type>=4&&!this.attack.trigger&&this.attack.timer<=0){
                    this.attack.user=this.stack[0].type-4
                    this.partyAlive=[]
                    for(e=0;e<4;e++){
                        if(this.combatants[e].life>0){
                            this.partyAlive.push(e)
                        }
                    }
                    this.possibleAttack=[]
                    for(e=0,le=this.combatants[this.stack[0].type].attacks.length;e<le;e++){
                        if(this.combatants[this.stack[0].type].uses[e]>0||types.attack[this.combatants[this.stack[0].type].attacks[e]].uses==0){
                            this.possibleAttack.push(e)
                        }
                    }
                    this.attack.type=this.possibleAttack[min(floor(random(0,this.possibleAttack.length)),this.possibleAttack.length-1)]
                    if(this.combatants[this.stack[0].type].uses[this.attack.type]>0){
                        this.combatants[this.stack[0].type].uses[this.attack.type]--
                    }
                    this.attack.type=this.combatants[this.stack[0].type].attacks[this.attack.type]
                    this.attack.target[1]=this.partyAlive[min(floor(random(0,this.partyAlive.length)),this.partyAlive.length-1)]
                    if(this.combatants[this.stack[0].type].attackClass[a]==0){
                        this.attack.damage=types.attack[this.attack.type].damage*types.weapon[this.combatants[this.stack[0].type].weapon].damage*this.combatants[this.stack[0].type].damage*(2+max(0,current.combatants[current.stack[0].type].boost[0]))/(2-min(0,current.combatants[current.stack[0].type].boost[0]))
                    }else{
                        this.attack.damage=types.attack[this.attack.type].damage*this.combatants[this.stack[0].type].damage*(2+max(0,current.combatants[current.stack[0].type].boost[0]))/(2-min(0,current.combatants[current.stack[0].type].boost[0]))
                    }
                    this.attack.class=types.attack[this.attack.type].class
                    if(!this.stack[0].cancel){
                        this.attack.set()
                    }
                }
                for(e=0;e<4;e++){
                    if(this.stack[0].type<4){
                        if(this.combatants[e].infoFade<1&&e==this.attack.user&&this.attack.timer<=0){
                            this.combatants[e].infoFade+=0.1;
                        }else if(this.combatants[e].infoFade>0&&(e!=this.attack.user||this.attack.timer>0)){
                            this.combatants[e].infoFade-=0.1;
                        }
                        if(this.combatants[e+4].infoFade<1&&(e==this.attack.target[0]&&types.attack[this.attack.type].target==0||types.attack[this.attack.type].target==2&&this.combatants[e+4].life>0)&&this.attack.trigger){
                            this.combatants[e+4].infoFade+=0.1;
                        }else if(this.combatants[e+4].infoFade>0&&(!(e==this.attack.target[0]&&types.attack[this.attack.type].target==0||types.attack[this.attack.type].target==2&&this.combatants[e+4].life>0)||!this.attack.trigger)){
                            this.combatants[e+4].infoFade-=0.1;
                        }
                    }
                    else{
                        if(this.combatants[e].infoFade<1&&(e==this.attack.target[1]&&types.attack[this.attack.type].target==0||types.attack[this.attack.type].target==2&&this.combatants[e].life>0)){
                            this.combatants[e].infoFade+=0.1;
                        }else if(this.combatants[e].infoFade>0&&!(e==this.attack.target[1]&&types.attack[this.attack.type].target==0||types.attack[this.attack.type].target==2&&this.combatants[e].life>0)){
                            this.combatants[e].infoFade-=0.1;
                        }
                        if(this.combatants[e+4].infoFade<1&&e==this.attack.user){
                            this.combatants[e+4].infoFade+=0.1;
                        }else if(this.combatants[e+4].infoFade>0&&e!=this.attack.user){
                            this.combatants[e+4].infoFade-=0.1;
                        }
                    }
                }
                for(e=0,le=this.combatants.length;e<le;e++){
                    this.combatants[e].update()
                }
                for(e=0,le=this.stack.length;e<le;e++){
                    this.stack[e].update(e,this.combatants)
                    if(this.stack[e].remove){
                        this.stack.splice(e,1)
                        e--
                        le--
                    }
                }
                if(this.stack.length<=0){
                    for(e=0,le=this.combatants.length;e<le;e++){
                        this.combatants[e].stacking=this.stackers[e]
                    }
                    this.setupStack()
                    this.reseting=false
                }else if(this.attack.timer>0){
                    this.attack.timer=round(this.attack.timer-1)
                    this.attack.update()
                }
                if(this.stack.length<20&&!this.reseting){
                    this.max=24
                    for(e=0,le=this.stack.length;e<le;e++){
                        this.max=max(this.max,this.stack[e].position.x)
                    }
                    if(this.max<960){
                        for(e=0,le=this.combatantListing.length;e<le;e++){
                            if(this.combatants[this.combatantListing[e]].speed>0&&this.combatants[this.combatantListing[e]].life>0){
                                if(this.combatants[this.combatantListing[e]].stacking<=0){
                                    this.stack.push(new stack(this.layer,this.max+48,18,this.combatantListing[e]))
                                    this.combatants[this.combatantListing[e]].stacking=this.combatants[this.combatantListing[e]].speed*(2+max(0,-this.combatants[this.combatantListing[e]].boost[2]))/(2-min(0,-this.combatants[this.combatantListing[e]].boost[2]))
                                    this.max+=48
                                }else{
                                    this.combatants[this.combatantListing[e]].stacking--
                                }
                            }
                        }
                    }
                }
            break
            case 'walk':
                if(inputs.keys[0][1]||inputs.keys[1][1]){
                    this.totalMoved++
                    for(e=0,le=this.combatants.length;e<le;e++){
                        this.combatants[e].rate[0]+=4
                    }
                }
            break
        }
	}
}