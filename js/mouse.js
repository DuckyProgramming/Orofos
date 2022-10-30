function mouseClicked(){
    switch(stage.scene){
        case 'battle':
            if(current.attack.timer<=0){
                if(current.attack.trigger){
                    if(pointInsideBox({position:inputs.rel},{position:{x:170,y:90},width:300,height:40})){
                        current.attack.set()
                    }
                    switch(types.attack[current.attack.type].target){
                        case 0:
                            for(a=0;a<4;a++){
                                if(pointInsideBox({position:inputs.rel},{position:{x:current.combatants[a+4].position.x,y:current.combatants[a+4].position.y-current.combatants[a+4].height/2},width:72,height:144})&&current.combatants[a+4].life>0){
                                    current.attack.target[0]=a
                                }
                            }
                        break
                        case 3:
                            for(a=0;a<4;a++){
                                if(pointInsideBox({position:inputs.rel},{position:{x:current.combatants[a].position.x,y:current.combatants[a].position.y-current.combatants[a].height/2},width:72,height:144})&&current.combatants[a].life>0){
                                    current.attack.target[0]=a
                                }
                            }
                        break
                    }
                }
                else if(current.stack[0].type<4&&!current.stacking.use){
                    for(a=0,la=current.combatants[current.stack[0].type].attacks.length;a<la;a++){
                        if(pointInsideBox({position:inputs.rel},{position:{x:170,y:90+a*50},width:300,height:40})&&(current.combatants[current.stack[0].type].uses[a]>0||types.attack[current.combatants[current.stack[0].type].attacks[a]].uses==0)&&current.combatants[current.stack[0].type].status[1]<=0){
                            current.attack.trigger=true
                            current.attack.type=current.combatants[current.stack[0].type].attacks[a]
                            if(current.combatants[current.stack[0].type].attackClass[a]==0){
                                current.attack.damage=types.attack[current.attack.type].damage*types.weapon[current.combatants[current.stack[0].type].weapon].damage*current.combatants[current.stack[0].type].damage*(2+max(0,current.combatants[current.stack[0].type].boost[0]))/(2-min(0,current.combatants[current.stack[0].type].boost[0]))
                            }else{
                                current.attack.damage=types.attack[current.attack.type].damage*current.combatants[current.stack[0].type].damage*(2+max(0,current.combatants[current.stack[0].type].boost[0]))/(2-min(0,current.combatants[current.stack[0].type].boost[0]))
                            }
                            current.attack.accuracy=types.attack[current.attack.type].accuracy
                            current.attack.class=types.attack[current.attack.type].class
                            current.combatants[current.stack[0].type].uses[a]--
                        }
                    }
                }
            }
        break
        case 'walk':
            if(current.cut.trigger){
                current.cut.onClick()
            }
        break
        case 'menu':
            if(pointInsideBox({position:inputs.rel},{position:{x:graphics.main.width/2-160,y:400},width:60,height:60})&&stage.difficulty>=0){
                stage.difficulty--
            }else if(pointInsideBox({position:inputs.rel},{position:{x:graphics.main.width/2+160,y:400},width:60,height:60})&&stage.difficulty<=0){
                stage.difficulty++
            }else if(pointInsideBox({position:inputs.rel},{position:{x:graphics.main.width/2-370,y:300},width:60,height:60})&&stage.speed[0]>0.5){
                stage.speed[0]--
                if(stage.speed[0]==0){
                    stage.speed[0]=0.5
                }
            }else if(pointInsideBox({position:inputs.rel},{position:{x:graphics.main.width/2+370,y:300},width:60,height:60})&&stage.speed[2]<5){
                stage.speed[2]++
                if(stage.speed[2]==1.5){
                    stage.speed[2]=1
                }
            }else if(pointInsideBox({position:inputs.rel},{position:{x:graphics.main.width/2+190,y:300},width:60,height:60})&&stage.speed[2]>0.5){
                stage.speed[2]--
                if(stage.speed[2]==0){
                    stage.speed[2]=0.5
                }
            }else if(pointInsideBox({position:inputs.rel},{position:{x:graphics.main.width/2-190,y:300},width:60,height:60})&&stage.speed[0]<5){
                stage.speed[0]++
                if(stage.speed[0]==1.5){
                    stage.speed[0]=1
                }
            }else if(pointInsideBox({position:inputs.rel},{position:{x:graphics.main.width/2-90,y:300},width:60,height:60})&&stage.speed[1]>0.5){
                stage.speed[1]--
                if(stage.speed[1]==0){
                    stage.speed[1]=0.5
                }
            }else if(pointInsideBox({position:inputs.rel},{position:{x:graphics.main.width/2+90,y:300},width:60,height:60})&&stage.speed[1]<5){
                stage.speed[1]++
                if(stage.speed[1]==1.5){
                    stage.speed[1]=1
                }
            }else if(pointInsideBox({position:inputs.rel},{position:{x:graphics.main.width/2,y:500},width:120,height:60})){
                transition.trigger=true
                transition.scene='walk'
                if(stage.difficulty==-1){
                    for(g=1;g<9;g++){
                        types.combatant[g].damage=round(types.combatant[g].damage*15)/10
                    }
                }else if(stage.difficulty==1){
                    for(g=1;g<9;g++){
                        types.combatant[g].life=round(types.combatant[g].life*0.75)
                    }
                }
                current=new battle(graphics.main,combatants)
                current.cut.setup(1)
                current.walkSpeed=stage.speed[0]
                current.speed=stage.speed[1]
                current.cut.speed=stage.speed[2]
            }
        break
    }
}