class attack{
    constructor(layer,battle){
        this.layer=layer
        this.battle=battle
        this.trigger=false
        this.type=0
        this.target=[0,0]
        this.user=0
        this.timer=0
        this.damage=0
        this.class=0
    }
    set(){
        switch(this.type){
            case 1: case 2: case 3: case 4: case 5: case 6:
                this.timer=60
            break
            case 7:
                this.timer=90
            break
            case 13:
                this.timer=120
            break
        }
        if(this.battle.stack[0].type<4){
            switch(this.type){
                case 0:
                    this.timer=100-this.user*20+this.target[0]*20
                break
                case 8: case 10: case 11:
                    this.timer=170-this.user*30+this.target[0]*30
                break
                case 9: case 15:
                    this.timer=55-this.user*8+this.target[0]*8
                break
                case 12: case 14:
                    this.timer=150-this.user*20+this.target[0]*20
                break
                case 16:
                    this.timer=45-this.user*6+this.target[0]*6
                break
                case 17:
                    this.timer=240-this.user*40+this.target[0]*40
                break
            }
        }
        else{
            switch(this.type){
                case 0:
                    this.timer=100+this.user*20-this.target[1]*20
                break
                case 8: case 10: case 11:
                    this.timer=170+this.user*30-this.target[1]*30
                break
                case 9: case 15:
                    this.timer=55+this.user*8-this.target[1]*8
                break
                case 12: case 14:
                    this.timer=150+this.user*20-this.target[1]*20
                break
                case 16:
                    this.timer=45+this.user*6-this.target[1]*6
                break
                case 17:
                    this.timer=240+this.user*40-this.target[1]*40
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
                        this.battle.combatants[this.target[0]+4].take(this.damage,0)
                    }
                break
                case 1: case 2: case 3:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+10,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height,1,90,80,1,this.battle.combatants[this.target[0]+4].boostColor[this.type-1]))
                        this.battle.combatants[this.target[0]+4].boost[this.type-1]--
                        if(this.type==3){
                            this.battle.reset()
                        }
                    }
                break
                case 4: case 5: case 6:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height,2,90,120,1,this.battle.combatants[this.target[0]+4].boostColor[this.type-4]))
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
                            this.battle.combatants[4+g].take(this.damage,0)
                        }
                    }
                break
                case 8: case 10: case 11:
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
                    if(this.timer==85-this.user*15+this.target[0]*15&&this.type==8){
                        this.battle.combatants[this.target[0]+4].take(this.damage,0)
                    }else if(this.timer==85-this.user*15+this.target[0]*15&&(this.type==10||this.type==11)){
                        this.battle.combatants[this.target[0]+4].status[this.type-10]+=this.damage
                    }
                break
                case 9: case 15:
                    if(this.timer>=40-this.user*8+this.target[0]*8){
                        this.battle.combatants[this.user].anim[1]+=1/15
                    }else if(this.timer>=25-this.user*8+this.target[0]*8){
                        this.battle.combatants[this.user].anim[1]-=1/15
                    }
                    if(this.timer==40-this.user*8+this.target[0]*8&&this.type==9){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+25,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height*0.7,3,90,3,25/2,[50,255,50]))
                        entities.particles[entities.particles.length-1].end=35-this.user*8+this.target[0]*8
                    }
                    if(this.timer==5&&this.type==9){
                        this.battle.combatants[this.target[0]+4].take(this.damage,0)
                    }
                    if(this.timer==40-this.user*8+this.target[0]*8&&this.type==15){
                        for(g=0;g<10;g++){
                            entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+25,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height*0.7,3,random(85,95),2,random(10,15),[50,255,50]))
                            entities.particles[entities.particles.length-1].end=35-this.user*8+this.target[0]*8+random(-8,8)
                        }
                    }
                    if(this.timer==5&&this.type==15){
                        this.battle.combatants[this.target[0]+4].take(this.damage,0)
                        if(this.target[0]>0){
                            this.battle.combatants[this.target[0]+3].take(this.damage/2,0)
                        }
                        if(this.target[0]<3){
                            this.battle.combatants[this.target[0]+5].take(this.damage/2,0)
                        }
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
                        this.battle.combatants[this.target[0]+4].take(this.damage,0)
                        if(this.type==14){
                            this.battle.combatants[this.target[0]+4].status[2]++
                        }
                    }
                break
                case 13:
                    if(this.timer>=60){
                        this.battle.combatants[this.user].position.x+=10
                        this.battle.combatants[this.user].anim[2]+=15
                    }else{
                        this.battle.combatants[this.user].position.x-=10
                        this.battle.combatants[this.user].anim[2]-=15
                    }
                    for(g=0;g<4;g++){
                        if(this.timer==100-g*10){
                            this.battle.combatants[4+g].take(this.damage,0)
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
                        this.battle.combatants[this.target[0]+4].take(this.damage,1)
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
                        this.battle.combatants[this.target[0]+4].take(this.damage,0)
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
                        this.battle.combatants[this.target[1]].take(this.damage,0)
                    }
                break
                case 1: case 2: case 3:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-10,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height,1,270,80,1,this.battle.combatants[this.target[0]].boostColor[this.type-1]))
                        this.battle.combatants[this.target[1]].boost[this.type-1]--
                        if(this.type==3){
                            this.battle.reset()
                        }
                    }
                break
                case 4: case 5: case 6:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height,2,270,120,1,this.battle.combatants[this.target[0]].boostColor[this.type-4]))
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
                            this.battle.combatants[g].take(this.damage,0)
                        }
                    }
                break
                case 8: case 10: case 11:
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
                    if(this.timer==85+this.user*15-this.target[1]*15&&this.type==8){
                        this.battle.combatants[this.target[1]].take(this.damage,0)
                    }else if(this.timer==85-this.user*15+this.target[0]*15&&(this.type==10||this.type==11)){
                        this.battle.combatants[this.target[1]].status[this.type-10]+=this.damage
                    }
                break
                case 9: case 15:
                    if(this.timer>=40+this.user*8-this.target[1]*8){
                        this.battle.combatants[this.user+4].anim[1]+=1/15
                    }else if(this.timer>=25+this.user*8-this.target[1]*8){
                        this.battle.combatants[this.user+4].anim[1]-=1/15
                    }
                    if(this.timer==40+this.user*8-this.target[1]*8&&this.type==9){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-25,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.7,3,270,3,25/2,[50,255,50]))
                        entities.particles[entities.particles.length-1].end=35+this.user*8-this.target[1]*8
                    }
                    if(this.timer==5&&this.type==9){
                        this.battle.combatants[this.target[1]].take(this.damage,0)
                    }
                    if(this.timer==40+this.user*8-this.target[0]*8&&this.type==15){
                        for(g=0;g<10;g++){
                            entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x+25,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.7,3,random(275,285),2,random(10,15),[50,255,50]))
                            entities.particles[entities.particles.length-1].end=35+this.user*8-this.target[1]*8+random(-8,8)
                        }
                    }
                    if(this.timer==5&&this.type==15){
                        this.battle.combatants[this.target[0]].take(this.damage,0)
                        if(this.target[0]>0){
                            this.battle.combatants[this.target[0]-1].take(this.damage/2,0)
                        }
                        if(this.target[0]<3){
                            this.battle.combatants[this.target[0]+1].take(this.damage/2,0)
                        }
                    }
                break
                case 12: case 14:
                    if(this.timer>=110+this.user*10-this.target[1]*10){
                        this.battle.combatants[this.user+4].position.x+=10
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
                        this.battle.combatants[this.user+4].position.x-=10
                        this.battle.combatants[this.user+4].rate[0]-=10
                        this.battle.combatants[this.user+4].rate[1]-=10
                    }
                    if(this.timer==50+this.user*10-this.target[1]*10||this.timer==80+this.user*10-this.target[1]*10){
                        this.battle.combatants[this.target[1]].take(this.damage,0)
                        if(this.type==14){
                            this.battle.combatants[this.target[1]].status[2]++
                        }
                    }
                break
                case 13:
                    if(this.timer>=60){
                        this.battle.combatants[this.user+4].position.x-=10
                        this.battle.combatants[this.user+4].anim[2]+=15
                    }else{
                        this.battle.combatants[this.user+4].position.x+=10
                        this.battle.combatants[this.user+4].anim[2]-=15
                    }
                    for(g=0;g<4;g++){
                        if(this.timer==100-g*10){
                            this.battle.combatants[3-g].take(this.damage,0)
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
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-25,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.7,4,270,3,25/2,[50,255,50]))
                        entities.particles[entities.particles.length-1].end=25+this.user*6-this.target[1]*6
                    }
                    if(this.timer==5){
                        this.battle.combatants[this.target[1]].take(this.damage,1)
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
                        this.battle.combatants[this.target[1]].take(this.damage,0)
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