class attack{
    constructor(battle){
        this.battle=battle
        this.trigger=false
        this.type=0
        this.target=[0,0]
        this.user=0
        this.timer=0
        this.damage=0
    }
    set(){
        switch(this.type){
            case 0:
                this.timer = 210+this.user*40-this.target[floor(this.battle.stack[0].type/4)]*40
            break
        }
    }
    update(){
        if(this.battle.stack[0].type<4){
            switch(this.type){
                case 0:
                    if(this.timer>105+this.user*20-this.target*20){
                        this.battle.combatants[this.user].position.x+=4
                    }
                    else{
                        this.battle.combatants[this.user].position.x-=4
                    }
                    if(this.timer==105+this.user*20-this.target*20){
                        this.battle.combatants[4+this.target[floor(this.battle.stack[0].type/4)]].life-=this.damage
                    }
                break
            }
        }
        else{
            switch(this.type){
                case 0:
                    if(this.timer>105+this.user*20-this.target*20){
                        this.battle.combatants[4+this.user].position.x+=4
                    }
                    else{
                        this.battle.combatants[4+this.user].position.x-=4
                    }
                    if(timer == 105+user*20-target*20){
                        this.battle.combatants[this.target[floor(this.battle.stack[0].type/4)]].life-=this.damage
                    }
                break;
            }
        }
        if(this.timer==1){
            this.battle.stacking[0].use=true
        }
    }
}