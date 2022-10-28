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
        this.lastType=0
        this.lastDamage=0
    }
    set(){
        switch(this.type){
            case 1: case 2: case 3: case 4: case 5: case 6: case 22: case 24: case 25: case 26: case 27: case 28: case 31: case 33: case 34: case 35: case 36: case 37: case 38: case 39:
            case 41: case 43: case 45: case 52: case 55: case 59: case 63: case 69: case 70: case 71: case 72: case 73: case 74: case 75: case 77: case 83: case 84: case 85: case 86: case 87:
            case 88: case 89: case 90: case 96: case 99: case 104: case 106: case 107: case 109: case 116: case 117: case 121: case 122: case 124: case 125: case 129: case 133:
                this.timer=60
            break
            case 7:
                this.timer=90
            break
            case 46: case 47: case 100: case 102: case 126:
                this.timer=120
            break
            case 62: case 80: case 111:
                this.timer=30
            break
            case 105:
                this.timer=600
            break
        }
        if(this.battle.stack[0].type<4){
            switch(this.type){
                case 0: case 61: case 64: case 67: case 68: case 101:
                    this.timer=100-this.user*20+this.target[0]*20
                break
                case 8: case 10: case 11: case 23: case 40: case 44: case 49: case 54: case 57: case 65: case 78: case 82: case 92: case 93: case 94: case 95: case 97: case 112: case 115:
                    this.timer=170-this.user*30+this.target[0]*30
                break
                case 9: case 15: case 20: case 29: case 60: case 81: case 103: case 114: case 118: case 130:
                    this.timer=55-this.user*8+this.target[0]*8
                break
                case 12: case 14: case 66: case 98:
                    this.timer=150-this.user*20+this.target[0]*20
                break
                case 13: case 79: case 110: case 113:
                    this.timer=180-this.user*20
                break
                case 16:
                    this.timer=45-this.user*6+this.target[0]*6
                break
                case 17: case 76:
                    this.timer=240-this.user*40+this.target[0]*40
                break
                case 18:
                    this.timer=85-this.user*8+this.target[0]*8
                break
                case 19: case 48:
                    this.timer=115-this.user*8+this.target[0]*8
                break
                case 21: case 108:
                    this.timer=35-this.user*4+this.target[0]*4
                break
                case 30:
                    this.timer=260-this.user*40
                break
                case 32:
                    this.timer=360-this.user*40
                break
                case 42: case 56: case 119: case 120: case 132:
                    this.timer=230-this.user*30+this.target[0]*30
                break
                case 50: case 51: case 134:
                    this.timer=86-this.user*16+this.target[0]*16
                break
                case 53:
                    this.timer=50-this.user*10+this.target[0]*10
                break
                case 58:
                    this.timer=150-this.user*20
                break
                case 91:
                    this.timer=79-this.user*8
                break
                case 123:
                    if(this.lastType==123){
                        this.lastType=0
                    }
                    this.type=this.lastType
                    this.battle.enableAttack()
                    this.damage=this.lastDamage
                break
                case 127: case 131:
                    this.timer=76-this.user*8
                break
                case 128:
                    this.timer=44-this.user*8+this.target[0]*8
                break
            }
        }
        else{
            switch(this.type){
                case 0: case 61: case 64: case 67: case 68: case 101:
                    this.timer=100+this.user*20-this.target[1]*20
                break
                case 8: case 10: case 11: case 23: case 40: case 44: case 49: case 54: case 57: case 65: case 78: case 82: case 92: case 93: case 94: case 95: case 97: case 112: case 115:
                    this.timer=170+this.user*30-this.target[1]*30
                break
                case 9: case 15: case 20: case 29: case 60: case 81: case 103: case 114: case 118: case 130:
                    this.timer=55+this.user*8-this.target[1]*8
                break
                case 12: case 14:
                    this.timer=150+this.user*20-this.target[1]*20
                break
                case 13: case 79: case 110: case 113:
                    this.timer=120+this.user*20
                break
                case 16:
                    this.timer=45+this.user*6-this.target[1]*6
                break
                case 17: case 76:
                    this.timer=240+this.user*40-this.target[1]*40
                break
                case 18:
                    this.timer=85+this.user*8-this.target[1]*8
                break
                case 19: case 48:
                    this.timer=115+this.user*8-this.target[1]*8
                break
                case 21: case 108:
                    this.timer=35+this.user*4-this.target[1]*4
                break
                case 30:
                    this.timer=140+this.user*40
                break
                case 32:
                    this.timer=240+this.user*40
                break
                case 42: case 56: case 119: case 120: case 132:
                    this.timer=230+this.user*30-this.target[1]*30
                break
                case 50: case 51: case 134:
                    this.timer=86+this.user*16-this.target[1]*16
                break
                case 53:
                    this.timer=50+this.user*10-this.target[1]*10
                break
                case 58:
                    this.timer=90+this.user*20
                break
                case 66: case 98:
                    if(this.battle.combatants[this.user+4].boost[3]>=2){
                        this.timer=150+this.user*20-this.target[1]*20
                    }
                break
                case 91:
                    this.timer=55+this.user*8
                break
                case 123:
                    if(this.lastType==123){
                        this.lastType=0
                    }
                    this.type=this.lastType
                    this.battle.enableAttack()
                    this.damage=this.lastDamage
                break
                case 127: case 131:
                    this.timer=52+this.user*8
                break
                case 128:
                    this.timer=44+this.user*8-this.target[1]*8
                break
            }
        }
    }
    update(){
        if(this.battle.stack[0].type<4){
            switch(this.type){
                case 0: case 61: case 64: case 67: case 68: case 101:
                    if(this.timer>=50-this.user*10+this.target[0]*10){
                        this.battle.combatants[this.user].position.x+=10
                        this.battle.combatants[this.user].rate[0]+=10
                        this.battle.combatants[this.user].rate[1]+=10
                    }else{
                        this.battle.combatants[this.user].position.x-=10
                        this.battle.combatants[this.user].rate[0]-=10
                        this.battle.combatants[this.user].rate[1]-=10
                    }
                    if(this.timer==50-this.user*10+this.target[0]*10&&this.type==68){
                        this.battle.combatants[this.target[0]+4].take(0,0,this.accuracy,this.user)
                        if(this.battle.combatants[this.target[0]+4].hit){
                            this.battle.combatants[this.target[0]+4].status[13]+=min(this.damage,2*sqrt(this.damage))
                        }
                    }else if(this.timer==50-this.user*10+this.target[0]*10){
                        this.battle.combatants[this.target[0]+4].take(this.damage,0,this.accuracy,this.user)
                        if(this.type==64&&this.battle.combatants[this.target[0]+4].hit){
                            this.battle.combatants[this.user].boost[3]++
                        }else if(this.type==67&&this.battle.combatants[this.target[0]+4].hit){
                            this.battle.currency.money+=5
                            entities.particles.push(new particle(this.battle.layer,this.battle.combatants[this.user].position.x,this.battle.combatants[this.user].position.y,6,0,2,1,[255,225,0]))
                            entities.particles[entities.particles.length-1].value='$5'
                        }else if(this.type==101&&this.battle.combatants[this.target[0]+4].hit){
                            this.battle.currency.money+=25
                            entities.particles.push(new particle(this.battle.layer,this.battle.combatants[this.user].position.x,this.battle.combatants[this.user].position.y,6,0,2,1,[255,225,0]))
                            entities.particles[entities.particles.length-1].value='$5'
                        }
                    }
                    if(this.timer>=40-this.user*10+this.target[0]*10&&this.timer<50-this.user*10+this.target[0]*10&&this.type==61){
                        this.battle.combatants[this.target[0]+4].position.x+=10
                    }else if(this.timer>=30-this.user*10+this.target[0]*10&&this.timer<40-this.user*10+this.target[0]*10&&this.type==61){
                        this.battle.combatants[this.target[0]+4].position.x-=10
                    }
                    if(this.timer==40-this.user*10+this.target[0]*10&&this.type==61&&this.target[0]<3){
                        this.battle.combatants[this.target[0]+5].take(this.damage,0,this.accuracy,this.user)
                        if(this.battle.combatants[this.target[0]+5].hit){
                            this.battle.combatants[this.target[0]+5].status[8]++
                        }
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
                        if(this.type==4){
                            this.battle.combatants[this.user].boost[this.type-4]+=max(floor(this.damage),1)
                        }else{
                            this.battle.combatants[this.user].boost[this.type-4]++
                        }
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
                case 8: case 10: case 11: case 23: case 40: case 44: case 49: case 54: case 57: case 65: case 78: case 82: case 91: case 93: case 94: case 95: case 97: case 112: case 115:
                    if(this.timer>=100-this.user*15+this.target[0]*15){
                        this.battle.combatants[this.user].position.x+=20/3
                        this.battle.combatants[this.user].rate[0]+=20/3
                    }else if((this.timer>=95-this.user*15+this.target[0]*15||this.timer>=85-this.user*15+this.target[0]*15&&this.timer<90-this.user*15+this.target[0]*15||this.timer>=75-this.user*15+this.target[0]*15&&this.timer<80-this.user*15+this.target[0]*15)&&this.type==94){
                        this.battle.combatants[this.user].anim[0]+=1/5
                    }else if(this.timer>=70-this.user*15+this.target[0]*15&&this.type==94){
                        this.battle.combatants[this.user].anim[0]-=1/5
                    }else if(this.timer>=85-this.user*15+this.target[0]*15){
                        if(this.type==40){
                            this.battle.combatants[this.user].direction+=6
                            this.battle.combatants[this.user].position.y++
                        }else if(this.type==93){
                            this.battle.combatants[this.user].size+=0.05
                        }else if(this.type==97){
                            this.battle.combatants[this.user].anim[0]+=1/10
                        }else{
                            this.battle.combatants[this.user].anim[0]+=1/15
                        }
                    }else if(this.timer>=70-this.user*15+this.target[0]*15){
                        if(this.type==40){
                            this.battle.combatants[this.user].direction-=6
                            this.battle.combatants[this.user].position.y--
                        }else if(this.type==93){
                            this.battle.combatants[this.user].size-=0.05
                        }else if(this.type==97){
                            this.battle.combatants[this.user].anim[0]-=1/10
                        }else{
                            this.battle.combatants[this.user].anim[0]-=1/15
                        }
                    }else{
                        this.battle.combatants[this.user].position.x-=20/3
                        this.battle.combatants[this.user].rate[0]-=20/3
                    }
                    if(this.timer==85-this.user*15+this.target[0]*15&&(this.type==8||this.type==23||this.type==40||this.type==54||this.type==57||this.type==65||this.type==78||this.type==82||this.type==91||this.type==93||this.type==95||this.type==97||this.type==115)||(this.timer==75-this.user*15+this.target[0]*15||this.timer==85-this.user*15+this.target[0]*15||this.timer==95-this.user*15+this.target[0]*15)&&this.type==94){
                        this.battle.combatants[this.target[0]+4].take(this.damage,0,this.accuracy,this.user)
                        if(this.type==40&&this.battle.combatants[this.target[0]+4].hit){
                            this.battle.combatants[this.target[0]+4].status[8]++
                        }else if(this.type==54&&this.battle.combatants[this.target[0]+4].hit){
                            this.battle.combatants[this.target[0]+4].status[1]++
                        }else if((this.type==57||this.type==82)&&this.battle.combatants[this.target[0]+4].hit){
                            this.battle.combatants[this.target[0]+4].status[15]++
                        }else if((this.type==65||this.type==94||this.type==95||this.type==97)&&this.battle.combatants[this.target[0]+4].hit){
                            this.battle.combatants[this.user].boost[3]++
                        }else if(this.type==91&&this.battle.combatants[this.target[0]+4].hit){
                            this.battle.combatants[this.target[0]+4].status[0]+=2
                            this.battle.combatants[this.target[0]+4].status[4]+=2
                            this.battle.combatants[this.target[0]+4].status[5]+=2
                            this.battle.combatants[this.target[0]+4].status[13]+=2
                        }else if(this.type==93&&this.battle.combatants[this.target[0]+4].hit){
                            this.battle.combatants[this.user].status[3]++
                        }else if(this.type==115&&this.battle.combatants[this.target[0]+4].hit){
                            this.battle.combatants[this.target[0]+4].status[13]++
                        }
                        if(this.type==95&&this.battle.combatants[this.target[0]+4].hit){
                            this.battle.combatants[this.target[0]+4].status[8]++
                        }
                    }else if(this.timer==85-this.user*15+this.target[0]*15&&(this.type==10||this.type==11)){
                        this.battle.combatants[this.target[0]+4].status[this.type-10]+=this.damage
                    }else if(this.timer==70-this.user*15+this.target[0]*15&&(this.type==23||this.type==65||this.type==82)&&this.target[0]<3){
                        this.battle.combatants[this.target[0]+5].take(this.damage/2,0,this.accuracy,this.user)
                        if(this.type==82&&this.battle.combatants[this.target[0]+5].hit){
                            this.battle.combatants[this.target[0]+5].status[15]++
                        }
                    }else if(this.timer==85-this.user*15+this.target[0]*15&&this.type==44){
                        this.battle.combatants[this.target[0]+4].status[10]+=this.damage
                    }else if(this.timer==85-this.user*15+this.target[0]*15&&this.type==49){
                        this.battle.combatants[this.target[0]+4].status[12]+=this.damage
                    }else if(this.timer==75-this.user*15+this.target[0]*15&&this.type==78&&this.target[0]<3){
                        this.battle.combatants[this.target[0]+5].take(this.damage/2,0,this.accuracy,this.user)
                    }else if(this.timer==65-this.user*15+this.target[0]*15&&this.type==78&&this.target[0]<2){
                        this.battle.combatants[this.target[0]+6].take(this.damage/2,0,this.accuracy,this.user)
                    }
                    if(this.timer<85-this.user*15+this.target[0]*15&&this.timer>=70-this.user*15+this.target[0]*15&&(this.type==23||this.type==65||this.type==82)){
                        this.battle.combatants[this.target[0]+4].position.x+=6
                        this.battle.combatants[this.target[0]+4].rate[0]+=6
                    }else if(this.timer<70-this.user*15+this.target[0]*15&&this.timer>=55-this.user*15+this.target[0]*15&&(this.type==23||this.type==65||this.type==82)){
                        this.battle.combatants[this.target[0]+4].position.x-=6
                        this.battle.combatants[this.target[0]+4].rate[0]-=6
                    }else if(this.timer==85-this.user*15+this.target[0]*15&&this.type==112){
                        this.battle.combatants[this.target[0]+4].status[23]+=this.damage
                    }
                    if(this.type==78){
                        if(this.timer<85-this.user*15+this.target[0]*15&&this.timer>=75-this.user*15+this.target[0]*15){
                            this.battle.combatants[this.target[0]+4].position.x+=9
                            this.battle.combatants[this.target[0]+4].rate[0]+=9
                        }else if(this.timer<75-this.user*15+this.target[0]*15&&this.timer>=65-this.user*15+this.target[0]*15){
                            this.battle.combatants[this.target[0]+4].position.x-=9
                            this.battle.combatants[this.target[0]+4].rate[0]-=9
                        }
                        if(this.target[0]<3){
                            if(this.timer<75-this.user*15+this.target[0]*15&&this.timer>=65-this.user*15+this.target[0]*15){
                                this.battle.combatants[this.target[0]+5].position.x+=9
                                this.battle.combatants[this.target[0]+5].rate[0]+=9
                            }else if(this.timer<65-this.user*15+this.target[0]*15&&this.timer>=55-this.user*15+this.target[0]*15){
                                this.battle.combatants[this.target[0]+5].position.x-=9
                                this.battle.combatants[this.target[0]+5].rate[0]-=9
                            }
                        }
                    }
                break
                case 9: case 15: case 20: case 29: case 60: case 81: case 103: case 114: case 118: case 130:
                    if(this.timer>=40-this.user*8+this.target[0]*8){
                        this.battle.combatants[this.user].anim[1]+=1/15
                    }else if(this.timer>=25-this.user*8+this.target[0]*8){
                        this.battle.combatants[this.user].anim[1]-=1/15
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
                        }else if(this.type==29&&this.battle.combatants[this.target[0]+4].hit){
                            this.battle.combatants[this.target[0]+4].status[1]++
                        }else if(this.type==60&&this.battle.combatants[this.target[0]+4].hit){
                            this.battle.combatants[this.target[0]+4].status[0]++
                        }else if(this.type==103&&this.battle.combatants[this.target[0]+4].hit){
                            this.battle.combatants[this.target[0]+4].status[4]++
                        }else if(this.type==114){
                            if(this.target[0]>0){
                                this.battle.combatants[this.target[0]+3].take(this.damage,0,this.accuracy,this.user)
                            }
                            if(this.target[0]<3){
                                this.battle.combatants[this.target[0]+5].take(this.damage,0,this.accuracy,this.user)
                            }
                        }else if(this.type==130){
                            this.battle.combatants[this.target[0]+4].holding[0]=true
                            this.battle.combatants[this.user].weapon=40
                            this.battle.combatants[this.user].startAttacks()
                        }
                    }
                    if(this.timer==40-this.user*8+this.target[0]*8&&this.type==9){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+25,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height*0.7,3,90,3,25/2,[50,255,50]))
                        entities.particles[entities.particles.length-1].end=35-this.user*8+this.target[0]*8
                    }else if(this.timer==40-this.user*8+this.target[0]*8&&this.type==15){
                        for(g=0;g<10;g++){
                            entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+25,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height*0.7,3,random(85,95),1.5,random(10,15),[50,255,50]))
                            entities.particles[entities.particles.length-1].end=35-this.user*8+this.target[0]*8+random(-8,8)
                        }
                    }else if(this.timer==40-this.user*8+this.target[0]*8&&this.type==20){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+25,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height*0.7,3,90,4,25/2,[50,255,50]))
                        entities.particles[entities.particles.length-1].end=35-this.user*8+this.target[0]*8
                    }else if(this.timer==40-this.user*8+this.target[0]*8&&this.type==29){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+25,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height*0.7,3,90,2.5,25/2,[255,255,50]))
                        entities.particles[entities.particles.length-1].end=35-this.user*8+this.target[0]*8
                    }else if(this.timer==40-this.user*8+this.target[0]*8&&this.type==60){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+25,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height*0.7,3,90,2.5,25/2,[100,25,25]))
                        entities.particles[entities.particles.length-1].end=35-this.user*8+this.target[0]*8
                    }else if(this.timer==40-this.user*8+this.target[0]*8&&this.type==81){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+25,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height*0.7,3,90,5,25/2,[50,255,50]))
                        entities.particles[entities.particles.length-1].end=35-this.user*8+this.target[0]*8
                    }else if(this.timer==40-this.user*8+this.target[0]*8&&this.type==103){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+25,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height*0.7,4,90,3,25/2,[50,255,255]))
                        entities.particles[entities.particles.length-1].end=35-this.user*8+this.target[0]*8
                    }else if(this.timer==40-this.user*8+this.target[0]*8&&this.type==114){
                        for(g=0;g<15;g++){
                            entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+25,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height*0.7,3,random(85,95),1.5,random(10,15),[50,255,50]))
                            entities.particles[entities.particles.length-1].end=35-this.user*8+this.target[0]*8+random(-12,12)
                        }
                    }else if(this.timer==40-this.user*8+this.target[0]*8&&this.type==118){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+25,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height*0.7,3,90,3.5,25/2,[50,255,50]))
                        entities.particles[entities.particles.length-1].end=35-this.user*8+this.target[0]*8
                    }else if(this.timer==40-this.user*8+this.target[0]*8&&this.type==130){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+25,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height*0.7,9,90,4,25/2,[0,0,0]))
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
                        if(this.type==14&&this.battle.combatants[this.target[0]+4].hit){
                            this.battle.combatants[this.target[0]+4].status[2]++
                        }
                    }
                break
                case 13: case 79:
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
                            if(this.type==79&&this.battle.combatants[g+4].hit){
                                this.battle.combatants[g+4].status[1]++
                            }
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
                case 17: case 76:
                    if(this.timer>=145-this.user*20+this.target[0]*20){
                        this.battle.combatants[this.user].position.x+=5
                        this.battle.combatants[this.user].rate[0]+=5
                    }else if(this.timer>=120-this.user*20+this.target[0]*20){
                        this.battle.combatants[this.user].anim[0]+=1/15
                        if(this.type==76){
                            this.battle.combatants[this.user].anim[0]+=1/30
                        }
                    }else if(this.timer>=95-this.user*20+this.target[0]*20){
                        this.battle.combatants[this.user].anim[0]-=1/15
                        if(this.type==76){
                            this.battle.combatants[this.user].anim[0]-=1/30
                        }
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
                case 19: case 48:
                    if(this.timer>=100-this.user*8+this.target[0]*8){
                        this.battle.combatants[this.user].anim[1]+=1/15
                    }else if(this.timer<40-this.user*8+this.target[0]*8&&this.timer>=25-this.user*8+this.target[0]*8){
                        this.battle.combatants[this.user].anim[1]-=1/15
                    }
                    if(this.timer>=40-this.user*8+this.target[0]*8&&this.timer<=100-this.user*8+this.target[0]*8&&(this.timer+this.user*8-this.target[0]*8)%4==0&&this.type==19){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+25,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height*0.7,3,random(89,101),2.5,25/2,[50,255,50]))
                        entities.particles[entities.particles.length-1].end=35-this.user*8+this.target[0]*8
                    }
                    if(this.timer>=40-this.user*8+this.target[0]*8&&this.timer<=100-this.user*8+this.target[0]*8&&(this.timer+this.user*8-this.target[0]*8)%4==0&&this.type==48){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+25,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height*0.7,3,random(75,105),2,25/2,[255,50,50]))
                        entities.particles[entities.particles.length-1].end=random(15,75)
                    }
                    if(this.timer>=5&&this.timer<=65&&this.timer%4==1&&this.type==19){
                        this.battle.combatants[this.target[0]+4].take(this.damage,0,this.accuracy,this.user)
                    }
                    if(this.timer>=5&&this.timer<=65&&this.timer%4==1&&this.type==48){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g+4].take(this.damage,0,this.accuracy,this.user)
                        }
                    }
                break
                case 21: case 108:
                    if(this.timer>=20-this.user*4+this.target[0]*4){
                        this.battle.combatants[this.user].anim[1]+=1/15
                    }else if(this.timer>=5-this.user*4+this.target[0]*4){
                        this.battle.combatants[this.user].anim[1]-=1/15
                    }
                    if(this.timer==20-this.user*4+this.target[0]*4&&this.type==21){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+25,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height*0.7,5,90,3,25,[50,255,50]))
                        entities.particles[entities.particles.length-1].end=15-this.user*4+this.target[0]*4
                    }else if(this.timer==20-this.user*4+this.target[0]*4&&this.type==108){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+25,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height*0.7,5,90,4,25,[50,255,50]))
                        entities.particles[entities.particles.length-1].end=15-this.user*4+this.target[0]*4
                    }
                    if(this.timer==5){
                        this.battle.combatants[this.target[0]+4].take(this.damage,1,this.accuracy,this.user)
                    }
                break
                case 22: case 27: case 28: case 34: case 35: case 41: case 43: case 52: case 55: case 59: case 69: case 70: case 75: case 83: case 84: case 99: case 107: case 109: case 116: case 117: case 121: case 122: case 124: case 129: case 133:
                    if(this.timer>=30){
                        this.battle.combatants[this.user].anim[0]+=1/30
                    }else{
                        this.battle.combatants[this.user].anim[0]-=1/30
                    }
                    if(this.timer==30&&this.type==22){
                        this.battle.combatants[this.target[0]].life=min(this.battle.combatants[this.target[0]].base.life,this.battle.combatants[this.target[0]].life+this.damage)
                    }else if(this.timer==30&&this.type==27){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g].life=min(this.battle.combatants[g].base.life,this.battle.combatants[g].life+this.damage)
                        }
                    }else if(this.timer==30&&this.type==28){
                        this.battle.combatants[this.target[0]].status[3]++
                    }else if(this.timer==30&&this.type==34){
                        for(g=0,lg=this.battle.combatants[this.target[0]].uses.length;g<lg;g++){
                            this.battle.combatants[this.target[0]].uses[g]=min(this.battle.combatants[this.target[0]].base.uses[g],this.battle.combatants[this.target[0]].uses[g]+this.damage)
                        }
                    }else if(this.timer==30&&this.type==35){
                        this.battle.combatants[this.target[0]].status[5]+=this.damage
                    }else if(this.timer==30&&this.type==41){
                        for(g=0;g<4;g++){
                            for(h=0,lh=this.battle.combatants[g].boost.length;h<lh;h++){
                                this.battle.combatants[g].boost[h]=0
                            }
                            if(this.battle.combatants[g].boost[2]!=0){
                                this.battle.reset()
                            }
                        }
                    }else if(this.timer==30&&this.type==43){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g].status[9]+=3
                        }
                    }else if(this.timer==30&&this.type==52){
                        for(g=0,lg=this.battle.combatants[this.target[0]].status.length;g<lg;g++){
                            if(this.battle.combatants[this.target[0]].statusClass[g]==0){
                                this.battle.combatants[this.target[0]].status[g]=0
                            }
                        }
                    }else if(this.timer==30&&this.type==55){
                        this.battle.combatants[this.target[0]].life=min(this.battle.combatants[this.target[0]].base.life,this.battle.combatants[this.target[0]].life+this.damage)
                        for(g=0,lg=this.battle.combatants[this.target[0]].status.length;g<lg;g++){
                            if(this.battle.combatants[this.target[0]].statusClass[g]==0&&this.battle.combatants[this.target[0]].status[g]>0){
                                this.battle.combatants[this.target[0]].status[g]--
                            }
                        }
                    }else if(this.timer==30&&this.type==59){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g].life=min(this.battle.combatants[g].base.life,this.battle.combatants[g].life+this.damage*random(0,1))
                        }
                    }else if(this.timer==30&&this.type==69){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height,2,90,120,1,this.battle.combatants[this.user].statusColor[17]))
                        this.battle.combatants[this.user].status[17]+=this.damage
                    }else if(this.timer==30&&this.type==70){
                        this.battle.combatants[this.user].status[19]+=this.damage
                    }else if(this.timer==30&&this.type==75){
                        this.battle.combatants[this.user].status[19]+=4
                    }else if(this.timer==30&&this.type==83){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g].status[3]+=2
                        }
                    }else if(this.timer==30&&this.type==84){
                        this.battle.combatants[this.target[0]].life=this.battle.combatants[this.target[0]].base.life
                        this.battle.reset()
                    }else if(this.timer==30&&this.type==99){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height,2,90,160,1,this.battle.combatants[this.user].statusColor[17]))
                        this.battle.combatants[this.user].status[17]+=this.damage
                    }else if(this.timer==30&&this.type==107){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g].status[5]+=2
                        }
                    }else if(this.timer==30&&this.type==109){
                        this.battle.combatants[this.target[0]].status[19]+=this.damage
                    }else if(this.timer==30&&this.type==116){
                        this.battle.combatants[this.user].status[24]+=3
                    }else if(this.timer==30&&this.type==117){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g].status[24]+=2
                        }
                    }else if(this.timer==30&&this.type==121){
                        this.battle.combatants[this.user].status[20]+=this.damage
                    }else if(this.timer==30&&this.type==122){
                        this.battle.combatants[this.user].status[25]++
                    }else if(this.timer==30&&this.type==124){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height*0.6,2,90,400,0.5,this.battle.combatants[this.user].statusColor[16]))
                        for(g=0;g<4;g++){
                            this.battle.combatants[g+4].status[16]++
                        }
                    }else if(this.timer==30&&this.type==129){
                        this.battle.combatants[this.user].status[20]++
                        this.battle.combatants[this.user].status[25]++
                        this.battle.combatants[this.user].life=min(this.battle.combatants[this.user].base.life,this.battle.combatants[this.user].life+10)
                    }else if(this.timer==30&&this.type==133){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.target[0]+4].position.x,this.battle.combatants[this.target[0]+4].position.y-this.battle.combatants[this.target[0]+4].height*0.6,2,90,80,0.5,[207,90,101]))
                        for(g=0,lg=this.battle.combatants[this.target[0]+4].uses.length;g<lg;g++){
                            this.battle.combatants[this.target[0]+4].uses[g]=0
                        }
                    }
                    if(this.type==124){
                        if(this.timer>=30){
                            this.battle.combatants[this.user].anim[7]+=1/30
                            this.battle.combatants[this.user].anim[8]+=1/30
                            this.battle.combatants[this.user].anim[9]+=1/30
                        }else{
                            this.battle.combatants[this.user].anim[7]-=1/30
                            this.battle.combatants[this.user].anim[8]-=1/30
                            this.battle.combatants[this.user].anim[9]-=1/30
                        }
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
                case 33: case 36: case 38:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+10,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height,1,90,80,1,this.battle.combatants[this.target[0]+4].statusColor[floor(this.type/2)-12]))
                        this.battle.combatants[this.target[0]+4].status[floor(this.type/2)-12]+=this.damage
                    }
                break
                case 37:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+10,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height,1,90,120,1,[200,100,0]))
                        this.battle.combatants[this.target[0]+4].take(this.damage,0,this.accuracy,this.user)
                        if(this.battle.combatants[this.target[0]+4].hit){
                            this.battle.combatants[this.target[0]+4].status[0]+=this.damage/5
                        }
                    }
                break
                case 39:
                    if(this.timer==30||this.timer==35||this.timer==40||this.timer==45||this.timer==50||this.timer==55){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+10,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height,1,random(60,120),120,random(0.5,1.5),[0,150,255]))
                    }
                    if(this.timer==45){
                        this.battle.combatants[this.target[0]+4].take(this.damage,0,this.accuracy,this.user)
                        if(this.battle.combatants[this.target[0]+4].hit){
                            this.battle.combatants[this.target[0]+4].boost[1]--
                        }
                    }
                break
                case 42: case 56: case 119: case 120: case 132:
                    if(this.timer>=160-this.user*15+this.target[0]*15){
                        this.battle.combatants[this.user].position.x+=20/3
                        this.battle.combatants[this.user].rate[0]+=20/3
                    }else if(this.timer>=145-this.user*15+this.target[0]*15||this.timer>=85-this.user*15+this.target[0]*15&&this.timer<100-this.user*15+this.target[0]*15&&this.type==56||this.timer>=115-this.user*15+this.target[0]*15&&this.timer<130-this.user*15+this.target[0]*15&&this.type==56){
                        this.battle.combatants[this.user].anim[0]+=1/15
                        if(this.type==42||this.type==132){
                            this.battle.combatants[this.target[0]+4].anim[0]+=1/15
                        }
                    }else if(this.timer>=85-this.user*15+this.target[0]*15&&(this.type==42||this.type==119||this.type==120||this.type==132)){
                        if((this.timer+this.user*15-this.target[0]*15)%10==0&&this.type==42){
                            if(this.battle.combatants[this.user].life>0){
                                this.battle.combatants[this.target[0]+4].take(this.damage,0,this.accuracy,this.user)
                            }
                            if(this.battle.combatants[this.target[0]+4].life>0){
                                this.battle.combatants[this.user].take(this.battle.combatants[this.target[0]+4].damage,0,this.accuracy,this.target[0]+4)
                            }
                        }else if((this.timer+this.user*15-this.target[0]*15)%5==0&&this.type==132){
                            if(this.battle.combatants[this.user].life>0){
                                this.battle.combatants[this.target[0]+4].take(this.damage,0,this.accuracy,this.user)
                            }
                            if(this.battle.combatants[this.target[0]+4].life>0){
                                this.battle.combatants[this.user].take(this.battle.combatants[this.target[0]+4].damage,0,this.accuracy,this.target[0]+4)
                            }
                        }
                    }else if(this.timer>=70-this.user*15+this.target[0]*15||this.timer>=100-this.user*15+this.target[0]*15&&this.timer<115-this.user*15+this.target[0]*15&&this.type==56||this.timer>=130-this.user*15+this.target[0]*15&&this.timer<145-this.user*15+this.target[0]*15&&this.type==56){
                        this.battle.combatants[this.user].anim[0]-=1/15
                        if(this.type==42||this.type==132){
                            this.battle.combatants[this.target[0]+4].anim[0]-=1/15
                        }
                    }else{
                        this.battle.combatants[this.user].position.x-=20/3
                        this.battle.combatants[this.user].rate[0]-=20/3
                    }
                    if(this.timer==85-this.user*15+this.target[0]*15&&this.type==56){
                        this.battle.combatants[this.target[0]+4].take(this.damage/8*this.battle.combatants[this.target[0]+4].base.life,0,this.accuracy,this.user)
                    }else if((this.timer==85-this.user*15+this.target[0]*15||this.timer==95-this.user*15+this.target[0]*15||this.timer==105-this.user*15+this.target[0]*15||this.timer==115-this.user*15+this.target[0]*15||this.timer==125-this.user*15+this.target[0]*15||this.timer==135-this.user*15+this.target[0]*15)&&(this.type==119||this.type==120)){
                        this.battle.combatants[this.target[0]+4].take(this.damage,0,this.accuracy,this.user)
                        if(this.timer==85-this.user*15+this.target[0]*15&&this.type==120&&this.battle.combatants[this.target[0]+4].hit){
                            this.battle.combatants[this.target[0]+4].status[13]+=2
                        }
                    }
                break
                case 45:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height,2,90,120,1,[200,210,220]))
                        this.battle.combatants[this.user].status[6]+=this.damage
                        this.battle.combatants[this.user].status[11]+=this.damage*2
                        this.battle.combatants[this.user].life=this.battle.combatants[this.user].base.life
                    }
                break
                case 46: case 47: case 100: case 102: case 126:
                    if(this.timer>=90){
                        this.battle.combatants[this.user].anim[0]+=1/30
                    }else if(this.timer>=60){
                        this.battle.combatants[this.user].anim[0]-=1/30
                    }
                    if(this.timer==90&&this.type==46){
                        for(g=0;g<20;g++){
                            entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+25,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height*0.7,7,random(85,95),1.5,random(2,12),[200,180,200]))
                            entities.particles[entities.particles.length-1].end=60
                        }
                    }else if(this.timer==90&&this.type==47){
                        for(g=0;g<20;g++){
                            entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+25,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height*0.7,7,random(85,95),2,random(2,12),[255,50,50]))
                            entities.particles[entities.particles.length-1].end=60
                        }
                    }else if(this.timer==90&&this.type==100){
                        for(g=0;g<20;g++){
                            entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+25,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height*0.7,7,random(85,95),2,random(2,12),[125,150,150]))
                            entities.particles[entities.particles.length-1].end=60
                        }
                    }else if(this.timer==90&&this.type==102){
                        for(g=0;g<20;g++){
                            entities.particles.push(new particle(this.layer,this.battle.combatants[4].position.x+random(-50,350),-200,3,random(165,195),2,10,[50,255,50]))
                            entities.particles[entities.particles.length-1].end=60
                        }
                    }else if(this.timer==90&&this.type==126){
                        for(g=0;g<20;g++){
                            entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+25,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height*0.7,8,random(80,100),3,random(2,12),[254,211,240]))
                            entities.particles[entities.particles.length-1].end=75
                        }
                    }else if(this.timer==30&&this.type==46){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g+4].status[4]+=floor(random(0,4))
                        }
                    }else if(this.timer==30&&this.type==47){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g+4].take(this.damage*random(0,1),0,this.accuracy,this.user)
                            if(this.battle.combatants[g+4].hit){
                                this.battle.combatants[g+4].status[2]++
                            }
                        }
                    }else if(this.timer==30&&this.type==100){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g+4].take(this.damage*random(0,1),0,this.accuracy,this.user)
                            if(this.battle.combatants[g+4].hit){
                                this.battle.combatants[g+4].status[18]++
                            }
                        }
                    }else if(this.timer==30&&this.type==102){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g+4].take(this.damage*random(0,1),0,this.accuracy,this.user)
                            if(this.battle.combatants[g+4].hit){
                                this.battle.combatants[g+4].status[5]+=2
                            }
                        }
                    }else if(this.timer==30&&this.type==126){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g+4].take(this.damage*random(0,1),0,this.accuracy,this.user)
                        }
                        for(g=0;g<3;g++){
                            h=floor(random(0,4))
                            if(this.battle.combatants[h+4].hit){
                                this.battle.combatants[h+4].status[2+g*2]++
                            }
                        }
                    }
                break
                case 50: case 51: case 134:
                    if(this.timer>=48-this.user*8+this.target[0]*8){
                        this.battle.combatants[this.user].position.x+=25/2
                        this.battle.combatants[this.user].rate[0]+=25/2
                    }else if(this.timer>=43-this.user*8+this.target[0]*8){
                        this.battle.combatants[this.user].anim[0]+=1/5
                    }else if(this.timer>=38-this.user*8+this.target[0]*8){
                        this.battle.combatants[this.user].anim[0]-=1/5
                    }else{
                        this.battle.combatants[this.user].position.x-=25/2
                        this.battle.combatants[this.user].rate[0]-=25/2
                    }
                    if(this.timer==48-this.user*8+this.target[0]*8){
                        this.battle.combatants[this.target[0]+4].take(this.damage,0,this.accuracy,this.user)
                        if(this.type==51&&this.battle.combatants[this.target[0]+4].hit){
                            this.battle.combatants[this.target[0]+4].status[13]+=sqrt(this.damage)/2
                        }else if(this.type==134&&this.battle.combatants[this.target[0]+4].hit){
                            this.battle.combatants[this.target[0]+4].holding[0]=true
                            this.battle.combatants[this.target[0]+4].status[28]++
                            this.battle.combatants[this.user].weapon=40
                            this.battle.combatants[this.user].startAttacks()
                        }
                    }
                break
                case 53:
                    if(this.timer>=25-this.user*5+this.target[0]*5){
                        this.battle.combatants[this.user].position.x+=20
                        this.battle.combatants[this.user].rate[0]+=20
                        this.battle.combatants[this.user].rate[1]+=20
                    }else{
                        this.battle.combatants[this.user].position.x-=20
                        this.battle.combatants[this.user].rate[0]-=20
                        this.battle.combatants[this.user].rate[1]-=20
                    }
                    if(this.timer==25-this.user*5+this.target[0]*5){
                        this.battle.combatants[this.target[0]+4].take(this.damage,0,this.accuracy,this.user)
                        if(this.battle.combatants[this.target[0]+4].hit){
                            this.battle.combatants[this.target[0]+4].status[1]++
                        }
                    }
                break
                case 58:
                    if(this.timer>=75-this.user*10){
                        this.battle.combatants[this.user].position.x+=10
                        this.battle.combatants[this.user].rate[0]+=10
                    }else{
                        this.battle.combatants[this.user].position.x-=10
                        this.battle.combatants[this.user].rate[0]-=10
                    }
                    for(g=0;g<3;g++){
                        if(this.timer==100-g*10-this.user*10){
                            this.battle.combatants[g+4].take(this.damage,0,this.accuracy,this.user)
                        }
                    }
                break
                case 62: case 80:
                    if(this.timer>=15){
                        this.battle.combatants[this.user].anim[4]+=1/15
                    }else{
                        this.battle.combatants[this.user].anim[4]-=1/15
                    }
                    if(this.timer==15&&this.type==62){
                        this.battle.combatants[this.user].life=min(this.battle.combatants[this.user].base.life,this.battle.combatants[this.user].life+this.damage)
                        for(g=0,lg=this.battle.combatants[this.user].status.length;g<lg;g++){
                            if(this.battle.combatants[this.user].statusClass[g]==0){
                                this.battle.combatants[this.user].status[g]=0
                            }
                        }
                    }else if(this.timer==15&&this.type==80){
                        this.battle.combatants[this.user].status[14]++
                        this.battle.combatants[this.user].status[19]++
                    }
                break
                case 63:
                    if(this.timer==30||this.timer==35||this.timer==40||this.timer==45||this.timer==50||this.timer==55){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+10,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height,1,random(60,120),160,random(0.5,1.5),[0,150,255]))
                    }
                    if(this.timer==45){
                        this.battle.combatants[this.target[0]+4].take(this.damage,0,this.accuracy,this.user)
                        if(this.battle.combatants[this.target[0]+4].hit){
                            this.battle.combatants[this.target[0]+4].boost[1]-=2
                        }
                    }
                break
                case 66: case 98:
                    if(this.timer>=105-this.user*10+this.target[0]*10){
                        this.battle.combatants[this.user].position.x+=10
                        this.battle.combatants[this.user].rate[0]+=10
                        this.battle.combatants[this.user].rate[1]+=10
                    }else if(this.timer>=55-this.user*10+this.target[0]*10){
                        this.battle.combatants[this.user].anim[2]-=5
                        this.battle.combatants[this.user].anim[3]+=1/2
                    }else if(this.timer>=45-this.user*10+this.target[0]*10){
                        this.battle.combatants[this.user].anim[2]+=25
                        this.battle.combatants[this.user].anim[3]-=5/2
                    }else{
                        this.battle.combatants[this.user].position.x-=10
                        this.battle.combatants[this.user].rate[0]-=10
                        this.battle.combatants[this.user].rate[1]-=10
                    }
                    if(this.timer==45-this.user*10+this.target[0]*10){
                        this.battle.combatants[this.target[0]+4].take(this.damage*(1+this.battle.combatants[this.user].boost[3]/2),0,this.accuracy,this.user)
                        if(this.type==98&&this.battle.combatants[this.target[0]+4].hit){
                            this.battle.combatants[this.target[0]+4].status[0]+=1+this.battle.combatants[this.user].boost[3]/2
                        }
                        this.battle.combatants[this.user].boost[3]=0
                    }
                break
                case 71:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+10,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height,1,90,80,1,this.battle.combatants[this.user].statusColor[0]))
                        this.battle.combatants[this.target[0]+4].take(0,0,this.accuracy,this.user)
                        if(this.battle.combatants[this.target[0]+4].hit){
                            this.battle.combatants[this.target[0]+4].status[0]+=this.damage
                        }
                    }
                break
                case 72:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+10,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height,1,90,80,1,this.battle.combatants[this.user].statusColor[2]))
                        this.battle.combatants[this.target[0]+4].take(0,0,this.accuracy,this.user)
                        if(this.battle.combatants[this.target[0]+4].hit){
                            this.battle.combatants[this.target[0]+4].status[2]+=this.damage
                        }
                    }
                break
                case 73:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+10,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height,1,90,80,1,this.battle.combatants[this.user].statusColor[4]))
                        this.battle.combatants[this.target[0]+4].take(0,0,this.accuracy,this.user)
                        if(this.battle.combatants[this.target[0]+4].hit){
                            this.battle.combatants[this.target[0]+4].status[4]+=this.damage
                        }
                    }
                break
                case 74:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+10,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height,1,90,80,1,this.battle.combatants[this.user].statusColor[6]))
                        this.battle.combatants[this.target[0]+4].take(0,0,this.accuracy,this.user)
                        if(this.battle.combatants[this.target[0]+4].hit){
                            this.battle.combatants[this.target[0]+4].status[6]+=this.damage
                        }
                    }
                break
                case 77:
                    if(this.timer==30||this.timer==35||this.timer==40||this.timer==45||this.timer==50||this.timer==55){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+10,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height,1,random(60,120),160,random(0.5,1.5),[0,150,255]))
                    }
                    if(this.timer==45){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g].boost[1]+=this.damage
                        }
                    }
                break
                case 85: case 86: case 87:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+10,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height,1,90,120,1,this.battle.combatants[this.user].boostColor[this.type-85]))
                        this.battle.combatants[this.target[0]+4].boost[this.type-85]-=2
                        if(this.type==87){
                            this.battle.reset()
                        }
                    }
                break
                case 88: case 89: case 90:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.target[0]].position.x,this.battle.combatants[this.target[0]].position.y-this.battle.combatants[this.target[0]].height,2,90,160,1,this.battle.combatants[this.target[0]].boostColor[this.type-88]))
                        this.battle.combatants[this.target[0]].boost[this.type-88]+=2
                        if(this.type==90){
                            this.battle.reset()
                        }
                    }
                break
                case 91:
                    if(this.timer>=64-this.user*8){
                        this.battle.combatants[this.user].anim[1]+=1/15
                    }else if(this.timer>=49-this.user*8){
                        this.battle.combatants[this.user].anim[1]-=1/15
                    }
                    for(g=0;g<4;g++){
                        if(this.timer==29-g*8){
                            this.battle.combatants[g+4].take(this.damage,0,this.accuracy,this.user)
                            if(this.battle.combatants[g+4].hit){
                                this.battle.combatants[g+4].status[0]++
                            }
                        }
                    }
                    if(this.timer==64-this.user*8){
                        for(g=0;g<4;g++){
                            entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+25,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height*0.7,3,random(85,95),2.5,25/2,[100,25,25]))
                            entities.particles[entities.particles.length-1].end=35-this.user*8+g*8
                        }
                    }
                break
                case 96:
                    if(this.timer==30||this.timer==35||this.timer==40||this.timer==45||this.timer==50||this.timer==55){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+10,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height,1,random(60,120),200,random(0.5,1.5),[0,150,255]))
                    }
                    if(this.timer==45){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g+4].boost[1]-=this.damage
                        }
                    }
                break
                case 104:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+10,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height,1,90,80,1,this.battle.combatants[this.user].statusColor[0]))
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+10,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height,1,90,100,1,this.battle.combatants[this.user].statusColor[2]))
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+10,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height,1,90,120,1,this.battle.combatants[this.user].statusColor[4]))
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+10,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height,1,90,140,1,this.battle.combatants[this.user].statusColor[6]))
                        this.battle.combatants[this.target[0]+4].take(0,0,this.accuracy,this.user)
                        if(this.battle.combatants[this.target[0]+4].hit){
                            this.battle.combatants[this.target[0]+4].status[0]+=this.damage*3
                            this.battle.combatants[this.target[0]+4].status[2]+=this.damage*10
                            this.battle.combatants[this.target[0]+4].status[4]+=this.damage*10
                            this.battle.combatants[this.target[0]+4].status[6]+=this.damage
                        }
                    }
                break
                case 105:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+10,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height,1,90,120,1,this.battle.combatants[this.user].statusColor[2]))
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+10,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height,1,90,200,1,this.battle.combatants[this.user].statusColor[6]))
                        for(g=0;g<7;g++){
                            this.battle.combatants[g+1].status[2]++
                            this.battle.combatants[g+1].status[6]++
                        }
                    }
                break
                case 106:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+10,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height,1,90,120,1,this.battle.combatants[this.user].statusColor[22]))
                        this.battle.combatants[this.user].status[22]+=2
                    }
                break
                case 110: case 113:
                    if(this.timer>=90-this.user*10){
                        this.battle.combatants[this.user].position.x+=10
                        this.battle.combatants[this.user].rate[0]+=15
                    }else{
                        this.battle.combatants[this.user].position.x-=10
                        this.battle.combatants[this.user].rate[0]-=15
                    }
                    for(g=0;g<4;g++){
                        if(this.timer==130-g*10-this.user*10&&this.type==110){
                            for(h=0,lh=this.battle.combatants[g+4].status.length;h<lh;h++){
                                this.battle.combatants[g+4].status[h]=0
                            }
                        }else if(this.timer==130-g*10-this.user*10&&this.type==113){
                            this.battle.combatants[g+4].status[0]++
                        }
                    }
                break
                case 111:
                    if(this.timer>=15){
                        this.battle.combatants[this.user].position.x+=3
                        this.battle.combatants[this.user].rate[0]+=3
                    }else{
                        this.battle.combatants[this.user].position.x-=3
                        this.battle.combatants[this.user].rate[0]-=3
                    }
                    if(this.timer==15){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g].boost[floor(random(0,2))]++
                        }
                    }
                break
                case 125:
                    if(this.timer>=30){
                        this.battle.combatants[this.user].anim[5]+=1/30
                    }else{
                        this.battle.combatants[this.user].anim[5]-=1/30
                    }
                    if(this.timer==30){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x,this.battle.combatants[this.user].position.y-this.battle.combatants[this.user].height,2,90,120,0.5,this.battle.combatants[this.user].statusColor[27]))
                        this.battle.combatants[this.user].status[27]+=2
                    }
                break
                case 127: case 131:
                    if(this.timer>=38-this.user*4){
                        this.battle.combatants[this.user].position.x+=25
                        this.battle.combatants[this.user].rate[0]+=25
                    }else{
                        this.battle.combatants[this.user].position.x-=25
                        this.battle.combatants[this.user].rate[0]-=25
                    }
                    for(g=0;g<4;g++){
                        if(this.timer==50-g*4-this.user*4){
                            if(this.type==127){
                                this.battle.combatants[g+4].take(this.damage,0,this.accuracy,this.user)
                            }else if(this.battle.combatants[g+4].holding[0]){
                                this.battle.combatants[g+4].holding[0]=false
                                this.battle.combatants[g+4].status[28]=0
                                this.battle.combatants[this.user].weapon=31
                                this.battle.combatants[this.user].startAttacks()
                            }
                        }
                    }
                break
                case 128:
                    if(this.timer>=25-this.user*4+this.target[0]*4){
                        this.battle.combatants[this.user].position.x+=25
                        this.battle.combatants[this.user].rate[0]+=25
                    }else if(this.timer>=22-this.user*4+this.target[0]*4){
                        this.battle.combatants[this.user].anim[0]+=1/3
                    }else if(this.timer>=19-this.user*4+this.target[0]*4){
                        this.battle.combatants[this.user].anim[0]-=1/3
                    }else{
                        this.battle.combatants[this.user].position.x-=25
                        this.battle.combatants[this.user].rate[0]-=25
                    }
                    if(this.timer==25-this.user*4+this.target[0]*4){
                        this.battle.combatants[this.target[0]+4].take(this.damage,0,this.accuracy,this.user)
                        if(this.battle.combatants[this.target[0]+4].hit){
                            this.battle.combatants[this.target[0]+4].status[13]+=sqrt(this.damage)/2
                        }
                    }
                break
            }
            if(this.timer==1){
                this.battle.combatants[this.user].endTurn()
            }
        }
        else{
            switch(this.type){
                case 0: case 61: case 64: case 67: case 68: case 101:
                    if(this.timer>=50+this.user*10-this.target[1]*10){
                        this.battle.combatants[this.user+4].position.x-=10
                        this.battle.combatants[this.user+4].rate[0]+=10
                        this.battle.combatants[this.user+4].rate[1]+=10
                    }else{
                        this.battle.combatants[this.user+4].position.x+=10
                        this.battle.combatants[this.user+4].rate[0]-=10
                        this.battle.combatants[this.user+4].rate[1]-=10
                    }
                    if(this.timer==50+this.user*10-this.target[1]*10&&this.type==68){
                        this.battle.combatants[this.target[1]].take(0,0,this.accuracy,this.user+4)
                        if(this.battle.combatants[this.target[1]].hit){
                            this.battle.combatants[this.target[1]].status[13]+=min(this.damage,2*sqrt(this.damage))
                        }
                    }else if(this.timer==50+this.user*10-this.target[1]*10){
                        this.battle.combatants[this.target[1]].take(this.damage,0,this.accuracy,this.user+4)
                        if(this.type==64&&this.battle.combatants[this.target[1]].hit){
                            this.battle.combatants[this.user+4].boost[3]++
                        }else if(this.type==67&&this.battle.combatants[this.target[1]].hit){
                            this.battle.currency.money-=5
                            entities.particles.push(new particle(this.battle.layer,this.battle.combatants[this.user+4].position.x,this.battle.combatants[this.user+4].position.y,6,0,2,1,[255,225,0]))
                            entities.particles[entities.particles.length-1].value='-$5'
                        }else if(this.type==102&&this.battle.combatants[this.target[1]].hit){
                            this.battle.currency.money-=25
                            entities.particles.push(new particle(this.battle.layer,this.battle.combatants[this.user+4].position.x,this.battle.combatants[this.user+4].position.y,6,0,2,1,[255,225,0]))
                            entities.particles[entities.particles.length-1].value='-$25'
                        }
                    }
                    if(this.timer>=40+this.user*10-this.target[1]*10&&this.timer<50+this.user*10-this.target[1]*10&&this.type==61){
                        this.battle.combatants[this.target[1]].position.x-=10
                    }else if(this.timer>=30+this.user*10-this.target[1]*10&&this.timer<40+this.user*10-this.target[1]*10&&this.type==61){
                        this.battle.combatants[this.target[1]].position.x+=10
                    }
                    if(this.timer==40+this.user*10-this.target[1]*10&&this.type==61&&this.target[1]>0){
                        this.battle.combatants[this.target[1]-1].take(this.damage,0,this.accuracy,this.user+4)
                        if(this.battle.combatants[this.target[1]-1].hit){
                            this.battle.combatants[this.target[1]-1].status[8]++
                        }
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
                        if(this.type==4){
                            this.battle.combatants[this.user+4].boost[this.type-4]+=max(floor(this.damage),1)
                        }else{
                            this.battle.combatants[this.user+4].boost[this.type-4]++
                        }
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
                case 8: case 10: case 11: case 23: case 40: case 44: case 49: case 54: case 57: case 65: case 78: case 82: case 91: case 93: case 94: case 95: case 97: case 112: case 115:
                    if(this.timer>=100+this.user*15-this.target[1]*15){
                        this.battle.combatants[this.user+4].position.x-=20/3
                        this.battle.combatants[this.user+4].rate[0]+=20/3
                    }else if((this.timer>=95+this.user*15-this.target[1]*15||this.timer>=85+this.user*15-this.target[1]*15&&this.timer<90+this.user*15-this.target[1]*15||this.timer>=75+this.user*15-this.target[1]*15&&this.timer<80+this.user*15-this.target[1]*15)&&this.type==94){
                        this.battle.combatants[this.user+4].anim[0]+=1/5
                    }else if(this.timer>=70+this.user*15-this.target[1]*15&&this.type==94){
                        this.battle.combatants[this.user+4].anim[0]-=1/5
                    }else if(this.timer>=85+this.user*15-this.target[1]*15){
                        if(this.type==40){
                            this.battle.combatants[this.user+4].direction-=6
                            this.battle.combatants[this.user+4].position.y--
                        }else if(this.type==93){
                            this.battle.combatants[this.user+4].size+=0.05
                        }else if(this.type==97){
                            this.battle.combatants[this.user+4].anim[0]+=1/10
                        }else{
                            this.battle.combatants[this.user+4].anim[0]+=1/15
                        }
                    }else if(this.timer>=70+this.user*15-this.target[1]*15){
                        if(this.type==40){
                            this.battle.combatants[this.user+4].direction+=6
                            this.battle.combatants[this.user+4].position.y++
                        }else if(this.type==93){
                            this.battle.combatants[this.user+4].size-=0.05
                        }else if(this.type==97){
                            this.battle.combatants[this.user+4].anim[0]-=1/10
                        }else{
                            this.battle.combatants[this.user+4].anim[0]-=1/15
                        }
                    }else{
                        this.battle.combatants[this.user+4].position.x+=20/3
                        this.battle.combatants[this.user+4].rate[0]+=20/3
                    }
                    if(this.timer==85+this.user*15-this.target[1]*15&&(this.type==8||this.type==23||this.type==40||this.type==54||this.type==57||this.type==65||this.type==78||this.type==82||this.type==91||this.type==93||this.type==95||this.type==97||this.type==115)||(this.timer==75+this.user*15-this.target[1]*15||this.timer==85+this.user*15-this.target[1]*15||this.timer==95+this.user*15-this.target[1]*15)&&this.type==94){
                        this.battle.combatants[this.target[1]].take(this.damage,0,this.accuracy,this.user+4)
                        if(this.type==40&&this.battle.combatants[this.target[1]].hit){
                            this.battle.combatants[this.target[1]].status[8]++
                        }else if(this.type==54&&this.battle.combatants[this.target[1]].hit){
                            this.battle.combatants[this.target[1]].status[1]++
                        }else if((this.type==57||this.type==82)&&this.battle.combatants[this.target[1]].hit){
                            this.battle.combatants[this.target[1]].status[15]++
                        }else if((this.type==65||this.type==94||this.type==95||this.type==97)&&this.battle.combatants[this.target[1]].hit){
                            this.battle.combatants[this.user+4].boost[3]++
                        }else if(this.type==91&&this.battle.combatants[this.target[1]].hit){
                            this.battle.combatants[this.target[1]].status[0]+=2
                            this.battle.combatants[this.target[1]].status[4]+=2
                            this.battle.combatants[this.target[1]].status[5]+=2
                            this.battle.combatants[this.target[1]].status[13]+=2
                        }else if(this.type==93&&this.battle.combatants[this.target[1]].hit){
                            this.battle.combatants[this.user+4].status[3]++
                        }else if(this.type==115&&this.battle.combatants[this.target[1]].hit){
                            this.battle.combatants[this.target[1]].status[13]++
                        }
                        if(this.type==95&&this.battle.combatants[this.target[1]].hit){
                            this.battle.combatants[this.target[1]].status[8]++
                        }
                    }else if(this.timer==85+this.user*15-this.target[1]*15&&(this.type==10||this.type==11)){
                        this.battle.combatants[this.target[1]].status[this.type-10]+=this.damage
                    }else if(this.timer==70+this.user*15-this.target[1]*15&&(this.type==23||this.type==65||this.type==82)&&this.target[1]>0){
                        this.battle.combatants[this.target[1]-1].take(this.damage/2,0,this.accuracy,this.user+4)
                        if(this.type==82&&this.battle.combatants[this.target[1]-1].hit){
                            this.battle.combatants[this.target[1]-1].status[15]++
                        }
                    }else if(this.timer==85+this.user*15-this.target[1]*15&&this.type==44){
                        this.battle.combatants[this.target[1]].status[10]+=this.damage
                    }else if(this.timer==85+this.user*15-this.target[1]*15&&this.type==49){
                        this.battle.combatants[this.target[1]].status[12]+=this.damage
                    }else if(this.timer==75+this.user*15-this.target[1]*15&&this.type==78&&this.target[1]>0){
                        this.battle.combatants[this.target[1]-1].take(this.damage/2,0,this.accuracy,this.user+4)
                    }else if(this.timer==65+this.user*15-this.target[1]*15&&this.type==78&&this.target[1]>1){
                        this.battle.combatants[this.target[1]-2].take(this.damage/2,0,this.accuracy,this.user+4)
                    }
                    if(this.timer<85+this.user*15-this.target[1]*15&&this.timer>=70+this.user*15-this.target[1]*15&&(this.type==23||this.type==65||this.type==82)){
                        this.battle.combatants[this.target[1]].position.x-=6
                        this.battle.combatants[this.target[1]].rate[0]+=6
                    }else if(this.timer<85+this.user*15-this.target[1]*15&&this.timer>=55+this.user*15-this.target[1]*15&&(this.type==23||this.type==65||this.type==82)){
                        this.battle.combatants[this.target[1]].position.x+=6
                        this.battle.combatants[this.target[1]].rate[0]-=6
                    }else if(this.timer==85+this.user*15-this.target[1]*15&&this.type==112){
                        this.battle.combatants[this.target[1]].status[23]+=this.damage
                    }
                    if(this.type==78){
                        if(this.timer<85+this.user*15-this.target[1]*15&&this.timer>=75+this.user*15-this.target[1]*15){
                            this.battle.combatants[this.target[1]].position.x-=9
                            this.battle.combatants[this.target[1]].rate[0]+=9
                        }else if(this.timer<7+this.user*15-this.target[1]*15&&this.timer>=65+this.user*15-this.target[1]*15){
                            this.battle.combatants[this.target[1]].position.x+=9
                            this.battle.combatants[this.target[1]].rate[0]-=9
                        }
                        if(this.target[1]>0){
                            if(this.timer<75+this.user*15-this.target[1]*15&&this.timer>=65+this.user*15-this.target[1]*15){
                                this.battle.combatants[this.target[1]-1].position.x-=9
                                this.battle.combatants[this.target[1]-1].rate[0]+=9
                            }else if(this.timer<65+this.user*15-this.target[1]*15&&this.timer>=55+this.user*15-this.target[1]*15){
                                this.battle.combatants[this.target[1]-1].position.x+=9
                                this.battle.combatants[this.target[1]-1].rate[0]-=9
                            }
                        }
                    }
                break
                case 9: case 15: case 20: case 29: case 60: case 81: case 103: case 114: case 118: case 131:
                    if(this.timer>=40+this.user*8-this.target[1]*8){
                        this.battle.combatants[this.user+4].anim[1]+=1/15
                    }else if(this.timer>=25+this.user*8-this.target[1]*8){
                        this.battle.combatants[this.user+4].anim[1]-=1/15
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
                        }else if(this.type==29&&this.battle.combatants[this.target[1]].hit){
                            this.battle.combatants[this.target[1]].status[1]++
                        }else if(this.type==60&&this.battle.combatants[this.target[1]].hit){
                            this.battle.combatants[this.target[1]].status[0]++
                        }else if(this.type==103&&this.battle.combatants[this.target[1]].hit){
                            this.battle.combatants[this.target[1]].status[4]++
                        }else if(this.type==114){
                            if(this.target[0]>0){
                                this.battle.combatants[this.target[0]-1].take(this.damage,0,this.accuracy,this.user+4)
                            }
                            if(this.target[0]<3){
                                this.battle.combatants[this.target[0]+1].take(this.damage,0,this.accuracy,this.user+4)
                            }
                        }else if(this.type==130){
                            this.battle.combatants[this.target[1]].holding[0]=true
                            this.battle.combatants[this.user+4].weapon=40
                            this.battle.combatants[this.user+4].startAttacks()
                        }
                    }
                    if(this.timer==40+this.user*8-this.target[1]*8&&this.type==9){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-25,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.7,3,270,3,25/2,[50,255,50]))
                        entities.particles[entities.particles.length-1].end=35+this.user*8-this.target[1]*8
                    }else if(this.timer==40+this.user*8-this.target[0]*8&&this.type==15){
                        for(g=0;g<10;g++){
                            entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x+25,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.7,3,random(275,285),1.5,random(10,15),[50,255,50]))
                            entities.particles[entities.particles.length-1].end=35+this.user*8-this.target[1]*8+random(-8,8)
                        }
                    }else if(this.timer==40+this.user*8-this.target[1]*8&&this.type==20){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-25,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.7,3,270,4,25/2,[50,255,50]))
                        entities.particles[entities.particles.length-1].end=35+this.user*8-this.target[1]*8
                    }else if(this.timer==40+this.user*8-this.target[1]*8&&this.type==29){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-25,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.7,3,270,2.5,25/2,[255,255,50]))
                        entities.particles[entities.particles.length-1].end=35+this.user*8-this.target[1]*8
                    }else if(this.timer==40+this.user*8-this.target[1]*8&&this.type==60){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-25,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.7,3,270,2.5,25/2,[100,25,25]))
                        entities.particles[entities.particles.length-1].end=35+this.user*8-this.target[1]*8
                    }else if(this.timer==40+this.user*8-this.target[1]*8&&this.type==81){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-25,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.7,3,270,5,25/2,[50,255,50]))
                        entities.particles[entities.particles.length-1].end=35+this.user*8-this.target[1]*8
                    }else if(this.timer==40+this.user*8-this.target[1]*8&&this.type==103){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-25,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.7,4,270,3,25/2,[50,255,5255]))
                        entities.particles[entities.particles.length-1].end=35+this.user*8-this.target[1]*8
                    }else if(this.timer==40+this.user*8-this.target[1]*8&&this.type==114){
                        for(g=0;g<15;g++){
                            entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x+25,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.7,3,random(275,285),1.5,random(10,15),[50,255,50]))
                            entities.particles[entities.particles.length-1].end=35+this.user*8-this.target[1]*8+random(-12,12)
                        }
                    }else if(this.timer==40+this.user*8-this.target[1]*8&&this.type==118){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-25,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.7,3,270,3.5,25/2,[50,255,50]))
                        entities.particles[entities.particles.length-1].end=35+this.user*8-this.target[1]*8
                    }else if(this.timer==40+this.user*8-this.target[1]*8&&this.type==130){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-25,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.7,9,270,4,25/2,[0,0,0]))
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
                        if(this.type==14&&this.battle.combatants[this.target[1]].hit){
                            this.battle.combatants[this.target[1]].status[2]++
                        }
                    }
                break
                case 13: case 79:
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
                            if(this.type==79&&this.battle.combatants[3-g].hit){
                                this.battle.combatants[3-g].status[1]++
                            }
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
                case 17: case 76:
                    if(this.timer>=145+this.user*20-this.target[1]*20){
                        this.battle.combatants[this.user+4].position.x-=5
                        this.battle.combatants[this.user+4].rate[0]+=5
                    }else if(this.timer>=120+this.user*20-this.target[1]*20){
                        this.battle.combatants[this.user+4].anim[0]+=1/15
                        if(this.type==76){
                            this.battle.combatants[this.user+4].anim[0]+=1/30
                        }
                    }else if(this.timer>=95+this.user*20-this.target[1]*20){
                        this.battle.combatants[this.user+4].anim[0]-=1/15
                        if(this.type==76){
                            this.battle.combatants[this.user+4].anim[0]-=1/30
                        }
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
                case 19: case 48:
                    if(this.timer>=100+this.user*8-this.target[1]*8){
                        this.battle.combatants[this.user+4].anim[1]+=1/15
                    }else if(this.timer<40+this.user*8-this.target[1]*8&&this.timer>=25+this.user*8-this.target[1]*8){
                        this.battle.combatants[this.user+4].anim[1]-=1/15
                    }
                    if(this.timer>=40+this.user*8-this.target[1]*8&&this.timer<=100+this.user*8-this.target[1]*8&&(this.timer-this.user*8+this.target[1]*8)%4==0&&this.type==19){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-25,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.7,3,random(269,271),2.5,25/2,[50,255,50]))
                        entities.particles[entities.particles.length-1].end=35+this.user*8-this.target[1]*8
                    }
                    if(this.timer>=40+this.user*8-this.target[1]*8&&this.timer<=100+this.user*8-this.target[1]*8&&(this.timer-this.user*8+this.target[1]*8)%4==0&&this.type==48){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-25,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.7,3,random(255,285),2,25/2,[255,50,50]))
                        entities.particles[entities.particles.length-1].end=random(15,75)
                    }
                    if(this.timer>=5&&this.timer<=65&&this.timer%4==1&&this.type==19){
                        this.battle.combatants[this.target[1]].take(this.damage,0,this.accuracy,this.user+4)
                    }
                    if(this.timer>=5&&this.timer<=65&&this.timer%4==1&&this.type==48){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g].take(this.damage,0,this.accuracy,this.user)
                        }
                    }
                break
                case 21: case 108:
                    if(this.timer>=20+this.user*4-this.target[1]*4){
                        this.battle.combatants[this.user+4].anim[1]+=1/15
                    }else if(this.timer>=5+this.user*4-this.target[1]*4){
                        this.battle.combatants[this.user+4].anim[1]-=1/15
                    }
                    if(this.timer==20+this.user*4-this.target[1]*4&&this.type==21){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-25,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.7,5,270,3,25,[50,255,50]))
                        entities.particles[entities.particles.length-1].end=15+this.user*4-this.target[1]*4
                    }else if(this.timer==20+this.user*4-this.target[1]*4&&this.type==108){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-25,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.7,5,270,4,25,[50,255,50]))
                        entities.particles[entities.particles.length-1].end=15+this.user*4-this.target[1]*4
                    }
                    if(this.timer==5){
                        this.battle.combatants[this.target[1]].take(this.damage,1,this.accuracy,this.user+4)
                    }
                break
                case 22: case 27: case 28: case 34: case 35: case 41: case 43: case 52: case 55: case 59: case 69: case 70: case 75: case 83: case 84: case 99: case 107: case 109: case 116: case 117: case 121: case 122: case 124:  case 129: case 133:
                    if(this.timer>=30){
                        this.battle.combatants[this.user+4].anim[0]+=1/30
                    }else{
                        this.battle.combatants[this.user+4].anim[0]-=1/30
                    }
                    if(this.timer==30&&this.type==22){
                        this.battle.combatants[this.target[1]+4].life=min(this.battle.combatants[this.target[1]+4].base.life,this.battle.combatants[this.target[1]+4].life+this.damage)
                    }else if(this.timer==30&&this.type==27){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g+4].life=min(this.battle.combatants[g+4].base.life,this.battle.combatants[g+4].life+this.damage)
                        }
                    }else if(this.timer==30&&this.type==28){
                        this.battle.combatants[this.target[1]+4].status[3]++
                    }else if(this.timer==30&&this.type==34){
                        for(g=0,lg=this.battle.combatants[this.target[1]+4].uses.length;g<lg;g++){
                            this.battle.combatants[this.target[1]+4].uses[g]=min(this.battle.combatants[this.target[1]+4].base.uses[g],this.battle.combatants[this.target[1]+4].uses[g]+this.damage)
                        }
                    }else if(this.timer==30&&this.type==35&&this.battle.combatants[this.target[1]].hit){
                        this.battle.combatants[this.target[1]+4].status[5]+=this.damage
                    }else if(this.timer==30&&this.type==41){
                        for(g=0;g<4;g++){
                            for(h=0,lh=this.battle.combatants[g+4].boost.length;h<lh;h++){
                                this.battle.combatants[g+4].boost[h]=0
                            }
                            if(this.battle.combatants[g+4].boost[2]!=0){
                                this.battle.reset()
                            }
                        }
                    }else if(this.timer==30&&this.type==43){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g+4].status[9]+=3
                        }
                    }else if(this.timer==30&&this.type==52){
                        for(g=0,lg=this.battle.combatants[this.target[1]+4].status.length;g<lg;g++){
                            if(this.battle.combatants[this.target[1]+4].statusClass[g]==0){
                                this.battle.combatants[this.target[1]+4].status[g]=0
                            }
                        }
                    }else if(this.timer==30&&this.type==55){
                        this.battle.combatants[this.target[1]+4].life=min(this.battle.combatants[this.target[1]+4].base.life,this.battle.combatants[this.target[1]+4].life+this.damage)
                        for(g=0,lg=this.battle.combatants[this.target[1]+4].status.length;g<lg;g++){
                            if(this.battle.combatants[this.target[1]+4].statusClass[g]==0&&this.battle.combatants[this.target[1]+4].status[g]>0){
                                this.battle.combatants[this.target[1]+4].status[g]--
                            }
                        }
                    }else if(this.timer==30&&this.type==59){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g+4].life=min(this.battle.combatants[g+4].base.life,this.battle.combatants[g+4].life+this.damage*random(0,1))
                        }
                    }else if(this.timer==30&&this.type==69){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height,2,270,120,1,this.battle.combatants[this.user+4].statusColor[17]))
                        this.battle.combatants[this.user+4].status[17]+=this.damage
                    }else if(this.timer==30&&this.type==70){
                        this.battle.combatants[this.user+4].status[19]+=this.damage
                    }else if(this.timer==30&&this.type==75){
                        this.battle.combatants[this.user+4].status[19]+=4
                    }else if(this.timer==30&&this.type==83){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g+4].status[3]+=2
                        }
                    }else if(this.timer==30&&this.type==84){
                        this.battle.combatants[this.target[1]+4].life=this.battle.combatants[this.target[1]+4].base.life
                        this.battle.reset()
                    }else if(this.timer==30&&this.type==99){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height,2,270,160,1,this.battle.combatants[this.user+4].statusColor[17]))
                        this.battle.combatants[this.user+4].status[17]+=this.damage
                    }else if(this.timer==30&&this.type==107){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g+4].status[5]+=2
                        }
                    }else if(this.timer==30&&this.type==109){
                        this.battle.combatants[this.target[1]+4].status[19]+=this.damage
                    }else if(this.timer==30&&this.type==116){
                        this.battle.combatants[this.user+4].status[24]+=3
                    }else if(this.timer==30&&this.type==117){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g+4].status[24]+=2
                        }
                    }else if(this.timer==30&&this.type==121){
                        this.battle.combatants[this.user+4].status[20]+=this.damage
                    }else if(this.timer==30&&this.type==122){
                        this.battle.combatants[this.user+4].status[25]++
                    }else if(this.timer==30&&this.type==124){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.6,2,270,400,0.5,this.battle.combatants[this.user+4].statusColor[16]))
                        for(g=0;g<4;g++){
                            this.battle.combatants[g].status[16]++
                        }
                    }else if(this.timer==30&&this.type==125){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height,2,270,120,0.5,this.battle.combatants[this.user].statusColor[27]))
                        this.battle.combatants[this.user+4].status[27]+=2
                    }else if(this.timer==30&&this.type==129){
                        this.battle.combatants[this.user+4].status[20]++
                        this.battle.combatants[this.user+4].status[25]++
                        this.battle.combatants[this.user+4].life=min(this.battle.combatants[this.user+4].base.life,this.battle.combatants[this.user+4].life+10)
                    }else if(this.timer==30&&this.type==133){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.target[1]].position.x,this.battle.combatants[this.target[1]].position.y-this.battle.combatants[this.target[1]].height*0.6,2,90,80,0.5,[207,90,101]))
                        for(g=0,lg=this.battle.combatants[this.target[1]].uses.length;g<lg;g++){
                            this.battle.combatants[this.target[1]].uses[g]=0
                        }
                    }
                    if(this.type==124){
                        if(this.timer>=30){
                            this.battle.combatants[this.user+4].anim[7]+=1/30
                            this.battle.combatants[this.user+4].anim[8]+=1/30
                            this.battle.combatants[this.user+4].anim[9]+=1/30
                        }else{
                            this.battle.combatants[this.user+4].anim[7]-=1/30
                            this.battle.combatants[this.user+4].anim[8]-=1/30
                            this.battle.combatants[this.user+4].anim[9]-=1/30
                        }
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
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height,2,270,120,1,[255,175,50]))
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
                case 33: case 36: case 38:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x+10,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height,1,270,80,1,this.battle.combatants[this.target[1]].statusColor[floor(this.type/2)-12]))
                        this.battle.combatants[this.target[1]].status[floor(this.type/2)-12]+=this.damage
                    }
                break
                case 37:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x+10,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height,1,270,120,1,[200,100,0]))
                        this.battle.combatants[this.target[1]].take(this.damage,0,this.accuracy,this.user)
                        if(this.battle.combatants[this.target[1]].hit){
                            this.battle.combatants[this.target[1]].status[0]+=this.damage/5
                        }
                    }
                break
                case 39:
                    if(this.timer==30||this.timer==35||this.timer==40||this.timer==45||this.timer==50||this.timer==55){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x+10,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height,1,random(240,300),120,random(0.5,1.5),[0,150,255]))
                    }
                    if(this.timer==45){
                        this.battle.combatants[this.target[1]].take(this.damage,0,this.accuracy,this.user+4)
                        if(this.battle.combatants[this.target[1]].hit){
                            this.battle.combatants[this.target[1]].boost[1]--
                        }
                    }
                break
                case 42: case 56: case 119: case 120:
                    if(this.timer>=160+this.user*15-this.target[1]*15){
                        this.battle.combatants[this.user+4].position.x-=20/3
                        this.battle.combatants[this.user+4].rate[0]+=20/3
                    }else if(this.timer>=145+this.user*15-this.target[1]*15||this.timer>=85+this.user*15-this.target[1]*15&&this.timer<100+this.user*15-this.target[1]*15&&this.type==56||this.timer>=115+this.user*15-this.target[1]*15&&this.timer<130+this.user*15-this.target[1]*15&&this.type==56){
                        this.battle.combatants[this.user+4].anim[0]+=1/15
                        if(this.type==42){
                            this.battle.combatants[this.target[1]].anim[0]+=1/15
                        }
                    }else if(this.timer>=85+this.user*15-this.target[1]*15&&(this.type==42||this.type==119||this.type==120)){
                        if((this.timer-this.user*15+this.target[1]*15)%10==0&&this.type==42){
                            if(this.battle.combatants[this.user+4].life>0){
                                this.battle.combatants[this.target[1]].take(this.damage,0,this.accuracy,this.user+4)
                            }
                            if(this.battle.combatants[this.target[1]].life>0){
                                this.battle.combatants[this.user+4].take(this.battle.combatants[this.target[1]].damage,0,this.accuracy,this.target[1])
                            }
                        }
                    }else if(this.timer>=70+this.user*15-this.target[1]*15||this.timer>=100+this.user*15-this.target[1]*15&&this.timer<115+this.user*15-this.target[1]*15&&this.type==56||this.timer>=130+this.user*15-this.target[1]*15&&this.timer<145+this.user*15-this.target[1]*15&&this.type==56){
                        this.battle.combatants[this.user+4].anim[0]-=1/15
                        if(this.type==42){
                            this.battle.combatants[this.target[1]].anim[0]-=1/15
                        }
                    }else{
                        this.battle.combatants[this.user+4].position.x+=20/3
                        this.battle.combatants[this.user+4].rate[0]-=20/3
                    }
                    if(this.timer==85+this.user*15-this.target[1]*15&&this.type==56){
                        this.battle.combatants[this.target[1]].take(this.damage/8*this.battle.combatants[this.target[1]].base.life,0,this.accuracy,this.user+4)
                    }else if((this.timer==85+this.user*15-this.target[1]*15||this.timer==95+this.user*15-this.target[1]*15||this.timer==105+this.user*15-this.target[1]*15||this.timer==115+this.user*15-this.target[1]*15||this.timer==125+this.user*15-this.target[1]*15||this.timer==135+this.user*15-this.target[1]*15)&&(this.type==119||this.type==120)){
                        this.battle.combatants[this.target[1]].take(this.damage,0,this.accuracy,this.user+4)
                        if(this.timer==85+this.user*15-this.target[1]*15&&this.type==120&&this.battle.combatants[this.target[1]].hit){
                            this.battle.combatants[this.target[1]].status[13]+=2
                        }
                    }
                break
                case 45:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height,2,270,120,1,[200,210,220]))
                        this.battle.combatants[this.user+4].status[6]+=this.damage
                        this.battle.combatants[this.user+4].status[11]+=this.damage*2
                        this.battle.combatants[this.user+4].life=this.battle.combatants[this.user+4].base.life
                    }
                break
                case 46: case 47: case 100: case 102: case 126:
                    if(this.timer>=90){
                        this.battle.combatants[this.user+4].anim[0]+=1/30
                    }else if(this.timer>=60){
                        this.battle.combatants[this.user+4].anim[0]-=1/30
                    }
                    if(this.timer==90&&this.type==46){
                        for(g=0;g<20;g++){
                            entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-25,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.7,7,random(265,275),2,random(2,12),[255,50,50]))
                            entities.particles[entities.particles.length-1].end=60
                        }
                    }else if(this.timer==90&&this.type==47){
                        for(g=0;g<20;g++){
                            entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-25,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.7,7,random(265,275),1.5,random(2,12),[200,180,200]))
                            entities.particles[entities.particles.length-1].end=60
                        }
                    }else if(this.timer==90&&this.type==100){
                        for(g=0;g<20;g++){
                            entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-25,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.7,7,random(265,275),1.5,random(2,12),[125,150,150]))
                            entities.particles[entities.particles.length-1].end=60
                        }
                    }else if(this.timer==90&&this.type==102){
                        for(g=0;g<20;g++){
                            entities.particles.push(new particle(this.layer,this.battle.combatants[0].position.x+random(-50,350),-200,3,random(165,195),2,10,[50,255,50]))
                            entities.particles[entities.particles.length-1].end=60
                        }
                    }else if(this.timer==90&&this.type==126){
                        for(g=0;g<20;g++){
                            entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-25,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.7,8,random(260,280),3,random(2,12),[254,211,240]))
                            entities.particles[entities.particles.length-1].end=75
                        }
                    }else if(this.timer==30&&this.type==46){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g].status[4]+=floor(random(0,4))
                        }
                    }else if(this.timer==30&&this.type==47){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g].take(this.damage*random(0,1),0,this.accuracy,this.user+4)
                            if(this.battle.combatants[g].hit){
                                this.battle.combatants[g].status[2]++
                            }
                        }
                    }else if(this.timer==30&&this.type==100){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g].take(this.damage*random(0,1),0,this.accuracy,this.user+4)
                            if(this.battle.combatants[g].hit){
                                this.battle.combatants[g].status[18]++
                            }
                        }
                    }else if(this.timer==30&&this.type==102){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g].take(this.damage*random(0,1),0,this.accuracy,this.user+4)
                            if(this.battle.combatants[g].hit){
                                this.battle.combatants[g].status[5]+=2
                            }
                        }
                    }else if(this.timer==30&&this.type==126){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g].take(this.damage*random(0,1),0,this.accuracy,this.user)
                        }
                        for(g=0;g<3;g++){
                            h=floor(random(0,4))
                            if(this.battle.combatants[h].hit){
                                this.battle.combatants[h].status[2+g*2]++
                            }
                        }
                    }
                break
                case 50: case 51: case 134:
                    if(this.timer>=48+this.user*8-this.target[1]*8){
                        this.battle.combatants[this.user+4].position.x-=25/2
                        this.battle.combatants[this.user+4].rate[0]+=25/2
                    }else if(this.timer>=43+this.user*8-this.target[1]*8){
                        this.battle.combatants[this.user+4].anim[0]+=1/5
                    }else if(this.timer>=38+this.user*8-this.target[1]*8){
                        this.battle.combatants[this.user+4].anim[0]-=1/5
                    }else{
                        this.battle.combatants[this.user+4].position.x+=25/2
                        this.battle.combatants[this.user+4].rate[0]-=25/2
                    }
                    if(this.timer==48+this.user*8-this.target[1]*8){
                        this.battle.combatants[this.target[1]].take(this.damage,0,this.accuracy,this.user+4)
                        if(this.type==51&&this.battle.combatants[this.target[1]].hit){
                            this.battle.combatants[this.target[1]].status[13]+=sqrt(this.damage)/2
                        }else if(this.type==134&&this.battle.combatants[this.target[1]].hit){
                            this.battle.combatants[this.target[1]].holding[0]=true
                            this.battle.combatants[this.target[1]].status[28]++
                            this.battle.combatants[this.user+4].weapon=40
                            this.battle.combatants[this.user+4].startAttacks()
                        }
                    }
                break
                case 53:
                    if(this.timer>=25+this.user*5-this.target[1]*5){
                        this.battle.combatants[this.user+4].position.x-=20
                        this.battle.combatants[this.user+4].rate[0]+=20
                        this.battle.combatants[this.user+4].rate[1]+=20
                    }else{
                        this.battle.combatants[this.user+4].position.x+=20
                        this.battle.combatants[this.user+4].rate[0]-=20
                        this.battle.combatants[this.user+4].rate[1]-=20
                    }
                    if(this.timer==25+this.user*5-this.target[1]*5){
                        this.battle.combatants[this.target[1]].take(this.damage,0,this.accuracy,this.user+4)
                        if(this.battle.combatants[this.target[1]].hit){
                            this.battle.combatants[this.target[1]].status[1]++
                        }
                    }
                break
                case 58:
                    if(this.timer>=45+this.user*10){
                        this.battle.combatants[this.user+4].position.x-=10
                        this.battle.combatants[this.user+4].rate[0]+=10
                    }else{
                        this.battle.combatants[this.user+4].position.x+=10
                        this.battle.combatants[this.user+4].rate[0]-=10
                    }
                    for(g=0;g<3;g++){
                        if(this.timer==50+g*10+this.user*10){
                            this.battle.combatants[g+1].take(this.damage,0,this.accuracy,this.user+4)
                        }
                    }
                break
                case 62: case 80:
                    if(this.timer>=15){
                        this.battle.combatants[this.user+4].anim[4]+=1/15
                    }else{
                        this.battle.combatants[this.user+4].anim[4]-=1/15
                    }
                    if(this.timer==15&&this.type==62){
                        this.battle.combatants[this.user+4].life=min(this.battle.combatants[this.user+4].base.life,this.battle.combatants[this.user+4].life+this.damage)
                        for(g=0,lg=this.battle.combatants[this.user+4].status.length;g<lg;g++){
                            if(this.battle.combatants[this.user+4].statusClass[g]==0){
                                this.battle.combatants[this.user+4].status[g]=0
                            }
                        }
                    }else if(this.timer==15&&this.type==80){
                        this.battle.combatants[this.user+4].status[14]++
                        this.battle.combatants[this.user+4].status[19]++
                    }
                break
                case 63:
                    if(this.timer==30||this.timer==35||this.timer==40||this.timer==45||this.timer==50||this.timer==55){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x+10,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height,1,random(240,300),160,random(0.5,1.5),[0,150,255]))
                    }
                    if(this.timer==45){
                        this.battle.combatants[this.target[1]].take(this.damage,0,this.accuracy,this.user+4)
                        if(this.battle.combatants[this.target[1]].hit){
                            this.battle.combatants[this.target[1]].boost[1]-=2
                        }
                    }
                break
                case 66: case 98:
                    if(this.timer>=105+this.user*10-this.target[1]*10){
                        this.battle.combatants[this.user+4].position.x-=10
                        this.battle.combatants[this.user+4].rate[0]+=10
                        this.battle.combatants[this.user+4].rate[1]+=10
                    }else if(this.timer>=55+this.user*10-this.target[1]*10){
                        this.battle.combatants[this.user+4].anim[2]-=5
                        this.battle.combatants[this.user+4].anim[3]+=1/2
                    }else if(this.timer>=45+this.user*10-this.target[1]*10){
                        this.battle.combatants[this.user+4].anim[2]+=25
                        this.battle.combatants[this.user+4].anim[3]-=5/2
                    }else{
                        this.battle.combatants[this.user+4].position.x+=10
                        this.battle.combatants[this.user+4].rate[0]-=10
                        this.battle.combatants[this.user+4].rate[1]-=10
                    }
                    if(this.timer==45+this.user*10-this.target[1]*10){
                        this.battle.combatants[this.target[1]].take(this.damage*(1+this.battle.combatants[this.user+4].boost[3]/2),0,this.accuracy,this.user+4)
                        if(this.type==98&&this.battle.combatants[this.target[1]].hit){
                            this.battle.combatants[this.target[1]].status[0]+=1+this.battle.combatants[this.user+4].boost[3]/2
                        }
                        this.battle.combatants[this.user+4].boost[3]=0
                    }
                break
                case 71:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x+10,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height,1,270,80,1,this.battle.combatants[this.user+4].statusColor[0]))
                        this.battle.combatants[this.target[1]].take(0,0,this.accuracy,this.user+4)
                        if(this.battle.combatants[this.target[1]].hit){
                            this.battle.combatants[this.target[1]].status[0]+=this.damage
                        }
                    }
                break
                case 72:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x+10,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height,1,270,80,1,this.battle.combatants[this.user+4].statusColor[2]))
                        this.battle.combatants[this.target[1]].take(0,0,this.accuracy,this.user+4)
                        if(this.battle.combatants[this.target[1]].hit){
                            this.battle.combatants[this.target[1]].status[2]+=this.damage
                        }
                    }
                break
                case 73:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x+10,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height,1,270,80,1,this.battle.combatants[this.user+4].statusColor[4]))
                        this.battle.combatants[this.target[1]].take(0,0,this.accuracy,this.user+4)
                        if(this.battle.combatants[this.target[1]].hit){
                            this.battle.combatants[this.target[1]].status[4]+=this.damage
                        }
                    }
                break
                case 74:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x+10,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height,1,270,80,1,this.battle.combatants[this.user+4].statusColor[6]))
                        this.battle.combatants[this.target[1]].take(0,0,this.accuracy,this.user+4)
                        if(this.battle.combatants[this.target[1]].hit){
                            this.battle.combatants[this.target[1]].status[6]+=this.damage
                        }
                    }
                break
                case 77:
                    if(this.timer==30||this.timer==35||this.timer==40||this.timer==45||this.timer==50||this.timer==55){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x+10,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height,1,random(240,300),160,random(0.5,1.5),[0,150,255]))
                    }
                    if(this.timer==45){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g+4].boost[1]+=this.damage
                        }
                    }
                break
                case 85: case 86: case 87:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x+10,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height,1,270,120,1,this.battle.combatants[this.user+4].boostColor[this.type-85]))
                        this.battle.combatants[this.target[1]].boost[this.type-85]-=2
                        if(this.type==87){
                            this.battle.reset()
                        }
                    }
                break
                case 88: case 89: case 90:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.target[1]+4].position.x,this.battle.combatants[this.target[1]+4].position.y-this.battle.combatants[this.target[1]+4].height,2,270,120,1,this.battle.combatants[this.target[1]+4].boostColor[this.type-88]))
                        this.battle.combatants[this.target[1]+4].boost[this.type-88]+=2
                        if(this.type==90){
                            this.battle.reset()
                        }
                    }
                break
                case 91:
                    if(this.timer>=40+this.user*8){
                        this.battle.combatants[this.user+4].anim[1]+=1/15
                    }else if(this.timer>=25+this.user*8){
                        this.battle.combatants[this.user+4].anim[1]-=1/15
                    }
                    for(g=0;g<4;g++){
                        if(this.timer==5+g*8){
                            this.battle.combatants[g].take(this.damage,0,this.accuracy,this.user+4)
                            if(this.battle.combatants[g].hit){
                                this.battle.combatants[g].status[0]++
                            }
                        }
                    }
                    if(this.timer==40+this.user*8){
                        for(g=0;g<4;g++){
                            entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x+25,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height*0.7,3,random(265,275),2.5,25/2,[100,25,25]))
                            entities.particles[entities.particles.length-1].end=35+this.user*8-g*8
                        }
                    }
                break
                case 96:
                    if(this.timer==30||this.timer==35||this.timer==40||this.timer==45||this.timer==50||this.timer==55){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x+10,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height,1,random(240,300),200,random(0.5,1.5),[0,150,255]))
                    }
                    if(this.timer==45){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g].boost[1]-=this.damage
                        }
                    }
                break
                case 104:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-10,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height,1,270,80,1,this.battle.combatants[this.user+4].statusColor[0]))
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-10,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height,1,270,100,1,this.battle.combatants[this.user+4].statusColor[2]))
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-10,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height,1,270,120,1,this.battle.combatants[this.user+4].statusColor[4]))
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-10,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height,1,270,140,1,this.battle.combatants[this.user+4].statusColor[6]))
                        this.battle.combatants[this.target[1]].take(0,0,this.accuracy,this.user+4)
                        if(this.battle.combatants[this.target[1]].hit){
                            this.battle.combatants[this.target[1]].status[0]+=this.damage*3
                            this.battle.combatants[this.target[1]].status[2]+=this.damage*10
                            this.battle.combatants[this.target[1]].status[4]+=this.damage*10
                            this.battle.combatants[this.target[1]].status[6]+=this.damage
                        }
                    }
                break
                case 105:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x+10,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height,1,270,120,1,this.battle.combatants[this.user+4].statusColor[2]))
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x+10,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height,1,270,200,1,this.battle.combatants[this.user+4].statusColor[6]))
                        for(g=0;g<7;g++){
                            this.battle.combatants[g].status[2]++
                            this.battle.combatants[g].status[6]++
                        }
                    }
                break
                case 106:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x+10,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height,1,90,120,1,this.battle.combatants[this.user+4].statusColor[22]))
                        this.battle.combatants[this.user+4].status[22]+=2
                    }
                break
                case 110: case 113:
                    if(this.timer>=60+this.user*10){
                        this.battle.combatants[this.user+4].position.x-=10
                        this.battle.combatants[this.user+4].rate[0]+=15
                    }else{
                        this.battle.combatants[this.user+4].position.x+=10
                        this.battle.combatants[this.user+4].rate[0]-=15
                    }
                    for(g=0;g<4;g++){
                        if(this.timer==100-g*10+this.user*10&&this.type==110){
                            for(h=0,lh=this.battle.combatants[3-g].status.length;h<lh;h++){
                                this.battle.combatants[3-g].status[h]=0
                            }
                        }else if(this.timer==100-g*10+this.user*10&&this.type==113){
                            this.battle.combatants[3-g].status[0]++
                        }
                    }
                break
                case 111:
                    if(this.timer>=15){
                        this.battle.combatants[this.user+4].position.x-=3
                        this.battle.combatants[this.user+4].rate[0]+=3
                    }else{
                        this.battle.combatants[this.user+4].position.x+=3
                        this.battle.combatants[this.user+4].rate[0]-=3
                    }
                    if(this.timer==15){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g+4].boost[floor(random(0,2))]++
                        }
                    }
                break
                case 125:
                    if(this.timer>=30){
                        this.battle.combatants[this.user+4].anim[5]+=1/30
                    }else{
                        this.battle.combatants[this.user+4].anim[5]-=1/30
                    }
                    if(this.timer==30){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x,this.battle.combatants[this.user+4].position.y-this.battle.combatants[this.user+4].height,2,270,120,0.5,this.battle.combatants[this.user+4].statusColor[27]))
                        this.battle.combatants[this.user+4].status[27]+=2
                    }
                break
                case 127: case 131:
                    if(this.timer>=26+this.user*4){
                        this.battle.combatants[this.user].position.x+=25
                        this.battle.combatants[this.user].rate[0]+=25
                    }else{
                        this.battle.combatants[this.user].position.x-=25
                        this.battle.combatants[this.user].rate[0]-=25
                    }
                    for(g=0;g<4;g++){
                        if(this.timer==26+g*4+this.user*4){
                            if(this.type==127){
                                this.battle.combatants[g].take(this.damage,0,this.accuracy,this.user+4)
                            }else if(this.battle.combatants[g].holding[0]){
                                this.battle.combatants[g].holding[0]=false
                                this.battle.combatants[g].status[28]=0
                                this.battle.combatants[this.user+4].weapon=31
                                this.battle.combatants[this.user+4].startAttacks()
                            }
                        }
                    }
                break
                case 128:
                    if(this.timer>=25+this.user*4-this.target[1]*4){
                        this.battle.combatants[this.user].position.x-=25
                        this.battle.combatants[this.user].rate[0]+=25
                    }else if(this.timer>=22+this.user*4-this.target[1]*4){
                        this.battle.combatants[this.user].anim[0]+=1/3
                    }else if(this.timer>=19+this.user*4-this.target[1]*4){
                        this.battle.combatants[this.user].anim[0]-=1/3
                    }else{
                        this.battle.combatants[this.user].position.x+=25
                        this.battle.combatants[this.user].rate[0]-=25
                    }
                    if(this.timer==25+this.user*4-this.target[1]*4){
                        this.battle.combatants[this.target[1]].take(this.damage,0,this.accuracy,this.user+4)
                        if(this.battle.combatants[this.target[1]].hit){
                            this.battle.combatants[this.target[1]].status[13]+=sqrt(this.damage)/2
                        }
                    }
                break
                
            }
            if(this.timer==1){
                this.battle.combatants[this.user+4].endTurn()
            }
        }
        if(this.timer==1){
            this.battle.stack[0].cancel=true
            this.battle.stacking.use=true
            this.trigger=false
            this.lastType=this.type
            this.lastDamage=this.damage
            this.battle.turn()
        }
    }
}