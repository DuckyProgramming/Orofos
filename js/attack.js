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
                case 1:
                    this.timer=60
                break
            }
        }
        else{
            switch(this.type){
                case 0:
                    this.timer=210+this.user*40-this.target[1]*40
                break
                case 1:
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
                        this.battle.combatants[4+this.target[0]].life-=this.damage
                    }
                break
                case 1:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user].position.x+10,this.battle.combatants[this.user].position.y-75,1,90,80,1,[200,0,0]))
                        this.battle.combatants[4+this.target[0]].boost[0]--
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
                        this.battle.combatants[this.target[1]].life-=this.damage
                    }
                break
                case 1:
                    if(this.timer==45){
                        entities.particles.push(new particle(this.layer,this.battle.combatants[this.user+4].position.x-10,this.battle.combatants[this.user+4].position.y-75,1,270,80,1,[200,0,0]))
                        this.battle.combatants[this.target[1]].boost[0]--
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