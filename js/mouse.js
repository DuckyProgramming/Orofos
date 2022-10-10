function mouseClicked(){
    updateMouse(graphics.main)
    switch(stage.scene){
        case 'battle':
            if(current.attack.timer<=0){
                if(current.attack.trigger){
                    if(pointInsideBox({position:inputs.rel},{position:{x:50,y:110},width:80,height:80})){
                        current.attack.set()
                    }
                    switch(types.attack[current.attack.type].target){
                        case 0:
                            for(a=0;a<4;a++){
                                if(pointInsideBox({position:inputs.rel},{position:{x:550+a*100,y:400},width:72,height:144})&&current.combatants[a+4].life>0){
                                    current.attack.target[0]=a
                                }
                            }
                        break;
                    }
                }
                else if(current.stack[0].type<4&&!current.stacking.use){
                    for(a=0,la=current.combatants[current.stack[0].type].attacks.length;a<la;a++){
                        if(pointInsideBox({position:inputs.rel},{position:{x:50+a*90,y:110},width:80,height:80})){
                            current.attack.trigger=true
                            current.attack.damage=types.attack[current.combatants[current.stack[0].type].attacks[a]].damage*types.weapon[current.combatants[current.stack[0].type].weapon].damage*current.combatants[current.stack[0].type].damage*(2+max(0,current.combatants[current.stack[0].type].boost[0]))/(2-min(0,current.combatants[current.stack[0].type].boost[0]))
                            current.attack.type=current.combatants[current.stack[0].type].attacks[a]
                        }
                    }
                }
            }
        break
    }
}