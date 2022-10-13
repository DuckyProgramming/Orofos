class attack{
    constructor(layer,battle){
        this.layer=layer
        this.battle=battle
        this.trigger=false
        this.check=false
        this.type=0
        this.target=[0,0]
        this.user=0
        this.timer=0
        this.damage=0
        this.class=0
        this.accuracy=0
    }
    set(){
        switch(this.type){
            case 1: case 2: case 3: case 4: case 5: case 6: case 22: case 24: case 25: case 26: case 27: case 28: case 31: case 33:
                this.timer=60
            break
            case 7:
                this.timer=90
            break
        }
        if(this.battle.stack[0].type<4){
            switch(this.type){
                case 0:
                    this.timer=100-this.user*20+this.target[0]*20
                break
                case 8: case 10: case 11: case 23:
                    this.timer=170-this.user*30+this.target[0]*30
                break
                case 9: case 15: case 20: case 29:
                    this.timer=55-this.user*8+this.target[0]*8
                break
                case 12: case 14:
                    this.timer=150-this.user*20+this.target[0]*20
                break
                case 13:
                    this.timer=180-this.user*20
                break
                case 16:
                    this.timer=45-this.user*6+this.target[0]*6
                break
                case 17:
                    this.timer=240-this.user*40+this.target[0]*40
                break
                case 18:
                    this.timer=85-this.user*8+this.target[0]*8
                break
                case 19:
                    this.timer=115-this.user*8+this.target[0]*8
                break
                case 21:
                    this.timer=35-this.user*4+this.target[0]*4
                break
                case 30:
                    this.timer=260-this.user*40
                break
                case 32:
                    this.timer=360-this.user*40
                break
            }
        }
        else{
            switch(this.type){
                case 0: case 33:
                    this.timer=100+this.user*20-this.target[1]*20
                break
                case 8: case 10: case 11: case 23:
                    this.timer=170+this.user*30-this.target[1]*30
                break
                case 9: case 15: case 20: case 29:
                    this.timer=55+this.user*8-this.target[1]*8
                break
                case 12: case 14:
                    this.timer=150+this.user*20-this.target[1]*20
                break
                case 13:
                    this.timer=120+this.user*20
                break
                case 16:
                    this.timer=45+this.user*6-this.target[1]*6
                break
                case 17:
                    this.timer=240+this.user*40-this.target[1]*40
                break
                case 18:
                    this.timer=85+this.user*8-this.target[1]*8
                break
                case 19:
                    this.timer=115+this.user*8-this.target[1]*8
                break
                case 21:
                    this.timer=35+this.user*4-this.target[1]*4
                break
                case 30:
                    this.timer=140+this.user*40
                break
                case 32:
                    this.timer=240+this.user*40
                break
            }
        }
    }
    update(){
        if(this.battle.stack[0].type<4){
            switch(this.type){
                case 0:
                    if(this.timer>=50-this.user*10+this.target[0]*10){
                        this.battle.combatants[this.user].position.x+=10
                        this.battle.combatants[this.user].rate[0]+=10
                        this.battle.combatants[this.user].rate[1]+=10
                    }else{
                        this.battle.combatants[this.user].position.x-=10
                        this.battle.combatants[this.user].rate[0]-=10
                        this.battle.combatants[this.user].rate[1]-=10
                    }
                    if(this.timer==50-this.user*10+this.target[0]*10){
                        this.battle.combatants[this.target[0]+4].take(this.damage,0,this.accuracy,this.user)
                    }
                break
                case 1: case 2: case 3:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+10,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height,1,90,80,1,this.battle.combatants[this.user].boostColor[this.type-1]))
                        this.battle.combatants[this.target[0]+4].boost[this.type-1]--
                        if(this.type==3){
                            this.battle.reset()
                        }
                    }
                break
                case 4: case 5: case 6:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height,2,90,120,1,this.battle.combatants[this.user].boostColor[this.type-4]))
                        this.battle.combatants[this.user].boost[this.type-4]++
                        if(this.type==6){
                            this.battle.reset()
                        }
                    }
                break
                case 7:
                    if(this.timer>30){
                        this.battle.combatants[this.user].position.y+=cos(this.timer*3-90)*3
                    }
                    if(this.timer==30){
                        for(g=0;g<4;g++){
                            this.battle.combatants[4+g].take(this.damage,0,this.accuracy,this.user)
                        }
                    }
                break
                case 8: case 10: case 11: case 23:
                    if(this.timer>=100-this.user*15+this.target[0]*15){
                        this.battle.combatants[this.user].position.x+=20/3
                        this.battle.combatants[this.user].rate[0]+=20/3
                    }else if(this.timer>=85-this.user*15+this.target[0]*15){
                        this.battle.combatants[this.user].anim[0]+=1/15
                    }else if(this.timer>=70-this.user*15+this.target[0]*15){
                        this.battle.combatants[this.user].anim[0]-=1/15
                    }else{
                        this.battle.combatants[this.user].position.x-=20/3
                        this.battle.combatants[this.user].rate[0]-=20/3
                    }
                    if(this.timer==85-this.user*15+this.target[0]*15&&(this.type==8||this.type==23)){
                        this.battle.combatants[this.target[0]+4].take(this.damage,0,this.accuracy,this.user)
                    }else if(this.timer==85-this.user*15+this.target[0]*15&&(this.type==10||this.type==11)){
                        this.battle.combatants[this.target[0]+4].status[this.type-10]+=this.damage
                    }else if(this.timer==70-this.user*15+this.target[0]*15&&this.type==23&&this.target[0]<3){
                        this.battle.combatants[this.target[0]+5].take(this.damage/2,0,this.accuracy,this.user)
                    }
                    if(this.timer<85-this.user*15+this.target[0]*15&&this.timer>=70-this.user*15+this.target[0]*15&&this.type==23){
                        this.battle.combatants[this.target[0]+4].position.x+=6
                        this.battle.combatants[this.target[0]+4].rate[0]+=6
                    }else if(this.timer<85-this.user*15+this.target[0]*15&&this.timer>=55-this.user*15+this.target[0]*15&&this.type==23){
                        this.battle.combatants[this.target[0]+4].position.x-=6
                        this.battle.combatants[this.target[0]+4].rate[0]-=6
                    }
                break
                case 9: case 15: case 20: case 29:
                    if(this.timer>=40-this.user*8+this.target[0]*8){
                        this.battle.combatants[this.user].anim[1]+=1/15
                    }else if(this.timer>=25-this.user*8+this.target[0]*8){
                        this.battle.combatants[this.user].anim[1]-=1/15
                    }
                    if(this.timer==40-this.user*8+this.target[0]*8&&this.type==9){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+25,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height*0.7,3,90,3,25/2,[50,255,50]))
                        entities.particles[entities.particles.length-1].end=35-this.user*8+this.target[0]*8
                    }
                    if(this.timer==5){
                        this.battle.combatants[this.target[0]+4].take(this.damage,0,this.accuracy,this.user)
                        if(this.type==15){
                            if(this.target[0]>0){
                                this.battle.combatants[this.target[0]+3].take(this.damage/2,0,this.accuracy,this.user)
                            }
                            if(this.target[0]<3){
                                this.battle.combatants[this.target[0]+5].take(this.damage/2,0,this.accuracy,this.user)
                            }
                        }
                        if(this.type==29){
                            this.battle.combatants[this.target[0]+4].status[1]++
                        }
                    }
                    if(this.timer==40-this.user*8+this.target[0]*8&&this.type==15){
                        for(g=0;g<10;g++){
                            entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+25,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height*0.7,3,random(85,95),1.5,random(10,15),[50,255,50]))
                            entities.particles[entities.particles.length-1].end=35-this.user*8+this.target[0]*8+random(-8,8)
                        }
                    }
                    if(this.timer==40-this.user*8+this.target[0]*8&&this.type==20){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+25,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height*0.7,3,90,4,25/2,[50,255,50]))
                        entities.particles[entities.particles.length-1].end=35-this.user*8+this.target[0]*8
                    }
                    if(this.timer==40-this.user*8+this.target[0]*8&&this.type==29){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+25,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height*0.7,3,90,2.5,25/2,[255,255,50]))
                        entities.particles[entities.particles.length-1].end=35-this.user*8+this.target[0]*8
                    }
                break
                case 12: case 14:
                    if(this.timer>=105-this.user*10+this.target[0]*10){
                        this.battle.combatants[this.user].position.x+=10
                        this.battle.combatants[this.user].rate[0]+=10
                        this.battle.combatants[this.user].rate[1]+=10
                    }else if(this.timer>=75-this.user*10+this.target[0]*10){
                        this.battle.combatants[this.user].anim[2]+=15
                        if(this.type==14){
                            this.battle.combatants[this.user].anim[3]++
                        }
                    }else if(this.timer>=45-this.user*10+this.target[0]*10){
                        this.battle.combatants[this.user].anim[2]-=15
                        if(this.type==14){
                            this.battle.combatants[this.user].anim[3]--
                        }
                    }else{
                        this.battle.combatants[this.user].position.x-=10
                        this.battle.combatants[this.user].rate[0]-=10
                        this.battle.combatants[this.user].rate[1]-=10
                    }
                    if(this.timer==45-this.user*10+this.target[0]*10||this.timer==75-this.user*10+this.target[0]*10){
                        this.battle.combatants[this.target[0]+4].take(this.damage,0,this.accuracy,this.user)
                        if(this.type==14){
                            this.battle.combatants[this.target[0]+4].status[2]++
                        }
                    }
                break
                case 13:
                    if(this.timer>=90-this.user*10){
                        this.battle.combatants[this.user].position.x+=10
                        this.battle.combatants[this.user].anim[2]+=15
                    }else{
                        this.battle.combatants[this.user].position.x-=10
                        this.battle.combatants[this.user].anim[2]-=15
                    }
                    for(g=0;g<4;g++){
                        if(this.timer==130-g*10-this.user*10){
                            this.battle.combatants[g+4].take(this.damage,0,this.accuracy,this.user)
                        }
                    }
                break
                case 16:
                    if(this.timer>=30-this.user*6+this.target[0]*6){
                        this.battle.combatants[this.user].anim[1]+=1/15
                    }else if(this.timer>=15-this.user*6+this.target[0]*6){
                        this.battle.combatants[this.user].anim[1]-=1/15
                    }
                    if(this.timer==30-this.user*6+this.target[0]*6){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+25,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height*0.7,4,90,3,50/3,[50,255,50]))
                        entities.particles[entities.particles.length-1].end=25-this.user*6+this.target[0]*6
                    }
                    if(this.timer==5){
                        this.battle.combatants[this.target[0]+4].take(this.damage,1,this.accuracy,this.user)
                    }
                break
                case 17:
                    if(this.timer>=145-this.user*20+this.target[0]*20){
                        this.battle.combatants[this.user].position.x+=5
                        this.battle.combatants[this.user].rate[0]+=5
                    }else if(this.timer>=120-this.user*20+this.target[0]*20){
                        this.battle.combatants[this.user].anim[0]+=1/15
                    }else if(this.timer>=95-this.user*20+this.target[0]*20){
                        this.battle.combatants[this.user].anim[0]-=1/15
                    }else{
                        this.battle.combatants[this.user].position.x-=5
                        this.battle.combatants[this.user].rate[0]-=5
                    }
                    if(this.timer==120-this.user*20+this.target[0]*20){
                        this.battle.combatants[this.target[0]+4].take(this.damage,0,this.accuracy,this.user)
                    }
                break
                case 18:
                    if(this.timer>=70-this.user*8+this.target[0]*8){
                        this.battle.combatants[this.user].anim[1]+=1/15
                    }else if(this.timer<40-this.user*8+this.target[0]*8&&this.timer>=25-this.user*8+this.target[0]*8){
                        this.battle.combatants[this.user].anim[1]-=1/15
                    }
                    if(this.timer==40-this.user*8+this.target[0]*8||this.timer==50-this.user*8+this.target[0]*8||this.timer==60-this.user*8+this.target[0]*8||this.timer==70-this.user*8+this.target[0]*8){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+25,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height*0.7,3,90,2,25/2,[50,255,50]))
                        entities.particles[entities.particles.length-1].end=35-this.user*8+this.target[0]*8
                    }
                    if(this.timer==5||this.timer==15||this.timer==25||this.timer==35){
                        this.battle.combatants[this.target[0]+4].take(this.damage,0,this.accuracy,this.user)
                    }
                break
                case 19:
                    if(this.timer>=100-this.user*8+this.target[0]*8){
                        this.battle.combatants[this.user].anim[1]+=1/15
                    }else if(this.timer<40-this.user*8+this.target[0]*8&&this.timer>=25-this.user*8+this.target[0]*8){
                        this.battle.combatants[this.user].anim[1]-=1/15
                    }
                    if(this.timer>=40-this.user*8+this.target[0]*8&&this.timer<=100-this.user*8+this.target[0]*8&&(this.timer+this.user*8-this.target[0]*8)%4==0){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+25,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height*0.7,3,random(89,101),2.5,25/2,[50,255,50]))
                        entities.particles[entities.particles.length-1].end=35-this.user*8+this.target[0]*8
                    }
                    if(this.timer>=5&&this.timer<=65&&this.timer%4==1){
                        this.battle.combatants[this.target[0]+4].take(this.damage,0,this.accuracy,this.user)
                    }
                break
                case 21:
                    if(this.timer>=20-this.user*4+this.target[0]*4){
                        this.battle.combatants[this.user].anim[1]+=1/15
                    }else if(this.timer>=5-this.user*4+this.target[0]*4){
                        this.battle.combatants[this.user].anim[1]-=1/15
                    }
                    if(this.timer==20-this.user*4+this.target[0]*4){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+25,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height*0.7,5,90,3,25,[50,255,50]))
                        entities.particles[entities.particles.length-1].end=15-this.user*4+this.target[0]*4
                    }
                    if(this.timer==5){
                        this.battle.combatants[this.target[0]+4].take(this.damage,1,this.accuracy,this.user)
                    }
                break
                case 22: case 27: case 28:
                    if(this.timer>=30){
                        this.battle.combatants[this.user].anim[0]+=1/30
                    }else{
                        this.battle.combatants[this.user].anim[0]-=1/30
                    }
                    if(this.timer==30&&this.type==22){
                        this.battle.combatants[this.target[0]].life=min(this.battle.combatants[this.target[0]].base.life,this.battle.combatants[this.target[0]].life+this.damage)
                    }
                    if(this.timer==30&&this.type==27){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g].life=min(this.battle.combatants[g].base.life,this.battle.combatants[g].life+this.damage)
                        }
                    }
                    if(this.timer==30&&this.type==28){
                        this.battle.combatants[this.target[0]].status[3]++
                    }
                break
                case 24: case 25: case 26:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.target[0]].position.x,this.battle.combatants[this.target[0]].position.y-this.battle.combatants[this.target[0]].height,2,90,120,1,this.battle.combatants[this.target[0]].boostColor[this.type-24]))
                        this.battle.combatants[this.target[0]].boost[this.type-24]++
                        if(this.type==26){
                            this.battle.reset()
                        }
                    }
                break
                case 30:
                    if(this.timer>=130-this.user*20){
                        this.battle.combatants[this.user].position.x+=5
                        this.battle.combatants[this.user].rate[0]+=5
                    }else{
                        this.battle.combatants[this.user].position.x-=5
                        this.battle.combatants[this.user].rate[0]-=5
                    }
                    for(g=0;g<2;g++){
                        if(this.timer==160-g*20-this.user*20){
                            this.battle.combatants[g+4].take(this.damage,0,this.accuracy,this.user)
                        }
                    }
                break
                case 31:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height,2,90,120,1,[255,175,50]))
                        this.battle.combatants[this.user].boost[0]++
                        this.battle.combatants[this.user].boost[1]++
                        this.battle.combatants[this.user].boost[2]--
                        this.battle.reset()
                    }
                break
                case 32:
                    if(this.timer>=130-this.user*20&&this.timer<230-this.user*20){
                        this.battle.combatants[4].position.x+=3
                        this.battle.combatants[5].position.x++
                        this.battle.combatants[6].position.x--
                        this.battle.combatants[7].position.x-=3
                        this.battle.combatants[4].base.position.x+=3
                        this.battle.combatants[5].base.position.x++
                        this.battle.combatants[6].base.position.x--
                        this.battle.combatants[7].base.position.x-=3
                    }
                    if(this.timer==130-this.user*20){
                        this.battle.storage=[this.battle.combatants[4],this.battle.combatants[5],this.battle.combatants[6],this.battle.combatants[7]]
                        this.battle.combatants[4]=this.battle.storage[3]
                        this.battle.combatants[5]=this.battle.storage[2]
                        this.battle.combatants[6]=this.battle.storage[1]
                        this.battle.combatants[7]=this.battle.storage[0]
                        this.battle.reset()
                    }
                    if(this.timer>=180-this.user*20){
                        this.battle.combatants[this.user].position.x+=5
                        this.battle.combatants[this.user].rate[0]+=5
                    }else{
                        this.battle.combatants[this.user].position.x-=5
                        this.battle.combatants[this.user].rate[0]-=5
                    }
                    for(g=0;g<4;g++){
                        if(this.timer==260-g*20-this.user*20){
                            this.battle.combatants[g+4].take(this.damage,0,this.accuracy,this.user)
                        }
                    }
                break
                case 33:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+10,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height,1,90,80,1,[230,240,250]))
                        this.battle.combatants[this.target[0]+4].status[4]+=this.damage
                    }
                break
            }
        }
        else{
            switch(this.type){
                case 0:
                    if(this.timer>=50+this.user*10-this.target[1]*10){
                        this.battle.combatants[this.user+4].position.x-=10
                        this.battle.combatants[this.user+4].rate[0]+=10
                        this.battle.combatants[this.user+4].rate[1]+=10
                    }else{
                        this.battle.combatants[this.user+4].position.x+=10
                        this.battle.combatants[this.user+4].rate[0]-=10
                        this.battle.combatants[this.user+4].rate[1]-=10
                    }
                    if(this.timer==50+this.user*10-this.target[1]*10){
                        this.battle.combatants[this.target[1]].take(this.damage,0,this.accuracy,this.user+4)
                    }
                break
                case 1: case 2: case 3:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-10,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height,1,270,80,1,this.battle.combatants[this.user+4].boostColor[this.type-1]))
                        this.battle.combatants[this.target[1]].boost[this.type-1]--
                        if(this.type==3){
                            this.battle.reset()
                        }
                    }
                break
                case 4: case 5: case 6:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height,2,270,120,1,this.battle.combatants[this.user+4].boostColor[this.type-4]))
                        this.battle.combatants[this.user+4].boost[this.type-4]++
                        if(this.type==6){
                            this.battle.reset()
                        }
                    }
                break
                case 7:
                    if(this.timer>30){
                        this.battle.combatants[this.user+4].position.y+=cos(this.timer*3-90)*3
                    }
                    if(this.timer==30){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g].take(this.damage,0,this.accuracy,this.user+4)
                        }
                    }
                break
                case 8: case 10: case 11: case 23:
                    if(this.timer>=100+this.user*15-this.target[1]*15){
                        this.battle.combatants[this.user+4].position.x-=20/3
                        this.battle.combatants[this.user+4].rate[0]+=20/3
                    }else if(this.timer>=85+this.user*15-this.target[1]*15){
                        this.battle.combatants[this.user+4].anim[0]+=1/15
                    }else if(this.timer>=70+this.user*15-this.target[1]*15){
                        this.battle.combatants[this.user+4].anim[0]-=1/15
                    }else{
                        this.battle.combatants[this.user+4].position.x+=20/3
                        this.battle.combatants[this.user+4].rate[0]+=20/3
                    }
                    if(this.timer==85+this.user*15-this.target[1]*15&&(this.type==8||this.type==23)){
                        this.battle.combatants[this.target[1]].take(this.damage,0,this.accuracy,this.user+4)
                    }else if(this.timer==85+this.user*15-this.target[1]*15&&(this.type==10||this.type==11)){
                        this.battle.combatants[this.target[1]].status[this.type-10]+=this.damage
                    }else if(this.timer==70+this.user*15-this.target[1]*15&&this.type==23&&this.target[1]>0){
                        this.battle.combatants[this.target[1]-1].take(this.damage/2,0,this.accuracy,this.user+4)
                    }
                    if(this.timer<85+this.user*15-this.target[1]*15&&this.timer>=70+this.user*15-this.target[1]*15&&this.type==23){
                        this.battle.combatants[this.target[1]].position.x-=6
                        this.battle.combatants[this.target[1]].rate[0]+=6
                    }else if(this.timer<85+this.user*15-this.target[1]*15&&this.timer>=55+this.user*15-this.target[1]*15&&this.type==23){
                        this.battle.combatants[this.target[1]].position.x+=6
                        this.battle.combatants[this.target[1]].rate[0]-=6
                    }
                break
                case 9: case 15: case 20: case 29:
                    if(this.timer>=40+this.user*8-this.target[1]*8){
                        this.battle.combatants[this.user+4].anim[1]+=1/15
                    }else if(this.timer>=25+this.user*8-this.target[1]*8){
                        this.battle.combatants[this.user+4].anim[1]-=1/15
                    }
                    if(this.timer==40+this.user*8-this.target[1]*8&&this.type==9){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-25,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.7,3,270,3,25/2,[50,255,50]))
                        entities.particles[entities.particles.length-1].end=35+this.user*8-this.target[1]*8
                    }
                    if(this.timer==5){
                        this.battle.combatants[this.target[1]].take(this.damage,0,this.accuracy,this.user+4)
                        if(this.type==15){
                            if(this.target[0]>0){
                                this.battle.combatants[this.target[0]-1].take(this.damage/2,0,this.accuracy,this.user+4)
                            }
                            if(this.target[0]<3){
                                this.battle.combatants[this.target[0]+1].take(this.damage/2,0,this.accuracy,this.user+4)
                            }
                        }
                        if(this.type==29){
                            this.battle.combatants[this.target[1]].status[1]++
                        }
                    }
                    if(this.timer==40+this.user*8-this.target[0]*8&&this.type==15){
                        for(g=0;g<10;g++){
                            entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x+25,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.7,3,random(275,285),1.5,random(10,15),[50,255,50]))
                            entities.particles[entities.particles.length-1].end=35+this.user*8-this.target[1]*8+random(-8,8)
                        }
                    }
                    if(this.timer==40+this.user*8-this.target[1]*8&&this.type==20){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-25,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.7,3,270,4,25/2,[50,255,50]))
                        entities.particles[entities.particles.length-1].end=35+this.user*8-this.target[1]*8
                    }
                    if(this.timer==40+this.user*8-this.target[1]*8&&this.type==29){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-25,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.7,3,270,2.5,25/2,[255,255,50]))
                        entities.particles[entities.particles.length-1].end=35+this.user*8-this.target[1]*8
                    }
                break
                case 12: case 14:
                    if(this.timer>=110+this.user*10-this.target[1]*10){
                        this.battle.combatants[this.user+4].position.x-=10
                        this.battle.combatants[this.user+4].rate[0]+=10
                        this.battle.combatants[this.user+4].rate[1]+=10
                    }else if(this.timer>=80+this.user*10-this.target[1]*10){
                        this.battle.combatants[this.user+4].anim[2]+=15
                        if(this.type==14){
                            this.battle.combatants[this.user+4].anim[3]++
                        }
                    }else if(this.timer>=50+this.user*10-this.target[1]*10){
                        this.battle.combatants[this.user+4].anim[2]-=15
                        if(this.type==14){
                            this.battle.combatants[this.user+4].anim[3]--
                        }
                    }else{
                        this.battle.combatants[this.user+4].position.x+=10
                        this.battle.combatants[this.user+4].rate[0]-=10
                        this.battle.combatants[this.user+4].rate[1]-=10
                    }
                    if(this.timer==50+this.user*10-this.target[1]*10||this.timer==80+this.user*10-this.target[1]*10){
                        this.battle.combatants[this.target[1]].take(this.damage,0,this.accuracy,this.user+4)
                        if(this.type==14){
                            this.battle.combatants[this.target[1]].status[2]++
                        }
                    }
                break
                case 13:
                    if(this.timer>=60+this.user*10){
                        this.battle.combatants[this.user+4].position.x-=10
                        this.battle.combatants[this.user+4].anim[2]+=15
                    }else{
                        this.battle.combatants[this.user+4].position.x+=10
                        this.battle.combatants[this.user+4].anim[2]-=15
                    }
                    for(g=0;g<4;g++){
                        if(this.timer==100-g*10+this.user*10){
                            this.battle.combatants[3-g].take(this.damage,0,this.accuracy,this.user+4)
                        }
                    }
                break
                case 16:
                    if(this.timer>=30+this.user*6-this.target[1]*6){
                        this.battle.combatants[this.user+4].anim[1]+=1/15
                    }else if(this.timer>=15+this.user*6-this.target[1]*6){
                        this.battle.combatants[this.user+4].anim[1]-=1/15
                    }
                    if(this.timer==30+this.user*6-this.target[1]*6){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-25,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.7,4,270,3,50/3,[50,255,50]))
                        entities.particles[entities.particles.length-1].end=25+this.user*6-this.target[1]*6
                    }
                    if(this.timer==5){
                        this.battle.combatants[this.target[1]].take(this.damage,1,this.accuracy,this.user+4)
                    }
                break
                case 17:
                    if(this.timer>=145+this.user*20-this.target[1]*20){
                        this.battle.combatants[this.user+4].position.x-=5
                        this.battle.combatants[this.user+4].rate[0]+=5
                    }else if(this.timer>=120+this.user*20-this.target[1]*20){
                        this.battle.combatants[this.user+4].anim[0]+=1/15
                    }else if(this.timer>=95+this.user*20-this.target[1]*20){
                        this.battle.combatants[this.user+4].anim[0]-=1/15
                    }else{
                        this.battle.combatants[this.user+4].position.x+=5
                        this.battle.combatants[this.user+4].rate[0]+=5
                    }
                    if(this.timer==120+this.user*20-this.target[1]*20){
                        this.battle.combatants[this.target[1]].take(this.damage,0,this.accuracy,this.user+4)
                    }
                break
                case 18:
                    if(this.timer>=70+this.user*8-this.target[1]*8){
                        this.battle.combatants[this.user+4].anim[1]+=1/15
                    }else if(this.timer<40+this.user*8-this.target[1]*8&&this.timer>=25+this.user*8-this.target[1]*8){
                        this.battle.combatants[this.user+4].anim[1]-=1/15
                    }
                    if(this.timer==40+this.user*8-this.target[1]*8||this.timer==50+this.user*8-this.target[1]*8||this.timer==60+this.user*8-this.target[1]*8||this.timer==70+this.user*8-this.target[1]*8){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-25,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.7,3,270,3,25/2,[50,255,50]))
                        entities.particles[entities.particles.length-1].end=35+this.user*8-this.target[1]*8
                    }
                    if(this.timer==5||this.timer==15||this.timer==25||this.timer==35){
                        this.battle.combatants[this.target[1]].take(this.damage,0,this.accuracy,this.user+4)
                    }
                break
                case 19:
                    if(this.timer>=100+this.user*8-this.target[1]*8){
                        this.battle.combatants[this.user+4].anim[1]+=1/15
                    }else if(this.timer<40+this.user*8-this.target[1]*8&&this.timer>=25+this.user*8-this.target[1]*8){
                        this.battle.combatants[this.user+4].anim[1]-=1/15
                    }
                    if(this.timer>=40+this.user*8-this.target[1]*8&&this.timer<=100+this.user*8-this.target[1]*8&&(this.timer-this.user*8+this.target[1]*8)%4==0){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-25,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.7,3,random(269,271),2.5,25/2,[50,255,50]))
                        entities.particles[entities.particles.length-1].end=35+this.user*8-this.target[1]*8
                    }
                    if(this.timer>=5&&this.timer<=65&&this.timer%4==1){
                        this.battle.combatants[this.target[1]].take(this.damage,0,this.accuracy,this.user+4)
                    }
                break
                case 21:
                    if(this.timer>=20+this.user*4-this.target[1]*4){
                        this.battle.combatants[this.user+4].anim[1]+=1/15
                    }else if(this.timer>=5+this.user*4-this.target[1]*4){
                        this.battle.combatants[this.user+4].anim[1]-=1/15
                    }
                    if(this.timer==20+this.user*4-this.target[1]*4){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-25,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.7,5,270,3,25,[50,255,50]))
                        entities.particles[entities.particles.length-1].end=15+this.user*4-this.target[1]*4
                    }
                    if(this.timer==5){
                        this.battle.combatants[this.target[1]].take(this.damage,1,this.accuracy,this.user+4)
                    }
                break
                case 22:
                    if(this.timer>=30){
                        this.battle.combatants[this.user+4].anim[0]+=1/30
                    }else{
                        this.battle.combatants[this.user+4].anim[0]-=1/30
                    }
                    if(this.timer==30){
                        this.battle.combatants[this.target[1]+4].life=min(this.battle.combatants[this.target[1]+4].base.life,this.battle.combatants[this.target[1]+4].life+this.damage)
                    }
                break
                case 24: case 25: case 26:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.target[1]+4].position.x,this.battle.combatants[this.target[1]+4].position.y-this.battle.combatants[this.target[1]+4].height,2,270,120,1,this.battle.combatants[this.target[1]+4].boostColor[this.type-24]))
                        this.battle.combatants[this.target[1]+4].boost[this.type-24]++
                        if(this.type==26){
                            this.battle.reset()
                        }
                    }
                break
                case 27:
                    if(this.timer>=30){
                        this.battle.combatants[this.user+4].anim[0]+=1/30
                    }else{
                        this.battle.combatants[this.user+4].anim[0]-=1/30
                    }
                    if(this.timer==30){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g+4].life=min(this.battle.combatants[g+4].base.life,this.battle.combatants[g+4].life+this.damage)
                        }
                    }
                break
                case 30:
                    if(this.timer>=70+this.user*20){
                        this.battle.combatants[this.user+4].position.x-=5
                        this.battle.combatants[this.user+4].rate[0]+=5
                    }else{
                        this.battle.combatants[this.user+4].position.x+=5
                        this.battle.combatants[this.user+4].rate[0]-=5
                    }
                    for(g=0;g<2;g++){
                        if(this.timer==80+g*20+this.user*20){
                            this.battle.combatants[g+2].take(this.damage,0,this.accuracy,this.user+4)
                        }
                    }
                break
                case 31:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height,2,90,120,1,[255,175,50]))
                        this.battle.combatants[this.user+4].boost[0]++
                        this.battle.combatants[this.user+4].boost[1]++
                        this.battle.combatants[this.user+4].boost[2]--
                        this.battle.reset()
                    }
                break
                case 32:
                    if(this.timer>=70+this.user*20&&this.timer<170+this.user*20){
                        this.battle.combatants[0].position.x+=3
                        this.battle.combatants[1].position.x++
                        this.battle.combatants[2].position.x--
                        this.battle.combatants[3].position.x-=3
                        this.battle.combatants[0].base.position.x+=3
                        this.battle.combatants[1].base.position.x++
                        this.battle.combatants[2].base.position.x--
                        this.battle.combatants[3].base.position.x-=3
                    }
                    if(this.timer==70+this.user*20){
                        this.battle.storage=[this.battle.combatants[0],this.battle.combatants[1],this.battle.combatants[2],this.battle.combatants[3]]
                        this.battle.combatants[0]=this.battle.storage[3]
                        this.battle.combatants[1]=this.battle.storage[2]
                        this.battle.combatants[2]=this.battle.storage[1]
                        this.battle.combatants[3]=this.battle.storage[0]
                        this.battle.reset()
                    }
                    if(this.timer>=120+this.user*20){
                        this.battle.combatants[this.user+4].position.x-=5
                        this.battle.combatants[this.user+4].rate[0]+=5
                    }else{
                        this.battle.combatants[this.user+4].position.x+=5
                        this.battle.combatants[this.user+4].rate[0]-=5
                    }
                    for(g=0;g<4;g++){
                        if(this.timer==200-g*20+this.user*20){
                            this.battle.combatants[g].take(this.damage,0,this.accuracy,this.user)
                        }
                    }
                break
            }
        }
        if(this.timer==1){
            this.battle.stack[0].cancel=true
            this.battle.stacking.use=true
            this.trigger=false
            this.battle.turn()
        }
    }
}