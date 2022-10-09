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
    }
    set(){
        if(this.battle.stack[0].type<4){
            switch(this.type){
                case 0:
                    this.timer=210-this.user*40+this.target[0]*40
                break
                case 1: case 2: case 3: case 4: case 5: case 6:
                    this.timer=60
                break
            }
        }
        else{
            switch(this.type){
                case 0:
                    this.timer=210+this.user*40-this.target[1]*40
                break
                case 1: case 2: case 3: case 4: case 5: case 6:
                    this.timer=60
                break
            }
        }
    }
    update(){
        if(this.battle.stack[0].type<4){
            switch(this.type){
                case 0:
                    if(this.timer>=105-this.user*20+this.target[0]*20){
                        this.battle.combatants[this.user].position.x+=4
                    }
                    else{
                        this.battle.combatants[this.user].position.x-=4
                    }
                    if(this.timer==105-this.user*20+this.target[0]*20){
                        this.battle.combatants[4+this.target[0]].life-=this.damage/(2+max(0,current.combatants[current.stack[0].type].boost[1]))*(2-min(0,current.combatants[current.stack[0].type].boost[1]))
                    }
                break
                case 1: case 2: case 3:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+10,this.battle.combatants[this.user].position.y-75,1,90,80,1,this.battle.combatants[4+this.target[0]].boostColor[this.type-1]))
                        this.battle.combatants[4+this.target[0]].boost[this.type-1]--
                        if(this.type==3){
                            this.battle.reset()
                        }
                    }
                break
                case 4: case 5: case 6:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x,this.battle.combatants[this.user].position.y-75,2,90,120,1,this.battle.combatants[4+this.target[0]].boostColor[this.type-4]))
                        this.battle.combatants[this.user].boost[this.type-4]++
                        if(this.type==6){
                            this.battle.reset()
                        }
                    }
                break
            }
        }
        else{
            switch(this.type){
                case 0:
                    if(this.timer>=105+this.user*20-this.target[1]*20){
                        this.battle.combatants[4+this.user].position.x-=4
                    }
                    else{
                        this.battle.combatants[4+this.user].position.x+=4
                    }
                    if(this.timer==105+this.user*20-this.target[1]*20){
                        this.battle.combatants[this.target[1]].life-=this.damage/(2+max(0,current.combatants[current.stack[0].type].boost[1]))*(2-min(0,current.combatants[current.stack[0].type].boost[1]))
                    }
                break
                case 1: case 2: case 3:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-10,this.battle.combatants[this.user+4].position.y-75,1,270,80,1,this.battle.combatants[this.target[0]].boostColor[this.type-1]))
                        this.battle.combatants[this.target[1]].boost[this.type-1]--
                        if(this.type==3){
                            this.battle.reset()
                        }
                    }
                break
                case 4: case 5: case 6:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x,this.battle.combatants[this.user+4].position.y-75,2,270,120,1,this.battle.combatants[this.target[0]].boostColor[this.type-4]))
                        this.battle.combatants[this.user+4].boost[this.type-4]++
                        if(this.type==6){
                            this.battle.reset()
                        }
                    }
                break
            }
        }
        if(this.timer==1){
            this.battle.stacking.use=true
            this.trigger=false
        }
    }
}