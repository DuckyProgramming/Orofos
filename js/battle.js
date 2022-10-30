class battle{
	constructor(layer,combatants){
		this.layer=layer
        this.stack=[]
        this.attack=new attack(this.layer,this)
        this.cut=new cut(this.layer,this)
		this.combatants=[]
		for(e=0,le=combatants.length;e<le;e++){
			this.combatants.push(new combatant(this.layer,0,0,combatants[e].id,combatants[e].weapon,combatants[e].team,e))
		}
        this.characters=[]
        this.stacking={use:false}
        this.max=0
        this.partyAlive=[]
        this.possibleAttack=[]
        this.combatantListing=[3,2,1,0,4,5,6,7]
        this.storage=[]
        this.reseting=false
        this.totalMoved=0
        this.time=0
        this.setTime=0
        this.speed=1
        this.currency={money:500}
        this.story=0
        this.complete={main:false}
	}
    end(){
        for(e=4,le=this.combatants.length;e<le;e++){
            this.combatants[e].fade=0
            this.combatants[e].type=0
        }
        entities.particles=[]
        run={fore:[entities.particles]}
        for(e=0,le=this.combatants.length;e<le;e++){
            this.combatants[e].infoFade=0
        }
        this.attack=new attack(this.layer,this)
        this.stacking.use=false
        for(e=0,le=this.combatants.length;e<le;e++){
            this.combatants[e].boostDisplay=[]
            this.combatants[e].statusDisplay=[]
            for(f=0,lf=this.combatants[e].boost.length;f<lf;f++){
                this.combatants[e].boost[f]=0
            }
            for(f=0,lf=this.combatants[e].status.length;f<lf;f++){
                this.combatants[e].status[f]=0
            }
            for(f=0,lf=this.combatants[e].anim.length;f<lf;f++){
                this.combatants[e].anim[f]=0
            }
        }
    }
    setupStack(){
        entities.particles=[]
        run={fore:[entities.particles]}
        for(e=0,le=this.combatants.length;e<le;e++){
            this.combatants[e].infoFade=0
        }
        while(this.stack.length<20){
            this.time++
            for(e=0,le=this.combatantListing.length;e<le;e++){
                if(this.combatants[this.combatantListing[e]].speed>0&&this.combatants[this.combatantListing[e]].life>0){
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
        for(e=0,le=this.stack.length;e<le;e++){
            this.stack[e].cancel=true
        }
        this.setTime=this.stack[0].time
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
                    if(this.combatants[e].team==0&&this.combatants[e].life>0){
                        this.max++
                    }
                }
                for(e=0,le=this.combatants.length;e<le;e++){
                    this.combatants[e].position.x=e*100+300
                    this.combatants[e].position.y=450
                    this.combatants[e].base.position.x=e*100+300
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
                    if(dev.id){
                        this.layer.fill(200)
                        this.layer.textSize(30)
                        this.layer.text(e,this.combatants[e].position.x,300)
                    }
                }
                for(e=0,le=this.stack.length;e<le;e++){
                    this.stack[e].display()
                }
                if(this.attack.timer>0){
                    this.layer.noStroke()
                    this.layer.fill(0)
                    this.layer.textSize(20)
                    if(this.combatants[this.stack[0].type].alt==''){
                        this.layer.text(this.combatants[this.stack[0].type].name+' uses '+types.attack[this.attack.type].name,450,80)
                    }else{
                        this.layer.text(this.combatants[this.stack[0].type].name+' '+this.combatants[this.stack[0].type].alt+' uses '+types.attack[this.attack.type].name,450,80)
                    }
                }else{
                    if(this.attack.trigger){
                        this.layer.stroke(100,85,60)
                        this.layer.strokeWeight(4)
                        this.layer.fill(125,105,75)
                        this.layer.rect(170,90,300,40)
                        this.layer.fill(0)
                        this.layer.noStroke()
                        this.layer.textSize(20)
                        this.layer.text("Select",170,90)
                    }
                    else if(this.stack[0].type<4&&!dev.auto&&!this.stacking.use){
                        for(e=0,le=this.combatants[this.stack[0].type].attacks.length;e<le;e++){
                            this.layer.stroke(160,this.combatants[this.stack[0].type].attackInfoFade[e])
                            this.layer.fill(175,this.combatants[this.stack[0].type].attackInfoFade[e])
                            this.layer.strokeWeight(4)
                            this.layer.rect(470,90+e*50,300,30)
                            this.layer.fill(0,this.combatants[this.stack[0].type].attackInfoFade[e])
                            this.layer.noStroke()
                            this.layer.textSize(10)
                            this.layer.text(types.attack[this.combatants[this.stack[0].type].attacks[e]].description,470,90+e*50)
                            if(types.attack[this.combatants[this.stack[0].type].attacks[e]].uses!=0&&this.combatants[this.stack[0].type].uses[e]<=0){
                                this.layer.stroke(60)
                                this.layer.fill(75)
                            }else{
                                this.layer.stroke(100,85,60)
                                this.layer.fill(125,105,75)
                            }
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
                this.layer.noStroke()
                this.layer.fill(90,75,54)
                this.layer.rect(900+40000-this.totalMoved,350,600,200)
                for(e=0,le=this.characters.length;e<le;e++){
                    this.characters[e].display()
                }
                for(e=0,le=this.combatants.length;e<le;e++){
                    this.combatants[e].display()
                }
                this.layer.noStroke()
                this.layer.fill(150,125,90)
                this.layer.rect(450,525,910,150)
                for(e=0,le=this.combatants.length;e<le;e++){
                    this.combatants[e].base.position.x=this.combatants[e].position.x
                    this.combatants[e].base.position.y=this.combatants[e].position.y
                    this.combatants[e].displayLife()
                }
                for(e=0,le=this.characters.length;e<le;e++){
                    this.characters[e].displaySpeech()
                }
                for(e=0,le=this.combatants.length;e<le;e++){
                    this.combatants[e].displaySpeech()
                }
                if(this.cut.type!==132||!this.cut.trigger){
                    this.layer.noStroke()
                    this.layer.fill(0)
                    this.layer.textSize(20)
                    this.layer.text(ceil(this.totalMoved/5)+'m',450,580)
                }
            break
        }
        this.layer.noStroke()
        this.layer.fill(255,225,0)
        this.layer.textSize(20)
        this.layer.text('$'+this.currency.money,50,580)
    }
    turn(){
        for(e=0,le=this.combatants.length;e<le;e++){
            if(this.combatants[e].status[0]>0){
                this.combatants[e].life-=this.combatants[e].status[0]
                if(this.combatants[e].status[10]>0){
                    this.combatants[e].life-=this.combatants[e].status[0]*2
                }
            }
            if(this.combatants[e].status[13]>0){
                this.combatants[e].life-=this.combatants[e].status[13]
            }
        }
    }
    enableAttack(){
        if(this.combatants[this.stack[0].type].attackClass[this.attack.rememberType]==0){
            this.attack.damage=types.attack[this.attack.type].damage*types.weapon[this.combatants[this.stack[0].type].weapon].damage*this.combatants[this.stack[0].type].damage*(2+max(0,current.combatants[current.stack[0].type].boost[0]))/(2-min(0,current.combatants[current.stack[0].type].boost[0]))
        }else{
            this.attack.damage=types.attack[this.attack.type].damage*this.combatants[this.stack[0].type].damage*(2+max(0,current.combatants[current.stack[0].type].boost[0]))/(2-min(0,current.combatants[current.stack[0].type].boost[0]))
        }
        this.partyAlive=[]
        if(this.stack[0].type<4){
            for(e=0;e<4;e++){
                if(this.combatants[e].life>0&&types.attack[this.attack.type].target==3||this.combatants[e].life<=0&&types.attack[this.attack.type].target==7||this.combatants[e+4].life>0&&types.attack[this.attack.type].target!=3&&types.attack[this.attack.type].target!=7){
                    this.partyAlive.push(e)
                }
            }
        }else{
            for(e=0;e<4;e++){
                if(this.combatants[e+4].life>0&&types.attack[this.attack.type].target==3||this.combatants[e+4].life<=0&&types.attack[this.attack.type].target==7||this.combatants[e].life>0&&types.attack[this.attack.type].target!=3&&types.attack[this.attack.type].target!=7){
                    this.partyAlive.push(e)
                }
            }
        }
        if(types.attack[this.attack.type].target==7&&this.partyAlive.length==0){
            for(e=0;e<4;e++){
                this.partyAlive.push(e)
            }
        }
        this.attack.target[1]=this.partyAlive[min(floor(random(0,this.partyAlive.length)),this.partyAlive.length-1)]
        this.attack.accuracy=types.attack[this.attack.type].accuracy
        this.attack.class=types.attack[this.attack.type].class
        if(!this.stack[0].cancel){
            this.attack.set()
        }
    }
    rotate(){
        this.storage=[this.combatants[0],this.combatants[1],this.combatants[2],this.combatants[3],this.combatants[4],this.combatants[5],this.combatants[6],this.combatants[7]]
        this.combatants[0]=this.storage[7]
        this.combatants[1]=this.storage[6]
        this.combatants[2]=this.storage[5]
        this.combatants[3]=this.storage[4]
        this.combatants[4]=this.storage[3]
        this.combatants[5]=this.storage[2]
        this.combatants[6]=this.storage[1]
        this.combatants[7]=this.storage[0]
        for(g=0,lg=this.combatants.length;g<lg;g++){
            this.combatants[g].team=1-this.combatants[g].team
            this.combatants[g].flip*=-1
        }
        this.set(stage.scene)
        this.reset()
    }
	update(){
        for(e=0,le=this.characters.length;e<le;e++){
            this.characters[e].updatePassive()
        }
        for(e=0,le=this.combatants.length;e<le;e++){
            this.combatants[e].updatePassive()
        }
        switch(stage.scene){
            case 'battle':
                this.complete.main=true
                for(k=0,lk=this.combatants.length;k<lk;k++){
                    if(this.combatants[k].team==1&&this.combatants[k].life>0){
                        this.complete.main=false
                    }
                }
                if(this.complete.main){
                    transition.trigger=true
                    transition.scene='walk'
                }
                for(k=0;k<29;k++){
                    if(k!=0&&k!=3&&k!=12&&k!=14&&k!=23&&k!=25&&k!=26&&k!=28){
                        if(this.combatants[this.stack[0].type].status[k]>0&&!this.stack[0].click){
                            this.combatants[this.stack[0].type].status[k]--
                            if(k==1||k==6||k==8||k==16){
                                this.stack[0].cancel=true
                            }
                            if(k==2&&floor(random(0,4))==0){
                                this.stack[0].cancel=true
                                this.combatants[this.stack[0].type].life-=this.combatants[this.stack[0].type].damage
                            }
                            if(k==17&&this.combatants[this.stack[0].type].status[k]==0){
                                this.combatants[this.stack[0].type].status[18]+=4
                            }
                            if(k==27&&this.combatants[this.stack[0].type].status[k]==0){
                                this.combatants[this.stack[0].type].status[5]+=4
                            }
                        }
                    }
                }
                if(this.stack[0].cancel&&!this.stack[0].click){
                    this.combatants[this.stack[0].type].endTurn()
                    this.turn()
                }
                this.stack[0].click=true
                this.attack.check=false
                if(this.attack.timer<=0){
                    if(types.attack[this.attack.type].target==3){
                        e=0
                        while(this.combatants[this.attack.target[0]].life<=0&&e<4){
                            e++
                            this.attack.target[0]=(this.attack.target[0]+1)%4
                        }
                    }else{
                        e=0
                        while(this.combatants[4+this.attack.target[0]].life<=0&&e<4){
                            e++
                            this.attack.target[0]=(this.attack.target[0]+1)%4
                        }
                    }
                }
                if(this.stack[0].type<4&&!dev.auto&&!this.stacking.use&&this.attack.timer<=0){
                    this.attack.user=this.stack[0].type
                    this.attack.team=0
                    if(!this.attack.trigger){
                        for(e=0,le=this.combatants[this.stack[0].type].attacks.length;e<le;e++){
                            if(pointInsideBox({position:inputs.rel},{position:{x:170,y:90+e*50},width:300,height:40})){
                                this.attack.type=this.combatants[this.stack[0].type].attacks[e]
                                this.attack.check=true
                            }
                            if(pointInsideBox({position:inputs.rel},{position:{x:170,y:90+e*50},width:300,height:40})&&this.combatants[this.stack[0].type].attackInfoFade[e]<1){
                                this.combatants[this.stack[0].type].attackInfoFade[e]+=0.1
                            }
                            if(!pointInsideBox({position:inputs.rel},{position:{x:170,y:90+e*50},width:300,height:40})&&this.combatants[this.stack[0].type].attackInfoFade[e]>0){
                                this.combatants[this.stack[0].type].attackInfoFade[e]-=0.1
                            }
                        }
                    }
                }else if(!this.stacking.use&&(this.stack[0].type>=4||dev.auto)&&!this.attack.trigger&&this.attack.timer<=0){
                    this.attack.user=this.stack[0].type%4
                    this.attack.team=1
                    this.possibleAttack=[]
                    switch(this.combatants[this.stack[0].type].pattern){
                        case 0:
                            for(e=0,le=this.combatants[this.stack[0].type].attacks.length;e<le;e++){
                                if(this.combatants[this.stack[0].type].uses[e]>0||types.attack[this.combatants[this.stack[0].type].attacks[e]].uses==0){
                                    this.possibleAttack.push(e)
                                }
                            }
                        break
                        case 1:
                            if(this.combatants[this.stack[0].type].turn==0){
                                this.possibleAttack.push(this.combatants[this.stack[0].type].attacksByClass[0].length)
                            }else{
                                for(e=0,le=this.combatants[this.stack[0].type].attacks.length;e<le;e++){
                                    if(this.combatants[this.stack[0].type].attacks[e]!=this.combatants[this.stack[0].type].attacksByClass[1][0]&&(this.combatants[this.stack[0].type].uses[e]>0||types.attack[this.combatants[this.stack[0].type].attacks[e]].uses==0)){
                                        this.possibleAttack.push(e)
                                    }
                                }
                            }
                        break
                    }
                    this.attack.type=this.possibleAttack[min(floor(random(0,this.possibleAttack.length)),this.possibleAttack.length-1)]
                    if(this.combatants[this.stack[0].type].uses[this.attack.type]>0){
                        this.combatants[this.stack[0].type].uses[this.attack.type]--
                    }
                    if(this.combatants[this.stack[0].type].attacks[this.attack.type]!=123){
                        this.attack.rememberType=this.attack.type
                    }
                    this.attack.type=this.combatants[this.stack[0].type].attacks[this.attack.type]
                    this.enableAttack()
                }
                for(e=0;e<4;e++){
                    if(this.stack[0].type<4){
                        if(this.combatants[e].infoFade<1&&(e==this.attack.user&&this.attack.timer<=0||e==this.attack.target[0]&&types.attack[this.attack.type].target==3||types.attack[this.attack.type].target==4)){
                            this.combatants[e].infoFade+=0.1
                        }else if(this.combatants[e].infoFade>0&&!(e==this.attack.user&&this.attack.timer<=0||e==this.attack.target[0]&&types.attack[this.attack.type].target==3||types.attack[this.attack.type].target==4)){
                            this.combatants[e].infoFade-=0.1
                        }
                        if(this.combatants[e+4].infoFade<1&&(e==this.attack.target[0]&&types.attack[this.attack.type].target==0||types.attack[this.attack.type].target==2||types.attack[this.attack.type].target==5&&e<2||types.attack[this.attack.type].target==6&&e<3)&&(this.attack.trigger||this.attack.check)){
                            this.combatants[e+4].infoFade+=0.1
                        }else if(this.combatants[e+4].infoFade>0&&(!(e==this.attack.target[0]&&types.attack[this.attack.type].target==0||types.attack[this.attack.type].target==2||types.attack[this.attack.type].target==5&&e<2||types.attack[this.attack.type].target==6&&e<3)||!this.attack.trigger&&!this.attack.check)){
                            this.combatants[e+4].infoFade-=0.1
                        }
                    }
                    else{
                        if(this.combatants[e].infoFade<1&&(e==this.attack.target[1]&&types.attack[this.attack.type].target==0||types.attack[this.attack.type].target==2||types.attack[this.attack.type].target==5&&e>=2||types.attack[this.attack.type].target==6&&e>=1)){
                            this.combatants[e].infoFade+=0.1
                        }else if(this.combatants[e].infoFade>0&&!(e==this.attack.target[1]&&types.attack[this.attack.type].target==0||types.attack[this.attack.type].target==2||types.attack[this.attack.type].target==5&&e>=2||types.attack[this.attack.type].target==6&&e>=1)){
                            this.combatants[e].infoFade-=0.1
                        }
                        if(this.combatants[e+4].infoFade<1&&(e==this.attack.user||e==this.attack.target[1]&&types.attack[this.attack.type].target==3||types.attack[this.attack.type].target==4)){
                            this.combatants[e+4].infoFade+=0.1
                        }else if(this.combatants[e+4].infoFade>0&&!(e==this.attack.user||e==this.attack.target[1]&&types.attack[this.attack.type].target==3||types.attack[this.attack.type].target==4)){
                            this.combatants[e+4].infoFade-=0.1
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
                        this.combatants[e].stacking=this.combatants[e].speed-this.setTime+ceil(this.setTime/this.combatants[e].speed)*this.combatants[e].speed
                    }
                    this.setupStack()
                    this.reseting=false
                }else if(this.attack.timer>0){
                    this.attack.timer=round(this.attack.timer-1)
                    this.attack.update()
                    if(this.speed>0&&this.attack.timer>0){
                        this.attack.timer=round(this.attack.timer-1)
                        this.attack.update()
                    }
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
                for(e=0;e<this.speed+1;e++){
                    if((inputs.keys[0][1]||inputs.keys[1][1])&&!this.cut.trigger){
                        this.totalMoved++
                        for(f=0,lf=this.combatants.length;f<lf;f++){
                            this.combatants[f].rate[0]+=10
                        }
                        if(this.totalMoved>=800&&this.totalMoved<1800&&floor(random(0,300))==0){
                            this.cut.setup(5)
                        }else if(this.totalMoved>=1800&&this.totalMoved<2800&&floor(random(0,300))==0){
                            this.cut.setup(6)
                        }else if(this.totalMoved>=2800&&this.totalMoved<3800&&floor(random(0,300))==0){
                            this.cut.setup(7)
                        }else if(this.totalMoved>=4350&&this.totalMoved<5350&&floor(random(0,300))==0){
                            this.cut.setup(11)
                        }else if(this.totalMoved>=5350&&this.totalMoved<6350&&floor(random(0,300))==0){
                            this.cut.setup(12)
                        }else if(this.totalMoved>=6350&&this.totalMoved<7350&&floor(random(0,300))==0){
                            this.cut.setup(13)
                        }else if(this.totalMoved>=7650&&this.totalMoved<8400&&floor(random(0,300))==0){
                            this.cut.setup(16)
                        }else if(this.totalMoved>=8400&&this.totalMoved<9150&&floor(random(0,300))==0){
                            this.cut.setup(17)
                        }else if(this.totalMoved>=10450&&this.totalMoved<11450&&floor(random(0,300))==0){
                            this.cut.setup(23)
                        }else if(this.totalMoved>=11450&&this.totalMoved<12450&&floor(random(0,300))==0){
                            this.cut.setup(24)
                        }else if(this.totalMoved>=12450&&this.totalMoved<13450&&floor(random(0,300))==0){
                            this.cut.setup(25)
                        }else if(this.totalMoved>=13900&&this.totalMoved<14900&&floor(random(0,300))==0){
                            this.cut.setup(29)
                        }else if(this.totalMoved>=14900&&this.totalMoved<15900&&floor(random(0,300))==0){
                            this.cut.setup(30)
                        }else if(this.totalMoved>=15900&&this.totalMoved<16900&&floor(random(0,300))==0){
                            this.cut.setup(31)
                        }else if(this.totalMoved>=17200&&this.totalMoved<18200&&floor(random(0,300))==0){
                            this.cut.setup(34)
                        }else if(this.totalMoved>=18200&&this.totalMoved<19200&&floor(random(0,300))==0){
                            this.cut.setup(35)
                        }else if(this.totalMoved>=19200&&this.totalMoved<20200&&floor(random(0,300))==0){
                            this.cut.setup(36)
                        }else if(this.totalMoved>=21750&&this.totalMoved<22500&&floor(random(0,300))==0){
                            this.cut.setup(43)
                        }else if(this.totalMoved>=22500&&this.totalMoved<23250&&floor(random(0,300))==0){
                            this.cut.setup(44)
                        }else if(this.totalMoved>=24300&&this.totalMoved<25300&&floor(random(0,300))==0){
                            this.cut.setup(49)
                        }else if(this.totalMoved>=25300&&this.totalMoved<26300&&floor(random(0,300))==0){
                            this.cut.setup(50)
                        }else if(this.totalMoved>=26300&&this.totalMoved<27300&&floor(random(0,300))==0){
                            this.cut.setup(51)
                        }else if(this.totalMoved>=27750&&this.totalMoved<28750&&floor(random(0,300))==0){
                            this.cut.setup(55)
                        }else if(this.totalMoved>=28750&&this.totalMoved<29750&&floor(random(0,300))==0){
                            this.cut.setup(56)
                        }else if(this.totalMoved>=29750&&this.totalMoved<30750&&floor(random(0,300))==0){
                            this.cut.setup(57)
                        }else if(this.totalMoved>=30900&&this.totalMoved<31900&&floor(random(0,300))==0){
                            this.cut.setup(60)
                        }else if(this.totalMoved>=31900&&this.totalMoved<32900&&floor(random(0,300))==0){
                            this.cut.setup(61)
                        }else if(this.totalMoved>=32900&&this.totalMoved<33900&&floor(random(0,300))==0){
                            this.cut.setup(62)
                        }else if(this.totalMoved>=34200&&this.totalMoved<34950&&floor(random(0,300))==0){
                            this.cut.setup(65)
                        }else if(this.totalMoved>=34950&&this.totalMoved<35700&&floor(random(0,300))==0){
                            this.cut.setup(66)
                        }else if(this.totalMoved>=36250&&this.totalMoved<37250&&floor(random(0,300))==0){
                            this.cut.setup(70)
                        }else if(this.totalMoved>=37250&&this.totalMoved<38250&&floor(random(0,300))==0){
                            this.cut.setup(71)
                        }else if(this.totalMoved>=38250&&this.totalMoved<39250&&floor(random(0,300))==0){
                            this.cut.setup(72)
                        }else if(this.totalMoved>=40550&&this.totalMoved<41550&&floor(random(0,300))==0){
                            this.cut.setup(79)
                        }else if(this.totalMoved>=41550&&this.totalMoved<42550&&floor(random(0,300))==0){
                            this.cut.setup(80)
                        }else if(this.totalMoved>=42550&&this.totalMoved<43550&&floor(random(0,300))==0){
                            this.cut.setup(81)
                        }else if(this.totalMoved>=44100&&this.totalMoved<45100&&floor(random(0,300))==0){
                            this.cut.setup(85)
                        }else if(this.totalMoved>=45100&&this.totalMoved<46100&&floor(random(0,300))==0){
                            this.cut.setup(86)
                        }else if(this.totalMoved>=46100&&this.totalMoved<47100&&floor(random(0,300))==0){
                            this.cut.setup(87)
                        }else if(this.totalMoved>=47650&&this.totalMoved<48400&&floor(random(0,300))==0){
                            this.cut.setup(91)
                        }else if(this.totalMoved>=48400&&this.totalMoved<49150&&floor(random(0,300))==0){
                            this.cut.setup(92)
                        }else if(this.totalMoved>=49700&&this.totalMoved<50700&&floor(random(0,300))==0){
                            this.cut.setup(96)
                        }else if(this.totalMoved>=50700&&this.totalMoved<51700&&floor(random(0,300))==0){
                            this.cut.setup(97)
                        }else if(this.totalMoved>=51700&&this.totalMoved<52700&&floor(random(0,300))==0){
                            this.cut.setup(98)
                        }else if(this.totalMoved>=53250&&this.totalMoved<54250&&floor(random(0,300))==0){
                            this.cut.setup(102)
                        }else if(this.totalMoved>=54250&&this.totalMoved<55250&&floor(random(0,300))==0){
                            this.cut.setup(103)
                        }else if(this.totalMoved>=55250&&this.totalMoved<56250&&floor(random(0,300))==0){
                            this.cut.setup(104)
                        }else if(this.totalMoved>=57050&&this.totalMoved<58050&&floor(random(0,300))==0){
                            this.cut.setup(109)
                        }else if(this.totalMoved>=58050&&this.totalMoved<59050&&floor(random(0,300))==0){
                            this.cut.setup(110)
                        }else if(this.totalMoved>=59050&&this.totalMoved<60050&&floor(random(0,300))==0){
                            this.cut.setup(111)
                        }else if(this.totalMoved>=62600&&this.totalMoved<63600&&floor(random(0,300))==0){
                            this.cut.setup(123)
                        }else if(this.totalMoved>=63600&&this.totalMoved<64600&&floor(random(0,300))==0){
                            this.cut.setup(124)
                        }else if(this.totalMoved>=64600&&this.totalMoved<65600&&floor(random(0,300))==0){
                            this.cut.setup(125)
                        }
                    }
                }
                if(this.cut.trigger){
                    this.cut.update()
                }
                if(this.story==1&&this.totalMoved>=250){
                    this.cut.setup(2)
                }else if(this.story==2&&this.totalMoved>=500){
                    this.cut.setup(3)
                }else if(this.story==3&&this.totalMoved>=750){
                    this.cut.setup(4)
                }else if(this.story==4&&this.totalMoved>=3800){
                    this.cut.setup(8)
                }else if(this.story==5&&this.totalMoved>=4050){
                    this.cut.setup(9)
                }else if(this.story==6&&this.totalMoved>=4300){
                    this.cut.setup(10)
                }else if(this.story==7&&this.totalMoved>=7350){
                    this.cut.setup(14)
                }else if(this.story==8&&this.totalMoved>=7600){
                    this.cut.setup(15)
                }else if(this.story==9&&this.totalMoved>=9150){
                    this.cut.setup(18)
                }else if(this.story==10&&this.totalMoved>=9650){
                    this.cut.setup(19)
                }else if(this.story==11&&this.totalMoved>=9900){
                    this.cut.setup(20)
                }else if(this.story==12&&this.totalMoved>=10150){
                    this.cut.setup(21)
                }else if(this.story==13&&this.totalMoved>=10400){
                    this.cut.setup(22)
                }else if(this.story==14&&this.totalMoved>=13450){
                    this.cut.setup(26)
                }else if(this.story==15&&this.totalMoved>=13700){
                    this.cut.setup(27)
                }else if(this.story==16&&this.totalMoved>=13850){
                    this.cut.setup(28)
                }else if(this.story==17&&this.totalMoved>=16900){
                    this.cut.setup(32)
                }else if(this.story==18&&this.totalMoved>=17150){
                    this.cut.setup(33)
                }else if(this.story==19&&this.totalMoved>=20200){
                    this.cut.setup(37)
                }else if(this.story==20&&this.totalMoved>=20450){
                    this.cut.setup(38)
                }else if(this.story==21&&this.totalMoved>=20700){
                    this.cut.setup(39)
                }else if(this.story==22&&this.totalMoved>=21200){
                    this.cut.setup(40)
                }else if(this.story==23&&this.totalMoved>=21450){
                    this.cut.setup(41)
                }else if(this.story==24&&this.totalMoved>=21700){
                    this.cut.setup(42)
                }else if(this.story==25&&this.totalMoved>=23250){
                    this.cut.setup(45)
                }else if(this.story==26&&this.totalMoved>=23500){
                    this.cut.setup(46)
                }else if(this.story==27&&this.totalMoved>=24000){
                    this.cut.setup(47)
                }else if(this.story==28&&this.totalMoved>=24250){
                    this.cut.setup(48)
                }else if(this.story==29&&this.totalMoved>=27300){
                    this.cut.setup(52)
                }else if(this.story==30&&this.totalMoved>=27550){
                    this.cut.setup(53)
                }else if(this.story==31&&this.totalMoved>=27700){
                    this.cut.setup(54)
                }else if(this.story==32&&this.totalMoved>=30600){
                    this.cut.setup(58)
                }else if(this.story==33&&this.totalMoved>=30850){
                    this.cut.setup(59)
                }else if(this.story==34&&this.totalMoved>=33900){
                    this.cut.setup(63)
                }else if(this.story==35&&this.totalMoved>=34150){
                    this.cut.setup(64)
                }else if(this.story==36&&this.totalMoved>=35700){
                    this.cut.setup(67)
                }else if(this.story==37&&this.totalMoved>=35950){
                    this.cut.setup(68)
                }else if(this.story==38&&this.totalMoved>=36200){
                    this.cut.setup(69)
                }else if(this.story==39&&this.totalMoved>=39250){
                    this.cut.setup(73)
                }else if(this.story==40&&this.totalMoved>=39500){
                    this.cut.setup(74)
                }else if(this.story==41&&this.totalMoved>=39750){
                    this.cut.setup(75)
                }else if(this.story==42&&this.totalMoved>=40000){
                    this.cut.setup(76)
                }else if(this.story==43&&this.totalMoved>=40250){
                    this.cut.setup(77)
                }else if(this.story==44&&this.totalMoved>=40500){
                    this.cut.setup(78)
                }else if(this.story==45&&this.totalMoved>=43550){
                    this.cut.setup(82)
                }else if(this.story==46&&this.totalMoved>=43800){
                    this.cut.setup(83)
                }else if(this.story==47&&this.totalMoved>=44050){
                    this.cut.setup(84)
                }else if(this.story==48&&this.totalMoved>=47100){
                    this.cut.setup(88)
                }else if(this.story==49&&this.totalMoved>=47350){
                    this.cut.setup(89)
                }else if(this.story==50&&this.totalMoved>=47600){
                    this.cut.setup(90)
                }else if(this.story==51&&this.totalMoved>=49150){
                    this.cut.setup(93)
                }else if(this.story==52&&this.totalMoved>=49400){
                    this.cut.setup(94)
                }else if(this.story==53&&this.totalMoved>=49650){
                    this.cut.setup(95)
                }else if(this.story==54&&this.totalMoved>=52700){
                    this.cut.setup(99)
                }else if(this.story==55&&this.totalMoved>=52950){
                    this.cut.setup(100)
                }else if(this.story==56&&this.totalMoved>=53200){
                    this.cut.setup(101)
                }else if(this.story==57&&this.totalMoved>=56250){
                    this.cut.setup(105)
                }else if(this.story==58&&this.totalMoved>=56500){
                    this.cut.setup(106)
                }else if(this.story==59&&this.totalMoved>=56750){
                    this.cut.setup(107)
                }else if(this.story==60&&this.totalMoved>=57000){
                    this.cut.setup(108)
                }else if(this.story==61&&this.totalMoved>=60050){
                    this.cut.setup(112)
                }else if(this.story==62&&this.totalMoved>=60300){
                    this.cut.setup(113)
                }else if(this.story==63&&this.totalMoved>=60550){
                    this.cut.setup(114)
                }else if(this.story==64&&this.totalMoved>=60800){
                    this.cut.setup(115)
                }else if(this.story==65&&this.totalMoved>=61050){
                    this.cut.setup(116)
                }else if(this.story==66&&this.totalMoved>=61300){
                    this.cut.setup(117)
                }else if(this.story==67&&this.totalMoved>=61550){
                    this.cut.setup(118)
                }else if(this.story==68&&this.totalMoved>=61800){
                    this.cut.setup(119)
                }else if(this.story==69&&this.totalMoved>=62050){
                    this.cut.setup(120)
                }else if(this.story==70&&this.totalMoved>=62300){
                    this.cut.setup(121)
                }else if(this.story==71&&this.totalMoved>=62550){
                    this.cut.setup(122)
                }else if(this.story==72&&this.totalMoved>=65600){
                    this.cut.setup(126)
                }else if(this.story==73&&this.totalMoved>=65850){
                    this.cut.setup(127)
                }else if(this.story==74&&this.totalMoved>=66100){
                    this.cut.setup(128)
                }else if(this.story==75&&this.totalMoved>=66200){
                    this.cut.setup(129)
                }else if(this.story==76&&this.totalMoved>=66300){
                    this.cut.setup(130)
                }else if(this.story==77&&this.totalMoved>=66400){
                    this.cut.setup(131)
                }else if(this.story==78&&this.totalMoved>=66666){
                    this.cut.setup(132)
                }
            break
        }
        this.currency.money=max(0,round(this.currency.money*10)/10)
        if(this.combatants[0].life<=0&&this.combatants[1].life<=0&&this.combatants[2].life<=0&&this.combatants[3].life<=0){
            if(this.cut.trigger&&this.cut.type==132&&this.cut.timer>=15000){
            }else if(this.cut.trigger&&this.cut.type==132&&this.cut.timer>=11000&&this.cut.timer<15000){
                transition.trigger=true
                transition.scene='end'
            }else if(this.cut.trigger&&this.cut.type==132&&this.cut.timer>=6500&&this.cut.timer<11000){
                transition.trigger=true
                transition.scene='walk'
                this.cut.timer=15000
                this.cut.ending=3
            }else if(this.cut.trigger&&this.cut.type==132&&this.cut.timer>=5000&&this.cut.timer<6500){
                transition.trigger=true
                transition.scene='walk'
                this.cut.timer=10000
                this.cut.ending=2
                for(g=0;g<4;g++){
                    this.combatants[g].life=1
                }
            }else{
                transition.trigger=true
                transition.scene='end'
                this.cut.ending=-1
            }
        }
	}
}